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
const refClientes =refRoot.child('Clientes/');
export default class FormClientes extends React.Component {
  state = {
    nome:'',
    cpf:'',
    email: '',
    Novonome:'',
    Novocpf:'',
    Novoemail: '',
  
  };

  onAddClientePress = () => {
    if(this.state.Novonome.trim()==''){
      alert('Nome não pode ser vazio');
      return;
    }
    if(this.state.Novocpf.trim()==''){
      alert('Cpf não pode ser vazio');
      return;
    }
    if(this.state.Novoemail.trim()==''){
      alert('E-mail não pode ser vazio');
      return;
    }
    refClientes.push({
      nome: this.state.Novonome,
      cpf: this.state.Novocpf,
      email: this.state.Novoemail,
    })
    refClientes.on('child_added', function(data) {
      alert('Cliente adicionado com sucesso');
    });
  }

 render() {
    return (

      <View style={styles.container}>
        <View style={styles.containerInput}>
          <TextInput
            label='Nome'
            value={this.state.Novonome}
            mode="outlined"
            onChangeText={Novonome => this.setState({ Novonome: Novonome })}
          />
        </View>

        <View style={styles.containerInput}>
          <TextInput
            label='Cpf'
            value={this.state.Novocpf}
            mode="outlined"
            onChangeText={Novocpf => this.setState({ Novocpf: Novocpf })}
          />
        </View>

        <View style={styles.containerInput}>
          <TextInput
            label='e-mail'
            value={this.state.Novoemail}
            mode="outlined"
            onChangeText={Novoemail => this.setState({Novoemail: Novoemail })}
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
