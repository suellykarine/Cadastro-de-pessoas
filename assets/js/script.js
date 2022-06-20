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

    /*addUsuario() {
        let usuario = new Pessoa(
            document.getElementsByName("nome").values

        )
        this._arrUsuario.push(usuario)
    }

    filtrarCargo() {

    }*/


}

export { Pessoa }












//LIMPANDO INPUTS
//inputs[i].value = ""



/*function cadastro(usuario) {

    //FAZENDO MODELAGEM DO CLIENTE
    const novoUsuario = new Pessoa(usuario)

    //CADASTRANDO NO BANCO DE DADOS
    db.usuario.push(novoUsuario)
        //console.log(clicou)
    return true
}*/