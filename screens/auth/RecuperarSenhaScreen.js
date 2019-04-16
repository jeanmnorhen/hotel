import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default class RecuperarSenhaScreen extends React.Component {
  
  static navigationOptions = {
    title: 'Recuperar senha',
  };
  state = {
    email: '',
  };
  onResetPasswordPress = () => {
    firebase.auth().sendPasswordResetEmail(this.state.email)
        .then(() => {
            Alert.alert("E-mail de recuperação enviado com sucesso.");
        }, (error) => {
            Alert.alert(error.message);
        });
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
        
        <View style={styles.containerBotao}>
          <Button style={styles.botao} mode="outlined"  onPress={this.onLoginPress} >
          Enviar solicitação
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