// Arquivo: src/components/CursoCard.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Componente reutilizável que recebe o objeto 'curso' e a função 'onVerDetalhes'
export default function CursoCard({ curso, onVerDetalhes }) {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={onVerDetalhes}
    >
      <View style={styles.linhaTags}>
        <View style={styles.tagCategoria}>
          <Text style={styles.tagCategoriaTexto}>{curso.categoria}</Text>
        </View>
        <Text style={styles.cargaHoraria}>{curso.cargaHoraria} • {curso.nivel}</Text>
      </View>

      <Text style={styles.titulo}>{curso.titulo}</Text>
      <Text style={styles.descricao} numberOfLines={2}>
        {curso.descricao}
      </Text>

      <View style={styles.rodape}>
        <Text style={styles.instrutor}>{curso.instrutor}</Text>
        <Text style={styles.linkDetalhes}>Ver detalhes →</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  linhaTags: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  tagCategoria: {
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  tagCategoriaTexto: {
    color: '#1D4ED8',
    fontWeight: 'bold',
    fontSize: 12,
  },
  cargaHoraria: {
    fontSize: 12,
    color: '#64748B',
    fontWeight: '600',
  },
  titulo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 6,
  },
  descricao: {
    fontSize: 13,
    color: '#475569',
    lineHeight: 19,
    marginBottom: 12,
  },
  rodape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
  },
  instrutor: {
    fontSize: 12,
    color: '#334155',
    fontWeight: '600',
  },
  linkDetalhes: {
    fontSize: 13,
    color: '#2563EB',
    fontWeight: 'bold',
  },
});