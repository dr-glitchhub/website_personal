const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY > 0);
})

let menu = document.querySelector("#menu-icon");
let navlist= document.querySelector(".navlist");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};

const sr = ScrollReveal({
    distance: '45px',
    duration: 2700,
    reset: true
})

sr.reveal('.home-text', {delay:200, origin: 'top'})
sr.reveal('.about-text', {delay:200, origin: 'bottom'})
sr.reveal('.skills,.projects,.PORs,.action,.center,.social,.end', {delay:250, origin: 'bottom'})
document.addEventListener("contextmenu",    function(e){
    e.preventDefault();
})
document.onkeydown = function(e){
    if(event.keyCode == 123)
    {
        return false;
    }
    if 
    (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)){
        return false;

    }if
    (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
        return false;
        
    }if
    (e.ctrlKey && e.shiftKey && e.keyCode == 'U'.charCodeAt(0)){
        return false;
        
    }
    if
    (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
        return false;
        
    }

};
