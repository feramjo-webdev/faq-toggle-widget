// using the selectors inside the element
const questions = document.querySelectorAll('.question');

questions.forEach(function (question) {
  //   console.log(question);
  const questionBtn = question.querySelector('.question-btn');
  //   console.log(questionBtn);

  questionBtn.addEventListener('click', function () {
    // console.log(question);
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove('show-text');
      }
    });
    question.classList.toggle('show-text');
  });
});

// transversing the DOM method (Bug alert - An open question does not close whenever another is opened.)
// const questionBtns = document.querySelectorAll('.question-btn');

// questionBtns.forEach(function (questionBtn) {
//   questionBtn.addEventListener('click', function (e) {
//     // console.log(e.target.parentElement);
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle('show-text');
//   });
// });
