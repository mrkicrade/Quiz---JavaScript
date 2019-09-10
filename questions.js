function Question(text, answers, answer, category, point){
    this.text = text;
    this.answers = answers;
    this.answer = answer;
    this.category = category;
    this.point = point;
}

let questions = [
    new Question('Boj na Kosovu je bio', ['1171', '1371', '1389', '1426'], '1389', 'Istorija', 5),
    new Question('Prvi Ustav Srbije se zvao?', ['Sretenjski', 'Vidovdanski', 'Narodni', 'Knežev'], 'Sretenjski', 'Istorija', 8),
    new Question('Vodja drugog Srpskog ustanka je bio?', ['Karadjordje Petrović', 'Milan Obrenović', 'Jakov Nenadović', 'Milos Obrenović'], 'Milos Obrenović', 'Istorija', 9),
    new Question('Atentat u Marseju se dogodio?', ['1929', '1934', '1941', '1939'], '1934', 'Istorija', 7),
    new Question('Poslednji Nemanjić je?', ['Uroš veliki', 'Dušan', 'Stefan', 'Uroš nejaki'], 'Uroš nejaki', 'Istorija', 10),
    new Question('Najrasprostranjeniji script programski jezik?', ['PHP', 'JavaScript', 'Java', 'Pyton'], 'JavaScript', 'IT', 10),
    new Question('Šta je od navedenog izlazni uredjaj?', ['Tastatura', 'Miš', 'Štampac', 'Modem'], 'Štampac', 'IT', 8),
    new Question('Najrasprostranjeniji operativni sistem je?', ['Linux', 'Windows', 'Mac', 'Android'], 'Windows', 'IT', 6),
    new Question('Program za rad sa bazama podataka je?', ['SQL', 'Java', 'jQuery', 'React'], 'SQL', 'IT', 9),
    new Question('Kapacitet memorije se meri u?', ['Bajtovima', 'Kilo bajtovima', 'Giga bajtovima', 'Bitovima'], 'Giga bajtovima', 'IT', 7),
    new Question('Najpopularniji klub u Srbiji?', ['Crvena zvezda', 'Partizan', 'Vojvodina', 'Napredak'], 'Crvena zvezda', 'sport', 10),
    new Question('Navijači Crvene zvezde se zovu?', ['Junaci', 'Delije', 'Cigani', 'Astrolozi'], 'Delije', 'sport', 5),
    new Question('SFRJ je na Mondijalu u Italiji 1990.godine zauzela?', ['Treće mesto', 'Osmo mesto', 'Deseto mesto', 'Peto mesto'], 'Peto mesto', 'sport', 8),
    new Question('Sport u vodi sa loptom se zove?', ['Polo', 'Vaterpolo', 'Vodeni fudbal', 'Plivanje sa loptom'], 'Vaterpolo', 'sport', 9),
    new Question('Marko Jarić je?', ['Fudbaler', 'Rukometaš', 'Teniser', 'Košarkaš'], 'Košarkaš', 'sport', 6),
];