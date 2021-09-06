import React, { Fragment, useState } from "react";
import {
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Grid
  
} from "@material-ui/core";

function Formulario({enviar, validador, termosDeUso}) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobreome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [checkBox, setCheckBox] = useState("");
  const [errorNome, setErro] = useState({ nome: { valido: true, texto: "" } });
  const [errorSobrenome, setErroSobrenome] = useState({
    sobrenome: { valido: true, texto: "" },
  });
  const [errorEmail, setErroEmail] = useState({
    email: { valido: true, texto: "" },
  });
  const [errorSenha, setErroSenha] = useState({
    senha: { valido: true, texto: "" },
  });
  // const [errorCheckBox, setErroCheckBox]= useState({
  //   checkBox:{valido: true, texto: "" }, 
  // });
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        enviar({ nome, sobrenome, email, senha, checkBox });
      }}
      
    >
      <Fragment>
        <TextField
          value={nome}
          onChange={(event) => {
            setNome(event.target.value);
          }}
          onBlur={(event) => {
            const validar = validador(nome);
            setErro({ nome: validar });
          }}
          error={!errorNome.nome.valido}
          helperText={errorNome.nome.texto}
          margin="normal"
          id="nome"
          label="Nome"
          variant="outlined"
          fullWidth
        />
        <TextField
          value={sobrenome}
          onChange={(event) => {
            setSobreome(event.target.value);
          }}
          onBlur={(event) => {
            const validar = validador(sobrenome);
            setErroSobrenome({ sobrenome: validar });
          }}
          error={!errorSobrenome.sobrenome.valido}
          helperText={errorSobrenome.sobrenome.texto}
          margin="normal"
          id="sobrenome"
          label="Sobrenome"
          variant="outlined"
          fullWidth
        />
        <TextField
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          onBlur={(event) => {
            const validar = validador(email);
            setErroEmail({ email: validar });
          }}
          error={!errorEmail.email.valido}
          helperText={errorEmail.email.texto}
          margin="normal"
          id="email"
          label="E-mail"
          variant="outlined"
          fullWidth
        />
        <TextField
          value={senha}
          onChange={(event) => {
            setSenha(event.target.value);
          }}
          onBlur={(event) => {
            const validar = validador(senha);
            setErroSenha({ senha: validar });
          }}
          error={!errorSenha.senha.valido}
          helperText={errorSenha.senha.texto}
          margin="normal"
          type="password"
          id="senha"
          label="Senha"
          variant="outlined"
          fullWidth
        />

        <Grid container direction="row" justifyContent="space-between">
          <FormControlLabel
            id="checkBox"
            margin="normal"
            label="concordo com os termos de uso"
            
            control={
              <Checkbox
              
                color="primary"
                value={checkBox}
                onChange={(event) => {
                  setCheckBox(event.target.checked);
                }}
                // onClick={(event) => {
                //   const validar = termosDeUso(checkBox);
                //   setErroCheckBox({ checkBox: validar });
                // }}
                // error={!errorCheckBox.checkBox.valido}
                // helperText={errorCheckBox.checkBox.texto} 
                 
              />
            }
          />
          
          <Button type="submit" variant="outlined" color="primary">
            Cadastrar
          </Button>
        </Grid>
      </Fragment>
    </form>
  );
}

export default Formulario;
