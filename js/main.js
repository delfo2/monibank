import validaCpf from "./valida-cpf.js";
import validaIdade from "./valida-idade.js";

const camposDeEscrita = document.querySelectorAll('[required]');

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}

camposDeEscrita.forEach((campo) => {
    campo.addEventListener('blur', () => verificaCampo(campo));
    campo.addEventListener('invalid', (evento) => evento.preventDefault());
})

function verificaCampo(campo) {
    let mensagem = '';
    campo.setCustomValidity('');

    if(campo.name == 'cpf' && campo.value.length >= 11) {
        validaCpf(campo);
    }
    if (campo.name == 'aniversario' && campo.value != "") {
        validaIdade(campo);
    }

    tiposDeErro.forEach((erro) => {
        if(campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
        }
    })
    const campoErro = campo.parentNode.querySelector('.mensagem-erro');
    const validadorInput = campo.checkValidity()

    if(validadorInput) {
        campoErro.textContent = '';
    } else {
        campoErro.textContent = mensagem;
    }
}