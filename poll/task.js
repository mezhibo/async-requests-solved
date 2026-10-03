const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers");

const xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  "https://students.netoservices.ru/nestjs-backend/poll"
);
xhr.responseType = "json";

xhr.addEventListener("load", function () {
  const poll = xhr.response;

  pollTitle.textContent = poll.data.title;
  pollAnswers.innerHTML = "";

  poll.data.answers.forEach(function (answer) {
    const button = document.createElement("button");
    button.classList.add("poll__answer");
    button.textContent = answer;

    button.addEventListener("click", function () {
      alert("Спасибо, ваш голос засчитан!");
    });

    pollAnswers.appendChild(button);
  });
});

xhr.send();
