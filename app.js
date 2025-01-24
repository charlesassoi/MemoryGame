const array=[{
name:"fries",
img:"./images/fries.png"

},
{
name:"cheeseburger",
img:"./images/cheeseburger.png"  
},
{name:"blank",
img:"./images/blank.png"
},
{name:"hotdog",
img:"./images/hotdog.png"
},
{name:"ice-cream",
img:"./images/ice-cream.png"
},
{name:"milkshake",
img:"./images/milkshake.png"
},
{name:"pizza",
img:"./images/pizza.png"
},
{name:"white",
img:"./images/white.png" 
}
]

array.sort(()=>0.5 -Math.random());

console.log(array);

function createBoard(){
    for (let i=0;i<10;i++){
        const card=document.createElement("#grid");
        card.setAttribute("src","./images/white.png");
        console.log(card,i);
    }

}
createBoard();
