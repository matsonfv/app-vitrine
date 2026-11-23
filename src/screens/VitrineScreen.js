import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import ProdutoCard from '../components/ProdutoCard';

const API_URL = 'https://fakestoreapi.com/products?limit=10';

export default function VitrineScreen({ navigation }) {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function buscarProdutos() {
      try {
        const resposta = await fetch(API_URL);

        if (!resposta.ok) {
          throw new Error(`Erro ao buscar produtos: ${resposta.status}`);
        }

        const dados = await resposta.json();
        setProdutos(dados);
      } catch (error) {
        console.error('Não foi possível carregar os produtos.', error);
        setErro('Não foi possível carregar os produtos.');
      } finally {
        setCarregando(false);
      }
    }

    buscarProdutos();
  }, []);

  if (carregando) {
    return (
      <View style={styles.estado}>
        <ActivityIndicator size="large" color="#2563EB" />
      </View>
    );
  }

  if (erro) {
    return (
      <View style={styles.estado}>
        <Text style={styles.erro}>{erro}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={produtos}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.lista}
      renderItem={({ item }) => (
        <ProdutoCard
          item={item}
          onPress={() => navigation.navigate('DetalhesProduto', { produto: item })}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  lista: {
    padding: 16,
  },
  estado: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  erro: {
    color: '#B91C1C',
    fontSize: 16,
    textAlign: 'center',
  },
});
