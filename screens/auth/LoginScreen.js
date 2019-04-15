import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  AsyncStorage,
  View,
  Alert,
} from 'react-native';
import { TextInput } from 'react-native-paper';
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
    logado: 'false',
  };

  onLoginPress = () => {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
    .then(()=>{
      this.props.navigation.navigate('App');      
    },(error)=>{
      Alert.alert(error.message);
    });
  }
  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.setState({logado:"true" });      
    this.props.navigation.navigate('App');
  };
    render() {
    return (
      
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={{ 
          height: 50,
          margin:5, 
          width: 400,
        }}>
          <Text>Autentificação</Text>
        </View>
        <View style={{ 
          height: 50,
          margin:5,
          width: 400,
          }}>
        <TextInput
        label='E-mail'
        value={this.state.email}
        mode="outlined"
        onChangeText={email => this.setState({ email })}
      />
        
      </View>
        <View style={{
          height: 50,
          margin:5,
          width: 400,
          }}>
        <TextInput
        label='Senha'
        value={this.state.senha}
        mode="outlined"
        onChangeText={senha => this.setState({ senha })}
        />
        </View>

        <View style={{
          width: 350,  
          alignItems: 'stretch',
          marginTop:10,
          }} >
           <View style={{
          height: 50,
          margin:5,
          }}>
        <Button 
          title="Entrar!" onPress={this.onLoginPress} />    
           </View>  
           <View style={{
          height: 50,
          margin:5,
          }}>  
        <Button 
          title="Registrar" onPress={this.onLoginPress} />
          </View>
          <View style={{
          height: 50,
          margin:5,
          }}>  
        <Button
          title="Esqueci a senha" onPress={this.onLoginPress} />
          </View>
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
    alignItems:'center',
    backgroundColor: '#fff',
  },
  contentContainer: {
    width: 300, 
    height: 80,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
});
