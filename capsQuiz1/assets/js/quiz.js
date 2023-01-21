class Quiz {
    constructor(questions) {
      this.score = 0;
      this.questions = questions;
      this.questionIndex = 0;
    }

    getQuestionIndex() {
      return this.questions[this.questionIndex];
    }

    guess(answer) {
      if (this.getQuestionIndex().isCorrectAnswer(answer)) {
          this.score++;
      }
      this.questionIndex++;
    }

    isEnded() {
      return this.questionIndex === this.questions.length;
    }
  }
  
  // QUESTION CLASS
  class Question {
    constructor(text, choices, answer) {
      this.text = text;
      this.choices = choices;
      this.answer = answer;
    }

    isCorrectAnswer(choice) {
      return this.answer === choice;
    }
  }

  // DISPLAYING QUESTION
  function displayQuestion() {
    if (quiz.isEnded()) {
        showScores();
    } else {
      //SHOWING NEXT NEXT QUESTION
      let questionElement = document.getElementById("question");
      questionElement.innerHTML = quiz.getQuestionIndex().text;

      // SHOWING OPTIONS
      let choices = quiz.getQuestionIndex().choices;
      for (let i = 0; i < choices.length; i++) {
        let choiceElement = document.getElementById("choice" + i);
        choiceElement.innerHTML = choices[i];
        guess("bttn" + i, choices[i]);
      }

      showProgress();
    }
  };

  // GUESS FUNCTION
  function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
      quiz.guess(guess);
      displayQuestion();
    }
  }

  // SHOWING QUIZ PROGRESS
  function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let progressElement = document.getElementById("progress");
    progressElement.innerHTML = `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
  }


  // SHOWING SCORE
  function showScores() {
    let quizEndHTML = 
    `
    <h1>Exercise Completed</h1>
    <h2 id="score">You Scored: ${quiz.score} of ${quiz.questions.length}</h2>
    <div class="send-email mb-2 pb-2">
    <p>ScreenCap result, <br>then email to Admin</p>
    <a href="mailto:someone@example.com">Send</a>
    </div>
    `;
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHTML;
  }

  // CREATING QUIZ QUESTIONS
  let questions = [
    new Question(
      "Which of the following is NOT an HTML list type?", ["Ordered", "Outlined", "Description", "Unordered"], "Outlined"
    ),
    new Question(
      "Which tag formats the text in bold and has semantic value?",
      ["&ltp&gt", "&ltstrong&gt", "&ltb&gt", "&ltbold&gt"], "&ltstrong&gt"
    ),
    new Question(
      "Which is a JavaScript Framework?",
      ["Laravel", "React", "Django", "Sass"], "React"
    ),
    new Question(
      "What's the main idea behind CSS?",
      ["CSS is used to clarify which kind of content your page contains", "CSS is used to set the styling and look of your content and page", "CSS is used to add interactivity (e.g. send behind-the-scenes Http requests) to your page", "CSS is used in the 'backend' for storing data"], "CSS is used to set the styling and look of your content and page"
    ),
    new Question(
      "Which is a backend language?",
      ["HTML", "PHP", "REACT", "ALL"], "PHP"
    ),
    new Question(
      "Which is the best for Artificial Intelligence?",
      ["React", "Laravel", "Python", "Sass"], "Python"
    ),
    new Question(
      "How do you use CSS?",
      ["You set 'properties' and their values for HTML elements", "You set colors for HTML elements via the 'color' attribute", "You add extra .css files which are then loaded and understood automatically", "None of the above"], "You set 'properties' and their values for HTML elements"
    ),
    new Question(
      "HTML is a programming language.",
      ["True", "False", "Maybe", "Sometimes"], "False"
    ),
    new Question(
      "Which is a CSS Framework?",
      ["Materialize", "Bootstrap", "Foundation", "All"], "All"
    ),
    new Question(
      "HTML stands for?",
      ["Hyper Test Mailing List", "Hyper Text Marking Language", "Hyper Texting and Marking Language", "Hyper Text Markup Language"], "Hyper Text Markup Language"
    )
  ];

  let quiz = new Quiz(questions);

  // DISPLAYING QUESTION
  displayQuestion();

  // COUNTDOWN TIMER
  let time = 5.01;
  let quizTimeInMinutes = time * 60 * 60;
  quizTime = quizTimeInMinutes / 60;

  let counting = document.getElementById("count-down");

  function startCountdown() {
    let quizTimer = setInterval(function() {
      if (quizTime <= 0) {
          clearInterval(quizTimer);
          showScores();
      } else {
          quizTime--;
          let sec = Math.floor(quizTime % 60);
          let min = Math.floor(quizTime / 60) % 60;
          counting.innerHTML = `<i class="fas fa-clock"></i> ${min} : ${sec}`;
      }
    }, 1000)
  }

  startCountdown();