import * as React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

import {firebaseApp} from '../components/firebaseConfig';
import { Avatar, Button, Card, Title, Paragraph , List } from 'react-native-paper';
import QuartoLivre from '../components/homeComponentes/QuartoLivre';
const refRoot  = firebaseApp.database();

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    clientes : [],
    novoClienteNome: '',
    novoClienteCpf: '',
    novoClienteEmail: '',

  };
  atualizarLista(){
    
refRoot.child('funcionarios/').once('value',(childSnapshot)=>{
      console.log(childSnapshot.val())
      const clientesTemp =[];
      childSnapshot.forEach((cli)=>{
        clientesTemp.push({
          key:cli.key,
          nome: cli.toJSON().nome,
          cpf: cli.toJSON().cpf,
          email: cli.toJSON().email
        });
        this.setState({
          clientes:clientesTemp,  
        }); 
      });
    });
  }
  readUserData() {
    firebaseApp.database().ref('funcionarios/').once('value', function (snapshot) {
      snapshot.forEach(function(childSnapshot) {
        console.log(childSnapshot.val())
      })
})}
  render() {
   
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
     
           <FlatList
              data={this.state.clientes}
              renderItem={({item, index})=>{
                return(
                  <View style={styles.containerCard}>
                    <Card>
                    <Card.Title title={item.nome} subtitle={"Cpf " + item.cpf + " E-mail"+ item.nome} left={(props) => <Avatar.Icon {...props} icon="folder" />} />
                    </Card>
                  </View>
                )
              }
            }

           ></FlatList>
           
           <View style={styles.containerCard}>
              <QuartoLivre status="Livre" numeroQuarto='101' valorDiaria='100,00'  />
           </View>
           <View style={styles.containerCard}>
              <QuartoLivre status="Livre" numeroQuarto='102' valorDiaria='100,00'  />
           </View>
           <View style={styles.containerCard}>
              <QuartoLivre status="Livre" numeroQuarto='103' valorDiaria='100,00'  />
           </View>
           <View style={styles.containerCard}>
              <QuartoLivre status="Livre" numeroQuarto='104' valorDiaria='100,00'  />
           </View>
           <View style={styles.containerCard}>
              <QuartoLivre status="Livre" numeroQuarto='105' valorDiaria='100,00'  />
           </View>
           <View style={styles.containerCard}>
              <QuartoLivre status="Livre" numeroQuarto='106' valorDiaria='100,00'  />
           </View>
           <View style={styles.containerCard}>
              <QuartoLivre status="Livre" numeroQuarto='107' valorDiaria='100,00'  />
           </View>
           <View style={styles.containerCard}>
              <QuartoLivre status="Livre" numeroQuarto='108' valorDiaria='100,00'  />
           </View>
           <View style={styles.containerCard}>
              <QuartoLivre status="Livre" numeroQuarto='109' valorDiaria='100,00'  />
           </View>
           <View style={styles.containerCard}>
              <QuartoLivre status="Livre" numeroQuarto='201' valorDiaria='100,00'  />
           </View>
           <View style={styles.containerCard}>
              <QuartoLivre status="Livre" numeroQuarto='202' valorDiaria='100,00'  />
           </View>
          </View>
         
        </ScrollView>

        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

          <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
            <MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText>
          </View>
        </View>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}
{
  const highestTimeoutId = setTimeout(() => ';');
for (let i = 0; i < highestTimeoutId; i++) {
    clearTimeout(i); 
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }, 
  containerCard: {
    width: 400,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
    backgroundColor: 'pink',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
