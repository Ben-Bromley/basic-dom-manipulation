const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum nostrum iusto omnis eius officia aliquid dolor culpa maxime est ipsum?"
    },
    {
        id: 2,
        name: "barry arnold",
        job: "UI/UX designer",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum nostrum iusto omnis eius officia aliquid dolor culpa maxime est ipsum?"
    },
    {
        id: 3,
        name: "Hermit Rydalch",
        job: "React Engineer",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum nostrum iusto omnis eius officia aliquid dolor culpa maxime est ipsum?"
    },
    {
        id: 4,
        name: "Bruce Arrowsmith",
        job: "PHP developer",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum nostrum iusto omnis eius officia aliquid dolor culpa maxime est ipsum?"
    },
];
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")
// set starting item
let currentItem = 0;
const update = () => {
    const item = reviews[currentItem];
    // img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
    console.log("content updated")
}
// load iniital item
window.addEventListener('DOMContentLoaded', () => {
    console.log("ready")
    update();  
});
// change to previous item
prevBtn.addEventListener('click', () => {
    currentItem <= 0 ? currentItem = 3: currentItem--;
    console.log('prev clicked ' + currentItem);
    update();
});
// change to next item
nextBtn.addEventListener('click', () => {
    currentItem >= 3 ? currentItem = 0: currentItem++;
    console.log('next clicked ' + currentItem);
    update();
});
// select random item-
randomBtn.addEventListener('click', () => {
    currentItem = Math.floor(Math.random()*3);
    console.log('random clicked ' + currentItem);
    update();
});
