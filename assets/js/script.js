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
  document.querySelectorAll('.answer').forEach(answer => {
    answer.addEventListener('click', function() {
      activateRadio(this);
    });
  });
  
/*   function activateNextBtn() {
    const btnNext = document.querySelector('.quiz__btn');
    const items = [...document.querySelectorAll('.answer')];
    const cross = document.querySelector('.cross-circle');
  
    if (items.some(i => i.classList.contains('selected'))) {
        btnNext.setAttribute('class', 'start__btn quiz__btn quiz__btn--active');
        cross.classList.add('cross-circle--active');
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
        activateNextBtn();
  });
   */