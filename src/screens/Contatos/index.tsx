import { Pressable, StyleSheet, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../../App";

type Props = NativeStackScreenProps<RootStackParamList, "Contato">;

export default function Contato({ navigation }: Props) {
  return (
    <SafeAreaView style={estilos.telaGeral}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={estilos.conteudoRolavel}>
        <View style={estilos.cartaoInformativo}>
          <Text style={estilos.tituloCartao}>Entre em Contato</Text>

          {/* Informação: WhatsApp */}
          <View style={estilos.blocoInformacao}>
            <Text style={estilos.rotuloInfo}>WhatsApp:</Text>
            <Text style={estilos.valorInfo}>(19) 97865-3425</Text>
          </View>

          {/* Informação: Telefone Fixo */}
          <View style={estilos.blocoInformacao}>
            <Text style={estilos.rotuloInfo}>Telefone:</Text>
            <Text style={estilos.valorInfo}>(19) 93567-4356</Text>
          </View>

          {/* Informação: E-mail */}
          <View style={estilos.blocoInformacao}>
            <Text style={estilos.rotuloInfo}>E-mail:</Text>
            <Text style={estilos.valorInfo}>voleistationoficial@gmail.com.br</Text>
          </View>

          {/* Informação: Endereço */}
          <View style={estilos.blocoInformacao}>
            <Text style={estilos.rotuloInfo}>Endereço:</Text>
            <Text style={estilos.valorInfo}>
              Rua José Augusta da Silva, Jardim dos Ypês - Leme/SP
            </Text>
          </View>

          {/* Informação: Horário */}
          <View style={estilos.blocoInformacao}>
            <Text style={estilos.rotuloInfo}>Horário de Atendimento:</Text>
            <Text style={estilos.valorInfo}>Segunda a Sexta, das 7h às 18h</Text>
          </View>

          {/* Informação: CNPJ */}
          <View style={estilos.blocoInformacao}>
            <Text style={estilos.rotuloInfo}>CNPJ:</Text>
            <Text style={estilos.valorInfo}>11.367.986/0001-30</Text>
          </View>

          {/* Linha divisória antes dos botões */}
          <View style={estilos.linhaDivisoria} />

          {/* Botões de Navegação */}
          <Pressable
            style={estilos.btnPrimario}
            onPress={() => navigation.popTo("Home")}
          >
            <Text style={estilos.rotuloBtnPadrao}>Home</Text>
          </Pressable>

          <Pressable
            style={[estilos.btnPrimario, estilos.btnAlternativo]}
            onPress={() => navigation.navigate("Produtos")}
          >
            <Text style={estilos.rotuloBtnPadrao}>Produtos</Text>
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
  conteudoRolavel: {
    padding: 20,
    justifyContent: "center",
    flexGrow: 1, 
  },
  cartaoInformativo: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 24,
    elevation: 3, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  tituloCartao: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 24,
    textAlign: "center",
  },
  blocoInformacao: {
    marginBottom: 16,
  },
  rotuloInfo: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#64748b", 
    marginBottom: 4,
    textTransform: "uppercase", 
  },
  valorInfo: {
    fontSize: 16,
    color: "#334155", 
    lineHeight: 22, 
  },
  linhaDivisoria: {
    height: 1,
    backgroundColor: "#e2e8f0",
    marginVertical: 20,
  },
  btnPrimario: {
    backgroundColor: "#b6c600",
    padding: 14,
    borderRadius: 50,
    alignItems: "center",
    marginBottom: 12,
  },
  btnAlternativo: {
    backgroundColor: "#3dadb3",
  },
  rotuloBtnPadrao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});