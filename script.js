'use strict'

let name = prompt("Who are you?");

const z = document.querySelector("#Welcome");

function displayName(username) {
    if (username === null || username.length == 0) {

        z.innerHTML = 'Welcome';
    } else {
        z.innerHTML = `Welcome ${username}`;
    }
}

displayName(name);



let corrects = 0;
function startGame() {

    let Q1 = prompt("Can I do a 100 pushups?","y or n");

    if (Q1.toLowerCase() == 'y' || Q1.toLowerCase() == "yes") {
        alert("Correct"), corrects++;
    }else{
        alert("Incorrect")
    }
    let Q2 = prompt("Do I love anime?","y or n");

    if (Q2.toLowerCase() == 'y' || Q1.toLowerCase() == "yes") {
        alert("sou desu"), corrects++;
    }else{
        alert("machigatsu ta")
    }
    let Q3 = prompt("Do I sleep with a fan?","y or n");

    if (Q3.toLowerCase() == 'n' || Q1.toLowerCase() == "no") {
        alert("Correct"), corrects++;
    }else{
        alert("Incorrect")
    }
    let Q4 = prompt("Is rap my favorite music genre?","y or n");

    if (Q4.toLowerCase() == 'y' || Q1.toLowerCase() == "yes") {
        alert("Correct"), corrects++;
    }else{
        alert("Incorrect")
    }
    let Q5 = prompt("Should I quit this class?","y or n");

    if (Q5.toLowerCase() == 'n' || Q1.toLowerCase() == "no") {
        alert("Correct"), corrects++;
    }else{
        alert("Incorrect")
    }


    alert(`You made it through! ${corrects}/5`);
}



