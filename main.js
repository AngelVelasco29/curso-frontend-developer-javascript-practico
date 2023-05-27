const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer= document.querySelector('.cards-container');

console.log(menuEmail);
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);


function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    aside.classList.add('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    aside.classList.add('inactive');
}

function toggleCarritoAside() {
    aside.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}

const productList = [];

productList.push({
    name: 'Bike',
    price: '100',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Pantalla',
    price: '200',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Computador',
    price: '300',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

renderProducts(productList);

function renderProducts(arr){
    for (product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productButton = document.createElement('figure');
        const productButtonImg = document.createElement('img');
        productButtonImg.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productButton.appendChild(productButtonImg);
        productInfoDiv.append(productPrice, productName);
        productInfo.append(productInfoDiv, productButton);
        productCard.append( productImg, productInfo);
        cardsContainer.appendChild(productCard);        
    }
}


