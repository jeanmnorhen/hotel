import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { TextInput } from 'react-native-paper';

export default class LoguinScreen extends React.Component {
  state = {
    text: '',
    senha: '',
  };

    render() {
    return (
      
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
        <View style={{ height: 50,margin:5, backgroundColor: 'red'}}>
        <Text style={styles.getStartedText}>Autenticação</Text>
        <TextInput
        label='Email'
        value={this.state.text}
        mode="outlined"
        onChangeText={text => this.setState({ text })}
      />
        
      </View>
        <View style={{height: 50, margin:5, backgroundColor: 'skyblue'}}>
        <TextInput
        label='Senha'
        value={this.state.senha}
        mode="outlined"
        onChangeText={senha => this.setState({ senha })}
      />
        </View>

        <View style={{height: 50, margin:5, backgroundColor: 'black'}} />
      
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
