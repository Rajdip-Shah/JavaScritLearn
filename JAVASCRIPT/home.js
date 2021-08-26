function ageInDays () {
    var age = prompt("What is you current age") ;
    var days = age * 365 ;
    var h1 = document.createElement("h4");
    var text = document.createTextNode("You have lived " + days + " days.");
    h1.setAttribute("id", "resultAge") ;
    document.getElementById("result-box").appendChild(h1);
    h1.appendChild(text);
}

function reset(){
    document.getElementById("resultAge").remove();
}


// ------------------------RANDOM------- PIC------GENERATOR---------------------------------
function GetImg(){
    var picShow = document.createElement("img");
    document.getElementById("GenerateImg").appendChild(picShow) ;
    picShow.src = 'https://picsum.photos/'+(200+rand())+'/' + (300 + rand()) +'?random='+ randomChoice();}

function rand(){ return Math.floor(Math.random() * 90)} ;

// ------------------------------------------ROCK----- PAPER -------- SCISSORS------------------------------------------------------- GAME 

function RPSgame (choice){
    let humanChoice = choice.id ;
    let botChoice = randomBotChoice(randomChoice()) ;
    let winner = result (humanChoice, botChoice); // Score 
    let winMessage = message(winner) ;
    console.log(humanChoice,botChoice, winMessage['message'] )
    // clear() ;
    frontEnd(winMessage, humanChoice, botChoice) ;

    } ;

function randomChoice() { return Math.floor(Math.random() * 3)} ;

function randomBotChoice(number) { return ["Rock", "Paper", "Scissor"][number]; } ;

function result (humanChoice, botChoice) {
    let database = {
    'Rock' : {'Rock': 0.5, 'Paper': 0, 'Scissor':1},
    'Paper' : {'Rock': 1, 'Paper': 0.5, 'Scissor':0},
    'Scissor' : {'Rock': 0, 'Paper': 1, 'Scissor':0.5}
    }
    return (database[humanChoice][botChoice])
}

function message (score){
    let themessage = {
        1: {"message" : 'You Win' , "color" : "green"},
        0.5: {"message" : "DRAW" , "color": "#E2EA3E"},
        0: { "message" : "YoU LoSt", "color": "red"}
    }
    return themessage[score]
}

function clear()  {document.getElementById("Options").remove();}

function frontEnd(Displaymessage, UserChoice, botChoice) {
    
    let userImage = document.getElementById(UserChoice).src
    let botImage = document.getElementById(botChoice).src
    clear()

    let display = document.createElement('div')
    display.setAttribute("id", "displayBox")
    display.setAttribute("class", "RPSbutton")
    let humanDisplay = document.createElement('div')
    let messageDisplay = document.createElement('div')
    let botDisplay = document.createElement('div')

    // setting the result display in the dic with id= "dis"
    humanDisplay.innerHTML = "<img src='" + userImage +"'width = 100px style = 'box-shadow: 0px 10px 40px rgb(63, 28, 159)' />"
    messageDisplay.innerHTML = "<h2 style = color:"+ Displaymessage['color']+ " padding= 10px>" + Displaymessage['message'] + " </h2>"
    botDisplay.innerHTML = "<img src='" + botImage +"' width = 100px style = 'box-shadow: 0px 10px 40px rgb(212, 45, 59)'/>"


    document.getElementById("dis").appendChild(display)
    document.getElementById("displayBox").appendChild(humanDisplay)
    document.getElementById("displayBox").appendChild(messageDisplay)
    document.getElementById("displayBox").appendChild(botDisplay)
    }

function again (){
    document.getElementById('displayBox').remove();
    document.getElementById('dis').innerHTML = `<div class="RPSbutton" id="Options">
    <img id = "Rock"src="https://pngimage.net/wp-content/uploads/2018/06/rocha-desenho-png-1.png" onclick="RPSgame(this)" width= 100px />
    <img id = "Paper" src="C:\\Users\\User\\Downloads\\Paper.jpg" onclick="RPSgame(this)" width= 100px />
    <img id = "Scissor" src= "C:\\Users\\User\\Downloads\\Scissor.png" onclick="RPSgame(this)" width= 100px />
</div>   `
}

// --------------------ROCK----- PAPER ------- SCISSORS------- GAME ------------------------------------------------------------------

//-----------------------------BLACK ----JACK-----------------------------------------------

let BlackJack = {
    'you':{'box': 'UserBox', 'score': 'yourScore','CurrentScore':0},
    'dealer':{'box': 'DealerBox', 'score': 'dealerScore', 'CurrentScore':0},
};
const YOU = BlackJack['you']
const DEALER = BlackJack['dealer']
const hitSound = new Audio('CARDS PIC\\Hit.mp3')

function BJhit(){
    ThrowCard(DEALER);
}

function ThrowCard(CardThrowTurn){
    let yourCards = document.createElement('img');
    document.getElementById(CardThrowTurn['box']).appendChild(yourCards);
    yourCards.src = randomCard ()['link'];
    hitSound.play();
}
function randomCard (){
    cards = {
        0: {'link':'CARDS PIC\\2.png', 'value':2},
        1: {'link':'CARDS PIC\\3.png', 'value':3},
        2: {'link':'CARDS PIC\\4.png', 'value':4},
        3: {'link':'CARDS PIC\\5.png', 'value':5},
        4: {'link':'CARDS PIC\\6.png', 'value':6},
        5: {'link':'CARDS PIC\\7.png', 'value':7},
        6: {'link':'CARDS PIC\\8.png', 'value':8},
        7: {'link':'CARDS PIC\\9.png', 'value':9},
        8: {'link':'CARDS PIC\\10.png', 'value':10},
        9: {'link':'CARDS PIC\\joker.jpg', 'value':11},
        10: {'link':'CARDS PIC\\Queen.jpg', 'value':12},
        11: {'link':'CARDS PIC\\King.jpg', 'value':13},
        12: {'link':'CARDS PIC\\A.png', 'value':14},
    }
    return cards[BJrand()];
}

function BJrand(){ return (Math.floor(Math.random() * 13))} ;

function deal(CardThrowTurn){ 
    userImgs = document.getElementById(CardThrowTurn['box']).getElementsByTagName('img');
    for (var i = 0; i < userImgs.length; i+1){
        userImgs[i].remove();}
}
