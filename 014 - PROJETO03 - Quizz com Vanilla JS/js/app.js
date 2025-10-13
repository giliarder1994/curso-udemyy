// DECLARAÇÃO DE VARIAVEIS

const question = document.querySelector("#question")
const answersBox = document.querySelector("#answers-box")
const quizzContainer = document.querySelector("#quizz-container")
const scoreContainer = document.querySelector("#score-container")
const letters = ["a", "b", "c", "d"]
let points = 0
let actualQuestion = 0

// Perguntas
const questions = [
  {
    "question": "PHP foi desenvolvido para qual fim?",
    "answers": [
      {
        "answer": "back-end",
        "correct": true
      },
      {
        "answer": "front-end",
        "correct": false
      },
      {
        "answer": "Sistema operacional",
        "correct": false
      },
      {
        "answer": "Banco de dados",
        "correct": false
      },
    ]
  },
  {
    "question": "Uma forma de declarar variável em JavaScript:",
    "answers": [
      {
        "answer": "$var",
        "correct": false
      },
      {
        "answer": "var",
        "correct": true
      },
      {
        "answer": "@var",
        "correct": false
      },
      {
        "answer": "#let",
        "correct": false
      },
    ]
  },
  {
    "question": "Qual o seletor de id no CSS?",
    "answers": [
      {
        "answer": "#",
        "correct": true
      },
      {
        "answer": ".",
        "correct": false
      },
      {
        "answer": "@",
        "correct": false
      },
      {
        "answer": "/",
        "correct": false
      },
    ]
  },
]

// SUBSTITUIÇÃO DO QUIZZ PARA A PRIMEIRA PERGUNTA
function init(){
    //CRIAR A PRIMEIRA PERGUNTA
    createQuestion(0)
}

// CRIA UMA PERGUNTA
function createQuestion(i){

    // LIMPAR A QUESTÃO ANTERIOR
    const oldButtons = answersBox.querySelectorAll("button")

    oldButtons.forEach(function(btn) {
        btn.remove()
    })

    //ALTERAR O TEXTO DA PERGUNTA
    const questionText = question.querySelector("#question-text")
    const questionNumber = question.querySelector("#question-number")

    questionText.textContent = questions[i].question
    questionNumber.textContent = i + 1

    // INSERIR AS ALTERNATIVAS
    questions[i].answers.forEach(function(answer, i){

        // CRIA O TEMPLATE DO BOTÃO DO QUIZZ
        const answerTemplate = document.querySelector(".answer-template").cloneNode(true)

        const letterBtn = answerTemplate.querySelector(".btn-letter")
        const answerText = answerTemplate.querySelector(".question-answer")

        letterBtn.textContent = letters[i]
        answerText.textContent = answer["answer"]

        answerTemplate.setAttribute("correct-answer", answer["correct"])

        //REMOVER HIDE E TEMPLATE CLASS
        answerTemplate.classList.remove("hide")
        answerTemplate.classList.remove("answer-template")

        // INSERIR A ALTERNATIVA NA TELA
        answersBox.appendChild(answerTemplate)

        // INSERIR UM EVENTO DE CLICK NO BOTÃO
        answerTemplate.addEventListener("click", function(){
          checkAnswer(this)
        })

    })

    // INCREMENTAR O NÚMERO DE QUESTÃO
    actualQuestion++

}

// VERIFICANDO RESPOSTA DO USUÁRIO
function checkAnswer(btn){

  // SELECIONAR TODOS OS BOTÕES
  const buttons = answersBox.querySelectorAll("button")

  //VERIFICA SE A RESPOSTA ESTÁ CORRETA E ADICIONA CLASSES AOS BOTOES
  buttons.forEach(function(button){

    if(button.getAttribute("correct-answer") === "true"){

      button.classList.add("correct-answer")

      //CHECA SE O USUARIO ACERTOU A PERGUNTA
      if(btn === button){
        //INCREMENTO DOS PONTOS
        points++
      }

    }else{

      button.classList.add("wrong-answer")

    }
  })

  // EXIBIR PRÓXIMA PERGUNTA
  nextQuestion()

}

// EXIBE A PROXIMA PERGUNTA
function nextQuestion(){

  // TIMER PARA USUARIO VER AS RESPOSTAS 
  setTimeout(function(){

    // VERIFICA SE AINDA HÁ PERGUNTAS
    if(actualQuestion >= questions.length){
      
      //APRESENTA A MSG DE SUCESSO
      showSucccessMessage()
      return
    }

    createQuestion(actualQuestion)

  }, 700)
}

// EXIBE A TELA FINAL
function showSucccessMessage(){

  hideOrShowQuizz()

  // TROCAR DADOS DA TELA DE SUCESSO

  // CALCULAR SCORE
  const score = ((points / questions.length) * 100).toFixed(2)

  const displayScore = document.querySelector("#display-score span")

  displayScore.textContent = score.toString()

  //ALTERAR O NUMERO DE PERGUNTAS CORRETAS
  const correctAnswers = document.querySelector("#correct-answers")
  correctAnswers.textContent = points

  //ALTERAR O TOTAL DE PERGUNTAS
  const totalQuestions = document.querySelector("#questions-qty")
  totalQuestions.textContent = questions.length
}

//MOSTRA OU ESCONDE O SCORE
function hideOrShowQuizz(){
  quizzContainer.classList.toggle("hide")
  scoreContainer.classList.toggle("hide")
}

//REINICIAR QUIZZ
const restartBtn = document.querySelector("#restart")

restartBtn.addEventListener("click", function(){

  //ZERAR O JOGO
  actualQuestion = 0
  points = 0
  hideOrShowQuizz()
  init()
})

// INICIALIZAÇÃO DO QUIZZ
init()