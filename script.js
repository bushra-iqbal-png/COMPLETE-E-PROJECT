const hero = document.querySelector(".hero");

const images = [
"https://images.unsplash.com/photo-1512909006721-3d6018887383?w=1600",
"https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1600",
"https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=1600",
"https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=1600"
];

let index = 0;

function changeBackground(){
    hero.style.backgroundImage =
    `url(${images[index]})`;

    index++;

    if(index >= images.length){
        index = 0;
    }
}

changeBackground();

setInterval(changeBackground, 3000);