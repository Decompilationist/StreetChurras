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
      <Text style={gStyle.title}>Dicas</Text>
      <Text style={gStyle.container}>
      <ul style={gStyle.listinha}>
        {`    
              1- Lembre-se dos acompanhamentos ao fazer um churrasco.
              2- Prepare alguns molhos para as carnes.
              3- Use a técnica certa para assar as peças.
              4- Ouse grelhando frutas e vegetais.
              5- Nunca jogue água na churrasqueira.
              6- Acenda o carvão de 30 a 40 minutos antes.
         `}
         </ul>
      </Text> 
      
    </ScrollView>
  );
};

Dicas.navigationOptions = {
  headerTitleStyle: gStyle.headerTitleStyle,
  title: 'Dicas'
};

export default Dicas;
