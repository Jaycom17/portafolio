const myButton = document.getElementById("btn_Proyec");
const layout1 = document.getElementById("layout1");
const layout2 = document.getElementById("layout2");

myButton.addEventListener("click", () => {
  layout1.classList.toggle("active");
  layout2.classList.toggle("active");
});