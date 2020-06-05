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
    let top = Math.max(0, $(this.hash).offset().top - 60);
    $('html,body').animate({scrollTop: top}, 500);
});