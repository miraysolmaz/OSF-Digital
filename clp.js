

const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;



const cardsCustoms = document.querySelector('.cardsWrapper');
const cardWidth = document.querySelector('.card').offsetWidth;
let numCards = document.querySelectorAll('.card').length;  
let currentIndex = 0;

function updateSlidePosition() {
    const maxIndex = numCards - 4;
    currentIndex = Math.min(Math.max(currentIndex, 0), maxIndex);
    cardsCustoms.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

document.querySelector('.leftArrow').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlidePosition();
    }
});

document.querySelector('.rightArrow').addEventListener('click', () => {
    if (currentIndex < numCards - 4) {
        currentIndex++;
        updateSlidePosition();
    }
});

var colorCircleButtons = document.querySelectorAll('.color-circle-button');

colorCircleButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    var bgColor = getComputedStyle(button).backgroundColor;
    document.getElementById('whitebg').style.backgroundColor = bgColor;
  });
});





document.getElementById("loadMore").addEventListener("click", function() {
    loadMoreProducts();
    this.style.display = "none"; 
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



