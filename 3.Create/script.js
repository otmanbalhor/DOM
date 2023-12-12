let tab=["Otman","Damien","Giuseppe","Aurélien","Tess","Mathias","Ugur","Husseyin","Maoro","Denis","Alice","Cassidy","Winona","Marvin","Thomas","Nicolas","Hanen","Alexis D","Alexis P","Jeremy","Julien","Joshua","Noé","Robin"];

let article,uno,sat,lum,section,paragraph;

article=document.querySelector('article');


for(let i=0;i<tab.length;i++){

   section = document.createElement('section');

   uno=Math.floor(Math.random()*360);
   sat=Math.floor(Math.random()*100);
   lum=Math.floor(Math.random()*100);
   
   section.style.backgroundColor=`hsl(${uno},${sat}%,${lum}%)`;

   paragraph=document.createElement('p');
   paragraph.textContent=tab[i];

   section.appendChild(paragraph);

   article.appendChild(section);

   if(lum<26){
       section.style.color=`hsl(${uno},${sat}%,${70}%)`;
   }
   else{
       section.style.color=`hsl(${uno},${sat}%,${30}%)`;
   }

}