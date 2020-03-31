const progressBar = document.querySelector("#myBar");

window.addEventListener("scroll", function(event){
    adjustBar();
});

window.addEventListener("resize", function(event){
    adjustBar();
});

function adjustBar(){
    let maxScroll = document.body.scrollHeight - window.innerHeight;
    let percent = (window.scrollY/maxScroll * 100);
    progressBar.style.width = percent.toString() + '%';
}

$('a[href*=\\#]').on('click', function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
});