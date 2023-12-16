
let selectol=document.querySelector('ol');
selectol.setAttribute('id','maListe');
const liste = document.getElementById('maListe');

const dernierenfant = liste.lastElementChild;

liste.insertBefore(dernierenfant, liste.firstElementChild);


const h2Section1 = document.querySelector('main section:nth-child(1) h2');
const h2Section2 = document.querySelector('main section:nth-child(2) h2');
const h2Section3 = document.querySelector('main section:nth-child(3) h2');


const Content = h2Section2.innerHTML;

h2Section2.innerHTML = h2Section3.innerHTML;

h2Section3.innerHTML = Content;


if(h2Section3)
{
    h2Section3.remove();
}
else{
    console.log("La section n'existe pas");
}

