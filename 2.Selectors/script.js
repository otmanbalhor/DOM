let elementsImportants,imgImportants,para;
let uno,dos,tres,randColor;
let textcolor;

elementsImportants=document.querySelectorAll('.important');

elementsImportants.forEach(function(element){

    element.setAttribute('title','This is an important item');
});

imgImportants=document.querySelectorAll('img');

imgImportants.forEach(function(image){

    if(image.classList.contains('important')===false) {

        image.style.display='none';
    }
});

para=document.querySelectorAll('p');

para.forEach(function(paragraphe){

    if(paragraphe.classList.length>0)
    {
        console.log(paragraphe.classList);
        console.log('\n');
        console.log(paragraphe.innerText);
    }
    else{
         console.log(paragraphe.innerText);
    }
   
});

textcolor=document.querySelectorAll('p');

for(ColorPara of textcolor){

    if(ColorPara.classList.length===0){

    uno=Math.floor(Math.random()*255);
    dos=Math.floor(Math.random()*255);
    tres=Math.floor(Math.random()*255);

    ColorPara.style.color=`rgb(${uno},${dos},${tres})`;
    }
}
