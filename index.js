document.getElementById("random1").innerText = Math.floor(Math.random() * 7);

document.getElementById("random2").innerText = Math.floor(Math.random() * 7);


let first = document.getElementById("random1").innerText;

let second = document.getElementById("random2").innerText;

function compare()
{
    if(first > second)
    {
        document.getElementById("main-heading").innerText = "Player 1 wins. "; 
    }
    else
    {
        document.getElementById("main-heading").innerText = "Player 2 wins. "; 
    }
}
compare();
