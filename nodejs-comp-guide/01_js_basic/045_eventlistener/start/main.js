const h1Element = document.querySelector('h1');
console.dir(h1Element);
console.log(h1Element.textContent);

h1Element.textContent = '�ύX��^�C�g��';

const btnEl = document.querySelector('button');
btnEl.addEventListener('click', (e) => {
  console.log('hello')
  console.dir(e.target.textContent)
})