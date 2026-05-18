window.addEventListener('load',()=>{
const contactBtn=document.getElementsByClassName("contact-btn");
const githubIcons = document.querySelectorAll('.git-icons');
const linkedinIcons = document.querySelectorAll('.fa-linkedin');


for(let btn of contactBtn ){
btn.addEventListener('click',function(){
    window.location.href="#contact";
})
}//for every button


githubIcons.forEach(icon => {
    icon.addEventListener('click', (e) => {
        e.preventDefault(); 
        window.open('https://github.com/EmanAhmed368', '_blank');
    });
});//for every github icon


linkedinIcons.forEach(icon => {
    icon.addEventListener('click', (e) => {
        e.preventDefault();
        window.open('https://www.linkedin.com/in/eman-ahmed-30636233b', '_blank');
    });
});//for every linkedin icon
 
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

contactBtn[0].addEventListener('click',()=>{
    navLinks.forEach(l => l.classList.remove('active'));
});

})//end of loading