const h1Element = document.querySelector('h1');
console.dir(h1Element);
console.log(h1Element.textContent);

h1Element.textContent = '変更後タイトル';

const btnEl = document.querySelector('button');
btnEl.addEventListener('click', (e) => {
  console.log('hello')
  console.dir(e.target.textContent)
})