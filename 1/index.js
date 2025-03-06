let cards = [
  { id: 1, balance: 100, currency: "USD" },
  { id: 1, balance: 200, currency: "EUR" },
  { id: 1, balance: 300, currency: "RUB" },
];

function handleClick() {
  cards.forEach((card) => {
    console.log(
      "Card ID: ${card.id}, Balance: ${card.balance}, Currency: ${card.currency}"
    );
  });
}

document.getElementById("button").addEventListener("click", handleClick);
