class Bancodados {
    _listaUsuarios = []

    addUsuario(usuario) {

        this._listaUsuarios.push(usuario)

    }

    listarUsuarios(listaFiltrada) {
        const ul = document.getElementById("lista-de-alunos")
        ul.innerText = ''
        for (let i = 0; i < listaFiltrada.length; i++) {
            const li = document.createElement("li")
            li.innerText = (listaFiltrada[i])["nome"] + " " + (listaFiltrada[i])["sobrenome"] + "     " + (listaFiltrada[i])["email"] + "     " + (listaFiltrada[i])["cargo"]
            ul.appendChild(li)


        }

    }


    verificarEmailDuplicado(email) {
        for (let i = 0; i < this._listaUsuarios.length; i++) {
            if (this._listaUsuarios[i]["email"] == email) {
                return true
            }
        }
        return false
    }



    filtrarCargo() {

        const cargoSelecionado = document.getElementById("cargoOption").value

        if (cargoSelecionado != "Todos") {

            const listaPessoasFiltradasCargo = this._listaUsuarios.filter((pessoa) => pessoa.cargo === cargoSelecionado)
            this.listarUsuarios(listaPessoasFiltradasCargo)

        } else {
            this.listarUsuarios(this._listaUsuarios)
        }
    }






}




class Pessoa {
    constructor(nome, sobrenome, dataNascimento, email, contato, telefone, cargo) {
        this._nome = nome,
            this._sobrenome = sobrenome,
            this._dataNascimento = dataNascimento,
            this._email = email,
            this._contato = contato,
            this._telefone = telefone,
            this._cargo = cargo,
            this._arrUsuario = []
    }




}


//peguei o botao

const btnCadastrarUsuario = document.querySelector("body")


btnCadastrarUsuario.addEventListener("submit", capturarDados)


const botaoPesquisar = document.getElementById("btn")

let bd = new Bancodados()



function btnPesquisarClick() {
    bd.filtrarCargo()
}

botaoPesquisar.addEventListener('click', btnPesquisarClick)



// Cadastrar



const obterIdade = (dataNascimento, dataHoje) => {
    const dataNascimentoEmMilisegundos = new Date(dataNascimento).getTime();
    const dataHojeEmMilisegundos = new Date(dataHoje).getTime();
    const umAnoEmMilisegundos = (365 * 24 * 60 * 60 * 1000)
    const idadeCalculadaEmMilisegundos = (dataHojeEmMilisegundos - dataNascimentoEmMilisegundos) / umAnoEmMilisegundos;
    return Math.floor(idadeCalculadaEmMilisegundos);
};


function capturarDados(event) {


    event.preventDefault()


    const cadastroUsuario = event.target.name
    const input = event.target
    const dataForm = {}

    if (cadastroUsuario == "cadastroUser") {


        for (let i = 0; i < input.length; i++) {
            const { name, value } = input[i]
            if (name) {
                dataForm[name] = value
            }
            input[i].value = ""
        }

        if (cadastroUsuario == "cadastroUser") {
            const email = dataForm['email']


            const erro = document.getElementById("erro")

            if (bd.verificarEmailDuplicado(email)) {
                erro.innerText = "Email informado já existe"
                return

            } else {
                erro.innerText = ""
            }


            const dataHoje = new Date()
            const dataNascimento = dataForm['dataNascimento']


            const erroIdade = document.getElementById("erroIdade")
            if (obterIdade(dataNascimento, dataHoje) < 18) {
                erroIdade.innerText = "Usuário menor de 18 anos"
                return
            } else {
                erroIdade.innerText = ""
            }


            bd.addUsuario(dataForm)
            bd.listarUsuarios(bd._listaUsuarios)

        }

    }


}