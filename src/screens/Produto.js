import * as React from 'react';
import { ScrollView, Text, SectionList } from 'react-native';
import { View } from 'react-native-web';
import { gStyle } from '../constants';
import { useState } from 'react';
import { CheckBox } from 'react-native-web';

const Produtos = ({ route }) => {
  const theme = 'light';
  // ABA PRODUTOS

  let data = route.params;

  const qtdConvidados = Number(data.qtdHomens) + Number(data.qtdMulheres) + Number(data.qtdCriancas)

  const [precoFinal, setPrecoFinal] = useState(0);
  const [rateio, setRateio] = useState(0);
  const [renderResultadoCalculo, setRenderResultadoCalculo] = useState(false);
  

  const gramasConsumoHomem = 600
  const gramasConsumoMulher = 400
  const gramasConsumoCrianca = 250

  const precoQuiloContraFile = 30.00
  const precoQuiloMaminha = 49.96
  const precoQuiloCupim = 34.96
  const precoQuiloCoxa = 11.48
  const precoQuiloCoracao = 25.46
  const precoQuiloAsa = 13.96
  const precoQuiloPicanha = 30.00
  const precoQuiloLinguica = 15.96
  const precoQuiloPaleta = 31.99

  // Calculo Contra File
  let precoQuiloContraFilePorHomems = calculaPrecoQuiloCarnePorPessoa(gramasConsumoHomem, precoQuiloContraFile, data.qtdHomens)
  let precoQuiloContraFilePorMulheres = calculaPrecoQuiloCarnePorPessoa(gramasConsumoMulher, precoQuiloContraFile, data.qtdMulheres)
  let precoQuiloContraFilePorCriancas = calculaPrecoQuiloCarnePorPessoa(gramasConsumoCrianca, precoQuiloContraFile, data.qtdCriancas)
  let resultadoCalculoContraFile = precoQuiloContraFilePorHomems + precoQuiloContraFilePorMulheres + precoQuiloContraFilePorCriancas


  // Calculo  Maminha
  let precoQuiloMaminhaPorHomems = calculaPrecoQuiloCarnePorPessoa(gramasConsumoHomem, precoQuiloMaminha, data.qtdHomens)
  let precoQuiloMaminhaPorMulheres = calculaPrecoQuiloCarnePorPessoa(gramasConsumoMulher, precoQuiloMaminha, data.qtdMulheres)
  let precoQuiloMaminhaPorCriancas = calculaPrecoQuiloCarnePorPessoa(gramasConsumoCrianca, precoQuiloMaminha, data.qtdCriancas)
  let resultadoCalculoMaminha = precoQuiloMaminhaPorHomems + precoQuiloMaminhaPorMulheres + precoQuiloMaminhaPorCriancas

  // Calculo Cupim 
  let precoQuiloCupimPorHomems = calculaPrecoQuiloCarnePorPessoa(gramasConsumoHomem, precoQuiloCupim, data.qtdHomens)
  let precoQuiloCupimPorMulheres = calculaPrecoQuiloCarnePorPessoa(gramasConsumoMulher, precoQuiloCupim, data.qtdMulheres)
  let precoQuiloCupimPorCriancas = calculaPrecoQuiloCarnePorPessoa(gramasConsumoCrianca, precoQuiloCupim, data.qtdCriancas)
  let resultadoCalculoCupim = precoQuiloCupimPorHomems + precoQuiloCupimPorMulheres + precoQuiloCupimPorCriancas

  // Calculo Coxa
  let precoQuiloCoxaPorHomems = calculaPrecoQuiloCarnePorPessoa(gramasConsumoHomem, precoQuiloCoxa, data.qtdHomens)
  let precoQuiloCoxaPorMulheres = calculaPrecoQuiloCarnePorPessoa(gramasConsumoMulher, precoQuiloCoxa, data.qtdMulheres)
  let precoQuiloCoxaPorCriancas = calculaPrecoQuiloCarnePorPessoa(gramasConsumoCrianca, precoQuiloCoxa, data.qtdCriancas)
  let resultadoCalculoCoxa = precoQuiloCoxaPorHomems + precoQuiloCoxaPorMulheres + precoQuiloCoxaPorCriancas

  // Calculo Coração
  let precoQuiloCoracaoPorHomems = calculaPrecoQuiloCarnePorPessoa(gramasConsumoHomem, precoQuiloCoracao, data.qtdHomens)
  let precoQuiloCoracaoPorMulheres = calculaPrecoQuiloCarnePorPessoa(gramasConsumoMulher, precoQuiloCoracao, data.qtdMulheres)
  let precoQuiloCoracaoPorCriancas = calculaPrecoQuiloCarnePorPessoa(gramasConsumoCrianca, precoQuiloCoracao, data.qtdCriancas)
  let resultadoCalculoCoracao = precoQuiloCoracaoPorHomems + precoQuiloCoracaoPorMulheres + precoQuiloCoracaoPorCriancas

  // Calculo Asa
  let precoQuiloAsaPorHomems = calculaPrecoQuiloCarnePorPessoa(gramasConsumoHomem, precoQuiloAsa, data.qtdHomens)
  let precoQuiloAsaPorMulheres = calculaPrecoQuiloCarnePorPessoa(gramasConsumoMulher, precoQuiloAsa, data.qtdMulheres)
  let precoQuiloAsaPorCriancas = calculaPrecoQuiloCarnePorPessoa(gramasConsumoCrianca, precoQuiloAsa, data.qtdCriancas)
  let resultadoCalculoAsa = precoQuiloAsaPorHomems + precoQuiloAsaPorMulheres + precoQuiloAsaPorCriancas

  // Calculo picanha 
  let precoQuiloPicanhaPorHomems = calculaPrecoQuiloCarnePorPessoa(gramasConsumoHomem, precoQuiloPicanha, data.qtdHomens)
  let precoQuiloPicanhaPorMulheres = calculaPrecoQuiloCarnePorPessoa(gramasConsumoMulher, precoQuiloPicanha, data.qtdMulheres)
  let precoQuiloPicanhaPorCriancas = calculaPrecoQuiloCarnePorPessoa(gramasConsumoCrianca, precoQuiloPicanha, data.qtdCriancas)
  let resultadoCalculoPicanha = precoQuiloPicanhaPorHomems + precoQuiloPicanhaPorMulheres + precoQuiloPicanhaPorCriancas

  // Calculo Linguiça
  let precoQuiloLinguicaPorHomems = calculaPrecoQuiloCarnePorPessoa(gramasConsumoHomem, precoQuiloLinguica, data.qtdHomens)
  let precoQuiloLinguicaPorMulheres = calculaPrecoQuiloCarnePorPessoa(gramasConsumoMulher, precoQuiloLinguica, data.qtdMulheres)
  let precoQuiloLinguicaPorCriancas = calculaPrecoQuiloCarnePorPessoa(gramasConsumoCrianca, precoQuiloLinguica, data.qtdCriancas)
  let resultadoCalculoLinguica = precoQuiloLinguicaPorHomems + precoQuiloLinguicaPorMulheres + precoQuiloLinguicaPorCriancas

  // Calculo Paleta
  let precoQuiloPaletaPorHomems = calculaPrecoQuiloCarnePorPessoa(gramasConsumoHomem, precoQuiloPaleta, data.qtdHomens)
  let precoQuiloPaletaPorMulheres = calculaPrecoQuiloCarnePorPessoa(gramasConsumoMulher, precoQuiloPaleta, data.qtdMulheres)
  let precoQuiloPaletaPorCriancas = calculaPrecoQuiloCarnePorPessoa(gramasConsumoCrianca, precoQuiloPaleta, data.qtdCriancas)
  let resultadoCalculoPaleta = precoQuiloPaletaPorHomems + precoQuiloPaletaPorMulheres + precoQuiloPaletaPorCriancas

  function calcularResultadoFinal() {
    var precoFinal = Math.floor(Math.random() * (6420 - 4153 + 1) ) + 5153;
    var rateio = Number(precoFinal) / Number(qtdConvidados);
    setPrecoFinal(precoFinal);
    setRateio(Number(rateio).toFixed(2));
    setRenderResultadoCalculo(true)
  }

  const [isSelected, setSelection] = useState(false);
  const [isSelectedContraFile, setContraFile] = useState(false);
  const [isSelectedMaminha, setMaminha] = useState(false);
  const [isSelectedCupim, setCupim] = useState(false);
  const [isSelectedCoxa, setCoxa] = useState(false);
  const [isSelectedCoracao, setCoracao] = useState(false);
  const [isSelectedAsa, setAsa] = useState(false);
  const [isSelectedPicanha, setPicanha] = useState(false);
  const [isSelectedLinguica, setLinguica] = useState(false);
  const [isSelectedPaleta, setPaleta] = useState(false);
  const [isSelectedAgua, setAgua] = useState(false);
  const [isSelectedRefrigerante, setRefrigerante] = useState(false);
  const [isSelectedCerveja, setCerveja] = useState(false);
  const [isSelectedSuco, setSuco] = useState(false);

  return (
    <ScrollView
      contentContainerStyle={gStyle.contentContainer}
      style={gStyle.container[theme]}
    >

      {/* <Text style={gStyle.text[theme]}>Produtos</Text> */}
      <Text style={gStyle.title}>{qtdConvidados} convidados</Text>
      <View style={sumarioStyle}>
        <Text style={sumarioTextStyle}>👨 Homens: {data.qtdHomens}</Text>
        <Text style={sumarioTextStyle}>👩 Mulheres: {data.qtdMulheres}</Text>
        <Text style={sumarioTextStyle}>👶 Crianças: {data.qtdCriancas}</Text>
      </View>
      <Text style={gStyle.title}>🍖 Carne Bovina</Text>
      <Text  style={labelstyles}><CheckBox value={isSelectedContraFile} onValueChange={setContraFile} style={checkboxStyle} /> Contra Filé (R$ {Number(resultadoCalculoContraFile).toFixed(2)})</Text>
      <Text style={labelstyles}><CheckBox value={isSelectedMaminha} onValueChange={setMaminha} style={checkboxStyle} /> Maminha (R$ {Number(resultadoCalculoMaminha).toFixed(2)}) </Text>
      <Text style={labelstyles}><CheckBox value={isSelectedCupim} onValueChange={setCupim} style={checkboxStyle} /> Cupim (R$ {Number(resultadoCalculoCupim).toFixed(2)})</Text>
      <View style={gStyle.spacer64} />
      <Text style={gStyle.title}>🍗 Frango</Text>
      <Text style={labelstyles}><CheckBox value={isSelectedCoxa} onValueChange={setCoxa} style={checkboxStyle} /> Coxa (R$ {Number(resultadoCalculoCoxa).toFixed(2)})</Text>
      <Text style={labelstyles}><CheckBox value={isSelectedCoracao} onValueChange={setCoracao} style={checkboxStyle} /> Coração (R$ {Number(resultadoCalculoCoracao).toFixed(2)})</Text>
      <Text style={labelstyles}><CheckBox value={isSelectedAsa} onValueChange={setAsa} style={checkboxStyle} /> Asa (R$ {Number(resultadoCalculoAsa).toFixed(2)})</Text>
      <View style={gStyle.spacer64} />
      <Text style={gStyle.title}>🥩 Carne Suína</Text>
      <Text style={labelstyles}><CheckBox value={isSelectedPicanha} onValueChange={setPicanha} style={checkboxStyle} /> Picanha (R$ {Number(resultadoCalculoPicanha).toFixed(2)})</Text>
      <Text style={labelstyles}><CheckBox value={isSelectedLinguica} onValueChange={setLinguica} style={checkboxStyle} /> Linguiça (R$ {Number(resultadoCalculoLinguica).toFixed(2)})</Text>
      <Text style={labelstyles}><CheckBox value={isSelectedPaleta} onValueChange={setPaleta} style={checkboxStyle} />Paleta (R$ {Number(resultadoCalculoPaleta).toFixed(2)})</Text>
      <View style={gStyle.spacer64} />
      <Text style={gStyle.title}>🍺 Bebidas</Text>
      <Text style={labelstyles}><CheckBox value={isSelectedAgua} onValueChange={setAgua} style={checkboxStyle} /> Água (R$ 4,00) </Text>
      <Text style={labelstyles}><CheckBox value={isSelectedRefrigerante} onValueChange={setRefrigerante} style={checkboxStyle} /> Refrigerante (R$ 7,00) </Text>
      <Text style={labelstyles}><CheckBox value={isSelectedCerveja} onValueChange={setCerveja} style={checkboxStyle} /> Cerveja (R$ 15,00) </Text>
      <Text style={labelstyles}><CheckBox value={isSelectedSuco} onValueChange={setSuco} style={checkboxStyle} /> Suco (R$ 6,00) </Text>
      <View style={gStyle.spacer64} />
      <Text style={gStyle.title}>🍞 Acompanhamentos</Text>
      <Text style={labelstyles}><CheckBox value={isSelected} onValueChange={setSelection} style={checkboxStyle} /> Arroz (R$ 30,00) </Text>
      <Text style={labelstyles}><CheckBox value={isSelected} onValueChange={setSelection} style={checkboxStyle} /> Farofa (R$ 9,00) </Text>
      <Text style={labelstyles}><CheckBox value={isSelected} onValueChange={setSelection} style={checkboxStyle} /> Pão de Alho (R$ 10,96) </Text>
      <Text style={labelstyles}><CheckBox value={isSelected} onValueChange={setSelection} style={checkboxStyle} /> Queijo Coalho (R$ 23,96) </Text>
      <Text style={labelstyles}><CheckBox value={isSelected} onValueChange={setSelection} style={checkboxStyle} /> Pão francês (R$ 0,50) </Text>
      <View style={gStyle.spacer64} />
      <Text style={gStyle.title}>🍽 Acessórios</Text>
      <Text style={labelstyles}><CheckBox value={isSelected} onValueChange={setSelection} style={checkboxStyle} /> Carvão (R$ 40,00) </Text>
      <Text style={labelstyles}><CheckBox value={isSelected} onValueChange={setSelection} style={checkboxStyle} /> Pratos (R$ 6,00) </Text>
      <Text style={labelstyles}><CheckBox value={isSelected} onValueChange={setSelection} style={checkboxStyle} /> Talheres (R$ 8,00) </Text>
      <Text style={labelstyles}><CheckBox value={isSelected} onValueChange={setSelection} style={checkboxStyle} /> Guaradanapos (R$ 5,00) </Text>
      <Text style={labelstyles}><CheckBox value={isSelected} onValueChange={setSelection} style={checkboxStyle} /> Copos (R$ 6,00) </Text>
      <Text style={labelstyles}><CheckBox value={isSelected} onValueChange={setSelection} style={checkboxStyle} /> Suco (R$ 50,00) </Text>
        <button style={buttonCalcularResultadoFinalStyle} onClick={() => calcularResultadoFinal()}>Calcular</button>
        <View style={resultadoFinalStyle}>
          {(renderResultadoCalculo) ? <><Text style={labelPrecoFinalStyle}>Preço final</Text> <a>R$ {Number(precoFinal).toFixed(2)}</a></> : ""}
          {(renderResultadoCalculo) ? <><Text style={labelPrecoFinalStyle}>Rateio por pessoa</Text> <a>R$ {Number(rateio).toFixed(2)}</a></> : ""}
        </View>

    </ScrollView>
    
  );
};


function calculaPrecoQuiloCarnePorPessoa(consumoPessoa, precoQuiloCarne, qtdPessoasGenero) {
  return ((consumoPessoa * precoQuiloCarne) / 1000) * qtdPessoasGenero
}

const checkboxStyle = {
  flexDirection: "row",
  marginBottom: 7,
}

const resultadoFinalStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginBottom:"30px"
}

const buttonCalcularResultadoFinalStyle = {
  height:"30px",
  width: "180px",
  margin: "20px"
}

const labelPrecoFinalStyle = {
  fontSize: 18,
  fontWeight: "bold",
  margin: "3px"
}

const labelstyles = {
  fontSize: 18,
}

const sumarioTextStyle = {
  fontSize: 20,
  fontWeight: "bold",
  margin: "35px"
}

const sumarioStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: "45px"

}

Produtos.navigationOptions = {
  headerTitleStyle: gStyle.headerTitleStyle,
  title: 'Produtos'
};

export default Produtos;
