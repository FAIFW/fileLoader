"use strict";
const mod = document.getElementById('modal');
const close = document.getElementById('close');

console.log(mod);
console.log(close);
// Вешаем обработчик открытия
document.getElementById('open').addEventListener('click', () => {
  mod.style.display = 'block'; // Показываем "модалку"
  // Вешаем обработчики клика
  mod.addEventListener('click', inClick);
  document.addEventListener('click', outClick);
  close.addEventListener('click', outClick);
  
})

function inClick(e) {
  console.log('click inside');
  e.stopPropagation(); // Если внутри жмякнули, ничего не делать
}

function outClick(e) {
  if (e.target.id === 'open') {
    console.log('click on openBtn');
    e.stopPropagation(); // Если это кнопка открытия, не реагировать
    return;
  }

  console.log('click outside');
  mod.style.display = 'none';
  mod.removeEventListener('click', inClick);
  document.removeEventListener('click', outClick);
}