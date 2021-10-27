const quizData = [
    {
        question: 'Inside which HTML element do we put the JavaScript (choose one)'
        a: '<scripting>',
        b: '<js>',
        c: '<javascript>',
        d: '<script>',
        correct: 'script'

    },
    {
        question: 'iii.	The external JavaScript file must contain the <script> tag (check all that apply)'
        a: 'True',
        b: 'False',
        c: 'None',
        d: 'Both',
        correct: 'True'

    },
    {
        question: 'iv.	How do you write "Hello World" in an alert box? (Select option)'
        a: '1.	Alert(“Hello World”);',
        b: '2.	alertBox(“Hello World”);',
        c: '3.	msg(“Hello World”);',
        d: '4.	msgBoxl(“Hello World”);',
        correct: 'msg("Hello World");'

    },
];
const quiz = document.getElementaryByID("quiz");
const answerEls = document.querySelectorAll("answer");
const answerEls = document.queryElementaryById("question");
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBTN = document.getElementById('submit');



let currentQuiz= 0;
let score = 0;

loadQuiz();

function loadQuiz()
{
   const currenQuiz = quizDATA[currentQuiz];
    deselectAnswers();
    
    const currentQuizData = quizData[currentQuiz];

    questionE1.innerHtml = quizDatA.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;


  

}
function getSelected() {
 

    let answer = undefined;

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    }
    );
    return answer;
}
function deselectAnswers() {
    answerEls.forEach(answerEl) => {
        answerEl.checked = false;
    }
}

submitBTN.addEventListener('click', () => {
    //check to see the answer
    const answer = getSelected();
   
    if(answer) {
        if( answer === quiz[currentQuiz].correct)
        {
            score++;
        }
    }
    currentQuiz++;
    if(currentQuiz < quizData.length)
    {
        loadQuiz();
    }
    else{
        quiz.innerHtml = 
        <h2> You answered correctly at ${score}
        /${quizData.length} questions.</h2>
        
        <button onclick="location.reload()">reload</button>

        
    }

   
    }


});