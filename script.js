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
    let Q6 = prompt("Guess a #");

    let number = parseInt(Q6);
    for(let i = 0; i < 4; i++) {
        while (isNaN(number)){
           number = prompt("Must enter valid number.")
        }

        if (number < 25) {
            number = prompt("Too low try again");
        }else if(number > 25) { 
            number = prompt("Too high try again");
        }else{
            alert("Hey you got it");
            corrects++;
            break;
        }
    }

    // array question
    let foundAnswer = false;
    let arr = ["Watch Dogs", "Assassin's Creed", "Sekiro:Shadows die twice", "Shadow of Mordor:War", "Elden Ring", "One Piece:Pirate Warriors 4"]
    for(let i = 0; i < 6; i++) {
        if(foundAnswer) {
            break;
        }else{
            namegame();
        }
    }

    if(!foundAnswer) {
        alert("You call yourself a gamer?");
    }

    function namegame() {
        let Q7 = prompt("Name one of my favorite games.") 
        for(let i = 0; i < arr.length; i++) {
            // arr[0] arr[1] arr[i]
            if(arr[i] == Q7){
                alert("How'd you know?")
                corrects++;
                foundAnswer = true;
                break;
            } 
        }
    }

    alert(`You made it through! ${corrects}/7`);
}

const quiz = document.querySelector(".quiz")
// Class list targets anything in the =>()
// Toggle is an on & off switch
function quiztime() {
    quiz.classList.toggle("expand");
    
}
window.onload = function () {
  
    var questionArea = document.getElementsByClassName('questions')[0],
        answerArea   = document.getElementsByClassName('answers')[0],
        checker      = document.getElementsByClassName('checker')[0],
        current      = 0,
    
       // An object that holds all the questions + possible answers.
       // In the array --> last digit gives the right answer position
        allQuestions = {
          'What is the purpose of a for loop?' : ['To execute a block of code repeatedly', 'To declare a variable', 'To define a function','To handle exceptions', 0],
          
          'Who was the main character in the Assassins Creed series?' : ['Ezio Auditore da Firenze', 'Altair Ibn-La Ahad' , 'Desmond Miles', 'Connor Kenway', 2],
          
          'What is the name of Luffys brother, who is also a member of the Revolutionary Army? ' : ['Ace', 'Dragon', 'Sabo', 'Koby', 2]


        };
        
    function loadQuestion(curr) {
    // This function loads all the question into the questionArea
    // It grabs the current question based on the 'current'-variable
    
      var question = Object.keys(allQuestions)[curr];
      
      questionArea.innerHTML = '';
      questionArea.innerHTML = question;    
    }
    
    function loadAnswers(curr) {
    // This function loads all the possible answers of the given question
    // It grabs the needed answer-array with the help of the current-variable
    // Every answer is added with an 'onclick'-function
    
      var answers = allQuestions[Object.keys(allQuestions)[curr]];
      
      answerArea.innerHTML = '';
      
      for (var i = 0; i < answers.length -1; i += 1) {
        var createDiv = document.createElement('div'),
            text = document.createTextNode(answers[i]);
        
        createDiv.appendChild(text);      
        createDiv.addEventListener("click", checkAnswer(i, answers));
        
        
        answerArea.appendChild(createDiv);
      }
    }
    
    function checkAnswer(i, arr) {
      // This is the function that will run, when clicked on one of the answers
      // Check if givenAnswer is sams as the correct one
      // After this, check if it's the last question:
      // If it is: empty the answerArea and let them know it's done.
      
      return function () {
        var givenAnswer = i,
            correctAnswer = arr[arr.length-1];
        
        if (givenAnswer === correctAnswer) {
          addChecker(true);             
        } else {
          addChecker(false);                        
        }
        
        if (current < Object.keys(allQuestions).length -1) {
          current += 1;
          
          loadQuestion(current);
          loadAnswers(current);
        } else {
          questionArea.innerHTML = 'Done';
          answerArea.innerHTML = '';
        }
                                
      };
    }
    
    function addChecker(bool) {
    // This function adds a div element to the page
    // Used to see if it was correct or false
    
      var createDiv = document.createElement('div'),
          txt       = document.createTextNode(current + 1);
      
      createDiv.appendChild(txt);
      
      if (bool) {
        
        createDiv.className += 'correct';
        checker.appendChild(createDiv);
      } else {
        createDiv.className += 'false';
        checker.appendChild(createDiv);
      }
    }
    
    
    // Start the quiz right away
    loadQuestion(current);
    loadAnswers(current);
    
  };





