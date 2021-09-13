import React, { Fragment, useState} from "react";
import {
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Grid,
  FormControl
  
} from "@material-ui/core";

function Formulario({enviar, validador}) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobreome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [checkBox, setCheckBox] = useState({termosUso: true});
  const [errorNome, setErro] = useState({ nome: { valido: true, texto: "" }});
  const [errorSobrenome, setErroSobrenome] = useState({
    sobrenome: { valido: true, texto: "" },
  });
  const [errorEmail, setErroEmail] = useState({
    email: { valido: true, texto: "" },
  });
  const [errorSenha, setErroSenha] = useState({
    senha: { valido: true, texto: "" },
  });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        enviar({ nome, sobrenome, email, senha, checkBox});
        
      }
    }
      
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
          <FormControl  required  component="fieldset">
          <FormControlLabel 
            id="checkBox"
            margin="normal"
            label="concordo com os termos de uso"
            control={
              <Checkbox
               component= "legend" 
                name= "checkBox"
                color="primary"
                onChange={(event) => {
                  setCheckBox(event.target.checked);
                }}
                
                required
              />
            }
          />
          
          </FormControl>
          <Button type="submit" variant="outlined" color="primary"  onClick={(event) => {
            const validarNome = validador(nome);
            const validarSobrenome = validador(sobrenome);
            const validarEmail = validador(email);
            const validarSenha = validador(senha);
            setErro({ nome: validarNome });
            setErroSobrenome({sobrenome: validarSobrenome});
            setErroEmail({email: validarEmail});
            setErroSenha({senha: validarSenha});
            
           }} >
            Cadastrar
          </Button>
        </Grid>
      </Fragment>
    </form>
  );
}

export default Formulario;
