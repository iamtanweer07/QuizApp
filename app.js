const startButton = document.querySelector(".start_quiz_button");
const quizBox = document.querySelector(".quiz_box");
const ques_text = quizBox.querySelector(".ques_text");
const total_ques = document.querySelector(" .quiz_count .total_ques");
const ques_count = document.querySelector(" .quiz_count .ques_count");

const resultBox = document.querySelector(".result_box");
const totalQues = document.querySelector(".total_ques span");
const rightAns = document.querySelector(".right_ans span");
const wrongAns = document.querySelector(".wrong_ans span");
const percent = document.querySelector(".percentage span");

const restartQuiz = document.querySelector(".result_footer .restart_quiz");
const exitQuiz = document.querySelector(".result_footer .exit");

startButton.onclick = () => 
{
  quizBox.classList.remove("inactive_btn");
  startButton.classList.add("inactive_btn")
}


const options_list = quizBox.querySelector(".options_list");
const nextBtn = document.querySelector(".next_btn");


var queIndex = 0;
ques_count.innerText = queIndex+1;
showQuestion(queIndex);


function showQuestion(ques_index)

{
  ques_text.innerHTML = questionSet[ques_index].num+". "+ questionSet[ques_index].question;
  let option_state ="";
  
  for(var i=0; i<questionSet[ques_index].options.length;i++)
  {
    option_state += `<div class="option">${questionSet[ques_index].options[i]}</div>`;
  }
  
  options_list.innerHTML = option_state;

  var alloption = options_list.querySelectorAll(".option")
  for(var j=0; j<alloption.length;j++){
  alloption[j].setAttribute("onclick","userAnswer(this)");
  
  }
  nextBtn.classList.add("inactive_btn");

}

nextBtn.onclick = () => 
{
  queIndex++;
  
  if(questionSet.length> queIndex){
    ques_count.innerText = queIndex+1;
    showQuestion(queIndex);
  }else{
    console.log("Question Complete");
    quizBox.classList.add("inactive_btn");
    resultBox.classList.remove("inactive_btn");
    rightAns.innerText = rightans;
    wrongAns.innerText = wrongans;
    percent.innerText = ((rightans*100)/questionSet.length).toFixed(2)+"%";
  }
  if(questionSet.length-1==queIndex){
    nextBtn.innerText = "Finish";
  }
}

function userAnswer(answer){
  let userAns = answer.innerText;
  let correctAns = questionSet[queIndex].answer;
  var alloption1 = options_list.querySelectorAll(".option");
  
  nextBtn.classList.remove("inactive_btn");

  if(userAns == correctAns){
    console.log("%c right", "color: green");
    answer.classList.add("wright");
    rightans++;

  }else{
    console.log("%c wroung", "color: red")
    answer.classList.add("wroung");
    wrongans++;
    
    for(var i=0; i<alloption1.length;i++){
      if(alloption1[i].innerText==correctAns){
      alloption1[i].classList.add("wright")
      }
    }

  }
  for(var j=0; j<alloption1.length;j++){
    alloption1[j].classList.add("disableClick");
  }
}

var rightans = 0;
var wrongans = 0;

total_ques.innerText = questionSet.length;
ques_count.innerText = queIndex+1;

totalQues.innerText = questionSet.length;


restartQuiz.onclick=() => 
{
  quizBox.classList.remove("inactive_btn");
  resultBox.classList.add("inactive_btn");
  reset();

}

 function reset()
 {
  queIndex = 0;
  rightans = 0;
  wrongans = 0;
  ques_count.innerText = queIndex+1;
  showQuestion(queIndex);
  nextBtn.innerText = "Next";
 }

   exitQuiz.onclick=() => 
  {
   startButton.classList.remove("inactive_btn");
   resultBox.classList.add("inactive_btn");
   reset();
  }