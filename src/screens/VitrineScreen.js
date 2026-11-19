// Arquivo: src/screens/CatalogoScreen.js
import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import { CATEGORIAS, LISTA_CURSOS } from '../data/cursos';
import FiltroCategoria from '../components/FiltroCategoria';
import CursoCard from '../components/ProdutoCard';

export default function CatalogoScreen({ navigation }) {
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');

  const cursosFiltrados =
    categoriaAtiva === 'Todos'
      ? LISTA_CURSOS
      : LISTA_CURSOS.filter((curso) => curso.categoria === categoriaAtiva);

  return (
    <View style={styles.tela}>
      <FiltroCategoria
        categorias={CATEGORIAS}
        ativa={categoriaAtiva}
        aoSelecionar={setCategoriaAtiva}
      />

      <FlatList
        data={cursosFiltrados}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <CursoCard
            curso={item}
            onVerDetalhes={() => navigation.navigate('Detalhes', { curso: item })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  lista: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
});