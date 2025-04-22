let menuIcon = document.querySelector('#menu_icon');
let navbar = document.querySelector('.navbar');

// Toggle the navbar when the menu icon is clicked
menuIcon.onclick = () => {
    navbar.classList.toggle('active'); 
};

// Close the navbar and scroll to the target section when a link is clicked
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); 
        const targetId = this.getAttribute('href'); 
        const targetElement = document.querySelector(targetId); 

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Close the navbar
        navbar.classList.remove('active'); 
    });
});

