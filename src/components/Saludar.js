import { View, Text } from "react-native";
import React from "react";
import PropTypes from "prop-types";

export default function Saludar(props) {
  const { nombre, apellido } = props;
  return (
    <View>
      <Text>
        Hola {nombre} {apellido}!
      </Text>
    </View>
  );
}

Saludar.defaultProps = {
  nombre: "Anónimo",
  apellido: "Anónimo",
};

Saludar.propTypes = {
  nombre: PropTypes.string.isRequired,
  apellido: PropTypes.string,
};
