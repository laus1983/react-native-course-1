import React from "react";
import { Text, Button, SafeAreaView } from "react-native";

export default function HomeScreen(props) {
  // console.log(props);
  // const { navigation } = props;
  // const { navigate } = navigation;

  // const goToSettings = () => {
  //   navigate("Settings");
  // };
  return (
    <SafeAreaView>
      <Text>HomeScreen Component</Text>
      {/* <Button title="Ir a Settings" onPress={goToSettings} /> */}
    </SafeAreaView>
  );
}
