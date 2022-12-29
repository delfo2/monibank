export default function validaIdade (campo) {
    const dataUsuario = new Date(campo.value);

    if(!eMaiorDeIdade(dataUsuario)) {
        campo.setCustomValidity('Você tem que ser maior de idade para poder se cadastrar!');
    }
}

function eMaiorDeIdade (data) {
    const dataAtual = new Date();
    const dataUsuarioMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >= dataUsuarioMais18;
}