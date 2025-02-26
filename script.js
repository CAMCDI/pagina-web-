let currentSlide = 0;
const slides = document.querySelectorAll('.carousel .slide');
const totalSlides = slides.length;

function showSlide() {
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });
  slides[currentSlide].style.display = 'block';
  currentSlide = (currentSlide + 1) % totalSlides;
}

setInterval(showSlide, 3000);
showSlide();

document.querySelector('.contact-btn').addEventListener('click', function() {
  alert('¡Gracias por querer contactarnos! Pronto te responderemos.');
});

var modal = document.getElementById("contactModal");
var contactBtn = document.querySelector(".contact-btn");
var closeBtn = document.querySelector(".close-btn");

contactBtn.addEventListener("click", function() {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

const loginModal = document.getElementById('loginModal');
const loginBtn = document.querySelector('.login-btn');
const closeLogin = document.getElementById('closeLogin');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const welcomeMessage = document.getElementById('welcomeMessage');

loginBtn.onclick = function() {
  loginModal.style.display = 'block';
}

closeLogin.onclick = function() {
  loginModal.style.display = 'none';
}

showRegister.onclick = function() {
  loginForm.style.display = 'none';
  registerForm.style.display = 'block';
}

showLogin.onclick = function() {
  registerForm.style.display = 'none';
  loginForm.style.display = 'block';
}

window.onclick = function(event) {
  if (event.target == loginModal) {
    loginModal.style.display = 'none';
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#registerForm form").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("registerName").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    
    if (localStorage.getItem(email)) {
      alert("Este correo ya está registrado.");
    } else {
      localStorage.setItem(email, JSON.stringify({ name, password }));
      alert("Registro exitoso. Ahora puedes iniciar sesión.");
      registerForm.style.display = "none";
      loginForm.style.display = "block";
    }
  });
  
  document.querySelector("#loginForm form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const user = JSON.parse(localStorage.getItem(email));
    
    if (user && user.password === password) {
      alert("Inicio de sesión exitoso. Bienvenido, " + user.name + "!");
      loginModal.style.display = "none";
      loginForm.style.display = "none";
      loginBtn.style.display = "none";
      welcomeMessage.innerText = "Bienvenido, " + user.name;
      welcomeMessage.style.display = "block";
    } else {
      alert("Correo o contraseña incorrectos.");
    }
  });
  
  window.addEventListener("click", function (e) {
    if (e.target === loginModal) {
      loginModal.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Obtener todos los enlaces de las categorías en el menú desplegable
  const categoryLinks = document.querySelectorAll(".dropdown-content a");

  categoryLinks.forEach(link => {
      link.addEventListener("click", function (event) {
          event.preventDefault(); // Evita que el enlace recargue la página

          const categoria = this.textContent.toLowerCase().trim(); // Obtener el texto de la categoría y limpiarlo
          const url = `productos.html?categoria=${encodeURIComponent(categoria)}`;

          // Abrir una nueva ventana con la página de productos
          window.location.href = url;
      });
  });
});

function abrirModal() {
  document.querySelector('.modal').style.display = 'block';
}

function cerrarModal() {
  document.querySelector('.modal').style.display = 'none';
}

// Agregar eventos a los botones
document.querySelector('.open-modal-btn').addEventListener('click', abrirModal);
document.querySelector('.close-btn').addEventListener('click', cerrarModal);
