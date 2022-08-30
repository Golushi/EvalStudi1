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
    if(window.pageYOffset>50){
        document.getElementById("logo").style.height = "100px";
        document.getElementById("logo").style.width = "100px";
    }
    else{
        document.getElementById("logo").style.height = "160px";
        document.getElementById("logo").style.width = "160px";
    }
}
function showPanelCard() {
    let panel = document.getElementById("don","x");
    if(panel.style.right == "0px"){
        panel.style.right = "-400px";
    }
    else {
        panel.style.right = "0px";
    }
    
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("don").style.display = "none";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("don").style.display = "block";
  }