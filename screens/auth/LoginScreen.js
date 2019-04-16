import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  AsyncStorage,
  View,
  Alert,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyC_qh-vistR3BZh_CZS7YeNXYtC645UDPo",
  authDomain: "automacaohotelcristal.firebaseapp.com",
  databaseURL: "https://automacaohotelcristal.firebaseio.com",
  projectId: "automacaohotelcristal",
  storageBucket: "automacaohotelcristal.appspot.com",
  messagingSenderId: "356878374392"
};

firebase.initializeApp(firebaseConfig);
export default class LoguinScreen extends React.Component {
  static navigationOptions = {
    title: 'Por favor identifique-se',
  };
  state = {
    email: '',
    senha: '',
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
  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
  render() {
    return (

      <View style={styles.container}>
        <Text>Autentificação</Text>

        <View style={styles.containerInput}>
          <TextInput
            label='E-mail'
            value={this.state.email}
            mode="outlined"
            onChangeText={email => this.setState({ email })}
          />
        </View>

        <View style={styles.containerInput}>
          <TextInput
            label='Senha'
            value={this.state.senha}
            mode="outlined"
            onChangeText={senha => this.setState({ senha })}
          />
        </View>

        <View style={styles.containerBotao}>
          <Button style={styles.botao} mode="outlined"  onPress={this.onLoginPress} >
          Entrar
          </Button>
          <Button style={styles.botao} mode="outlined"  onPress={this.onRegistrarPress} >
          Registrar
          </Button>
          <Button style={styles.botao} mode="outlined"  onPress={this.onRecuperarrPress}  >
          Esqueci minha senha
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
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
});
