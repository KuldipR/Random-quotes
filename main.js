const newQuoteBtn = document.getElementById("newQuoteBtn");
const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");



let jsonData = async function fetchQuotes() {
  const response = await fetch("./quotes.json");
  const jsonData = await response.json();

  let random = Math.floor(Math.random() * jsonData.length);

  quoteText.textContent = `${jsonData[random].quoteText}`;
  quoteAuthor.textContent = `- ${jsonData[random].quoteAuthor}`;
};

jsonData();

newQuoteBtn.addEventListener("click", jsonData);
