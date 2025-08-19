import { router, useLocalSearchParams } from "expo-router";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { posts } from "../assets/mockups/posts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(245, 245, 245, 1)",
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 20,
    color: "rgba(0, 0, 0, 1)",
  },
  text: {
    fontSize: 16,
  },
  imagem: {
    width: 500,
    height: 400,
    resizeMode: "contain",
    marginVertical: 16,
  }
});

export default function Index() {

  const { id } = useLocalSearchParams();
  let indice = posts.findIndex((posts) => posts.id === Number(id));

  function voltar() {
    router.back();
  }

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.titulo}>{posts[indice].title}</Text>
      <Text style={styles.text}>{posts[indice].content}</Text>
      <Text style={styles.text}>{posts[indice].descricao}</Text>
      <Image source={{ uri: posts[indice].image }} style={styles.imagem} />
      <Button
        title="Voltar"
        color="rgba(36, 36, 36, 1)"
        onPress={voltar}
      />
    </View>
  );
}