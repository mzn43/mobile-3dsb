import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

const cesta = {
  nome: "Cesta de Verduras",
  fazenda: "Fazenda Boa Terra",
  preco: "R$ 40,00",
  imagemFazenda: "https://terramagna.com.br/wp-content/uploads/2022/08/maquinas-agricolas-soja-agronegocio-no-Brasil.jpg",

  itens: [
    { id: "1", nome: "Alface", imagem: "https://img.fazendinha.me/production/produtor/371/produtos/3280/xis-folhas-alface-crespa-hidroponica-xis-folhas-50un-1632151058.jpg"},
    { id: "2", nome: "Tomate", imagem: "https://tomatebrasil.com.br/wp-content/uploads/2024/04/A-historia-curiosa-do-tomate-recanto-inspiracao.jpg" },
    { id: "3", nome: "Cenoura", imagem: "https://www.infoescola.com/wp-content/uploads/2010/08/cenoura_250834906.jpg" },
    { id: "4", nome: "Batata", imagem: "https://swiftbr.vteximg.com.br/arquivos/ids/213970-768-768/622291-batata-airfryer-mccain_rec.jpg?v=639052968041100000" },
  ],
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{cesta.nome}</Text>
      <Text style={styles.subtitulo}>{cesta.fazenda}</Text>
      <Image source={{ uri: cesta.imagemFazenda }} style={styles.imagemFazenda} />
      <Text style={styles.preco}>{cesta.preco}</Text>

      <Text style={styles.itensTitulo}>Itens da cesta:</Text>
      <FlatList
        data={cesta.itens}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.imagem }} style={styles.itemImagem} />
            <Text style={styles.item}>{item.nome}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitulo: {
    fontSize: 18,
    color: "#555",
    marginBottom: 5,
  },
  preco: {
    fontSize: 18,
    color: "green",
    marginBottom: 15,
  },
  imagemFazenda: {
    width: "100%",
    height: 200,
    marginBottom: 15,
    borderRadius: 10,
  },
  itensTitulo: {
    fontSize: 20,
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  itemImagem: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 5,
  },
  item: {
    fontSize: 16,
  },
});