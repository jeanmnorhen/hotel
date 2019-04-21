import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import {firebaseApp} from '../../components/firebaseConfig';
const refRoot  = firebaseApp.database().ref();
const refClientes = refRoot.child('Quartos/');

export default class FormQuartos extends React.Component {
  state = {
    numero:'',
    ValorDiaria:'',
    numCamas: '',
  };

  onAddClientePress = () => {
    if(this.state.numero.trim()==''){
      alert('numero não pode ser vazio');
      return;
    }
    if(this.state.numCamas.trim()==''){
      alert('numCamas não pode ser vazio');
      return;
    }
    if(this.state.ValorDiaria.trim()==''){
      alert('ValorDiaria não pode ser vazio');
      return;
    }
    refClientes.push({
        numero: this.state.numero,
      numCamas: this.state.numCamas,
      ValorDiaria: this.state.ValorDiaria,
    });
    refClientes.on('child_added', function(data) {
      alert('Quarto adicionado com sucesso');
    });
  }

 render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerInput}>
          <TextInput
            label='Numero da porta'
            value={this.state.numero}
            mode="outlined"
            onChangeText={numero => this.setState({ numero })}
          />
        </View>

        <View style={styles.containerInput}>
          <TextInput
            label='Numero de camas'
            value={this.state.numCamas}
            mode="outlined"
            onChangeText={numCamas => this.setState({ numCamas })}
          />
        </View>

        <View style={styles.containerInput}>
          <TextInput
            label='Valor da diaria'
            value={this.state.ValorDiaria}
            mode="outlined"
            onChangeText={ValorDiaria => this.setState({ ValorDiaria })}
          />
        </View>

        <View style={styles.containerBotao}>
          <Button style={styles.botao} mode="outlined" onPress={this.onAddClientePress}  >
          Cadastrar
          </Button>
        </View>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerInput: {
    height: 50,
    margin: 5,
    width: 400,
  },
  containerBotao: {
    width: 250,
    alignItems: 'stretch',
    marginTop: 30,
  },
  botao: {
    height: 50,
    margin: 5,
},
});
