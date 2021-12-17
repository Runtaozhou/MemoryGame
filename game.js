document.addEventListener("DOMContentLoaded",()=>{
    let game_socre =0
    // declare an image array
    const cardArray = [
        {
            name:"cheeseburger",
            src:"./images/cheeseburger.png"
        },
        {
            name:"cheeseburger",
            src:"./images/cheeseburger.png"
        },
        {
            name:"fries",
            src:"./images/fries.png"
        },
        {
            name:"fries",
            src:"./images/fries.png"
        },
        {
            name:"hotdog",
            src:"./images/hotdog.png"
        },
        {
            name:"hotdog",
            src:"./images/hotdog.png"
        },
        {
            name:"ice-cream",
            src:"./images/ice-cream.png"
        },
        {
            name:"ice-cream",
            src:"./images/ice-cream.png"
        },
        {
            name:"milkshake",
            src:"./images/milkshake.png"
        },
        {
            name:"milkshake",
            src:"./images/milkshake.png"
        },
        {
            name:"pizza",
            src:"./images/pizza.png"
        },
        {
            name:"pizza",
            src:"./images/pizza.png"
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
            gamecard.setAttribute("src","./images/blank.png")
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
            cards[cardChosenId[0]].setAttribute("src","./images/blank.png")
            cards[cardChosenId[1]].setAttribute("src","./images/blank.png")
            console.log("not a match!")
        }
        else{
            cards[cardChosenId[0]].setAttribute("src","./images/dimgray.png")
            cards[cardChosenId[1]].setAttribute("src","./images/dimgray.png")
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