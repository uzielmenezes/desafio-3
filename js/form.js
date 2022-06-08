//class contato

class Contato {
    constructor(nome, sobrenome, email, cpf, telefone, contato, observacao) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contato = contato;
        this.observacao = observacao;
    }
    
}

// envia os dados do cliente para atribuição de uma variável data
function Post(form) {
    
    let data = new Contato(form.elements.namedItem("nome").value,
            form.elements.namedItem("sobrenome").value, 
            form.elements.namedItem("email").value, 
            form.elements.namedItem("cpf").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("contato").value, 
            form.elements.namedItem("observacao").value);
    console.log(data);

    Enviar();

}

// Informa ao usuário sobre o envio dos dados do formulário
function Enviar() {

    var nome = document.getElementById('name');
    var sobrenome = document.getElementById('surname');

    if (nome.value != '') {
        alert('Obrigado, sr(a) ' + nome.value + ' ' + sobrenome.value + '. Os seus dados foram encaminhados com sucesso!!');
    }

}