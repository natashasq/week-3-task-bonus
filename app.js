let accordion = document.getElementsByClassName("form__accordion");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    for (let j = 0; j < accordion.length; j++) {
      accordion[j].classList.remove("active");
      if (j != i) {
        accordion[j].nextElementSibling.style.maxHeight = null;
        accordion[j].firstElementChild.style.display = "block";
      }
    }
    this.classList.add("active");

    const answer = this.nextElementSibling;
    const chevron = this.firstElementChild;

    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      chevron.style.display = "block";
      accordion[i].classList.remove("active");
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      chevron.style.display = "none";
    }
  });
}
