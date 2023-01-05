import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  fondo: {
    backgroundColor: 'black',
    flex: 1,
  },
  calculadoraContainer: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'flex-end',
  },
  resultado: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
    marginBottom: 10,
  },
  resultadoPequeno: {
    color: '#ffffff58',
    fontSize: 30,
    textAlign: 'right',
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  boton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#9b9b9b',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  botonTexto: {
    color: 'white',
    fontWeight: '400',
    fontSize: 30,
    alignSelf: 'center',
  },
});
