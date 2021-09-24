const accordionElements = document.querySelectorAll(".form__accordion");

const accordionArray = Array.from(accordionElements);

accordionArray.forEach((accordionOuter, i) => {
  accordionOuter.addEventListener("click", function () {
    accordionArray.forEach((accordionInner, j) => {
      accordionInner.classList.remove("-active");

      if (j != i) {
        accordionArray[j].nextElementSibling.style.maxHeight = null;
        accordionArray[j].firstElementChild.classList.remove("-active-arrow");
      }
    });

    this.classList.add("-active");
    this.firstElementChild.classList.add("-active-arrow");

    const answer = this.nextElementSibling;
    const arrow = this.firstElementChild;

    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      arrow.classList.remove("-active-arrow");
      this.classList.remove("-active");
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      arrow.classList.add("-active-arrow");
    }
  });
});
