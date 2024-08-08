document.addEventListener("DOMContentLoaded", function() {
    // Exemplo de estados - você pode mudar isso conforme necessário ou integrar com um backend
    let estados = {
        "sala-aula-4": "ocupado",
        "lab-informatica-1": "livre",
        "sala-professores": "manutencao",
        "sala-redes": "livre",
        "lab-eletronica": "ocupado"
    };

    for (let ambiente in estados) {
        let elemento = document.getElementById(ambiente);
        elemento.classList.add(estados[ambiente]);
    }
});