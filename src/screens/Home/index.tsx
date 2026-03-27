import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../../App";

type Props = NativeStackScreenProps<RootStackParamList, "Home">; // para o typeScript entender que a rota Home existe e tem acesso ao navigation

export default function Home({ navigation }: Props) { //sonarqube diz para deixar readonly
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoArea}>
        <Image
          source={{ uri: "https://picsum.photos/id/145/367/267" }}
          style={styles.logo}
        />
        <Text style={styles.titulo}>Tech Store</Text>
        <Text style={styles.subtitulo}>Tecnologia com praticidade para o dia a dia</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>Sobre a empresa</Text>
        <Text style={styles.texto}>
          A Tech Store é uma empresa especializada em acessórios e
          produtos de tecnologia. Trabalhamos com itens modernos, preços
          acessíveis e pagamento facilitado via PIX.
        </Text>

        <View style={styles.infoLinha}>
          
          <Text style={styles.infoTexto}>🏍️ Entrega</Text>
        </View>

        <View style={styles.infoLinha}>
          
          <Text style={styles.infoTexto}>💻 Produtos eletrônicos</Text>
        </View>

        <View style={styles.infoLinha}>
          
          <Text style={styles.infoTexto}>💸 Desconto especial no PIX</Text>
        </View>
      </View>

      <Pressable
        style={styles.botao}
        onPress={() => navigation.navigate("Produtos")}
      >
        <Text style={styles.botaoTexto}>Ir para Produtos</Text>
      </Pressable>

      <Pressable
        style={[styles.botao, styles.botaoSecundario]}
        onPress={() => navigation.navigate("Contato")}
      >
        <Text style={styles.botaoTexto}>Ir para Contato</Text>
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
    marginBottom: 24,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 12,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0f172a",
  },
  subtitulo: {
    fontSize: 14,
    color: "#475569",
    marginTop: 4,
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
  infoLinha: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    gap: 8,
  },
  infoTexto: {
    fontSize: 15,
    color: "#334155",
  },
  botao: {
    backgroundColor: "#2563eb",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 12,
  },
  botaoSecundario: {
    backgroundColor: "#0f766e",
  },
  botaoTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});