$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    let typed = new Typed(".typing", {
        strings: ["Desarrollador", "Diseñador", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    let typed2 = new Typed(".typing-2", {
        strings: ["Desarrollador", "Diseñador", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

/* Send mail */

const formEmail = document.querySelector('#formEmail');

formEmail.addEventListener('submit', (e) =>{
    e.preventDefault();
    const userData = [];
    for( i = 0; i < 4; i++ ) { userData.push( formEmail[i].value ); }

    emailjs.send("test","template_936unsw",{
        name: userData[0],
        email: userData[1],
        subject: userData[2],
        message: userData[3],
        reply_to: userData[1]
    });
    formEmail.reset();
    Swal.fire({
        title: 'Enviado!',
        text: 'Gracias.',
        icon: 'success',
        showConfirmButton: false,
        timer: 3500
      })
});


















