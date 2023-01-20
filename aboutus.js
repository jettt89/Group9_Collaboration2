//Global variables

const menuToggleIcon = document.getElementById('menu-toggle-icon');
const navMobile = document.getElementById('nav');
const headerElement = document.getElementById('header');
const navLinks = document.querySelectorAll('.nav-mobile .list-link');
const element = document.getElementById('input-newsletter')



// Toggle navigation

const toggleMenu =  () => {
    navMobile.classList.toggle('active');    //toggle func means when it clicked it will add/remove the class 
    headerElement.classList.toggle('active');
}

menuToggleIcon.addEventListener('click', toggleMenu);


//Add or remove header border bottom on scroll

const headerScrollEvent = () => {
    if(this.scrollY >= 30){
        headerElement.classList.add('active-scroll');

    }else{
        headerElement.classList.remove('active-scroll');

    }
}

window.addEventListener('scroll', headerScrollEvent)


//autofocus bug

element.focus({
  preventScroll: true
});



//slider

var swiper = new Swiper(".clients-slider", {
    loop:true, 
    grabCursor:true,
    spaceBetween: 20,
    autoplay: {
        delay: 4000,
    },
    
    breakpoints: {
        0: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
    },
});

var swiper = new Swiper(".promote-slider", {
    loop:true, 
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


// Add selected link styles to the link clicked then closed the nav when clicked 

navLinks.forEach(Link => Link.addEventListener('click', () => {
    navMobile.classList.remove('active');   
    headerElement.classList.remove('active');


    let current = document.getElementsByClassName('current');
    current[0].className = current[0].className.replace(' current', "");
    Link.className +=  " current";

}));


//VALUE ACCORDION

const accordionItems = document.querySelectorAll('.value__accordion-item')

// 1. Select each item
accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.value__accordion-header')

    // 2. Select each header click
    accordionHeader.addEventListener('click', () =>{
        // 7. Create the tag
        const openItem = document.querySelector('.accordion-open')
        
        // 5. Call toggle item function
        toggleItem(item)

        // 8. Check if the class exists
        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

// 3. Create a constant type function
const toggleItem = (item) =>{
    // 3.1 Create the tag
    const accordionContent = item.querySelector('.value__accordion-content')

    // 6. If there is another element that contains the class accordion-open remove its class
    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        // 4. Add the maximum height of the content
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
}





