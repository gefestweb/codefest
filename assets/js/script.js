/* function handleSubmit(event) {
    event.preventDefault();
    const form = document.getElementById("quizForm");
    const selectedAnswer = form.elements["answer"].value;
    console.log("Выбранный ответ:", selectedAnswer);
    form.submit();
} */

/* function activateRadio(element) {
    const radio = element.querySelector('input[type="radio"]');
    radio.checked = true;
} */

function activateRadio(element) {
    const radio = element.querySelector('input[type="radio"]');

    radio.checked = true;
    const items = document.querySelectorAll('.answer');
    items.forEach(item => item.classList.remove('selected'));
    element.classList.add('selected');
}

/* function activateNextBtn () {
    const btnNext = document.querySelector('.quiz__btn');
    const items = document.querySelectorAll('.answer');
    const radios = document.querySelectorAll('input[type="radio"]');
    
    radios.forEach(radio => {
        
    })
} */