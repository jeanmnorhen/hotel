import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import  FormClientes  from './manterClientes/FormClientes';
import FormQuartos from './manterQuartos/FormQuartos';
export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Registrar novo Quarto',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
      <FormClientes />
      <FormQuartos></FormQuartos>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
