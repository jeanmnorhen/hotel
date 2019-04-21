import React from 'react';
import {
    StyleSheet,
} from 'react-native';
import {  Card } from 'react-native-paper';

export default class ClienteList extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
          nome: this.props.noome,
          cpf:this.props.cpf,
          email:this.props.email,
        }
     }

    render() {
          const { nome, cpf,email  } = this.state

        return (
            <Card>
                <Card.Title
                    title={"nome: "+nome}
                    subtitle={'cpf: '+ cpf +'e-mail'+email}                    
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
