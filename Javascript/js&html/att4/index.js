function createForm() {
    const body = document.querySelector('body');
    const div = document.createElement('div');
    div.setAttribute('id', 'container');

    div.style.display = 'flex';
    div.style.justifyContent = 'center'; // Centraliza horizontalmente
    div.style.alignItems = 'center';     // Centraliza verticalmente
    div.style.height = '100vh';          // Faz o contêiner ter a altura total da janela

    const form = document.createElement('form');
    form.setAttribute('id', 'form');

    form.style.display = 'flex';
    form.style.flexDirection = 'column'; // Coloca os elementos do formulário em coluna
    form.style.alignItems = 'center';    // Centraliza os itens do formulário
    form.style.gap = '10px';             // Espaçamento entre os elementos do formulário
    form.style.padding = '20px';         // Espaçamento interno
    form.style.border = '1px solid #ccc'; // Borda para visualização
    form.style.borderRadius = '8px';     // Bordas arredondadas
    form.style.backgroundColor = 'white'; // Fundo branco
    form.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'; // Sombra para o formulário

    body.appendChild(div);
    div.appendChild(form);
}

createForm();

const form = document.getElementById('form');

function createInputs() {
    let inputName = document.createElement('input');
    inputName.setAttribute('placeholder', 'Nome');
    inputName.setAttribute('type', 'text');
    inputName.setAttribute('name', 'name');
    inputName.id = 'name';

    let inputLastName = document.createElement('input');
    inputLastName.setAttribute('placeholder', 'Sobrenome');
    inputLastName.setAttribute('type', 'text');
    inputLastName.setAttribute('name', 'lastname');
    inputLastName.id = 'last-name';

    let inputEmail = document.createElement('input');
    inputEmail.setAttribute('placeholder', 'E-mail');
    inputEmail.setAttribute('type', 'email');
    inputEmail.setAttribute('name', 'email');
    inputEmail.id = 'email';

    let inputNumber = document.createElement('input');
    inputNumber.setAttribute('placeholder', 'Whatsapp');
    inputNumber.setAttribute('type', 'text');
    inputNumber.setAttribute('name', 'whatsapp');
    inputNumber.id = 'whatsapp';

    let inputGender = document.createElement('input');
    inputGender.setAttribute('placeholder', 'Gênero');
    inputGender.setAttribute('type', 'text');
    inputGender.setAttribute('name', 'gender');
    inputGender.id = 'gender';

    let checkBoxSave = document.createElement('input');
    checkBoxSave.setAttribute('type', 'checkbox');
    checkBoxSave.id = 'save';
    let labelSave = document.createElement('label');
    labelSave.setAttribute('for', 'save');
    labelSave.innerText = 'Salvar informações';
    labelSave.append(checkBoxSave);

    let checkBoxTerms = document.createElement('input');
    checkBoxTerms.setAttribute('type', 'checkbox');
    checkBoxTerms.id = 'terms';
    let labelTerms = document.createElement('label');
    labelTerms.setAttribute('for', 'save');
    labelTerms.innerText = 'Termos de Uso';
    labelTerms.append(checkBoxTerms);

    let btnSubmit = document.createElement('input');
    btnSubmit.setAttribute('type', 'submit');
    btnSubmit.setAttribute('value', 'Enviar');
    btnSubmit.id = 'submit';

    form.append(
        inputName,
        inputLastName,
        inputEmail,
        inputNumber,
        inputGender,
        checkBoxSave,
        labelSave,
        checkBoxTerms,
        labelTerms,
        btnSubmit
    );
}

createInputs();

form.addEventListener('submit', function(e) {
    e.preventDefault(); //Impede ações padrão do navegador, sem interferência dess comportamento

    let nome = document.getElementById('name');
    let sobrenome = document.getElementById('last-name');
    let email = document.getElementById('email');
    let whatsapp = document.getElementById('whatsapp');
    let genero = document.getElementById('gender');
    let checkSave = document.getElementById('save');
    let checkTerms = document.getElementById('terms');

    if (nome.value == '') {
        alert('Preencha o campo nome');
        nome.focus();
        return false;
    }
    if (sobrenome.value == '') {
        alert('Preencha o campo sobrenome');
        sobrenome.focus();
        return false;
    }
    if (email.value == '') {
        alert('Preencha o campo email');
        email.focus();
        return false;
    }
    if (whatsapp.value == '') {
        alert('Preencha o campo whatsapp');
        whatsapp.focus();
        return false;
    }
    if (genero.value == '') {
        alert('Preencha o campo gênero');
        genero.focus();
        return false;
    }
    if (!checkSave.checked) {
        alert('Marque o checkbox para Salvar as informações');
        checkSave.focus();
        return false;
    }
    if (!checkTerms.checked) {
        alert('Marque o checkbox de Termos de Uso');
        checkTerms.focus();
        return false;
    }

    alert(JSON.stringify({
        nome: form.name.value,
        sobrenome: form.lastname.value,
        email: form.email.value,
        whatsapp: form.whatsapp.value,
        genero: form.gender.value,
    }))

    console.log({
        nome: form.name.value,
        sobrenome: form.lastname.value,
        email: form.email.value,
        whatsapp: form.whatsapp.value,
        genero: form.gender.value,
    })

    form.name.value = '';
    form.lastname.value = '';
    form.email.value = '';
    form.whatsapp.value = '';
    form.gender.value = '';
})