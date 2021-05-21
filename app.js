const counter = document.querySelector(".counter");
const increase_btn = document.getElementById('increase');
const reset_btn = document.getElementById('reset');
const decrease_btn = document.getElementById('decrease');

const update = () => {counter.textContent = value}
let value = 0
update()

increase_btn.addEventListener('click', () => {value+=1; update();});
reset_btn.addEventListener('click', () => {value=0; update();});
decrease_btn.addEventListener('click', () => {value-=1; update();});

