function alteraTag() {
    const body = document.querySelector('body');

    //Cria tpitulo dinamicamente
    let titulo = document.createElement('h1');
    titulo.innerHTML = 'Olá, mundo!';
    let textTitulo = titulo.innerHTML;
    body.appendChild(titulo);

    //Adiciona o evento para alternar o texto
    titulo.addEventListener('click', function() {
        titulo.innerHTML = titulo.innerHTML === textTitulo ? '<h2>Hello, world!</h2>' : textTitulo
    });
}

function adjacentText() {
    //Obtendo referência ao body
    const body = document.querySelector('body');

    let button = document.createElement('button');
    button.innerHTML = 'Texto adjacente';
    body.appendChild(button);

    button.addEventListener('click', function() {
        let titulo = document.querySelector('h1');
        if (titulo) titulo.insertAdjacentText('beforeend', 'Texto Inserido ');
        else titulo.insertBefore(titulo, button);
    })
}

alteraTag();
adjacentText();