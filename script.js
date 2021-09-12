const storedData = [
    {
        question: "What colour is the sky?",
        a: "Blue",
        b: "Green",
        c: "Purple",
        d: "Brown",
        correct: "a",
    },
    {
        question: "What colour is an Egg plant?",
        a: "Blue",
        b: "Green",
        c: "Purple",
        d: "Brown",
        correct: "c",
    }
]
 const quiz = document.getElementById("quiz")
 const answers = document.querySelectorAll(".answer")
 const question = document.getElementById("question")
 const a_text = document.getElementById("a-text")
 const b_text = document.getElementById("b-text")
 const c_text = document.getElementById("c-text")
 const d_text = document.getElementById("d-text")
 const submit = document.getElementById("submit")

 let currentQuiz = 0
 let score = 0

 loadQuiz()

 function loadQuiz(){
    deselect()

    const quizData = storedData[currentQuiz]

    question.innerText = quizData.question
    a_text.innerText = quizData.a
    b_text.innerText = quizData.b
    c_text.innerText = quizData.c
    d_text.innerText = quizData.d
 }

 function getSelected(){
    let select = undefined

    answers.forEach((answers) => {
        select = answers.id
    })
    return select
 }

 function deselect(){
    answers.forEach((answers) => {
        answers.checked = false
    })
 }

 submit.addEventListener("click", () =>{
     const select = getSelected()

     if(select){
         if(select === storedData[currentQuiz].correct){
             score++
             alert("correct")
         } else{
             alert("wrong")
         }
         currentQuiz++
         if (currentQuiz < storedData.length) {
            loadQuiz();
        }
     }
 })





