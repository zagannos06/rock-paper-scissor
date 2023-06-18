//* ------ Selectors ------- */

// secim elemanlarin tasiyicisi
const yourChoiceDiv = document.getElementById('your-choice')
const pcChoiceDiv = document.getElementById('pc-choice')
const selectionArticle =document.querySelector('.selection')
//? message
const messagePar = document.querySelector('.message')

//?score card
const scoreCardSec =document.querySelector('.score-card')
const pcScoreSpan = document.getElementById('pc-score')
const yourScoreSpan = document.getElementById('your-score')

//?modal
const modalCardSection = document.querySelector('.modal-card')
const finalMessagePar = document.getElementById('final-message')
const playAgainButton = document.getElementById('play-again')


//* ------- Variables ------- */
let userSelectImage= document.createElement("img")
let pcSelectImg = document.createElement('img')
let pcRandom

//? colors
const YELLOW= '#ffc538';
const RED= '#fb778b';
const GREEN= '#5ab7ac';
const BLACK= '#121212';
const GREY= '#cbcadad9';


//* ------- Event Listeners ------- */

playAgainButton.addEventListener('click',() =>{
    modalCardSection.classList.toggle('show')
    yourScoreSpan.textContent='0'
    pcScoreSpan.textContent='0'
    scoreCardSec.style.color = GREY
    //? ikinci secenek
    // window.location.reload()
})

selectionArticle.addEventListener('click', (e)=>{
    if(e.target.id){
        userSelectImage.src= `assets/${e.target.id}.png`
        userSelectImage.alt = e.target.id
        yourChoiceDiv.appendChild(userSelectImage)
        createPcSelection()
    }
})

//* ------- Functions ------- */

const createPcSelection = () => {
    const pcArr = ['rock','paper','scissor']
    pcRandom= pcArr[Math.floor(Math.random()*3)]
    pcSelectImg.src = `assets/${pcRandom}.png`
    pcSelectImg.alt = pcRandom
    pcChoiceDiv.appendChild(pcSelectImg)

    calculateResult()
}

const calculateResult =()=> {

    if( userSelectImage.alt === pcRandom){
        draw()
    } else {
        if (userSelectImage.alt ==='rock'){
            pcRandom === "paper" ? youLost() : youWin()
        } else if (userSelectImage.alt === 'paper'){
            pcRandom === "scissor" ? youLost() : youWin()
        } else if (userSelectImage.alt === "scissor"){
            pcRandom === "rock" ? youLost() : youWin()
        }
    }

    if(pcScoreSpan.textContent==='10'|| yourScoreSpan.textContent==="10"){
        openModal()
    }
    
}

const draw= () =>{
    messagePar.textContent="It's a draw"
    scoreCardSec.style.color = YELLOW
    messagePar.style.backgroundColor = YELLOW
}
const youLost= () =>{
    messagePar.textContent="You Lost"
    scoreCardSec.style.color = RED
    messagePar.style.backgroundColor = RED
    pcScoreSpan.textContent++

}
const youWin = () =>{
    messagePar.textContent="You Won"
    scoreCardSec.style.color = GREEN
    messagePar.style.backgroundColor = GREEN
    yourScoreSpan.textContent++
}

const openModal= () =>{
    modalCardSection.classList.add("show")
    yourScoreSpan.textContent==='10'? youWonGame() : youLostGame()
}

const youWonGame = () =>{
    finalMessagePar.textContent='🕺You Won💃'
    document.querySelector('.modal').style.backgroundColor=GREEN
    playAgainButton.style.color=GREEN
}

const youLostGame =() =>{
    finalMessagePar.textContent='😑You Lost😑'
    document.querySelector('.modal').style.backgroundColor=RED

}




//! ilkel yontem
//? yontem 2


//? resimler
// const rockImg= document.getElementById('rock')
// const paperImg= document.getElementById('paper')
// const scissorImg= document.getElementById('scissor')

// //? secim elemanlarin tasiyicisi
// let yourChoiceDiv = document.getElementById('your-choice')
// let selectionArticle =document.querySelector('.selection')
// let image= document.createElement('img')

// rockImg.addEventListener('click', () => {

//     image.src= "assets/rock.png"
//     image.alt = "rock"
//     yourChoiceDiv.appendChild(image)
//     // yourChoiceDiv.innerHTML= `<img src="assets/rock.png">` //?yontem 3
// })
// scissorImg.addEventListener('click', () => {

//     image.src= "assets/scissor.png"
//     image.alt = "scissor"
//     yourChoiceDiv.appendChild(image)
//     // yourChoiceDiv.innerHTML= `<img src="assets/scissor.png">`
// })
// paperImg.addEventListener('click', () => {

//     image.src= "assets/paper.png"
//     image.alt = "paper"
//     yourChoiceDiv.appendChild(image)
//     // yourChoiceDiv.innerHTML= `<img src="assets/paper.png">`
// })




