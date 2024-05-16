// ===================== Click Active Menu =============================== //
// Get all the <a> tags inside the nav__list
const navLinks = document.querySelectorAll('.nav__list .nav__link');
console.log(navLinks)
// Loop through each <a> tag and add an event listener
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

// window.addEventListener('scroll', function() {
//     var headerHeight = document.querySelector('header').offsetHeight;
//     var section = document.getElementById('.section');
//     var scrollPosition = window.scrollY;

//     if (scrollPosition >= headerHeight) {
//         section.style.position = 'fixed';
//         section.style.top = headerHeight + 'px';
//     } else {
//         section.style.position = 'relative';
//         section.style.top = '0';
//     }
// });
