let number = document.querySelector("#number__id")
let text = document.querySelector(".text")
let button = document.querySelector("#refresh__button")
let main = document.querySelector("main")
let url = "https://api.adviceslip.com/advice"

fetch(url)
    .then(data => data.json())
    .then((data) => {
        let id = data.slip.id
        let advice = data.slip.advice
        number.innerText = `#${id}`
        text.innerText = `"${advice}"`
    })

button.addEventListener("click", function(){
    console.log(window.location.reload())
})