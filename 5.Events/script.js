const _initTime = Date.now()


const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  const color = e.target.classList[1];

  const time = getElapsedTime();

  console.log(color);
  console.log(time);
  
  const division1 = document.createElement('div');
  division1.classList.add('displayedsquare', color);

  const wrapper = document.querySelector('.displayedsquare-wrapper');

  wrapper.appendChild(division1);

  const ulsection3 = document.querySelector('ul');

  const liste = document.createElement('li');


  liste.innerText= getElapsedTime();
  ulsection3.appendChild(liste);

}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

