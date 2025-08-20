
import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  faixa: {
    backgroundColor: "rgba(126, 126, 126, 1)",
  },
  texto: {
    color: "rgba(243, 243, 243, 1)",
  },
});

export default function Layout() {
  return <Stack
    screenOptions={{
      headerStyle: styles.faixa,
      headerTitleStyle: styles.texto,
    }}
  >
    <Stack.Screen name="index" options={{ title: "Mc dawlton infeliz" }} />
    <Stack.Screen name="detalhes" options={{ title: "Detalhes do Lanches" }} />

  </Stack>;
}
