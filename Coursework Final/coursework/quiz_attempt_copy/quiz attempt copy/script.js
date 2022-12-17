//The questions stored as an object
const questions = [{
    id: 0,
    question: "What is the not mentioned as an ingredient in traditional Italian pizza?",
    answers:
        [{ text: "Cheese", isCorrect: false },
        { text: "Meat", isCorrect: false },
        { text: "Pineapple", isCorrect: true },
        { text: "Oil", isCorrect: false }
        ],
    correctAnswer: "Pineapple"

},

{
    id: 1,
    question: "Which region of Italy is the Cinque Terre located in?",
    answers:
        [{ text: "East", isCorrect: false },
        { text: "North West", isCorrect: true },
        { text: "South", isCorrect: false },
        { text: "North East", isCorrect: false }
        ],
    correctAnswer: "North West"

},

{
    id: 2,
    question: "What is the capacity of the Colosseum?",
    answers:
        [{ text: "50,000", isCorrect: true },
        { text: "25,000", isCorrect: false },
        { text: "10,000", isCorrect: false },
        { text: "100,000", isCorrect: false }
        ],
    correctAnswer: "50,000"

},



{
    id: 3,
    question: "What does each level of the Leaning Tower of Pisa contain?",
    answers:
        [{ text: "Bells", isCorrect: true },
        { text: "Statue", isCorrect: false },
        { text: "Painting", isCorrect: false },
        { text: "Flowers", isCorrect: false }
        ],
    correctAnswer: "Bells"

}

]

//generate the quiz

//Inserting the options as variables from the html

const optionA = document.getElementById('optionA');
const optionB = document.getElementById('optionB');
const optionC = document.getElementById('optionC');
const optionD = document.getElementById('optionD');

var width;
var begin = true;
var Score = 0;
var answercount = [
    [0, 0],
    [1, 0],
    [2,0],
    [3,0],
    [4,0],
    [5,0]
]
var result = document.getElementsByClassName("result");
var userChoice = "";


//function to style a progress bar and generate the quiz options into the boxes and change colour when clicked
function generateQuiz(id) {
    var currentQuestion = questions[id].id;
    var progress = (currentQuestion + 1) / questions.length * 100;

    document.getElementById("progress").style.width = progress + "%";
    document.getElementById("progress").innerHTML = progress + "%";
    result[0].innerText = "";
    const quizQuestion = document.getElementById("question");
    quizQuestion.innerText = questions[id].question;


    optionA.innerText = questions[id].answers[0].text;
    optionB.innerText = questions[id].answers[1].text;
    optionC.innerText = questions[id].answers[2].text;
    optionD.innerText = questions[id].answers[3].text;

    optionA.value = questions[id].answers[0].isCorrect;
    optionB.value = questions[id].answers[1].isCorrect;
    optionC.value = questions[id].answers[2].isCorrect;
    optionD.value = questions[id].answers[3].isCorrect;


    optionA.addEventListener("click", () => {
        optionA.style.backgroundColor = "#9e9e9e";
        optionA.style.color = "black";
        optionB.style.backgroundColor = "#d190cf";
        optionB.style.color = "#fff";
        optionC.style.backgroundColor = "#eea990";
        optionC.style.color = "#fff";
        optionD.style.backgroundColor = "#fdc600";
        optionD.style.color = "#fff";
        userChoice = optionA.value;
    })

    optionB.addEventListener("click", () => {
        optionA.style.backgroundColor = "#92c1ca";
        optionA.style.color = "#fff";
        optionB.style.backgroundColor = "#9e9e9e";
        optionB.style.color = "black";
        optionC.style.backgroundColor = "#eea990";
        optionC.style.color = "#fff";
        optionD.style.backgroundColor = "#fdc600";
        optionD.style.color = "#fff";
        userChoice = optionB.value;
    })


    optionC.addEventListener("click", () => {
        optionA.style.backgroundColor = "#92c1ca";
        optionA.style.color = "#fff";
        optionB.style.backgroundColor = "#d190cf";
        optionB.style.color = "#fff";
        optionC.style.backgroundColor = "#9e9e9e";
        optionC.style.color = "black";
        optionD.style.backgroundColor = "#fdc600";
        optionD.style.color = "#fff";
        userChoice = optionC.value;
    })


    optionD.addEventListener("click", () => {
        optionA.style.backgroundColor = "#92c1ca";
        optionA.style.color = "#fff";
        optionB.style.backgroundColor = "#d190cf";
        optionB.style.color = "#fff";
        optionC.style.backgroundColor = "#eea990";
        optionC.style.color = "#fff";
        optionD.style.backgroundColor = "#9e9e9e";
        optionD.style.color = "black";
        userChoice = optionD.value;
    })
}


//Button to submit and confirm users answer for the question



if (begin) {
    generateQuiz(0);

}
const check = document.getElementsByClassName("check");

check[0].addEventListener("click", () => {
    if (userChoice == "true" && answercount[id][1] >= 1) {
        result[0].innerHTML = "Answered Already Score not effected"
        result[0].style.color = "orange";
    }
    else if (userChoice == "true" && answercount[id][1] == 0) {
        result[0].innerHTML = "Correct Score + 1";
        result[0].style.color = "green";
        Score++;
        answercount[id][1] += 1;
    }
    else {
        result[0].innerHTML = ("Incorrect. The correct answer is: " + questions[id].correctAnswer);
        result[0].style.color = "red";
        answercount[id][1] += 1;
        console.log(answercount[id][0]);
    }
})
//Button for going to the next question and restyling the options 

const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {

    optionA.style.backgroundColor = "#92c1ca";
    optionB.style.backgroundColor = "#d190cf";
    optionC.style.backgroundColor = "#eea990";
    optionD.style.backgroundColor = "#fdc600";
    optionA.style.color = "#fff";
    optionB.style.color = "#fff";
    optionC.style.color = "#fff";
    optionD.style.color = "#fff";

    start = false;

    if (id >= questions.length - 1) {
        alert("The quiz is over! Your score: " + Score);
        return;
    }
    else {
        id++;
        generateQuiz(id);
        console.log(id);
    }


})

//Button to return to previous question and restyle the options to deselect any options user has clicked 

const prev = document.getElementsByClassName('prev')[0];
prev.addEventListener("click", () => {
    optionA.style.backgroundColor = "#92c1ca";
    optionB.style.backgroundColor = "#d190cf";
    optionC.style.backgroundColor = "#eea990";
    optionD.style.backgroundColor = "#fdc600";
    optionA.style.color = "#fff";
    optionB.style.color = "#fff";
    optionC.style.color = "#fff";
    optionD.style.color = "#fff";
    start = false;
    if (id > 0) {
        id--;
        generateQuiz(id);
        console.log(id);
    }

})





