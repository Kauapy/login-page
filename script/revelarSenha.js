const senhaInput = document.getElementById("senha");
const toggleSenha = document.getElementById("toggleSenha");
document.addEventListener("DOMContentLoaded", function () {
    

    toggleSenha.addEventListener("click", () => {
        if (senhaInput.type === "password") {
            senhaInput.type = "text";
            toggleSenha.src = "/img/lock-open-alt-regular-24.png";
        } else {
            senhaInput.type = "password";
            toggleSenha.src = "/img/lock-alt-solid-24.png"; 
        }
    });

    
});
