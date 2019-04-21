import * as React from 'react';
import {
  TouchableHighlight,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Modal,
  FlatList,
  View,
} from 'react-native';

import {firebaseApp} from '../components/firebaseConfig';
      
import { Avatar, Button, Card  } from 'react-native-paper';
import QuartoLivre from '../components/homeComponentes/QuartoLivre';
import ClietesList from '../components/homeComponentes/ClietesList';
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
    listaItens: [],
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }


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
   
    const { visible } = this.state;
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
             {this.state.listaItens.map((item, i) => {
                    return (<View key={i}>
                        <TouchableOpacity >
                        <Itens key={item.id} item={item} />
                        </TouchableOpacity>
                    </View>)
                })}

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
          <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              
           <View style={styles.containerCard}>
              <ClietesList nome="jean" cpf='2024324234' email='jeansijk@gmail.com'  />
              <ClietesList nome="joao" cpf='2024324234' email='jeansijk@gmail.com'  />
              <ClietesList nome="maria" cpf='2024324234' email='jeansijk@gmail.com'  />
              <ClietesList nome="jose" cpf='2024324234' email='jeansijk@gmail.com'  />
              <ClietesList nome="tiaso" cpf='2024324234' email='jeansijk@gmail.com'  />
              <ClietesList nome="outro" cpf='2024324234' email='jeansijk@gmail.com'  />
           </View>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <Button
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </Button>
        </ScrollView>

      </View>
      
    );
  }


}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }, 
  containerCard: {
    width: 400,
    marginBottom:20,
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
