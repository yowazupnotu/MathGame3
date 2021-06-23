player1 = localStorage.getItem("player1name");
player2 = localStorage.getItem("player2name");
document.getElementById("player1name").innerHTML = player1 + ":";
document.getElementById("player2name").innerHTML = player2 + ":";

player1score = 0;
player2score = 0;
document.getElementById("player1score").innerHTML = player1score;
document.getElementById("player2score").innerHTML = player2score;

questionturn = player1;
answerturn = player2;
document.getElementById("question").innerHTML = questionturn;
document.getElementById("answer").innerHTML = answerturn;

function send() {
number1 = document.getElementById("number1").value;
number2 = document.getElementById("number2").value;
answer = parseInt(number1) * parseInt(number2);

question = "<h4>" + number1 + " X" + " " + number2 + "</h4>";
input = "<br> Answer - <input type='number' placeholder='Your Guess' id='inputcheckbox'>";
btn = "<br><br><button id='sendbtn' class='btn btn-info' onclick='check()'>Check</button>";
row = question + input + btn;
document.getElementById("output").innerHTML = row;

document.getElementById("number1").value = "";
document.getElementById("number2").value = "";
}

