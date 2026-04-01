import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../../App";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function Home({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoArea}>
        <Image
          source={require("../../../assets/volei.png")}
          style={styles.logo}
        />
        <Text style={styles.titulo}>Vôlei Station</Text>
        <Text style={styles.subtitulo}>Tecnologia e qualidade
          para o seu jogo. Desenvolvemos bolas com aerodinâmica perfeita,
          toque macio e alta durabilidade para quadra e praia.
          Jogue com quem entende a ciência do esporte.
        </Text>
      </View>



      <Pressable
        style={styles.botao}
        onPress={() => navigation.navigate("Produtos")}
      >
        <Text style={styles.botaoTexto}>Produtos</Text>
      </Pressable>

      <Pressable
        style={[styles.botao, styles.botaoSecundario]}
        onPress={() => navigation.navigate("Contato")}
      >
        <Text style={styles.botaoTexto}>Contato</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  logoArea: {
    alignItems: "center",
    marginBottom: 10,
  },
  logo: {
    width: 121,
    height: 122,
    borderRadius: 11,
    marginBottom: 9,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#c2d005",
  },
  subtitulo: {
    fontSize: 15 ,
    color: "#292929",
    marginTop: 2,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    elevation: 3,
  },
  cardTitulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 10,
  },
  texto: {
    fontSize: 15,
    color: "#334155",
    lineHeight: 22,
    marginBottom: 12,
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
});