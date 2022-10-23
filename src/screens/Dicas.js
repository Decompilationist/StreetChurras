import * as React from 'react';
import { ScrollView, Text } from 'react-native';
import { gStyle } from '../constants';

const Dicas = () => {
  const theme = 'light';
  // ABA Dicas
  return (
    <ScrollView
      contentContainerStyle={gStyle.contentContainer}
      style={gStyle.container[theme]}
    >
      <Text style={gStyle.text[theme]}>Dicas</Text>
      
    </ScrollView>
  );
};

Dicas.navigationOptions = {
  headerTitleStyle: gStyle.headerTitleStyle,
  title: 'Dicas'
};

export default Dicas;
