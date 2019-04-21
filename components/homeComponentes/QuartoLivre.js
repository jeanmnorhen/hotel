import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Alert,
} from 'react-native';
import { TextInput, Button, Avatar, Card } from 'react-native-paper';

export default class QuartoLivre extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
          status: this.props.status,
          numeroQuarto:this.props.numeroQuarto,
          valorDiaria:this.props.valorDiaria,
        }
     }

    render() {
          const { status, numeroQuarto,valorDiaria  } = this.state

        return (
            <Card>
                <Card.Title
                    title={"Quarto: "+numeroQuarto}
                    subtitle={'Valor da diaria: '+ valorDiaria }
                    left={(props) => <View style={styles.status}><Text >{status}</Text></View>}
                />
            </Card>
        );
    }
};
const styles = StyleSheet.create({
    status: {
        height:50,
        width:50,
        borderRadius:15,
        backgroundColor: "green",
        justifyContent: 'center',
        alignItems: 'center',
    }
});
