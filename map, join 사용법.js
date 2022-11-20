// console.log("안녕하세요");

const container = document.querySelector(".item__list");
// console.log(itemList);

const array = ["안녕하세요", "저는 ", "우영우 ", "입니다"];
const sentence = array.join(" ");
// console.log(array);
// console.log(sentence);

const itemList = array.map((item) => {
  return `<div class="item">${item}</div>`;
});

container.innerHTML = itemList.join("");

// itemList.innerHTML = item;
