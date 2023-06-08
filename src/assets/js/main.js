document.addEventListener("DOMContentLoaded", function() {
  
  
    const imageDivs = document.querySelectorAll(".image-div");
    const elementsToAnimate = document.querySelectorAll(".to-animate");
    const options = {
      threshold: 0.4
    };
  
    const fadeIn = function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-animation");
          observer.unobserve(entry.target);
        }
      });
    }; 
  
    const observer = new IntersectionObserver(fadeIn, options);
  
    imageDivs.forEach(imageDiv => {
      observer.observe(imageDiv);
    }); 
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
  });