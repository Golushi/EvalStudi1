const navbar = document.getElementById("navbarSite");
const scrollTopButton = document.getElementById("scroll-top-button");

window.onscroll=function(){
    if(window.pageYOffset>600){
        navbar.classList.remove("bg-transparent","navbar-dark");   
        navbar.classList.add("bg-light","navbar-light");
    }
    else{
        navbar.classList.add("bg-transparent","navbar-dark");
        navbar.classList.remove("bg-light","navbar-light");
    }
    if(window.pageYOffset>20){
        document.getElementById("logo").style.height = "100px";
        document.getElementById("logo").style.width = "100px";
    }
    else{
        document.getElementById("logo").style.height = "200px";
        document.getElementById("logo").style.width = "200px";
    }
}
