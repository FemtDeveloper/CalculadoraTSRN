import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../../themes/appTheme';
import {CalcButton} from '../components/CalcButton';
import useCalculadora from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {
  const {
    numeroAnterior,
    numero,
    btnDelete,
    clear,
    btnSumar,
    btnRestar,
    btnDividir,
    btnMultiplicar,
    armarNumero,
    negativoPositivo,
    calcular,
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      )}

      <Text style={styles.resultado} adjustsFontSizeToFit numberOfLines={1}>
        {numero}
      </Text>
      <View style={styles.fila}>
        <CalcButton text="C" color="#9b9b9b" accion={clear} />
        <CalcButton text="+/-" color="#9b9b9b" accion={negativoPositivo} />
        <CalcButton text="DEL" color="#9b9b9b" accion={btnDelete} />
        <CalcButton text="/" color="#ff9427" accion={btnDividir} />
      </View>
      <View style={styles.fila}>
        <CalcButton text="7" accion={armarNumero} />
        <CalcButton text="8" accion={armarNumero} />
        <CalcButton text="9" accion={armarNumero} />
        <CalcButton text="X" color="#ff9427" accion={btnMultiplicar} />
      </View>
      <View style={styles.fila}>
        <CalcButton text="4" accion={armarNumero} />
        <CalcButton text="5" accion={armarNumero} />
        <CalcButton text="6" accion={armarNumero} />
        <CalcButton text="-" color="#ff9427" accion={btnRestar} />
      </View>
      <View style={styles.fila}>
        <CalcButton text="1" accion={armarNumero} />
        <CalcButton text="2" accion={armarNumero} />
        <CalcButton text="3" accion={armarNumero} />
        <CalcButton text="+" color="#ff9427" accion={btnSumar} />
      </View>
      <View style={styles.fila}>
        <CalcButton text="0" accion={armarNumero} ancho />
        <CalcButton text="." accion={armarNumero} />
        <CalcButton text="=" color="#ff9427" accion={calcular} />
      </View>
    </View>
  );
};
