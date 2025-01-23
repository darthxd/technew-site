const telefone = document.getElementById('telefone')
const cep = document.getElementById('cep')
const cpf = document.getElementById('cpf')

window.onload = function() {
    cpf.addEventListener('input', () => {
        cpf.value = cpfMask(cpf.value)
    })
    telefone.addEventListener('input', () => {
        telefone.value = telefoneMask(telefone.value)
    })
    cep.addEventListener('input', () => {
        cep.value = cepMask(cep.value)
    })
}

function cpfMask(cpf){
    cpf = cpf.replace(/\D/g, "")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    return cpf
}

function telefoneMask(telefone){
    telefone = telefone.replace(/\D/g, "")
    telefone = telefone.replace(/(\d{0})(\d)/, "$1($2")
    telefone = telefone.replace(/(\d{2})(\d)/, "$1) $2")
    telefone = telefone.replace(/(\d{5})(\d)/, "$1-$2")
    return telefone
}

function cepMask(cep){
    cep = cep.replace(/\D/g, "")
    cep = cep.replace(/(\d{5})(\d)/, "$1-$2")
    return cep
}