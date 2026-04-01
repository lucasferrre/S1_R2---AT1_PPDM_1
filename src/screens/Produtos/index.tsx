import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View, Image, ScrollView, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../../App";

type Props = NativeStackScreenProps<RootStackParamList, "Produtos">;


const PRODUTOS = [
  {
    id: "1",
    nome: "Bola de Vôlei Mikasa MVA200",
    precoNormal: "299,90",
    precoPix: "278,90",
    imagem: "https://m.media-amazon.com/images/I/51Sg+946pLL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "2",
    nome: "Bola de Vôlei Penalty 8.0 Pro IX",
    precoNormal: "399,90",
    precoPix: "383,90",
    imagem: "https://cambuci.vtexassets.com/arquivos/ids/1505126-800-auto?v=638774081792000000&width=800&height=auto&aspect=true",
  },
  {
    id: "3",
    nome: "Bola de Vôlei Mikasa V200W",
    precoNormal: "630,90",
    precoPix: "599,90",
    imagem: "https://imgcentauro-a.akamaihd.net/1200x1200/M0RF4108A5.jpg",
  },
  {
    id: "4",
    nome: "Bola de Vôlei Rainha Pro 2.8",
    precoNormal: "81,90",
    precoPix: "71,90",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_897064-MLA99933480931_112025-O.webp",
  },
  {
    id: "5",
    nome: "Bola de Vôlei Molten V5m5000 ",
    precoNormal: "269,90",
    precoPix: "249,90",
    imagem: "https://www.molten.com.br/uploads/90ee1eff8e8f57cb78f52c08b9c9646e.jpg",
  },
];

// Subcomponente para isolar o estado de quantidade de cada produto
const ProdutoCard = ({ produto }: { produto: any }) => {
  const [quantidade, setQuantidade] = useState(1);

  const aumentarQtd = () => setQuantidade((prev) => prev + 1);
  const diminuirQtd = () => setQuantidade((prev) => (prev > 1 ? prev - 1 : 1));

  const adicionarAoCarrinho = () => {
    Alert.alert("Sucesso", "Produto adicionado ao carrinho!");
  };

  return (
    <View style={styles.produtoCard}>
      <Image source={{ uri: produto.imagem }} style={styles.imagemProduto} />
      
      <View style={styles.infoProduto}>
        <Text style={styles.nomeProduto}>{produto.nome}</Text>
        <Text style={styles.precoNormal}>R$ {produto.precoNormal} no cartão</Text>
        <Text style={styles.precoPix}>R$ {produto.precoPix} no PIX</Text>
        
        <View style={styles.controlesContainer}>
          <View style={styles.quantidadeContainer}>
            <Pressable onPress={diminuirQtd} style={styles.btnQuantidade}>
              <Text style={styles.btnQuantidadeTexto}>-</Text>
            </Pressable>
            <Text style={styles.textoQuantidade}>{quantidade}</Text>
            <Pressable onPress={aumentarQtd} style={styles.btnQuantidade}>
              <Text style={styles.btnQuantidadeTexto}>+</Text>
            </Pressable>
          </View>

          <Pressable
            style={[styles.botao, styles.botaoCarrinhoMini]}
            onPress={adicionarAoCarrinho}
          >
            <Text style={styles.botaoTextoMini}>Adicionar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

//Componente Principal da Tela
export default function Produtos({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.tituloSecao}>Nossos Produtos</Text>
      
      {/* ScrollView para permitir rolagem da lista de produtos */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollList}>
        {PRODUTOS.map((prod) => (
          <ProdutoCard key={prod.id} produto={prod} />
        ))}

        {/* Botões de Navegação no final da lista */}
        <View style={styles.navContainer}>
          <Pressable style={styles.botao} onPress={() => navigation.popTo("Home")}>
            <Text style={styles.botaoTexto}>Home</Text>
          </Pressable>

          <Pressable
            style={[styles.botao, styles.botaoSecundario]}
            onPress={() => navigation.navigate("Contato")}
          >
            <Text style={styles.botaoTexto}>Contato</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
  },
  tituloSecao: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0f172a",
    textAlign: "center",
    marginVertical: 16,
  },
  scrollList: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  produtoCard: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    flexDirection: "row", 
    alignItems: "center",
  },
  imagemProduto: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  infoProduto: {
    flex: 1,
  },
  nomeProduto: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 4,
  },
  precoNormal: {
    fontSize: 12,
    color: "#64748b",
    textDecorationLine: "line-through",
  },
  precoPix: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#16a34a", // Verde para destacar o Pix
    marginBottom: 10,
  },
  controlesContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  quantidadeContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f5f9",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  btnQuantidade: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  btnQuantidadeTexto: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0f172a",
  },
  textoQuantidade: {
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 8,
  },
  navContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
    botao: {
    backgroundColor: "#b6c608",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    marginBottom: 10,
  },
  botaoSecundario: {
    backgroundColor: "#39aeb4f3",
  },
  botaoTexto: {
    color: "#fff",
    fontSize: 15,
  },
  botaoCarrinhoMini: {
    backgroundColor: "#3b42b6",
    marginBottom: 0,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  botaoTextoMini: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "bold",
  },
});