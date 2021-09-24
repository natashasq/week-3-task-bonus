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
    this.firstElementChild.classList.add("-active-arrow");

    const answer = this.nextElementSibling;
    const arrow = this.firstElementChild;

    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      arrow.classList.remove("-active-arrow")
      this.classList.remove("-active")
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      arrow.classList.add("-active-arrow")
    }
  });
}
