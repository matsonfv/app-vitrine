// Arquivo: src/screens/DetalhesCursoScreen.js
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

export default function DetalhesCursoScreen({ route, navigation }) {
  // Extraindo o objeto 'curso' enviado pela tela anterior via route.params
  const { curso } = route.params;

  // Estado local desta tela para controlar se o aluno confirmou a inscrição
  const [inscrito, setInscrito] = useState(false);

  return (
    <ScrollView style={styles.tela} contentContainerStyle={styles.conteudo}>
      {/* Badge de Categoria */}
      <View style={styles.tag}>
        <Text style={styles.tagTexto}>{curso.categoria} • {curso.nivel}</Text>
      </View>

      {/* Título e Descrição */}
      <Text style={styles.titulo}>{curso.titulo}</Text>
      <Text style={styles.descricao}>{curso.descricao}</Text>

      {/* Painel de Informações Gerais */}
      <View style={styles.infoBox}>
        <View style={styles.infoLinha}>
          <Text style={styles.infoLabel}>Instrutor(a):</Text>
          <Text style={styles.infoValor}>{curso.instrutor}</Text>
        </View>
        <View style={styles.infoLinha}>
          <Text style={styles.infoLabel}>Carga Horária:</Text>
          <Text style={styles.infoValor}>{curso.cargaHoraria}</Text>
        </View>
        <View style={styles.infoLinha}>
          <Text style={styles.infoLabel}>Vagas Disponíveis:</Text>
          <Text style={styles.infoValor}>
            {inscrito ? curso.vagas - 1 : curso.vagas} vagas
          </Text>
        </View>
      </View>

      {/* Conteúdo Programático (Ementa) */}
      <Text style={styles.subtitulo}>Conteúdo Programático</Text>
      <View style={styles.ementaBox}>
        {curso.ementa.map((topico, index) => (
          <View key={index} style={styles.topicoLinha}>
            <Text style={styles.topicoNumero}>{index + 1}.</Text>
            <Text style={styles.topicoTexto}>{topico}</Text>
          </View>
        ))}
      </View>

      {/* Botão de Ação Principal */}
      <TouchableOpacity
        style={[styles.botaoInscrever, inscrito && styles.botaoInscrito]}
        onPress={() => setInscrito(!inscrito)}
        activeOpacity={0.8}
      >
        <Text style={styles.textoBotao}>
          {inscrito ? '✓ Inscrição Confirmada!' : 'Confirmar Inscrição no Curso'}
        </Text>
      </TouchableOpacity>

      {/* Botão Programático de Retorno (goBack) */}
      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() => navigation.goBack()}
        activeOpacity={0.7}
      >
        <Text style={styles.textoVoltar}>← Voltar para o Catálogo</Text>
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
  tag: {
    alignSelf: 'flex-start',
    backgroundColor: '#DBEAFE',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 8,
    marginBottom: 12,
  },
  tagTexto: {
    color: '#1E40AF',
    fontWeight: 'bold',
    fontSize: 12,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 10,
  },
  descricao: {
    fontSize: 15,
    color: '#475569',
    lineHeight: 22,
    marginBottom: 20,
  },
  infoBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 22,
  },
  infoLinha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },
  infoLabel: {
    color: '#64748B',
    fontSize: 14,
  },
  infoValor: {
    color: '#0F172A',
    fontWeight: 'bold',
    fontSize: 14,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 12,
  },
  ementaBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 24,
  },
  topicoLinha: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  topicoNumero: {
    fontWeight: 'bold',
    color: '#2563EB',
    marginRight: 8,
    fontSize: 14,
  },
  topicoTexto: {
    flex: 1,
    color: '#334155',
    fontSize: 14,
    lineHeight: 20,
  },
  botaoInscrever: {
    backgroundColor: '#2563EB',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
  },
  botaoInscrito: {
    backgroundColor: '#059669',
  },
  textoBotao: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  botaoVoltar: {
    paddingVertical: 12,
    alignItems: 'center',
  },
  textoVoltar: {
    color: '#475569',
    fontWeight: '600',
    fontSize: 14,
  },
});