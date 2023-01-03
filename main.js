const menuEmail = document.querySelector('.navbar-email');
const DesktopMenu = document.querySelector('.desktop-menu');
const mobileMenuActivator = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.shopping-cart');
const aside = document.querySelector('.product-detail');


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