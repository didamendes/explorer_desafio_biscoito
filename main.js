const tela1 = document.querySelector(".tela1")
const tela2 = document.querySelector(".tela2")
let randomNumber = Math.round(Math.random() * 5)

let fraseSelecionada

let frases = [
    "A vida trará coisas boas se tiveres paciência.",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "A maior de todas as torres começa no solo.",
    "Não há que ser forte. Há que ser flexível.",
    "Gente todo dia arruma os cabelos, por que não o coração?"
]

function sorteio(event) {
    event.preventDefault()
    fraseSelecionada = frases[randomNumber]
    tela2.querySelector("p").innerText = fraseSelecionada
    trocaTelas()
}

function novamente(event) {
    randomNumber = Math.round(Math.random() * 5)
    trocaTelas()
}

function trocaTelas() {
    tela1.classList.toggle("esconder")
    tela2.classList.toggle("esconder")
}