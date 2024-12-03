
  

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".highlight-card");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.5 }
    );
  
    cards.forEach((card) => {
      observer.observe(card);
    });
  });


  const socialIcons = document.querySelectorAll('.social-icon');

socialIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.setAttribute('title', 'Visit our social media!');
    });
});
