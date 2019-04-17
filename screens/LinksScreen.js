import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import  FormClientes  from './manterClientes/FormClientes';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Registrar novo Cliente',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
      <FormClientes />
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
