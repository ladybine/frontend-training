const adviceDisplay = document.querySelector(".container");
const btnDe = document.querySelector(".advice-disign-de");

btnDe.addEventListener("click", (e) => {
  e.preventDefault();
  dataFetch();
});

dataFetch();
function dataFetch() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      const { id, advice } = data.slip;
      adviceDisplay.innerHTML = showAdvice(id, advice);
    });
}

function showAdvice(id, advice) {
  return ` <div class="contenaire-advice-title">
          <h2>Advice # ${id}</h2>
        </div>
        <div class="contenaire-advice">
          <p>${advice}</p>
        </div>
        <div class="advice-disign">
          <img src="/images/pattern-divider-desktop.svg" />
          </div>`;
}
