
element=document.querySelector('ol');
element.setAttribute('id','maListe');
const liste = document.getElementById('maListe');

const dernierenfant = liste.lastElementChild;

liste.insertBefore(dernierenfant, liste.firstElementChild);

