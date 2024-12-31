let letters = document.querySelectorAll('span');
letters.forEach(e => {
    e.style.color = `rgb(${Math.floor(255 *  Math.random())}, ${Math.floor(255 * Math.random())}, ${Math.floor(255 * Math.random())})`;
}); 