function handleSubmit(event) {
    event.preventDefault();
    const form = document.getElementById("quizForm");
    const selectedAnswer = form.elements["answer"].value;
    console.log("Выбранный ответ:", selectedAnswer);
    form.submit();
}

function activateRadio(element) {
    const radio = element.querySelector('input[type="radio"]');
    radio.checked = true;
}

function activateRadio(element) {
    const radio = element.querySelector('input[type="radio"]');
    radio.checked = true;

    const items = document.querySelectorAll('.answers__item');
    items.forEach(item => item.classList.remove('selected'));
    element.classList.add('selected');
}