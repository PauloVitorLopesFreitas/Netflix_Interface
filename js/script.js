$('.owl-carousel').owlCarousel({
  loop:true,
  margin: -15,  
  nav:false,
  responsive: {
    0:{
      items:1
    },
    520:{
      items:2
    },
    720: {
      items:3
    },
    1000: {
      items:5
    }
  }
})

//*****  Controle de visibilidade do menu oculto *****//
var btMobile = document.getElementById("menu-mobile");
var containerMenu = document.getElementById('menu-mobile-list');

btMobile.addEventListener("mouseover", () => { 
  containerMenu.classList.remove('menu-hidden');
  containerMenu.classList.add('menu-open');
}, false);  

btMobile.addEventListener("mouseout", () => {
  containerMenu.classList.remove('menu-open');
  containerMenu.classList.add('menu-hidden');
}, false);

