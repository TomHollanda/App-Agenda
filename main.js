const form = document.getElementById('form-registre');
const nameList = [];
const fone = [];
const address = [];
const email = [];
let lines = '';
const btn = document.querySelector(".place-order");
let isAnimating = false;

function addline() {
    const inputContactname = document.getElementById('contactname');
    const inputContact = document.getElementById('contact');

    if (nameList.includes(inputContactname.value)) {
        alert(`${inputContactname.value} 'Already an existing contact`);
    } else {
        nameList.push(inputContactname.value);
        fone.push(inputContact.value);

        let linha = '<tr>';
        linha += `<td>${inputContactname.value}</td>`;
        linha += `<td>${inputContact.value}</td>`;
        lines += linha;
    }

    inputContactname.value = '';
    inputContact.value = '';
}

function updateTable() {
    const tablebody = document.querySelector('tbody');
    tablebody.innerHTML = lines;
}

btn.addEventListener("click", () => {
    if (isAnimating) {
        return; // Impede o clique se a animação estiver em andamento
    }
    addline();
    updateTable();

    isAnimating = true; // Define o estado de animação como verdadeiro
    
    btn.classList.remove("place-order--default");
    btn.classList.add("place-order--placing");
    
    setTimeout(() => {
        btn.classList.remove("place-order--placing");
        btn.classList.add("place-order--done");
        
        setTimeout(() => {
            btn.classList.remove("place-order--done");
            btn.classList.add("place-order--default");
            isAnimating = false; // Define o estado de animação como falso após a animação ser concluída, reabilita o botão
        }, 2000); 
    }, 4000);
});

function addlinha() {
    const inputNomeAtividade = document.getElementById('contactname');
    const inputNotaAtividade = document.getElementById('contact');
}
