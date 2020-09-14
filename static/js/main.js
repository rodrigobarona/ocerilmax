window.onGatsbyRouteUpdate = function() {
  // Responsive video embeds
  var videoEmbeds = [
    'iframe[src*="youtube.com"]',
    'iframe[src*="vimeo.com"]'
  ];
  reframe(videoEmbeds.join(','));

  // Mobile menu
  var menuToggle = document.querySelectorAll('.menu-toggle');

  for (var i = 0; i < menuToggle.length; i++) {
    menuToggle[i].addEventListener('click', function(e){
      document.body.classList.toggle('menu--opened');
      e.preventDefault();
    },false);
  }

  document.body.classList.remove('menu--opened');

  // close menu when click link
  var menuLinks = document.querySelectorAll("#main-navigation .menu a");

  for (var i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', function(e){
      document.body.classList.remove('menu--opened');
      //e.preventDefault();
    },false);
  }

  // Close when Resize
  window.addEventListener('resize', function () {
    if (menuToggle.offsetParent === null) {
      document.body.classList.remove('menu--opened');
    }
  }, true);

  // Accordion
  var accordions = document.querySelectorAll('.faq-accordion');
  Array.from(accordions).forEach((accordion) => {
    var ba = new BadgerAccordion(accordion, {
      headerClass: '.accordion-trigger',
      panelClass: '.accordion-panel',
      panelInnerClass: '.accordion-content',
      openMultiplePanels: true
    });
  });

  // Google Tag Manager - Track Events - Requested by mariaiolanda.serra@intarget.net
  var oQueE = document.getElementsByClassName('o-que-e');
  var comoUsar = document.getElementsByClassName('como-usar');
  var quandoUsar = document.getElementsByClassName('quando-usar');
  var composicao = document.getElementsByClassName('composicao');
  var saberMais = document.querySelectorAll("#hero .block-buttons a");

  oQueE[0].addEventListener('click', function(event){
    dataLayer.push({
    'event': 'website-change-page',
    'vpvname': 'o-que-e'
    });

    if (window.location.pathname !== '/') {

       window.location = '/#o-que-e';
    }

  },false);

  comoUsar[0].addEventListener('click', function(event){

    dataLayer.push({
    'event': 'website-change-page',
    'vpvname': 'como-usar'
    });


    if (window.location.pathname !== '/') {

       window.location = '/#como-usar';
    }

  },false);

  quandoUsar[0].addEventListener('click', function(event){

    dataLayer.push({
    'event': 'website-change-page',
    'vpvname': 'quando-usar'
    });


    if (window.location.pathname !== '/') {

       window.location = '/#quando-usar';
    }

  },false);

  composicao[0].addEventListener('click', function(event){

    dataLayer.push({
    'event': 'website-change-page',
    'vpvname': 'composicao'
    });


    if (window.location.pathname !== '/') {

       window.location = '/#composicao';
    }

  },false);

  if (window.location.pathname === '/') {
    saberMais[0].addEventListener('click', function(event){

      dataLayer.push({
      'event': 'website-change-page',
      'vpvname': 'hero-para-que-serve'
      });

    },false);
  }

};
