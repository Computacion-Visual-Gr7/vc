let hdurl;
let img;
const url = "https://images-api.nasa.gov/search?q=jupiter&media_type=image";
var img_url;


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


async function randomImage(){
    try{
        const res = await fetch(`${url}`);
        const data = await res.json();
        const num = Object.keys(data.collection.items).length;
        const rand = getRandomInt(0,num);
        console.log(rand);
        const img_url = data.collection.items[rand].links[0].href;
        return img_url;
    }catch(err){
        console.log(err);
    }
}
 let img_arr = [];

async function preload(){          
    img = loadImage(await randomImage());

}

async function setup() {
    //noLoop();
    createCanvas(1000,1000);
}

function draw(){
   image(img,0,0);
}

