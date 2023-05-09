let buttonEL = document.querySelector("button")
let pEL = document.querySelector("p")
buttonEL.addEventListener("click", function () {
    const firstRandomNum = Math.floor(Math.random()*6) + 1
    console.log(firstRandomNum );
    const firstdice = 'dice/dice'+firstRandomNum+'.jpg';
    document.querySelectorAll('img')[0].setAttribute('src', firstdice)
    
    
    const firstRandom = Math.floor(Math.random()*6) + 1
    console.log(firstRandom );
    
    const firstdiceGame = 'dice/dice'+firstRandom+'.jpg';
    document.querySelectorAll('img')[1].setAttribute('src', firstdiceGame)

    if (firstRandomNum > firstRandom) {
        pEL.innerText ="player 1 has won"
    } else if (firstRandomNum < firstRandom) {
        pEL.innerText ="player 2 has won "
    } else {
        pEL.innerText ="draw"
    }

    
})



