//Code for the active nav bar
const activePage = window.location.pathname;
//console.log(activePage);

const navLinks = document.querySelectorAll("nav a").forEach(link =>{
    console.log(link.href);
    if(link.href.includes(`${activePage}`)){
        //console.log(`$activePage`);
        link.classList.add("active");
    }
})

