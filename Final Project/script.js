function copyText(selector) {
    const content = document.querySelector(selector);
    const textToCopy = content.innerText;

    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert('Content copied!');
      })
      .catch(err => {
        console.error('Unable to copy content:', err);
        alert('Failed to copy content. Please try again.');
      });
}

document.addEventListener("DOMContentLoaded", function() {
    const submenu = document.querySelector('.submenu');
    const popupIcon = document.getElementById('popup-btn');
  
    popupIcon.addEventListener('click', function() {
      submenu.classList.toggle('active');
    });
  });