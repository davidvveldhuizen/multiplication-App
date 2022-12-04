let number1 = Math.ceil( Math.random() * 10);
let number2 = Math.ceil( Math.random() * 10);
let correctAnswer = number1 * number2;

let score = 0;
let mistakes = 0;

const scoreOutput = document.querySelector("#score");

const question = document.querySelector('#question');
question.innerHTML = `${number1} x ${number2} = ?`;

const input = document.querySelector('#input');

const submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', onsubmit);

function onsubmit(e){
  e.preventDefault();

  const answer = input.value;
  if(answer == correctAnswer){
    score += 1;

    number1 = Math.ceil( Math.random() * 10);
    number2 = Math.ceil( Math.random() * 10);
    correctAnswer = number1 * number2;
    question.innerHTML = `${number1} x ${number2} = ?`;
    console.log("correct");
  }else{
    mistakes ++;
  }
  input.value = "";
  scoreOutput.innerHTML = `score: ${score}`;
}
