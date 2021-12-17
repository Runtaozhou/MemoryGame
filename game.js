document.addEventListener("DOMContentLoaded",()=>{
    let game_socre =0
    // declare an image array
    const cardArray = [
        {
            name:"cheeseburger",
            src:"cheeseburger.png"
        },
        {
            name:"cheeseburger",
            src:"cheeseburger.png"
        },
        {
            name:"fries",
            src:"fries.png"
        },
        {
            name:"fries",
            src:"fries.png"
        },
        {
            name:"hotdog",
            src:"hotdog.png"
        },
        {
            name:"hotdog",
            src:"hotdog.png"
        },
        {
            name:"ice-cream",
            src:"ice-cream.png"
        },
        {
            name:"ice-cream",
            src:"ice-cream.png"
        },
        {
            name:"milkshake",
            src:"milkshake.png"
        },
        {
            name:"milkshake",
            src:"milkshake.png"
        },
        {
            name:"pizza",
            src:"pizza.png"
        },
        {
            name:"pizza",
            src:"pizza.png"
        }
    ]
    cardChosen =[]
    cardChosenId=[]
    cardsWon=[]
    // shuffle arrays
    cardArray.sort(()=>Math.random()-0.5)
    const cor = cardArray.map((card)=>card.name)
    console.log(cor)
    //create the gameboard elements:
    const board = document.querySelector("#gameboard")
    const score = document.querySelector("#score")
    score.textContent="Score:"+game_socre
    function createBoard (){
        for(let i=0;i<cardArray.length;i++){
            const gamecard  = document.createElement("img")
            gamecard.setAttribute("src","blank.png")
            gamecard.setAttribute("id",i)
            gamecard.addEventListener("click",flipcard)
            board.appendChild(gamecard)
        }
    
    }
    createBoard()
    function flipcard(){
        let cardId = this.getAttribute("id")
        this.setAttribute("src",cardArray[cardId].src)
        cardChosenId.push(cardId)
        console.log(cardChosenId)
        cardChosen.push(cardArray[cardId].name)
        if(cardChosen.length===2){
            setTimeout(checkMatch,300)
        }
    }
    function checkMatch(){
        const cards = document.querySelectorAll("img")
        console.log(cardChosen)
        if(cardChosen[0]!==cardChosen[1]||cardChosenId[0]===cardChosenId[1]){
            cards[cardChosenId[0]].setAttribute("src","blank.png")
            cards[cardChosenId[1]].setAttribute("src","blank.png")
            console.log("not a match!")
        }
        else{
            cards[cardChosenId[0]].setAttribute("src","dimgray.png")
            cards[cardChosenId[1]].setAttribute("src","dimgray.png")
            cards[cardChosenId[0]].removeEventListener("click",flipcard)
            cards[cardChosenId[1]].removeEventListener("click",flipcard)
            cardsWon.push(cards[cardChosenId[0]].id)
            cardsWon.push(cards[cardChosenId[1]].id)
            game_socre+=1
            console.log("the score "+game_socre)
            score.textContent="Score:"+game_socre  
        }
        if(cardsWon.length===12){
            score.textContent="You have Won!!!🤘"
        }
        cardChosen=[]
        cardChosenId=[]
    }
})