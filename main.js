const form = document.getElementById('form-registre');
const nameList = [];
const fone = [];
const email = [];
let lines = '';
const btn = document.querySelector(".place-order");
let isAnimating = false;

function addline() {
    const inputContactname = document.getElementById('contactname');
    const inputContact = document.getElementById('contact');
    const inputEmail = document.getElementById('email');

    if (nameList.includes(inputContactname.value)) {
        alert(`${inputContactname.value} 'Already an existing contact`);
    } else {
        nameList.push(inputContactname.value);
        fone.push(inputContact.value);
        email.push(inputEmail.value);


        let linha = '<tr>';
        linha += `<td>${inputContactname.value}</td>`;
        linha += `<td>${inputContact.value}</td>`;
        linha += `<td>${inputEmail.value}</td>`;
        lines += linha;
    }

    inputContactname.value = '';
    inputContact.value = '';
    inputEmail.value = '';

}

function verificaString(str) {
    // Verifica se a string não é vazia
    if (str.trim() === "") {
        alert("O campo nome não pode estar vazio.");
        return false;
    }
    
    // Verifica se a string contém apenas letras, espaços e hífens
    if (!/^[a-zA-ZÀ-ÿ\s-]*$/.test(str)) {
        alert("O campo nome só pode conter letras, espaços e hífens.");
        return false;
    }

    // Verifica se a string não começa com um espaço
    if (str.charAt(0) === " ") {
        alert("O campo nome não pode começar com um espaço.");
        return false;
    }

    // Verifica se a string não contém dois espaços consecutivos
    if (str.includes("  ")) {
        alert("O campo nome não pode conter espaços consecutivos.");
        return false;
    }

    return true;
}

function validateEmail() {
    var emailInput = document.getElementById('email');
    var email = emailInput.value;

    // Expressão regular para validar o formato do e-mail
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Por favor, insira um endereço de e-mail válido.");
        emailInput.focus(); // Coloca o foco de volta no campo de entrada de e-mail
        return false;
    } 
    return true;
}

function updateTable() {
    const tablebody = document.querySelector('tbody');
    tablebody.innerHTML = '<tr><th>Name</th><th>Fone</th><th>E-mail</th></tr>' + lines;
}

btn.addEventListener("click", () => {
    if (isAnimating) {
        return; // Impede o clique se a animação estiver em andamento
    }

    const inputContactname = document.getElementById('contactname');
    const isNameValid = verificaString(inputContactname.value); // Passando o valor do elemento

    if (!isNameValid) {
        return; // Se o nome não for válido, não prossiga
    }

    // Valida o e-mail
    const isEmailValid = validateEmail();
    if (!isEmailValid) {
        return; // Se o e-mail não for válido, não prossiga
    }

    // Se o nome e o e-mail forem válidos, adicione os dados e atualize a tabela
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


