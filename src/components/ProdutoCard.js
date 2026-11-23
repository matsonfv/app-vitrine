import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ProdutoCard({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <Image source={{ uri: item.image }} style={styles.imagem} resizeMode="contain" />
      <View style={styles.conteudo}>
        <Text style={styles.categoria}>{item.category}</Text>
        <Text style={styles.titulo} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.preco}>R$ {item.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  imagem: {
    width: 100,
    height: 120,
    marginRight: 14,
  },
  conteudo: {
    flex: 1,
    justifyContent: 'center',
  },
  categoria: {
    color: '#2563EB',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  titulo: {
    color: '#0F172A',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  preco: {
    color: '#059669',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
