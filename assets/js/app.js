import { Pessoa } from "./assets/js/script.js"
import { Cadastro } from "./assets/js/cadastro.js"


//peguei o botao
const btnCadastrarUsuario = document.querySelector("body")
    //console.log(btnCadastrarUsuario)

btnCadastrarUsuario.addEventListener("submit", Cadastro.capturarDados.bind(Cadastro))