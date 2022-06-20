import { Pessoa } from "./script.js"
import { Cadastro } from "./assets/js/cadastro.js"
import { db } from "./assets/js/db.js"


class ControleUsuario {

    static cadastrarUsuario(user) {

        const novoUsuario = new Pessoa(user)
        db.usuario.push(novoUsuario)
        console.log(db.usuario)
        return true

    }




}

export { ControleUsuario }