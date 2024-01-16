const ativadorToast = document.getElementById('btn-checar-emails')
const mensagem = document.getElementById('mensagens-alerta')

if (ativadorToast) { //Estamos garantindo que o código só será executado se o ativador toast for diferente de undefined// 
    ativadorToast.addEventListener('click', function() { //adicionando um evento de click e um call back
        const toast = new bootstrap.Toast(mensagem);
        toast.show(); //exibição do toast
    })
}