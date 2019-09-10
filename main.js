let h2 = document.querySelector('h2');
let options = document.querySelectorAll('.option');
let footer = document.querySelector('#footer');
let btn = document.querySelectorAll('.btn');
let select = document.querySelector('#select');
let wrapp = document.querySelector('#wrapp');
let move = document.querySelector('#move');

move.addEventListener('click' , function(){
    location.reload();
})



startQuiz();

move.style.display = 'none';

function startQuiz (){
    footer.innerHTML = 'Pitanje broj 1. Ostvareni broj bodova je 0.';
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click' , begin)
    }

    function begin(){
        if (this.id == 'sport') {
           sport()     
        } else if(this.id == 'it'){
           it()     
        } else {
            istorija()
        }
    }

    function sport(){
        select.style.display = 'none';    
        wrapp.style.display = 'block';
        move.style.display = 'block';
        let questionsSport = questions.filter(function(qSport){
            return qSport.category === 'sport' 
        });
        let quiz = new Quiz(questionsSport);
        start(quiz);
    }

    function it(){
        select.style.display = 'none';    
        wrapp.style.display = 'block';
       move.style.display = 'block';
         let questionsIt = questions.filter(function (qIt) {
             return qIt.category === 'IT'
         });
         let quiz = new Quiz(questionsIt);
         start(quiz);
    }

    function istorija(){
        select.style.display = 'none';   
        wrapp.style.display = 'block';
        move.style.display = 'block';
         let questionsIstorija = questions.filter(function (qIstorija) {
             return qIstorija.category === 'Istorija'
         });
         let quiz = new Quiz(questionsIstorija);
         start(quiz);
    }

    // FUNCTION START

    function start(quiz){    
        if (!quiz.isEnd()) {
            let cq = quiz.getCurentQuestion();
            h2.innerHTML = cq.text;
            for (let i = 0; i < options.length; i++) {
                options[i].innerHTML = cq.answers[i]
                options[i].onclick = function(){
                    answer = this.innerHTML;
                    userAnswer(quiz);
                }                   
            }
        } else {
            setTimeout(function(){
               alert('Ukupan broj bodova je: ' + quiz.score) 
           } , 1000)
        } 
    }

    function userAnswer(quiz){
        quiz.questionAnswer(answer); 
        start(quiz);
    }
}