import * as React from 'react';
import { ScrollView, Text } from 'react-native';
import { gStyle } from '../constants';

const CarneBovina = () => {
  const theme = 'light';

  return (
    <ScrollView
      contentContainerStyle={gStyle.contentContainer}
      style={gStyle.container[theme]}
    >
      <Text style={gStyle.text[theme]}>Receitas de Carne Bovina</Text>
    </ScrollView>
  );
};

export default CarneBovina;
