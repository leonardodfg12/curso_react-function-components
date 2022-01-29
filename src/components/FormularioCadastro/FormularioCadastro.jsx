import React, { useState } from "react";
import { Button, Switch, TextField, FormControlLabel } from "@mui/material";

function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobreNome] = useState("");
  const [cpf, setCPF] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({ cpf: { invalido: false, texto: "" } });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ nome, sobrenome, cpf, novidades, promocoes });
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        id="Nome"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobreNome(event.target.value);
        }}
        id="Sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCPF(event.target.value);
        }}
        onBlur={(evento) => {
          const ehValido = validarCPF(cpf);
          setErros({ cpf: ehValido });
        }}
        error={erros.cpf.invalido}
        helperText={erros.cpf.texto}
        id="CPF"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <FormControlLabel
        control={
          <Switch
            checked={promocoes}
            onChange={(evento) => {
              setPromocoes(evento.target.checked);
            }}
          />
        }
        name="Promoções"
        label="Promoções"
      />
      <FormControlLabel
        control={
          <Switch
            checked={novidades}
            onChange={(evento) => {
              setNovidades(evento.target.checked);
            }}
          />
        }
        name="Novidades"
        label="Novidades"
      />
      <Button variant="contained" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
