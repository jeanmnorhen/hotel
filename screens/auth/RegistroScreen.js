import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';


import { TextInput, Button } from 'react-native-paper';
import * as firebase from 'firebase';
export default class RegistroScreen extends React.Component {
  static navigationOptions = {
    title: 'Registrar novo usuário',
  };
  state = {
    email: '',
    senha: '',
    repitaSenha: '',
  };
  onSignupPress = () => {
    if (this.state.password !== this.state.passwordConfirm) {
        Alert.alert("Passwords do not match");
        return;
    }

    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => { }, (error) => { Alert.alert(error.message); });
}

    render() {
    return (
      
      <View style={styles.container}>
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

        <View style={styles.containerInput}>
          <TextInput
            label='Repita a senha'
            value={this.state.senha}
            mode="outlined"
            onChangeText={senha => this.setState({ repitaSenha })}
          />
        </View>

        <View style={styles.containerBotao}>
          <Button style={styles.botao} mode="outlined"  onPress={this.onSignupPress} >
          Registrar
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
    margin: 15,
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