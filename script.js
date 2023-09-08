// loops through each letter on hover lighting them up
let text = document.querySelectorAll('#header-nav a').forEach(text => {
    text.innerHTML = text.innerText.split('').map((letters,i) => `<span style="transition-delay:${i*100}ms;">${letters}</span>`).join('');
})