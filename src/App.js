import React, { Component } from "react";
import "./App.css";
import Formulario from "./formulario/formulario";
import { Container, Typography } from "@material-ui/core";


class App extends Component{
  render(){
    return (
      <Container maxWidth="sm">
        <Typography variant="h1" component="h3" align="center">
          Formulário
        </Typography>
        <Formulario enviar={enviarDados} validador={validador} />
      </Container>
    );
  }
}
function enviarDados(dados){
  
  console.log(dados);
}

function validador(TextField){
  if(TextField.length !== 0){
    return{valido: true, texto: ""}
  }else{
    return{valido: false, texto:"este campo esta vazio"}
  }
}
export default App;

