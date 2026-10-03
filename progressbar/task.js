const form = document.getElementById("form");
const progress = document.getElementById("progress");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const xhr = new XMLHttpRequest();
  const formData = new FormData(form);

  xhr.open("POST", form.action);

  xhr.upload.addEventListener("progress", function (event) {
    if (event.lengthComputable) {
      progress.value = event.loaded / event.total;
    }
  });

  xhr.addEventListener("load", function () {
    progress.value = 1;
  });

  xhr.send(formData);
});
