import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import {firebaseApp} from '../../components/firebaseConfig';
export default class FormClientes extends React.Component {
  state = {
    nome:'',
    cpf:'',
    email: '',
  };
  onRecuperarrPress = () => {
    this.props.navigation.navigate('recuperar');
  }
  onRegistrarPress = () => {
    this.props.navigation.navigate('registrar');
  }
  onLoginPress = () => {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
      .then(() => {
        this.props.navigation.navigate('App');
      }, (error) => {
        Alert.alert(error.message);
      });
  }
  render() {
    return (

      <View style={styles.container}>
        <View style={styles.containerInput}>
          <TextInput
            label='Nome'
            value={this.state.nome}
            mode="outlined"
            onChangeText={nome => this.setState({ nome })}
          />
        </View>

        <View style={styles.containerInput}>
          <TextInput
            label='Cpf'
            value={this.state.senha}
            mode="outlined"
            onChangeText={cpf => this.setState({ cpf })}
          />
        </View>

        <View style={styles.containerInput}>
          <TextInput
            label='e-mail'
            value={this.state.email}
            mode="outlined"
            onChangeText={email => this.setState({ email })}
          />
        </View>

        <View style={styles.containerBotao}>
          <Button style={styles.botao} mode="outlined"  onPress={this.onLoginPress} >
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
