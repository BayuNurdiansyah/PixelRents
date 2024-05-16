const baseurl = window.location.origin;

// ===================== Click Active Menu =============================== //
const navLinks = document.querySelectorAll('.nav__list .nav__link');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove the active-link class from all links
        navLinks.forEach(link => {
            link.classList.remove('active-link');
        });
        
        // Add the active-link class to the clicked link
        this.classList.add('active-link');
    });
});

// Change background header//
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

const tabList = document.querySelectorAll('.tab');

tabList.forEach(tab => {
    tab.addEventListener('click', function() {
        // Remove the tab-active class from all links
        tabList.forEach(tab => {
            tab.classList.remove('tab-active');
        });
        
        // Add the tab-active class to the clicked link
        this.classList.add('tab-active');
        
        console.log(`GO TO : ${tab.textContent} Page`);
    });
})

const filterList = document.querySelectorAll('.filter__item');

filterList.forEach(filter => {
    filter.addEventListener('click', function() {
        // Remove the filter-active class from all links
        filterList.forEach(filter => {
            filter.classList.remove('filter-active');
        });
        
        // Add the filter-active class to the clicked link
        this.classList.add('filter-active');
        
    });
})

// limit input jam sewa
let inputs = document.querySelectorAll(".card__inputtime");
inputs.forEach(function(input) {
    input.addEventListener("input", function() {
        let hours = this.value;
        if (isNaN(hours)) {
            console.log("Input is not a valid number");
            input.textContent = 0;
        } else {
            hours = parseInt(hours);
            if (hours > 23) {
                alert("Melebihi jam maksimal sewa, bisa mengganti dengan sewa paket harian.")
                input.value = 0;
            }
        }
    });
});

// select catalog when open pages.html
var currentURL = window.location.href;
let homeLink = document.getElementById("catalog-link");

if (currentURL.includes("pages.html")) {
    navLinks.forEach(link => {
        link.classList.remove('active-link');
    });
    homeLink.classList.add('active-link');
}