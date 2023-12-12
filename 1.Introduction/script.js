let titre;
let uno,dos,tres;

titre=document.title;
document.body.style.background="#FA1CF3";

function colorb()
{
    uno=Math.floor(Math.random()*256);
    dos=Math.floor(Math.random()*256);
    tres=Math.floor(Math.random()*256);

    return uno,dos,tres;
}

colorb();

document.body.style.backgroundColor= `rgb(${uno},${dos},${tres})`; 
console.log(titre);

let myElement = document.body;

let=childrenbody=myElement.children;

for (const child of childrenbody) {

  console.log(child);
}