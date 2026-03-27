import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../../App";

type Props = NativeStackScreenProps<RootStackParamList, "Produtos">;

export default function Produtos({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Produtos</Text>
        <View style={styles.linha}>
        <Text style={styles.subtitulo}>
          Tablet - Samsung Galaxy Tab S7 - R$ 2.499,00
        </Text>
        <Text style={styles.subtitulo}>
          Teclado - Logitech K380 - R$ 299,00
        </Text>
        <Text style={styles.subtitulo}>
          Fone de Ouvido - Sony WH - R$ 1.499,00
        </Text>
        <Text style={styles.subtitulo}>  
          Mouse - Razer DeathAdder V2 - R$ 399,00
        </Text>
        <Text style={styles.subtitulo}>
          Monitor - LG UltraFine 4K - R$ 3.999,00
        </Text>
      </View>
        <Pressable
          style={styles.botao}
          onPress={() => navigation.popTo("Home")}
        >
          <Text style={styles.botaoTexto}>Ir para Home</Text>
        </Pressable>

        <Pressable style={[styles.botao, styles.botaoAtual]}>
          <Text style={styles.botaoTexto}>Voce esta em Produtos</Text>
        </Pressable>

        <Pressable
          style={[styles.botao, styles.botaoSecundario]}
          onPress={() => navigation.navigate("Contato")}
        >
          <Text style={styles.botaoTexto}>Ir para Contato</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 20,
    elevation: 3,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0f172a",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 15,
    color: "#475569",
    textAlign: "center",
    marginBottom: 20,
  },
  botao: {
    backgroundColor: "#2563eb",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 12,
  },
  botaoAtual: {
    backgroundColor: "#334155",
  },
  botaoSecundario: {
    backgroundColor: "#0f766e",
  },
  botaoTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  linha: {
    flexDirection: "column",
    alignItems: "center"}
});
