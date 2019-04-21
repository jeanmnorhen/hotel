componentDidMount(){

  refRoot.child('funcionarios/').once('value',(childSnapshot)=>{
       
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
      })
    }
    
