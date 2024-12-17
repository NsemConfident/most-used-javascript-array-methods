const btn = document.querySelector(".new_quote");
const person = document.querySelector(".person");
const quote = document.querySelector(".quote");

const Quotes = [
  {
    person: "Nsem Confident",
    quote: "A healthy person is a happy person",
  },
  {
    person: "Nkuma Victory",
    quote: "Life is in Phases",
  },
  {
    person: "Atokoro Micheal",
    quote:
      "football is Love, play it, feel it, listen to the crowd when you are winning.",
  },
  {
    person: "Asod Fidel",
    quote: "you've got to keep pushing",
  },
  {
    person: "Aboko Festus",
    quote: "This is the era of Artificial Intelligence, you've got to be wise",
  },
  {
    person: "Ambo Miracle",
    quote: "No matter what, never give up",
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * Quotes.length);
  quote.innerText = Quotes[random].quote;
  person.innerText = Quotes[random].person;
});
