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

// enable/disable scroll on main while on navigation bar
var navbar = document.querySelector('.navbar');

function enableNavScroll() {
    navbar.style.overflowY = 'scroll';
}

function disableNavScroll() {
    document.body.style.overflow = 'scroll';
}
