const body = document.querySelector("body")
const list = document.querySelector("url")

const inputValue = document.createElement("input")
inputValue.setAttribute("type", "text")

const checkbox = document.createElement("input")
checkbox.setAttribute("type", "checkbox")

const listLength = document.createElement("span")
listLength.innerHTML = "Total de itens: 4"

const removeButton = document.createElement("button")
removeButton.innerHTML = "Remover"

removeButton.addEventListener("click", () => {
    list.removeChild(list.lastElementChild)
})

const addButton = document.createElement("button")
addButton.innerHTML = "Adicionar"

addButton.addEventListener("click", () => {
    const valor = inputValue.value

    if (valor !== "") {
        const novoElemento = document.createElement("li")
        novoElemento.innerHTML = valor

        if (checkbox.checked) {
            list.prepend(novoElemento)
        } else list.appendChild(novoElemento)

        inputValue.value = ""
    }
})

const countButton = document.createElement("button")
countButton.innerHTML = "Contar"

countButton.addEventListener("click", () => {
    const quantidade = document.querySelectorAll("li")
    listLength.innerHTML = `Total de itens: ${quantidade.length}`
})

body.appendChild(listLength)
body.appendChild(checkbox)
body.appendChild(inputValue)
body.appendChild(addButton)
body.appendChild(countButton)
body.appendChild(removeButton)