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

// Aqui é um componente funcional para isolar o estado de quantidade de cada produto
const ProdutoCard = ({ produto }: { produto: any }) => {
  const [quantidade, setQuantidade] = useState(1);

  const aumentarQtd = () => setQuantidade((prev) => prev + 1);
  const diminuirQtd = () => setQuantidade((prev) => (prev > 1 ? prev - 1 : 1));

  const adicionarAoCarrinho = () => {
    Alert.alert("Sucesso", "Produto adicionado ao carrinho!");
  };

  return (
    <View style={estilos.cartaoItem}>
      <Image source={{ uri: produto.imagem }} style={estilos.fotoItem} />
      
      <View style={estilos.dadosProduto}>
        <Text style={estilos.tituloItem}>{produto.nome}</Text>
        <Text style={estilos.valorPrazo}>R$ {produto.precoNormal} no cartão</Text>
        <Text style={estilos.valorAVista}>R$ {produto.precoPix} no PIX</Text>
        
        <View style={estilos.areaAcoes}>
          <View style={estilos.seletorQuantidade}>
            <Pressable onPress={diminuirQtd} style={estilos.areaToqueSinal}>
              <Text style={estilos.simboloOperacao}>-</Text>
            </Pressable>
            <Text style={estilos.numeroVisor}>{quantidade}</Text>
            <Pressable onPress={aumentarQtd} style={estilos.areaToqueSinal}>
              <Text style={estilos.simboloOperacao}>+</Text>
            </Pressable>
          </View>

          <Pressable
            style={[estilos.btnPrimario, estilos.btnAddAoCarrinho]}
            onPress={adicionarAoCarrinho}
          >
            <Text style={estilos.rotuloBtnPequeno}>Adicionar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};


export default function Produtos({ navigation }: Props) {
  return (
    <SafeAreaView style={estilos.telaGeral}>
      <Text style={estilos.cabecalhoPagina}>Nossos Produtos</Text>
      
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={estilos.listaRolavel}>
        {PRODUTOS.map((prod) => (
          <ProdutoCard key={prod.id} produto={prod} />
        ))}

        <View style={estilos.rodapeNavegacao}>
          <Pressable style={estilos.btnPrimario} onPress={() => navigation.popTo("Home")}>
            <Text style={estilos.rotuloBtnPadrao}>Home</Text>
          </Pressable>

          <Pressable
            style={[estilos.btnPrimario, estilos.btnAlternativo]}
            onPress={() => navigation.navigate("Contato")}
          >
            <Text style={estilos.rotuloBtnPadrao}>Contato</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  telaGeral: {
    flex: 1,
    backgroundColor: "#f1f5f9",
  },
  cabecalhoPagina: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0f172a",
    textAlign: "center",
    marginVertical: 16,
  },
  listaRolavel: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  cartaoItem: {
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
  fotoItem: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  dadosProduto: {
    flex: 1,
  },
  tituloItem: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 4,
  },
  valorPrazo: {
    fontSize: 12,
    color: "#64748b",
    textDecorationLine: "line-through",
  },
  valorAVista: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#16a34a", 
    marginBottom: 10,
  },
  areaAcoes: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  seletorQuantidade: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f5f9",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  areaToqueSinal: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  simboloOperacao: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0f172a",
  },
  numeroVisor: {
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 8,
  },
  rodapeNavegacao: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  btnPrimario: {
    backgroundColor: "#b6c608",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    marginBottom: 10,
  },
  btnAlternativo: {
    backgroundColor: "#39aeb4f3",
  },
  rotuloBtnPadrao: {
    color: "#fff",
    fontSize: 15,
  },
  btnAddAoCarrinho: {
    backgroundColor: "#3b42b6",
    marginBottom: 0,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  rotuloBtnPequeno: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "bold",
  },
});