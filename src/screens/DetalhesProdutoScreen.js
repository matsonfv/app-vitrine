import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

export default function DetalhesProdutoScreen({ route, navigation }) {
  const { produto } = route.params;
  const [adicionado, setAdicionado] = useState(false);

  return (
    <ScrollView style={styles.tela} contentContainerStyle={styles.conteudo}>
      <Image source={{ uri: produto.image }} style={styles.imagem} resizeMode="contain" />
      <Text style={styles.categoria}>{produto.category}</Text>
      <Text style={styles.titulo}>{produto.title}</Text>
      <Text style={styles.descricao}>{produto.description}</Text>
      <Text style={styles.avaliacao}>Avaliação: {produto.rating.rate}</Text>
      <Text style={styles.preco}>R$ {produto.price.toFixed(2)}</Text>

      <TouchableOpacity
        style={[styles.botaoCarrinho, adicionado && styles.botaoAdicionado]}
        onPress={() => setAdicionado(!adicionado)}
        activeOpacity={0.8}
      >
        <Text style={styles.textoBotao}>
          {adicionado ? '✓ Adicionado ao Carrinho' : 'Adicionar ao Carrinho'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() => navigation.goBack()}
        activeOpacity={0.7}
      >
        <Text style={styles.textoVoltar}>← Continuar Comprando</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  conteudo: {
    padding: 20,
    paddingBottom: 40,
  },
  imagem: {
    width: '100%',
    height: 280,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
  },
  categoria: {
    color: '#2563EB',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  titulo: {
    color: '#0F172A',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 14,
  },
  descricao: {
    color: '#475569',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 18,
  },
  avaliacao: {
    color: '#334155',
    fontSize: 15,
    marginBottom: 10,
  },
  preco: {
    color: '#059669',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  botaoCarrinho: {
    backgroundColor: '#2563EB',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 12,
  },
  botaoAdicionado: {
    backgroundColor: '#059669',
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  botaoVoltar: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  textoVoltar: {
    color: '#475569',
    fontSize: 15,
    fontWeight: '600',
  },
});
