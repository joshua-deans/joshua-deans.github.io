var progressBar = document.querySelector("#myBar");

window.addEventListener("scroll", function(event){
    var percent = (window.scrollY/window.scrollMaxY * 100);
    progressBar.style.width = percent.toString() + '%';
});