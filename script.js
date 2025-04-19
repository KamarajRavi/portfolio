
// Menu Icon
let menuIcon = document.querySelector('#menu_icon');

let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    navbar.classList.toggle('active');
}

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
  });
});

// Menu slideToggle 
    $(document).ready(function(){
      $("#menu_icon").click(function(){
        $(".navbar").slideToggle('active');
      });
    });

