const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');


menuIcon.addEventListener('click', () => {
    console.log(menuIcon);
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    });

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

ScrollReveal({ 
    reset: true,
    distance: '80px', 
    duration: 1500,
    delay: 100
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .about-img, .about-content, .services-container, .portfolio-box, .contact form', { origin: 'button' });

const inputName = document.querySelector('#in-name'); 
const inputEmail = document.querySelector('#in-email'); 
const inputNumber = document.querySelector('#in-number'); 
const inputSubject = document.querySelector('#in-subject'); 
const inputMessage = document.querySelector('#in-message'); 
const boton = document.querySelector('#submit');

let flag = true;

function checkText(string){
    let regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    return regex.test(string);
}

function checkEmail(string){
    let regex = /[!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/;
    let regex2 = /\s/;
    return regex.test(string) || regex2.test(string);
}

inputName.addEventListener('keyup', () => {
    console.log("hola");
    if(inputName.value.length == 0){
        inputName.style.border = 'none';
        flag = false;
    }else{
        if(checkText(inputName.value) == true){
            inputName.style.border = '1px solid red';
            flag = false;
        }else{
            inputName.style.border = 'none';
            flag = true;
        }
    }
});

inputEmail.addEventListener('keyup', () => {
    if(inputEmail.value.length == 0){
        inputEmail.style.border = 'none';
        flag = false;
    }else{
        if(checkEmail(inputEmail.value) == true){
            inputEmail.style.border = '1px solid red';
            flag = false;
        }else{
            inputEmail.style.border = 'none';
            flag = true;
        }
    }
});

inputSubject.addEventListener('keyup', () => {
    if(inputSubject.value.length == 0){
        inputSubject.style.border = 'none';
        flag = false;
    }else{
        if(checkText(inputSubject.value) == true){
            inputSubject.style.border = '1px solid red';
            flag = false;
        }else{
            inputSubject.style.border = 'none';
            flag = true;
        }
    }
});

function checkSubmit(){
    if(inputName.value.length == 0 || inputEmail.value.length == 0 || inputNumber.value.length == 0 || inputSubject.value.length == 0 || inputMessage.value.length == 0){
        alert("Todos los campos son obligatorios");
        return false;
    }else{
        if(!flag){
            return false;
        }else{
            alert("todo bien");
            return true;
        }
    }
}

boton.addEventListener('click', () => {
    if(checkEmail()){
        alert("todo bien");
    }
});