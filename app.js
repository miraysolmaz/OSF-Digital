document.addEventListener("DOMContentLoaded", function() { /* services a tıklayınca renk değişimi*/
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



  
/* count for buy now*/
  const buyButton = document.getElementById("buyButton");
  const addToCartButton = document.getElementById("addToCartButton");

  let itemCount = 0;

  buyButton.addEventListener("click", () => {
      itemCount++;
        addToCartButton.innerText = itemCount.toString();
      })



      /* count for plus */
  const plusButtons = document.querySelectorAll(".plusButton");
  const addToCartButtonplus = document.getElementById("addToCartButton");

  let itemCountP = 0;

  plusButtons.forEach(plusButton => {
      plusButton.addEventListener("click", () => {
          itemCount++;
           addToCartButton.innerText = itemCount.toString();
      });
  });

  

      /* count for heart */

  const heartButton = document.querySelectorAll(".heartButton");
  const addToHeartButton = document.getElementById("addToHeartButton");

  let itemCounth = 0;

  heartButton.forEach(heartButton => {
    heartButton.addEventListener("click", () => {
          itemCounth++;
            addToHeartButton.innerText = itemCounth.toString();
      });
  });
  const plus = document.querySelectorAll(".plusButton");
  const addToCart = document.getElementById("addToCartButtons");

  let itemCounta= 0;

  plusButtons.forEach(plus=> {
      plus.addEventListener("click", () => {
          itemCounta++;
           addToCart.innerText = itemCounta.toString();
      });
  });

  

      /* count for heart */

  const heart = document.querySelectorAll(".heartButton");
  const addToHeart= document.getElementById("addToHeartButtons");

  let itemCountb = 0;

  heart.forEach(heart => {
    heart.addEventListener("click", () => {
          itemCountb++;
            addToHeart.innerText = itemCountb.toString();
      });
  });






  document.getElementById("loginButton").addEventListener("click", function() {
    document.getElementById("loginModal").style.display = "block";
});
window.addEventListener("click", function(event) {
    const loginModal = document.getElementById("loginModal");
    if (event.target === loginModal) {
        loginModal.style.display = "none";
    }
});


const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    if (type === 'password') {
        togglePassword.classList.remove('bi-eye-slash');
        togglePassword.classList.add('bi-eye');
    } else {
        togglePassword.classList.remove('bi-eye');
        togglePassword.classList.add('bi-eye-slash');
    }
});


document.getElementById("loginForm").addEventListener("submit", function(event) {
    const passwordInput = document.getElementById("password");
    const passwordValue = passwordInput.value;

    if (!isPasswordValid(passwordValue)) {
        alert("Password does not meet the requirements.");
        event.preventDefault();
    }
});

function isPasswordValid(password) {
    const passwordPattern = /^(?=.*\d)(?=.*[A-Z])(?=.*\W).{6,}$/;
    return passwordPattern.test(password);
}



document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById("overlay");
    const cookieDialog = document.getElementById("cookieDialog");
    const acceptButton = document.getElementById("acceptButton");
    const cookieClose = document.getElementById("cookieClose");

    const cookieConsentChoice = localStorage.getItem("cookieConsent");
    const lastVisitTime26 = localStorage.getItem("lastVisitTime26");

    const now = new Date().getTime();
    const timeSinceLastVisit1 = now - (parseInt(lastVisitTime26) || 0);

    if (timeSinceLastVisit1 > 1200000) {
        setTimeout(function() {
            overlay.style.display = "block";
            cookieDialog.style.display = "block";
        }, 10000);
    }

    acceptButton.addEventListener("click", function() {
        localStorage.setItem("cookieConsent", "accepted");
        localStorage.setItem("lastVisitTime26", now.toString());
        overlay.style.display = "none";
        cookieDialog.style.display = "none";
    });

    cookieClose.addEventListener("click", function() {
        localStorage.setItem("cookieConsent", "closed");
        localStorage.setItem("lastVisitTime26", now.toString());
        overlay.style.display = "none";
        cookieDialog.style.display = "none";
    });
});



document.getElementById("loadMore").addEventListener("click", function() {
    loadMoreProducts();
    this.style.display = "none"; // Butonu gizle
});

var currentPage = 0;
var itemsPerPage = 4;

function createProductCard(title, price, imageURL) {
    var cardDiv = document.createElement("div");
    cardDiv.classList.add("col");
    cardDiv.innerHTML = `
        <div class="card h-100">
            <img src="${imageURL}" class="card-img-top" alt="${title}">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="value">$ ${price.toFixed(2)}</p>
                <div class="overlayEffect">
                    <button class="plusButton">+</button>
                    <button class="heartButton">&hearts;</button>
                </div>
            </div>
        </div>
    `;
    return cardDiv;
}

function loadMoreProducts() {
    var productCardsContainer = document.getElementById("productCards");

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "products.json", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var products = JSON.parse(xhr.responseText);

            var startIndex = currentPage * itemsPerPage;
            var endIndex = (currentPage + 1) * itemsPerPage;

            for (var i = startIndex; i < Math.min(endIndex, products.length); i++) {
                var product = products[i];
                var card = createProductCard(product["card-title"], product["price"], product["imageURL"]);
                productCardsContainer.appendChild(card);
            }

            currentPage++;
        }
    };
    xhr.send();
}


const products = [
    {
      imgSrc: "./img/featuredProducts-1.jpg",
      title: "Kristina Dam Oak Table With White Marble Top",
      category: "Awesome"
    },
    {
      imgSrc: "./img/featuredProducts-2.jpg",
      title: "Kristina Dam Oak Table With White Marble Top",
      category: "Maketing"
    },
    {
      imgSrc: "./img/featuredProducts-3.jpg",
      title: "Kristina Dam Oak Table With White Marble Top",
      category: "Awesome"
    },
    {
      imgSrc: "./img/featuredProducts-4.jpg",
      title: "Hezy Theme",
      category: "Maketing"
    },
    

      ];
  
 
let currentIndex = 0;
const cardsCustoms = document.querySelector('.cardsWrapper');
const cardWidth = document.querySelector('.col').offsetWidth ; // 15 is for margin-right
let numCards = document.querySelectorAll('.col').length; // Updated number of cards

function updateSlidePosition() {
    const maxIndex = Math.max(0, numCards - 4);
    currentIndex = Math.min(Math.max(currentIndex, 0), maxIndex);
    cardsCustoms.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

document.querySelector('.leftArrow').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlidePosition();
        loadNewCards();  // Yeni kartları yükle

    }
});

document.querySelector('.rightArrow').addEventListener('click', () => {
    currentIndex += 1;
    updateSlidePosition();
    if (currentIndex + numDisplayedCards > numCards) {
        loadNewCards();
    }
});

function loadNewCards() {
    if (currentIndex + numDisplayedCards <= products.length) {
        cardsCustoms.innerHTML = '';
        
        for (let i = currentIndex; i < currentIndex + numDisplayedCards; i++) {
            const product = products[i];
            const card = document.createElement("div");
            card.classList.add("col");
            card.innerHTML = `
                <div class="cardd h-100">
                    <img src="${product.imgSrc}" class="card-img-top" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title" style="font-size: 15px">${product.title}</h5>
                        <p class="fvalue">${product.category}</p>
                    </div>
                </div>
            `;
            cardsCustoms.appendChild(card);
        }
        currentIndex += numDisplayedCards;
        updateSlidePosition();
    }
}



