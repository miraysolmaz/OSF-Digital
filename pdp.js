document.addEventListener("DOMContentLoaded", function() { 
    const servicesLink = document.querySelector("#navbarDropdown");
    const companyLink = document.querySelector('.navbar-nav .nav-item:nth-child(2) .nav-link');
    const libraryLink = document.querySelector('.navbar-nav .nav-item:nth-child(3) .nav-link');
    const contactUsLink = document.querySelector('.navbar-nav .nav-item:nth-child(4) .nav-link');

  
    servicesLink.addEventListener("click", function(event) {
      event.preventDefault();
  
      companyLink.classList.toggle("change-color");
      libraryLink.classList.toggle("change-color");
      contactUsLink.classList.toggle("change-color");
    });
  });
  





  const currentYear = new Date().getFullYear();
  document.getElementById("current-year").textContent = currentYear;



    
 



  function toggleContent() {
    var extraContent = document.getElementById('extra-content');
    extraContent.style.display = (extraContent.style.display === "none") ? "block" : "none";

    var readMoreButton = document.getElementById('read-more');
    readMoreButton.textContent = (extraContent.style.display === "none") ? "Read more" : "Read less";
  }

      const bigImages = document.getElementById('bigImage');
    const smallImagesss = document.querySelectorAll('.smallImage');

    smallImagesss.forEach(smallImage => {
        smallImage.addEventListener('click', function() {
            const newBigImageSrc = this.getAttribute('src').replace('.jpg', '-big.jpg');
            bigImage.setAttribute('src', newBigImageSrc);
        });
    });


  
 



    const smallImagess = document.querySelectorAll('.smallImage');
    const defaultImage = document.querySelector('.smallImage[src="img/black-1.jpg"]');
    
    defaultImage.classList.add('active');
    
    smallImagess.forEach(image => {
      image.addEventListener('click', () => {
        smallImagess.forEach(img => img.classList.remove('active'));
        image.classList.add('active');
      });
    });
    

    const bigImage = document.getElementById('bigImage');
  const overlayImage = document.getElementById('overlayImage');
  const smallImages = document.querySelectorAll('.smallImage');

  smallImages.forEach(smallImage => {
    smallImage.addEventListener('click', function() {
      const newBigImageSrc = this.getAttribute('data-big-src');
      bigImage.setAttribute('src', newBigImageSrc);
      overlayImage.setAttribute('src', newBigImageSrc); 
    });
  });


  function toggleImageSize() {
    var bigImage = document.getElementById("bigImage");
    var overlay = document.getElementById("overlay");
    
    if (bigImage.style.width === "400px") {
      overlay.style.display = "flex";
    } else {
      bigImage.style.width = "400px";
      overlay.style.display = "none";
    }
  }
  
  function closeImage() {
    var bigImage = document.getElementById("bigImage");
    var overlay = document.getElementById("overlay");
    
    bigImage.style.width = "400px";
    overlay.style.display = "none";
  }



 
  const minusBtnn = document.getElementById("minusBtn");
  const plusBtnn = document.getElementById("plusBtn");
  const counterInputt = document.getElementById("counterInput");
  const addToCartButtons = document.getElementById("load-pdp");
  const cartBadges = document.getElementById("addToCartButtons");
  
  let counterValuee = 0;
  
  minusBtnn.addEventListener("click", () => {
    counterValuee--;
    updateCounter();
  });
  
  plusBtnn.addEventListener("click", () => {
    counterValuee++;
    updateCounter();
  });
  
  counterInputt.addEventListener("change", () => {
    counterValuee = parseInt(counterInputt.value);
    updateCounter();
  });
  
  addToCartButtons.addEventListener("click", () => {
    addToCart(counterValuee);
  });
  
  function updateCounter() {
    counterInputt.value = counterValuee;
  }
  
  function addToCart(quantity) { 
    cartBadges.textContent = parseInt(cartBadges.textContent) + quantity;
  }