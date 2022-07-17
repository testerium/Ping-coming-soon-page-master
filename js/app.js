//Deklaracja zmiennej form
const form = document.getElementById('form');

//Nasłuchuje eventu wciśnięcia przycisku "Notify me" w formularzu 
//Zapobiega domyślnej akcji wybranego elementu przed działaniem użytkownika
//Wywołuje event: funkcję checkInputs
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});


// Deklaracje funkcji 
function checkInputs() {
    //Deklaracja zmiennych w funkcji
    const email = document.getElementById('email');

    //Pobranie wartości pola email, trim usuwa białe znaki z początku i końca tekstu 
    const emailValue = email.value.trim();

    //Definiuje errorContainer (div z powiadomieniem o błędzie), dociera do parenta pola email, czyli do formularza
    let errorContainer = email.parentElement.querySelector('.error_text');

    //Zdejmuje klasę error z pola email, znika czerwone obramowanie pola
    email.classList.remove('error');

    //Zdejmuje klasę active z pola errorContainer, znika powiadomienie
    errorContainer.classList.remove('active');

    //Funkcja sprawdza czy wpisana w pole wartość nie jest pusta. Jeśli jest - wyświetla komunikat
    if (emailValue === '') {
        setErrorFor(email, 'Whoops! It looks like you forgot to add your email');
        //Kończy funkcję
        return;
    }

    //Funkcja sprawdza czy wpisana w pole wartość zawiera znaki typowe dla adresu email. Jeśli nie zawiera znaków zadeklarowanych w regExp - wyświetla komunikat
    let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;

    if (!regExp.test(emailValue)) {
        setErrorFor(email, "Please provide a valid email address!");
        //Kończy funkcję
        return;
    }
}

//Funkcja dodaje klasę error w polu input (email), pojawia się czerwone obramowanie pola i komunikat
function setErrorFor(input, message) {
    input.classList.add('error');

    //Definiuje errorContainer (div z powiadomieniem), dociera do parenta pola email, czyli do formularza
    //Ustawia zawartość tekstową pola
    //Nadaje klasę active dla pola errorContainer, pojawia się powiadomienie
    let errorContainer = input.parentElement.querySelector('.error_text');
    errorContainer.textContent = message;
    errorContainer.classList.add('active');
}