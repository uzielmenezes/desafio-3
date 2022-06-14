//class contato

class Contato {
    constructor(nome, sobrenome, email, cpf, telefone, contato, observacao, termos, novidades) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contato = contato;
        this.observacao = observacao;
        this.termos = termos;
        this.novidades = novidades;
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
            form.elements.namedItem("observacao").value,
            form.elements.namedItem("termos").checked,
            form.elements.namedItem("novidades").checked);
    console.log(data);
    console.log(data.termos);
    console.log(data.novidades);

    Enviar();

}

// Informa ao usuário sobre o envio dos dados do formulário
function Enviar() {

    var nome = document.getElementById('name');
    var sobrenome = document.getElementById('surname');
    var termo = document.getElementById('term');

    if (nome.value != '' && termo.checked == true) {
        alert('Obrigado, sr(a) ' + nome.value + ' ' + sobrenome.value + '. Os seus dados foram encaminhados com sucesso!!');
    }

}