const innerslider = document.querySelectorAll(".innercolor");
const body = document.querySelector("body");
const reset = document.querySelector(".reset");
const nameofpokemon1 = document.querySelector(".name1");
const nameofpokemon2 = document.querySelector(".name2");
const pokeballs = document.querySelectorAll(".pokeballs1");
const pokeball = document.querySelectorAll(".pokeball");
const pokemon = document.querySelector(".poke1") 
const player2img = document.querySelector(".player2img"); 
const player1img = document.querySelector(".player1img"); 
const btnone = document.querySelector(".btnone"); 
const text = document.querySelector(".text"); 
const firstmove = document.querySelectorAll(".firstmove");
const secondmove = document.querySelectorAll(".secondmove");
const imgcontainer = document.querySelector(".img-container"); 
const moveanimate = document.querySelector(".moveanimate"); 
reset.addEventListener("click",()=>{
    slideranimate(10);
})
function changepokemon1(img){
    produce(1,img.alt)
    player1img.src = `images/${img.alt}.png`
    nameofpokemon1.innerHTML = `${img.alt}`
}
function changepokemon2(img){
    produce(2)
    player2img.src = `images/${img.alt}.png`
    nameofpokemon2.innerHTML = `${img.alt}`
}
firstmove.forEach((movebtn)=>{
    movebtn.addEventListener("click",()=>{
        moveanimate.style.opacity = 1;
        moveanimate.src = "images/fire.png";
        let margin = 0;
        player1img.style.marginLeft = "5rem"
         const moveimage = setInterval(()=>{
            while(margin<=2){
                margin+=0.1
                player1img.style.marginLeft = `${margin}rem`
            }
            while(margin>=0){
                margin-=0.1
                player1img.style.marginLeft = `${margin}rem`
            }
            clearInterval(moveimage)
            
            
        },100) 
        let size = "-2rem";
        let increment = 0;
        moveanimate.style.marginLeft = size;
        const aniId = setInterval(()=>{
            if(increment<=46){
                increment+=2;
                console.log(moveanimate.style.marginLeft)
                moveanimate.style.marginLeft = `${increment}rem`;
            }
            else{
                moveanimate.style.opacity = 0;
                clearInterval(aniId);
            }
            
        },20)

    });
});
secondmove.forEach((movebtn)=>{
    movebtn.addEventListener("click",()=>{
        moveanimate.style.opacity = 1;
        moveanimate.src = "images/razorleaf.png";
        let margin = 0;
        player2img.style.marginRight = "5rem"
         const moveimage = setInterval(()=>{
            while(margin<=2){
                margin+=0.1
                player2img.style.marginRight = `${margin}rem`
            }
            while(margin>=0){
                margin-=0.1
                player2img.style.marginRight = `${margin}rem`
            }
            clearInterval(moveimage)
            
        },100)
        let size = "40rem";
        let decrement = 40;
        moveanimate.style.marginLeft = size;
        console.log(moveanimate.style.marginRight)
         const aniId1 = setInterval(()=>{
            if(decrement>=-6){
                console.log(moveanimate.style.marginLeft)
                decrement-=2;
                moveanimate.style.marginLeft = `${decrement}rem`;
            }
            else{
                moveanimate.style.opacity = 0;
                clearInterval(aniId1);
            }
            
        },20) 

    });
});

function hover(img){

    img.src = `images/${img.alt}.png`;
    console.log(pkmList[3][0])
    attack(pkmList[3][0],"Blastoise","Charizard",400,"Chaman");
    
}
function hoverout(img){
    img.src = "images/pokeball.png";
}

let width = 100;
let value;
function slideranimate(value){
   let green = 255;
   let red = 0;
   const id = setInterval(() => {
    if(width >= value)
    {
     width-=0.25;
     red+=2.55; 
     green-=0.55;
     innerslider[0].style.width = width + "%";
     innerslider[1].style.width = width + "%";
     innerslider[0].style.backgroundColor = `rgb(${red},${green},0)`;
     innerslider[1].style.backgroundColor = `rgb(${red},${green},0)`;
    }
    else{
        clearInterval(id);
        width = 100;
        red = 0;
        green = 255;
    }
   }, 10);
  
}
slideranimate(20);

/*Creating a pokemon class*/
class Pokemon {
    constructor(name, image, hp, moves) {
        this.name = name;
        this.image = image;
        this.hp = hp;
        this.fullhp = hp;
        this.moves = moves;
    }
}

/*Still need to work on.....*/
let pkmList = [
['Charizard', './images/charizard.png', 360, [
    ['Flamethrower', 'fire', 95, 0.95],
    ['Dragon Claw', 'dragon', 100, 0.90],
    ['Air slash', 'fly', 75, 0.85],
    ['Slash', 'normal', 70,0.80 ]
]],
['Blastoise', './images/blastoise.png', 362, [
    ['Surf', 'water', 90, 0.95],
    ['Crunch', 'normal', 80, 0.80],
    ['Ice punch', 'ice', 75, 0.85],
    ['Flash cannon', 'steel', 80, 0.95]
]],
['Venusaur', './images/venusaur.png', 700, [
    ['Petal Blizzard', 'grass', 90, 0.95],
    ['Sludge bomb', 'poison', 90, 0.95],
    ['Earthquake', 'ground', 100, 0.95],
    ['Body Slam', 'normal', 85, 0.80]
]]
];

let typeMatch = {
'Charizard': [
    ['ground'],
    ['water', 'rock'],
    ['fire', 'grass', 'steel']
],
'Blastoise': [
    ['electric'],
    ['grass'],
    ['fire', 'water']
],
'Venusaur': [
    ['poison'],
    ['fire', 'fly', 'ice', 'steel'],
    ['grass', 'water']
],
}

function produce(playernum,img) {
    for(j = 0;j<pkmList.length;j++) {
        if(pkmList[j][0] == img){
            `player${playernum}img`.src = `./images/${img}.png`
        }
    }

    let p = pkmList[Math.floor(Math.random() * pkmList.length)];
    let pkm = new Pokemon(p[0], p[1], p[2], p[3]);
    
    `player1${playernum}img`.src =  pkm.image

   
        for (i = 0; i < 4; i++) {
            document.getElementById(`player${playernum}btn${i}`).textContent = pkm.moves[i][0];
        }
    
    return pkm;

}

const pk1 = produce(1);
const pk2 = produce(2);
console.log(pk1,pk2)


function attack(move, attacker, receiver, hp, owner) {
    console.log(attacker,owner)
    /* document.getElementById('comment').innerHTML = '<p>' + owner + attacker.name + ' used ' + move[0] + '!</p>'; */
    if (Math.random() < move[3]) {
        console.log("hh")
        let power = move[2] += Math.floor(Math.random() * 10);
        let rtype = typeMatch[receiver.name];
        let mtype = move[1];
        let scale = 1;

        for (i = 0; i < rtype.length; i++) {
            if (rtype[i].includes(mtype)) {
                switch (i) {
                    case 0:
                        scale = 0;
                        setTimeout(function() {
                            document.getElementById('comment').innerHTML = '<p>It had no effect!</p>';
                        }, 1000);
                        break;
                    case 1:
                        scale = 2;
                        setTimeout(function() {
                            document.getElementById('comment').innerHTML = '<p>It was super effective!</p>';
                        }, 1000);
                        break;
                    case 2:
                        scale = 0.5;
                        setTimeout(function() {
                            document.getElementById('comment').innerHTML = '<p>It was not very effective!</p>';
                        }, 1000);
                        break;
                }
                break;
            }
        }
        power *= scale;
        receiver.hp -= Math.floor(power);
        console.log(receiver.hp);
        /* document.getElementById(hp).innerHTML = '<p>HP: ' + receiver.hp + '/' + receiver.fullhp + '</p>'; */
    } else {
        setTimeout(function() {
            /* document.getElementById('comment').innerHTML = '<p>Attack missed!</p>'; */
        })
    }
    checkWinner(hp);


}


function checkWinner(hp) {
    let f = (pk1.hp <= 0) ? pk1 : (pk2.hp <= 0) ? pk2 : false;
    if (f != false) {
        alert('GAME OVER: ' + f.name + ' fainted!');
        /* document.getElementById(hp).innerHTML = '<p>HP: 0/' + f.fullhp + '</p>'; */
        /* setTimeout(function() {
            location.reload();
        }, 1500) */
    }

}

