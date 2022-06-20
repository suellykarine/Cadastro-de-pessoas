 import { Pessoa } from "./assets/js/script.js"
 import { ControleUsuario } from "./assets/js/ControleUsuario.js"
 import { Bancodados } from "./assets/js/db.js"

 class Cadastro {

     //pegar o select

     //static tgSelect = document.getElementById("selecao")



     static capturarDados(event) {
         event.preventDefault()
         console.log("clicou")

         const cadastroUsuario = event.target.name
         const input = event.target
         const dataForm = {}

         if (cadastroUsuario == "cadastroUser") {
             console.log("add usuario")
             for (let i = 0; i < input.length; i++) {
                 const { name, value } = input[i]
                 if (name) {
                     dataForm[name] = value
                 }
             }
             if (cadastroUsuario == "cadastroUser") {
                 ControleUsuario.cadastrarUsuario(dataForm)
                     // this.atualizarSelect()
             }
         }
         console.log(dataForm)
     }


     /*static atualizarSelect() {
         console.log(this.tgSelect)
     }*/


 }

 export { Cadastro }