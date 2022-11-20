const array = ['오징어게임', '킹덤 ', '우영우 ', '스카이캐슬'];

const itemList = array.map((item) => {
  return `<div>${item}</div>`;
});

console.log(itemList.join(''));

const dom = document.querySelector('.item__list');
dom.innerHTML = itemList.join('');
