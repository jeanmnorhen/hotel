import React from 'react';
import {
    StyleSheet,
} from 'react-native';
import { Button, Card } from 'react-native-paper';

export default class ClienteList extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
          nome: this.props.noome,
          numeroQuarto:this.props.numeroQuarto,
        }
     }

    render() {
          const { nome, numeroQuarto,valorDiaria  } = this.state

        return (
            <Card>
                <Card.Title
                    title={"nome: "+nome}
                    umeroQuarto={'Quarto numero: '+ numeroQuarto }
                    right= {(props) => 
                        <View style={styles.status}>
                        <Button  mode="contained" onPress={() => console.log('Pressed')}>
                        CheckOut
                        </Button>
                        </View>
                    }
                />
            </Card>
        );
    }
};
const styles = StyleSheet.create({
    status: {
        height:50,
        width:100,
        borderRadius:15,
        backgroundColor: "red",
        justifyContent: 'center',
        alignItems: 'center',
    }
});
