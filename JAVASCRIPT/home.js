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

function GetCats(){
    var cat_pic = document.createElement("img");
    var link = 'https://source.unsplash.com/random/300x200?sig=${Math.random()}' ;
    document.getElementById("CatBox").appendChild(cat_pic) ;
    cat_pic.src = link;
    link.remove();
}

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