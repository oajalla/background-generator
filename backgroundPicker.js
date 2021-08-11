const btn = document.querySelector('#btn');
const welcome = document.querySelector('#welcome');

document.body.style.textAlign = 'center';

const randomColor = function() {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
return `rgb(${r},${g},${b})`;
}

btn.addEventListener('click', () => {
    document.body.style.backgroundColor = randomColor();    
    welcome.innerText = randomColor();
})





