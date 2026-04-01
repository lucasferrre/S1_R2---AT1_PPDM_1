import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../../App";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function Home({ navigation }: Props) {
  return (
    <SafeAreaView style={estilos.telaGeral}>
      <View style={estilos.secaoApresentacao}>
        <Image
          source={require("../../../assets/volei.png")}
          style={estilos.imagemLogo}
        />
        <Text style={estilos.nomeMarca}>Vôlei Station</Text>
        <Text style={estilos.textoDescritivo}>
          Tecnologia e qualidade para o seu jogo. Desenvolvemos bolas com 
          aerodinâmica perfeita, toque macio e alta durabilidade para quadra e praia.
          Jogue com quem entende a ciência do esporte.
        </Text>
      </View>

      <Pressable
        style={estilos.btnPrimario}
        onPress={() => navigation.navigate("Produtos")}
      >
        <Text style={estilos.rotuloBtnPadrao}>Produtos</Text>
      </Pressable>

      <Pressable
        style={[estilos.btnPrimario, estilos.btnAlternativo]}
        onPress={() => navigation.navigate("Contato")}
      >
        <Text style={estilos.rotuloBtnPadrao}>Contato</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  telaGeral: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  secaoApresentacao: {
    alignItems: "center",
    marginBottom: 10,
  },
  imagemLogo: {
    width: 121,
    height: 122,
    borderRadius: 11,
    marginBottom: 9,
  },
  nomeMarca: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#c2d005",
  },
  textoDescritivo: {
    fontSize: 15,
    color: "#292929",
    marginTop: 2,
    textAlign: "center",
  },
  cartaoInformativo: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    elevation: 3,
  },
  tituloCartao: { 
    fontSize: 20,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 10,
  },
  textoPadrao: { 
    fontSize: 15,
    color: "#334155",
    lineHeight: 22,
    marginBottom: 12,
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
});