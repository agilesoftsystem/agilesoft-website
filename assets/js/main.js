// EFEITO ROLAGEM NAV BAR

window.onload = function () {
  window.addEventListener('scroll', function (e) {
    if (window.pageYOffset > 100) {
      document.querySelector('header').classList.add('scroll');
    } else {
      document.querySelector('header').classList.remove('scroll');
    }
  });

  const menu_btn = document.querySelector('.hamburger');
  const mobile_menu = document.querySelector('.mobile-nav');

  menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
  });
};

// SEÇÃO PROJETOS

let filter_btn = document.querySelectorAll('.filter-btn');
let tab_items = document.querySelectorAll('.tab-item');

for (let i = 0; i < filter_btn.length; i++) {
  filter_btn[i].addEventListener('click', function () {
    for (let j = 0; j < filter_btn.length; j++) {
      filter_btn[j].classList.remove('active');
    }
    let select_tab = filter_btn[i].getAttribute('data-tab');
    filter_btn[i].classList.add('active');
    for (let t = 0; t < tab_items.length; t++) {
      if (tab_items[t].classList.contains(select_tab)) {
        tab_items[t].classList.add('select_tab');
      } else {
        tab_items[t].classList.remove('select_tab');
      }
    }
  });
}

// EFEITO VOLTAR AO TOPO

let back_to_top = document.querySelector('.back_to_top');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    back_to_top.classList.add('show');
  } else {
    back_to_top.classList.remove('show');
  }
});
back_to_top.addEventListener('click', function (e) {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});

//PORTIFÓLIO

const buttonSection = document.querySelectorAll('.buttons-section button');
const cardSection = document.querySelectorAll('.cards-section .card');

const filtercards = e => {
  document
    .querySelector('.active-portfolio')
    .classList.remove('active-portfolio');
  e.target.classList.add('active-portfolio');

  cardSection.forEach(card => {
    card.classList.add('hide');

    if (
      card.dataset.name === e.target.dataset.name ||
      e.target.dataset.name === 'all'
    ) {
      card.classList.remove('hide');
    }
  });
};

buttonSection.forEach(button => button.addEventListener('click', filtercards));

//INPUT-TEL
document.getElementById('telefone').addEventListener('input', function () {
  this.value = this.value.replace(/\D/g, '');
});

//ALERT DE MSG
function alertar() {
  setTimeout(function () {
    alert('Sua mensagem foi enviada!');
  }, 2000);
}

// EFEITO APARIÇÃO

document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("scroll", function() {
      const sections = document.querySelectorAll(".aparecer");
      
      sections.forEach(function(section) {
          const position = section.getBoundingClientRect().top;
          const screenHeight = window.innerHeight;

          if (position < screenHeight * 0.6) {
              section.classList.add("aparecer-ativo");
          }
      });
  });
});
