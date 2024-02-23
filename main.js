const btn = document.querySelector(".place-order");
let isAnimating = false;

btn.addEventListener("click", () => {
    if (isAnimating) {
        return; // Impede o clique se a animação estiver em andamento
    }
    
    isAnimating = true; // Define o estado de animação como verdadeiro
    
    btn.classList.remove("place-order--default");
    btn.classList.add("place-order--placing");
    
    setTimeout(() => {
        btn.classList.remove("place-order--placing");
        btn.classList.add("place-order--done");
        
        setTimeout(() => {
        btn.classList.remove("place-order--done");
        btn.classList.add("place-order--default");
        isAnimating = false; // Define o estado de animação como falso após a animação ser concluída
        }, 2000); // Reduzi o tempo do segundo setTimeout para 2000 para corresponder ao tempo de animação do CSS
    }, 4000);
});
