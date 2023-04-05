
(function() {
  "use strict";

  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }



  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()


/**
   * Clients Slider
   */
new Swiper('.clients-slider', {
  speed: 400,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 60
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 80
    },
    992: {
      slidesPerView: 6,
      spaceBetween: 120
    }
  }
});


window.addEventListener('load', () => {
  let galleryContainer = select('.gallery-container');
  if (galleryContainer) {
    let galleryIsotope = new Isotope(galleryContainer, {
      itemSelector: '.gallery-item'
    });

    
  }

});



/**
 * Initiate gallery lightbox 
 */
const galleryLightbox = GLightbox({
  selector: '.gallery-lightbox'
});

/**
 * gallery details slider
 */
new Swiper('.gallery-details-slider', {
  speed: 400,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
});



/**
   * Testimonials slider
   */
new Swiper('.testimonials-slider', {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
});

/**
 * Animation on scroll
 */
window.addEventListener('load', () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false
  });
});

/**
 * Initiate Pure Counter 
 */
new PureCounter();



//calculator


/** 


  function search() {
    // Get the search query from the input field
    const query = document.getElementById('search-input').value.toLowerCase();
  
    // Get all the university elements
    const universities = document.querySelectorAll('.university');
  
    // Loop through the universities and hide those that don't match the search query
    universities.forEach(university => {
      if (university.textContent.toLowerCase().includes(query)) {
        university.style.display = 'block';
      } else {
        university.style.display = 'none';
      }
    });
  }


// Callculator drop boxes
  function updateTextBox2() {
    let textbox1 = document.getElementById("textbox1");
    let textbox2 = document.getElementById("textbox2");

    // Clear the options of the second drop-down menu
    textbox2.innerHTML = "";

    // Get the selected option of the first drop-down menu
    let selectedOption = textbox1.options[textbox1.selectedIndex].text;

    // Add the appropriate options to the second drop-down menu based on the selection in the first drop-down menu
    if (selectedOption == "Софийски университет \"Св. Климент Охридски\"") {
      textbox2.innerHTML += "<option>Философия</option><option>Психология</option><option>Социология</option><option>Политология</option><option>Публична администрация</option><option>Културология</option><option>Библиотечно-информационни науки</option><option>Европеистика</option><option>Публични информационни системи</option><option>Философия (на английски език)</option>";
    } else if (selectedOption == "Медицински университет София") {
      textbox2.innerHTML += "<option>Option 4</option><option>Option 5</option><option>Option 6</option>";
    } else if (selectedOption == "Технически университет София") {
      textbox2.innerHTML += "<option>Option 7</option><option>Option 8</option><option>Option 9</option>";
    }
  }

  function showResult() {
    let textbox2 = document.getElementById("textbox2");
    let resultLabel = document.getElementById("resultLabel");

    // Get the selected option of the second drop-down menu
    
    let selectedOption = textbox2.options[textbox2.selectedIndex].text;

    // Update
    resultLabel.innerHTML = "Result: " + selectedOption;
  }
*/