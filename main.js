const menuEmail = document.querySelector('.navbar-email');
const DesktopMenu = document.querySelector('.desktop-menu');
const mobileMenuActivator = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const abrirProdcuto = document.querySelector('.product-card');
const productDescription = document.querySelector('.product-description');


menuCarrito.addEventListener('click', toggleproductDetail);
menuEmail.addEventListener('click', toggleDesktopMenu);
mobileMenuActivator.addEventListener('click', toggleMobileMenu);



function toggleDesktopMenu(){

    const isAsideClosed = aside.classList.contains('inactive');

   
        if(!isAsideClosed){
            aside.classList.add('inactive');
        }

    DesktopMenu.classList.toggle('inactive');
} //lo que dice aqui es que cada vez que se le de click al mail en el menu mostrará el menu desktop

function toggleMobileMenu(){

    
    const isAsideClosed = aside.classList.contains('inactive');

   
        if(!isAsideClosed){
            aside.classList.add('inactive');
        }

        

    mobileMenu.classList.toggle('inactive');
} //lo que dice aqui es que cada vez que se le de click al mail en el menu mostrará el menu mobile

function toggleproductDetail(){

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = DesktopMenu.classList.contains('inactive');
   
        if(!isMobileMenuClosed){
            mobileMenu.classList.add('inactive');
        }
        
        if(!isDesktopMenuClosed){
            DesktopMenu.classList.add('inactive');
        }
        
        aside.classList.toggle('inactive');
    
} 


const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/4827702/pexels-photo-4827702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Iphone',
    price: 320,
    image: 'https://images.pexels.com/photos/14666017/pexels-photo-14666017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Keypad',
    price: 90,
    image: 'https://images.pexels.com/photos/10133432/pexels-photo-10133432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Electric Bike',
    price: 420,
    image: 'https://images.pexels.com/photos/13979151/pexels-photo-13979151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Camera',
    price: 75,
    image: 'https://images.pexels.com/photos/14322018/pexels-photo-14322018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Shoes',
    price: 50,
    image: 'https://images.pexels.com/photos/6153367/pexels-photo-6153367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});


productList.push({
    name: 'Skate',
    price: 150,
    image: 'https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'half pencil',
    price: 50,
    image: 'https://images.pexels.com/photos/114119/pexels-photo-114119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'cool lamp',
    price: 70,
    image: 'https://images.pexels.com/photos/746496/pexels-photo-746496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});


productList.push({
    name: 'Geometric figures',
    price: 700,
    image: 'https://images.pexels.com/photos/7828516/pexels-photo-7828516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Orange set',
    price: 150,
    image: 'https://images.pexels.com/photos/8801184/pexels-photo-8801184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});


productList.push({
    name: 'Vase with a flower',
    price: 50,
    image: 'https://images.pexels.com/photos/10181422/pexels-photo-10181422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});


productList.push({
    name: 'Computer',
    price: 150,
    image: 'https://images.pexels.com/photos/5082558/pexels-photo-5082558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});


productList.push({
    name: 'Green set',
    price: 150,
    image: 'https://images.pexels.com/photos/8581017/pexels-photo-8581017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});


function renderProducts(arr){

    for (product of arr){
        
            const productCard = document.createElement('div'); 
            productCard.classList.add('product-card')
        
            const productImg = document.createElement('img')
            productImg.setAttribute('src',product.image)
        
            const productInfo = document.createElement('div');
            productInfo.classList.add('product-info');
        
            const productInfoDiv = document.createElement('div');
        
            const productPrice = document.createElement('p');
            productPrice.innerText = '$' + product.price;
            const productName = document.createElement('p');
            productName.innerText = product.name;
        
            productInfoDiv.appendChild(productPrice);
            productInfoDiv.appendChild(productName);
        
            const productInfoFigure = document.createElement('figure');
            const productImgCart = document.createElement('img');
            productImgCart.setAttribute('src', 'icons/bt_add_to_cart.svg');
        
            productInfoFigure.appendChild(productImgCart);
        
            productInfo.appendChild(productInfoDiv);
            productInfo.appendChild(productInfoFigure);
        
            productCard.appendChild(productImg);
            productCard.appendChild(productInfo);
        
            cardsContainer.appendChild(productCard);
        
        
    }
}

renderProducts(productList);

