function ageInDays () {
    var age = prompt("What is you current age") ;
    var days = age * 365 ;
    var h1 = document.createElement("h4");
    var text = document.createTextNode("You hve lived " + days + " days.");
    h1.setAttribute("id", "resultAge") ;
    document.getElementById("result-box").appendChild(h1);
    h1.appendChild(text);
}


function reset(){
    document.getElementById("resultAge").remove();
}

function GetCats(){
    var cat_pic = document.createElement("img");
    var link = "https://picsum.photos/200/300" ;
    document.getElementById("CatBox").appendChild(cat_pic) ;
    cat_pic.src = link;

}