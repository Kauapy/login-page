let erroSimbolo = document.querySelector(".erroSimbolo");        
erroSimbolo.textContent = "Apenas letras são permitidas";


document.getElementById("usuario").addEventListener("input", function() {
    
    if (/[^a-zA-Z ]/.test(this.value)) {
        this.value = this.value.replace(/[^a-zA-Z ]/g, "");
        erroSimbolo.classList.remove("hidden");
    }else{
        
    }
});

