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