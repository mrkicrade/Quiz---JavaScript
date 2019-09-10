function Quiz(questions){ // ovaj kviz zavisi od pitanja.
    this.questions = questions; 
    this.score = 0;
    this.index = 0;
    this.getCurentQuestion = function(){
        return this.questions[this.index] // ne moze bez this-a. Sa thisom trazi iz objekta a bez thisa iz varijable
    };
    this.questionAnswer = function(answer){ //ovaj answer je ono sta je korisnik kliknuo
        if (answer == this.getCurentQuestion().answer) {
            this.score += this.getCurentQuestion().point;            
        }
        this.index++;
        console.log(this.index);
        if (this.index == questions.length) {
            footer.innerHTML = 'Pitanje broj ' + this.index + '. ' + 'Ostvareni broj bodova je ' + this.score + '.'; 
        } else {
            footer.innerHTML = 'Pitanje broj ' + (this.index + 1) + '. ' + 'Ostvareni broj bodova je ' + this.score + '.'; 
        }
    };
    this.isEnd = function(){
        if (this.index == this.questions.length) { // ovaj questions je nas array questions
            return true;
        }else {
            return false;
        }
    }
}