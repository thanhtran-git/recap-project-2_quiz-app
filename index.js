// Bookmark Button Toggle
const bookmarkBtn = document.querySelectorAll('[data-js="bookmark-btn"]'); // querySelectorAll selects all Elements from this class

// with querySelectorAll, a for each loop is needed to select all buttons
bookmarkBtn.forEach((bookmarkBtn) => {
  bookmarkBtn.addEventListener("click", () => {
    bookmarkBtn.classList.toggle("bookmark--active");
  });
});

// Show and hide answer and accoring button text
const showAnswerBtn = document.querySelectorAll('[data-js="show-answer-btn"]');
const answer = document.querySelectorAll('[data-js="card-Answer"]');

//we have to loop through all show-answer buttons AND all answers, so a second index is required in the for-each loop
showAnswerBtn.forEach((showAnswerBtn, answerIndex) => {
  showAnswerBtn.addEventListener("click", () => {
    if (answer[answerIndex].classList.contains("card__answer--active")) {
      showAnswerBtn.innerText = "Show answer";
    } else {
      showAnswerBtn.innerText = "Hide answer";
    }
    answer[answerIndex].classList.toggle("card__answer--active");
  });
});
