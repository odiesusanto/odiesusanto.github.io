var listofanswers = [
    "It is certain.", 
    "It is decidedly so.", 
    "Without a doubt.", 
    "Yes, definitely.", 
    "You may rely on it.", 
    "As I see it, yes.", 
    "Most likely.", 
    "Outlook good.", 
    "Yes.", 
    "Signs point to yes.", 
    "Reply hazy, try again.", 
    "Ask again later.", 
    "Better not tell you now.", 
    "Cannot predict now.", 
    "Concentrate and ask again.", 
    "Don't count on it.", 
    "My reply is no.", 
    "My sources say no.", 
    "Outlook not so good.", 
    "Very doubtful."
    ];
 
var modal = document.getElementById('myModal');

var button = document.getElementById("answerqs");

var span = document.getElementsByClassName("close")[0];

button.onclick = function() {
    var answers = listofanswers[Math.floor(Math.random()*listofanswers.length)];
    document.getElementById("answerme").innerHTML = answers;
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
