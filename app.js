let numbers = [
  10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100,
  105,
];

const box = document.getElementById("box");

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  const card = document.createElement("div");
  card.className = "card";
  card.textContent = number;

  //   if (i % 2 === 0) {
  //     card.style.backgroundColor = "orangered";
  //   } else {
  //     card.style.backgroundColor = "midnightblue";
  //   }

  card.classList.add(i % 2 === 0 ? "odd" : "even");
  box.appendChild(card);
}
