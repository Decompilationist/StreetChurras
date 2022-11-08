import * as React from 'react';
import { ScrollView, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { gStyle } from '../constants';

const Contato = () => {
  const theme = 'light';
  // ABA CONTATO

  return (
    <ScrollView
      contentContainerStyle={gStyle.contentContainer}
      style={gStyle.container[theme]}>
      <Text style={gStyle.text[theme]}></Text>
    </ScrollView>
  );
};

Contato.navigationOptions = {
  headerTitleStyle: gStyle.headerTitleStyle,
  title: 'Contato'
};

export default Contato;
