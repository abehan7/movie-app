// console.log("안녕하세요");

const container = document.querySelector(".item__list");
// console.log(itemList);

let data = [];

const array = [
  "슬기로운 의사생활",
  "이태원 클라쓰",
  "SKY 캐슬",
  "이상한 변호사 우영우",
  "오징어 게임",
  "안나라수마나라",
  "어쩌다 전원일기",
  "미스터 션샤인",
  "사랑의 불시착",
];
const sentence = array.join(" ");

function add(a, b) {
  return a + b;
}

const result = add(1, 2);
// function itemHtml(a) {
//   return `<div class="item">
// <div class="title">${a}</div>
// <div class="year">2022</div>
// <div class="rating">netflix 9.5</div>
// </div>`;
// }
const itemList = array.map((item) => {
  return `<div class="item">
    <div class="title">${item}</div>
    <div class="year">2022</div>
    <div class="rating">netflix 9.5</div>
    </div>`;
});

container.innerHTML = itemList.join("");

// itemList.innerHTML = item;

const searchBarEl = document.querySelector(".search__bar");

searchBarEl.addEventListener("keyup", (e) => {
  const keyword = e.target.value;
});
