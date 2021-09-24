let accordion = document.getElementsByClassName("form__accordion");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    for (let j = 0; j < accordion.length; j++) {
      accordion[j].classList.remove("-active");
      if (j != i) {
        accordion[j].nextElementSibling.style.maxHeight = null;
        accordion[j].firstElementChild.classList.remove("-active-arrow");;
      }
    }
    this.classList.add("-active");
    this.firstElementChild.classList.add("-active-arrow")

    const answer = this.nextElementSibling;
    const chevron = this.firstElementChild;

    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      accordion[i].classList.remove("-active");
      chevron.classList.remove("-active-arroow")
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      chevron.classList.add("-active-arroow")
    }
  });
}
