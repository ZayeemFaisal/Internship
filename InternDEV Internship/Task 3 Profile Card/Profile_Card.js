window.addEventListener('load', function() {
    const profileCard = document.querySelector('.profile-card');
    const details = document.querySelector('.details');
  
    profileCard.addEventListener('click', function() {
      details.style.display = details.style.display === 'none' ? 'block' : 'none';
    });
  });
  