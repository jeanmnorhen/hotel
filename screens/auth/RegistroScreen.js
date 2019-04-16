import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Alert,
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
    if (this.state.senha !== this.state.repitaSenha) {
        Alert.alert("Senha e Senha de confirmação não são iguais");
        return;
    }

    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
        .then(() => {{
          Alert.alert("Registro efetuado com sucesso"); 
          this.props.navigation.navigate('App');
        }}, (error) => { Alert.alert(error.message); });
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
            value={this.state.repitaSenha}
            mode="outlined"
            onChangeText={repitaSenha => this.setState({ repitaSenha })}
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