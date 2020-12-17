
function consultar() {
    let cep = document.getElementById('cep').value
    $('.animacao').show()
    let url = 'https://viacep.com.br/ws/' + cep + '/json/'
    

    $.ajax({
        url: url,
        type: "GET",
        success: function (response) {
            if(response.cep !== undefined){
            document.getElementById('endereco').innerHTML = response.cep
            document.getElementById('rua').innerHTML = response.logradouro
            document.getElementById('bairro').innerHTML = response.bairro
            document.getElementById('localidade').innerHTML = response.localidade
            document.getElementById('uf').innerHTML = response.uf

            $('.tabela-cep').show()
            $('.animacao').hide()
            }
        }

    })
}

$(".tabela-cep").hide()
$('.animacao').hide()



