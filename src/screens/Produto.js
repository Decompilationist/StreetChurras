import * as React from 'react';
import { ScrollView, Text, SectionList } from 'react-native';
import { View } from 'react-native-web';
import { gStyle } from '../constants'; 


const Produtos = () => {
  const theme = 'light';
  // ABA PRODUTOS
  return (
    <ScrollView
      contentContainerStyle={gStyle.contentContainer}
      style={gStyle.container[theme]}
    >
      

      {/* <Text style={gStyle.text[theme]}>Produtos</Text> */}
      <View style={gStyle.spacer32} />
      <Text style={gStyle.title}>🍖 Carne Bovina</Text>
      <ul style={gStyle.listinha}>
        <li style={gStyle.produtos}>Contra Filé</li>
        <li style={gStyle.produtos}>Maminha</li>
        <li style={gStyle.produtos}>Cupim</li>
      </ul>
      <View style={gStyle.spacer64} />
      <Text style={gStyle.title}>🍗 Frango</Text>
      <ul style={gStyle.listinha}>
        <li style={gStyle.produtos}>Coxa</li>
        <li style={gStyle.produtos}>Coração</li>
        <li style={gStyle.produtos}>Asa</li>
      </ul>
      <View style={gStyle.spacer64} />
      <Text style={gStyle.title}>🥩 Carne Suína</Text>
      <ul style={gStyle.listinha}>
        <li style={gStyle.produtos}>Picanha</li>
        <li style={gStyle.produtos}>Linguiça</li>
        <li style={gStyle.produtos}>Paleta</li>
      </ul>
      <View style={gStyle.spacer64} />
      <Text style={gStyle.title}>🍺 Bebidas</Text>
      <ul style={gStyle.listinha}>
        <li style={gStyle.produtos}>Água</li>
        <li style={gStyle.produtos}>Refrigerante</li>
        <li style={gStyle.produtos}>Cerveja</li>
      </ul>
      <View style={gStyle.spacer64} />
      <Text style={gStyle.title}>🍞 Acompanhamentos</Text>
      <ul style={gStyle.listinha}>
         <li style={gStyle.produtos}>Arroz</li> 
         <li style={gStyle.produtos}>Farofa</li> 
         <li style={gStyle.produtos}>Pão de alho</li> 
         <li style={gStyle.produtos}>Queijo coalho</li> 
         <li style={gStyle.produtos}>Pão francês</li> 
      </ul>   
      <View style={gStyle.spacer64} />
      <Text style={gStyle.title}>🍽 Acessórios</Text>
      <ul style={gStyle.listinha}>
        <li style={gStyle.produtos}>Carvão</li> 
        <li style={gStyle.produtos}>Pratos</li> 
        <li style={gStyle.produtos}>Talheres</li>
        <li style={gStyle.produtos}>Guaradanapos</li>
        <li style={gStyle.produtos}>Copos</li>
        <li style={gStyle.produtos}>Gelo</li>         
      </ul>  
     
    </ScrollView>
  );
};


Produtos.navigationOptions = {
  headerTitleStyle: gStyle.headerTitleStyle,
  title: 'Produtos'
};

export default Produtos;
