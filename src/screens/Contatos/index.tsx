import { Pressable, StyleSheet, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../../App";

type Props = NativeStackScreenProps<RootStackParamList, "Contato">;

export default function Contato({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.card}>
          <Text style={styles.titulo}>Entre em Contato</Text>

          {/* Informação: WhatsApp */}
          <View style={styles.itemContato}>
            <Text style={styles.label}>WhatsApp:</Text>
            <Text style={styles.texto}>(19) 97865-3425</Text>
          </View>

          {/* Informação: Telefone Fixo */}
          <View style={styles.itemContato}>
            <Text style={styles.label}>Telefone:</Text>
            <Text style={styles.texto}>(19) 93567-4356</Text>
          </View>

          {/* Informação: E-mail */}
          <View style={styles.itemContato}>
            <Text style={styles.label}>E-mail:</Text>
            <Text style={styles.texto}>voleistationoficial@gmail.com.br</Text>
          </View>

          {/* Informação: Endereço */}
          <View style={styles.itemContato}>
            <Text style={styles.label}>Endereço:</Text>
            <Text style={styles.texto}>
              Rua José Augusta da Silva, Jardim dos Ypês - Leme/SP
            </Text>
          </View>

          {/* Informação: Horário */}
          <View style={styles.itemContato}>
            <Text style={styles.label}>Horário de Atendimento:</Text>
            <Text style={styles.texto}>Segunda a Sexta, das 7h às 18h</Text>
          </View>

          {/* Informação: CNPJ */}
          <View style={styles.itemContato}>
            <Text style={styles.label}>CNPJ:</Text>
            <Text style={styles.texto}>11.367.986/0001-30</Text>
          </View>

          {/* Linha divisória antes dos botões */}
          <View style={styles.divisor} />

          {/* Botões de Navegação */}
          <Pressable
            style={styles.botao}
            onPress={() => navigation.popTo("Home")}
          >
            <Text style={styles.botaoTexto}>Home</Text>
          </Pressable>

          <Pressable
            style={[styles.botao, styles.botaoSecundario]}
            onPress={() => navigation.navigate("Produtos")}
          >
            <Text style={styles.botaoTexto}>Produtos</Text>
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
  scrollContent: {
    padding: 20,
    justifyContent: "center",
    flexGrow: 1, 
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 24,
    elevation: 3, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 24,
    textAlign: "center",
  },
  itemContato: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#64748b", 
    marginBottom: 4,
    textTransform: "uppercase", 
  },
  texto: {
    fontSize: 16,
    color: "#334155", 
    lineHeight: 22, 
  },
  divisor: {
    height: 1,
    backgroundColor: "#e2e8f0",
    marginVertical: 20,
  },
  botao: {
    backgroundColor: "#b6c600",
    padding: 14,
    borderRadius: 50,
    alignItems: "center",
    marginBottom: 12,
  },
  botaoSecundario: {
    backgroundColor: "#3dadb3",
  },
  botaoTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});