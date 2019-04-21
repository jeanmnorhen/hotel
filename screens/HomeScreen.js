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

import { firebaseApp } from '../components/firebaseConfig';

import { Avatar, Button, Card } from 'react-native-paper';
import QuartoLivre from '../components/homeComponentes/QuartoLivre';
import ClietesList from '../components/homeComponentes/ClietesList';
import QuartoAlugado from '../components/homeComponentes/QuartoAlugado';
const refRoot = firebaseApp.database();

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    clientes:  [{
      nome: 'jean',
      cpf: '104324234231',
      email: 'gfsdg@fsdgkfisr'
    }, {
      nome: 'Maria',
      cpf: '104324234231',
      email: 'gfsdg@fsdgkfisr'
    },{
      nome: 'AStrobaldo',
      cpf: '104324234231',
      email: 'gfsdg@fsdgkfisr'
    },{
      nome: 'Tonho',
      cpf: '104324234231',
      email: 'gfsdg@fsdgkfisr'
    },],
    QuartoSelecionado:  {numeroQuarto: '', nomeCliente: '' },
    novoClienteNome: '',
    novoClienteCpf: '',
    novoClienteEmail: '',
    modalVisible: false,
    QuartosList: [{
      status: 'Livre',
      numeroQuarto: '101',
      valorDiaria: '80 Reais'
    }, {
      status: 'Livre',
      numeroQuarto: '102',
      valorDiaria: '80 Reais'
    }, {
      status: 'Livre',
      numeroQuarto: '103',
      valorDiaria: '80 Reais'
    }, {
      status: 'Livre',
      numeroQuarto: '104',
      valorDiaria: '80 Reais'
    }, {
      status: 'Livre',
      numeroQuarto: '105',
      valorDiaria: '80 Reais'
    }, {
      status: 'Livre',
      numeroQuarto: '201',
      valorDiaria: '120 Reais'
    }
    ],

  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  setQuartoSelecionado(quarto) {
    this.setState({ QuartoSelecionado: quarto });
  }

  atualizarLista() {

    refRoot.child('funcionarios/').once('value', (childSnapshot) => {
      console.log(childSnapshot.val())
      const clientesTemp = [];
      childSnapshot.forEach((cli) => {
        clientesTemp.push({
          key: cli.key,
          nome: cli.toJSON().nome,
          cpf: cli.toJSON().cpf,
          email: cli.toJSON().email
        });
        this.setState({
          clientes: clientesTemp,
        });
      });
    });
  }
  readUserData() {
    firebaseApp.database().ref('funcionarios/').once('value', function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        console.log(childSnapshot.val())
      })
    })
  }
  render() {

    const { visible } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>

            <FlatList
              data={this.state.QuartosList}
              renderItem={({ item, index }) => {
                return (
                    <View style={styles.containerCard}>
                    <QuartoLivre status={item.status}
                      numeroQuarto={item.numeroQuarto}
                      valorDiaria={item.valorDiaria} />
                    <View style={styles.checkin}>
                      <Button mode="contained" onPress={() => { this.setQuartoSelecionado(item); this.setModalVisible(true);}}>
                        <Text>CheckIn</Text>
                      </Button>
                    </View>
                  </View>                  
                )
              }
              }
            ></FlatList>
          </View>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
             <FlatList
              data={this.state.clientes}
              renderItem={({ item, index }) => {
                return (
           
            <View style={{ marginTop: 22 }}>                
                  <ClietesList nome={item.nome} cpf={item.cpf} email={item.email} />            
            </View>
                )
              }
              }
            ></FlatList>
            <Button mode="contained"
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}>
              <Text>Voltar</Text>
            </Button>
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
  checkin:{
    width: 100, 
    height:100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerCard: {
    flexDirection: 'row',
    width: 400,
    marginBottom: 20,
    justifyContent: 'space-between',
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
    backgroundColor: '#fff',
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
