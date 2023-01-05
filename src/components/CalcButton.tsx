import React from 'react';
import {styles} from '../../themes/appTheme';
import {Text, TouchableOpacity, View} from 'react-native';

interface Props {
  text: string;
  color?: string;
  ancho?: boolean;
  accion: (numero: string) => void;
}

export const CalcButton = ({
  text,
  color = '#2d2d2d',
  ancho = false,
  accion,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => accion(text)}>
      <View
        style={[
          styles.boton,
          // eslint-disable-next-line react-native/no-inline-styles
          {backgroundColor: color, width: ancho ? 180 : 80},
        ]}>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            ...styles.botonTexto,
            color: color === '#9b9b9b' ? 'black' : 'white',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
