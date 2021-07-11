function main() {
  const myFormEl = document.querySelector(".mi-form");

  myFormEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    const value = Object.fromEntries(data.entries()); //Lo transforma en un Object

    value.temaComplejo = data.getAll("temaComplejo"); //Checkbox Array
    console.log(value);
  });
}
main();
