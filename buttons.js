const myButton = document.getElementById("btn_Projec");
const layout1 = document.getElementById("layout1");
const arrow = document.querySelectorAll(".arrow");


function toggleLayout() {
  layout1.classList.toggle('show');
  arrow.forEach(ar => {ar.remove("show")});
}

myButton.addEventListener('click', toggleLayout);