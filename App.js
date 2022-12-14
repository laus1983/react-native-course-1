import React from "react";
import "react-native-gesture-handler";
// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import NavigationStack from "./src/navigation/NavigationStack";
// import LoginForm from "./src/components/LoginForm";
// import Saludar from "./src/components/Saludar";
// import NavigationTab from "./src/navigation/NavigationTab";
import NavigationDrawer from "./src/navigation/NavigationDrawer";

export default function App() {
  return (
    <NavigationContainer>
      <NavigationDrawer />
      {/* <NavigationTab /> */}
      {/* <View style={styles.container}> */}
      {/* <NavigationStack /> */}
      {/* <Text>Curso 1 de React native en Platzi!</Text>
        <Saludar nombre="Luis" apellido="Urdaneta" />
        <Saludar /> Linea de codigo para probar las propiedades por defecto
        <LoginForm /> */}
      {/* <StatusBar style="auto" /> */}
      {/* </View> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
