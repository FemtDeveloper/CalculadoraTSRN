import {useRef, useState} from 'react';

enum Operadores {
  sumar,
  restar,
  dividir,
  multiplicar,
}

const useCalculadora = () => {
  const [numeroAnterior, setnumeroAnterior] = useState('0');
  const [numero, setNumero] = useState('100');

  const ultimaOperacionRef = useRef<Operadores>();

  const clear = () => {
    setNumero('0');
    setnumeroAnterior('0');
  };

  const armarNumero = (value: string) => {
    if (value === '.' && numero.includes('.')) {
      return; // TODO refactorizar codigo
    }
    setNumero(numero !== '0' || value === '.' ? numero + value : value);
  };

  // const armarNumero = (numeroTexto: string) => {
  //   if (numero.includes('.') && numeroTexto === '.') {
  //     return;
  //   }
  //   if (numero.startsWith('0') || numero.startsWith('-0')) {
  //     if (numeroTexto === '.') {
  //       setNumero(numero + numeroTexto);
  //     } else if (numeroTexto === '0' && numero.includes('.')) {
  //       setNumero(numero + numeroTexto);
  //     } else if (numeroTexto !== '0' && !numero.includes('.')) {
  //       setNumero(numeroTexto);
  //     } else if (numeroTexto === '0' && !numero.includes('.')) {
  //       setNumero(numero);
  //     } else {
  //       setNumero(numero + numeroTexto);
  //     }
  //   } else {
  //     setNumero(numero + numeroTexto);
  //   }
  // };

  const btnDelete = () => {
    if (numero.length === 1 || (numero.length === 2 && numero.includes('-'))) {
      setNumero('0');
    } else {
      setNumero(numero.substring(0, numero.length - 1));
    }
  };

  const negativoPositivo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  const cambiarNumeroXAnterior = () => {
    if (numero.endsWith('.')) {
      setnumeroAnterior(numero.slice(0, -1));
    } else {
      setnumeroAnterior(numero);
    }
    setNumero('0');
  };

  const btnDividir = () => {
    cambiarNumeroXAnterior();
    ultimaOperacionRef.current = Operadores.dividir;
  };
  const btnMultiplicar = () => {
    cambiarNumeroXAnterior();
    ultimaOperacionRef.current = Operadores.multiplicar;
  };
  const btnRestar = () => {
    cambiarNumeroXAnterior();
    ultimaOperacionRef.current = Operadores.restar;
  };
  const btnSumar = () => {
    cambiarNumeroXAnterior();
    ultimaOperacionRef.current = Operadores.sumar;
  };

  const calcular = () => {
    const num1 = Number(numero);
    const num2 = Number(numeroAnterior);
    switch (ultimaOperacionRef.current) {
      case Operadores.multiplicar:
        setNumero(`${num1 * num2}`);

        break;
      case Operadores.sumar:
        setNumero(`${num1 + num2}`);

        break;
      case Operadores.restar:
        setNumero(`${num2 - num1}`);

        break;
      case Operadores.dividir:
        setNumero(`${num2 / num1}`);

        break;

      default:
        break;
    }
    setnumeroAnterior('0');
  };
  return {
    numeroAnterior,
    numero,
    clear,
    armarNumero,
    btnDelete,
    negativoPositivo,
    cambiarNumeroXAnterior,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
  };
};

export default useCalculadora;
