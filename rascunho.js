writeUserData=(nome,email,cpf)=>{
  firebaseApp.database().ref('Clientes/').push({
        nome,
        email,
        cpf
    }).then((data)=>{
      //success callback
      console.log('data ' , data)
  }).catch((error)=>{
      //error callback
      console.log('error ' , error)
  })
}