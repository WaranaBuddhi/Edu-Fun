document.addEventListener("DOMContentLoaded", function() {
    const teamMembers = document.querySelectorAll('.team-member');
    
    teamMembers.forEach((member, index) => {
      member.style.opacity = 0;
      setTimeout(() => {
        member.style.transition = 'opacity 0.8s ease-in-out';
        member.style.opacity = 1;
      }, 200 * index);
    });
  });
  