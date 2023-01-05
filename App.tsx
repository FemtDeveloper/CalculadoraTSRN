import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {styles} from './themes/appTheme';
import {CalculadoraScreen} from './src/screens/CalculadoraScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar backgroundColor={'black'} />
      <CalculadoraScreen />
    </SafeAreaView>
  );
};

export default App;
