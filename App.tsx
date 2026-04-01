import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/Home";
import Produtos from "./src/screens/Produtos";
import Contato from "./src/screens/Contatos";


export type RootStackParamList = { 
  Home: undefined;
  Produtos: undefined;
  Contato: undefined;
};


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#42b2b8",
          },
          headerTintColor: "#ffffff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          contentStyle: {
            backgroundColor: "#f1f5f9",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="Produtos"
          component={Produtos}
          options={{ title: "Produtos" }}
        />
        <Stack.Screen
          name="Contato"
          component={Contato}
          options={{ title: "Contato" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}