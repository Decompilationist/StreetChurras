import * as React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { ScrollView, Text, View, Button, TextInput  } from 'react-native';
import { gStyle } from '../constants';

import { useRef } from 'react';


const Home = ({ navigation }) => {
  const theme = 'light';

  

  const qtdHomens = useRef(0);
  const qtdMulheres = useRef(0);
  const qtdCriancas = useRef(0);

  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');

  let data = {}

  function handleClick() {
    data = getData()
    console.log(data)
    navigation.push('Produtos', data)
  }

  const onChangeText = (text) => {
    if (+text) {
      setText(text);
    }
  };

  const onChangeText2 = (text2) => {
    if (+text2) {
      setText2(text2);
    }
  };

  const onChangeText3 = (text3) => {
    if (+text3) {
      setText3(text3);
    }
  };


  function getData() {
    return {
      qtdHomens: qtdHomens.current.value == "" ? 0 : qtdHomens.current.value,
      qtdMulheres: qtdMulheres.current.value == "" ? 0 : qtdMulheres.current.value,
      qtdCriancas: qtdCriancas.current.value == "" ? 0 : qtdCriancas.current.value
    }
  }

  return (
    <View style={gStyle.container[theme]}>
      <ScrollView contentContainerStyle={gStyle.contentContainer}>
        <Text style={gStyle.textRoboto}>Calculadora de Churrasco</Text>
        <View style={gStyle.spacer32} />
        <Text style={homenslabelstyle}> Homens </Text>
        <TextInput keyboardType="numeric" value={text} onChangeText={onChangeText} style={inputStyle} ref={qtdHomens} placeholder='1' min="0" max="50" />

        <Text style={homenslabelstyle}> Mulheres </Text>
        <TextInput keyboardType="numeric" value={text2} onChangeText={onChangeText2} style={inputStyle} ref={qtdMulheres} min="0" max="50" placeholder='1' />

        <Text style={homenslabelstyle}> Crianças </Text>
        <TextInput keyboardType="numeric" value={text3} onChangeText={onChangeText3} style={inputStyle} ref={qtdCriancas} min="0" max="50" placeholder='1' />
        <View style={buttonContainer}>
          <Button title="Calcular"  onPress={() => handleClick()}/>
        </View>
      </ScrollView>
    </View>
  );
};

const inputStyle = {
  height: 40,
  margin: 12,
  borderWidth: 1,
  padding: 10,
}

const buttonContainer = {
  margin: 20,
  flex: 1,
  justifyContent: 'center',
}


const homenslabelstyle = {
  fontSize: 20,
  fontWeight: 'bold',
}

Home.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default Home;
