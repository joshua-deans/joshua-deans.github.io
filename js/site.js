window.sr = ScrollReveal();

sr.reveal('#self-image', {distance: '0 px', scale: 0.4, delay: 70});

sr.reveal('#top-card', {scale: 1, distance: '100px', delay: 170});

sr.reveal('#skills', {origin: 'left'});

sr.reveal('#work-exp', {origin: 'left'});

sr.reveal('#education', {origin: 'left'});

sr.reveal('#volunteer-start', {origin: 'right'});

sr.reveal('#projects', {origin: 'right'});

sr.reveal('#interests', {origin: 'right'});

sr.reveal('#contact-card');

var progressBar = document.querySelector("#myBar");

window.addEventListener("scroll", function(event){
    adjustBar();
});

window.addEventListener("resize", function(event){
    adjustBar();
});

function adjustBar(){
    var maxScroll = document.body.scrollHeight - window.innerHeight;
    var percent = (window.scrollY/maxScroll * 100);
    progressBar.style.width = percent.toString() + '%';
}

$('a[href*=\\#]').on('click', function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
});