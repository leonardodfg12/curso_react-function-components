import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1">
        Formulário de Cadastro
      </Typography>
      <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF} />
    </Container>
  );
}

function aoEnviarForm(dados) {
  console.log(dados);
}

function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { invalido: true, texto: "Cpf deve ter 11 digitos" };
  } else {
    return { invalido: false, texto: "" };
  }
}

export default App;
