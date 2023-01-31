const questionsList = document.querySelector(".questions");

const questions = [
  {
    caption: "Подія натискання на елемент називається click?",
    correctAnswer: true,
  },
  {
    caption: "Усередині розмітки не можна додати обробник події?",
    correctAnswer: false,
  },
  {
    caption:
      "Припинити спливання події можна за допомогою метода stopImmediatePropagation?",
    correctAnswer: false,
  },
  {
    caption:
      "Припинити спливання події можна за допомогою метода stopPropagation?",
    correctAnswer: true,
  },
];

questions.forEach(({ caption }) => {
  const text = document.createElement("label");
  text.textContent = caption;
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const li = document.createElement("li");
  questionsList.append(li);
  li.append(checkbox, text);
});

const inputList = document.querySelectorAll("input");

const button = document.querySelector(".check");
button.addEventListener("click", () => {
  let result = 0;
  for (let i = 0; i < inputList.length; i++) {
    if (inputList[i].checked === questions[i].correctAnswer) result++;
  }
  console.log(`Your result is ${(result * 100) / inputList.length}%`);
});
