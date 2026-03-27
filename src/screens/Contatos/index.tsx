import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../../App";

type Props = NativeStackScreenProps<RootStackParamList, "Contato">;

export default function Contato({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Contato da Empresa</Text>

        <View style={styles.linha}>

          <Text style={styles.texto}>(11) 6702-8922</Text>
        </View>

        <View style={styles.linha}>

          <Text style={styles.texto}>(11) 96669-6767</Text>
        </View>

        <View style={styles.linha}>
          
          <Text style={styles.texto}>
            Rua dos buracos, 067 - Centro - Sumaré/SP
          </Text>
        </View>

        <View style={styles.linha}>
          
          <Text style={styles.texto}>CNPJ: 12.345.678/0001-67</Text>
        </View>

        <View style={styles.linha}>
          
          <Text style={styles.texto}>Atendimento: Seg a Sex, das 9h às 18h</Text>
        </View>


          <Text style={styles.texto}>contato@techstore.com.br</Text>
          <Pressable
            style={styles.botao}
            onPress={() => navigation.popTo("Home")}
          >
            <Text style={styles.botaoTexto}>Ir para Home</Text>
          </Pressable>
  
          <Pressable style={[styles.botao, styles.botaoAtual]}>
            <Text style={styles.botaoTexto}>Voce esta em Contatos</Text>
          </Pressable>
  
          <Pressable
            style={[styles.botao, styles.botaoSecundario]}
            onPress={() => navigation.navigate("Produtos")}
          >
            <Text style={styles.botaoTexto}>Ir para Produtos</Text>
          </Pressable>
        </View>
    </SafeAreaView>
  );
}

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
    marginBottom: 20,
    textAlign: "center",
  },
  linha: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    gap: 10,
  },
  texto: {
    flex: 1,
    fontSize: 16,
    color: "#334155",
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
});