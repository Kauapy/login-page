document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.login-form');
    const senha = document.getElementById('senha');
    const senha2 = document.getElementById('senha2');
    const mensagemErro = document.getElementById('mensagemErro');
    const enviarBtn = document.querySelector('.enviar');
    
    function verificarSenhas() {          // Função para verificar se as senhas são iguais
        if (senha.value !== senha2.value) {
            mensagemErro.textContent = 'As senhas estão diferentes. Por favor, verifique.';
            mensagemErro.style.color = 'red';
            mensagemErro.style.display = 'block';
            return false;                  
        } else {
            mensagemErro.textContent = '';
            mensagemErro.style.display = 'none';
            return true;
        }
    }
    
    form.addEventListener('submit', function(event) {
        if (!verificarSenhas()) {
            event.preventDefault();
        }
    });
    

    senha2.addEventListener('input', function() {
        verificarSenhas();
    });

    senha.addEventListener('input', function() {
        if (senha2.value.length > 0) {
            verificarSenhas();
        }
    });
});