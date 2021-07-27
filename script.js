// My attempt at creating a personalised prompt greeting
alert("Hello!");

const person = prompt("What's your name?"); {
    if (person != null)
        response = prompt("Hello " + person + "! How are you today?");
    if (response == "good") {
        alert("That's great to hear!");
    } else if (response == "bad") {
        alert("Sorry to hear that, here's a pick me up, What do the mafia and the pussy have in common? One slip of the tongue, and you’re in deep shit.");
    } else {
        alert("Input either good or bad please, this is a simple program :P");
    }

    document.getElementById("welcome-text");
}


// Only Date display

//assign variable to dociment selector for date and time
const dateTime = document.getElementById("only-date")

let obj = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',

}

let date = new Date();
let dateFormat = new Intl.DateTimeFormat('en', obj);
console.log(dateFormat.format(date));

//assign variable to format date

let displayDate = dateFormat.format(date);
dateTime.textContent = displayDate;

//live-time
setInterval(liveTime, 1000);

function liveTime() {
    const today = new Date();
    document.getElementById("only-time").innerHTML = today.toLocaleTimeString();
}
// var hours = today.getHours();
// var minutes = today.getMinutes();