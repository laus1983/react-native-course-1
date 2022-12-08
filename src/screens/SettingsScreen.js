import React from "react";
import { Text, Button, SafeAreaView } from "react-native";

export default function SettingsScreen(props) {
  // console.log(props);
  // const { navigation } = props;
  // const { navigate } = navigation;
  // const goToPage = (pageName) => {
  //   navigate(pageName);
  // };
  return (
    <SafeAreaView>
      <Text>SettingsScreen Component</Text>
      {/* <Button title="Ir a Home" onPress={() => goToPage("Home")} /> */}
    </SafeAreaView>
  );
}
