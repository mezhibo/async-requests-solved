const loader = document.getElementById("loader");
const items = document.getElementById("items");

const xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  "https://students.netoservices.ru/nestjs-backend/slow-get-courses"
);
xhr.responseType = "json";

xhr.addEventListener("load", function () {
  loader.classList.remove("loader_active");
  items.innerHTML = "";

  const valutes = xhr.response.response.Valute;

  Object.values(valutes).forEach(function (valute) {
    const item = document.createElement("div");
    item.classList.add("item");

    item.innerHTML = `
      <div class="item__code">${valute.CharCode}</div>
      <div class="item__value">${valute.Value}</div>
      <div class="item__currency">руб.</div>
    `;

    items.appendChild(item);
  });
});

xhr.send();
