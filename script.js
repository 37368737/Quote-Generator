class Quote {
    constructor(text, author){
        this.text = text;
        this.author = author;
    }
}

const quotes = [];

function fetchQuotesTxt(){
    const textFilePath = 'quotes.txt';
    const rawFile = new XMLHttpRequest();

    rawFile.open('GET', textFilePath, true);
    rawFile.onreadystatechange = function (){
        if (rawFile.readyState === 4 && rawFile.status === 200){
            const lines = rawFile.responseText.split('\n');
            lines.forEach(line => {
            const [quoteText, author] = line.split(' - ');
            const quote = new Quote(quoteText.trim(), author.trim());
            quotes.push(quote);
        });
    }
};
rawFile.send();
}
    fetchQuotesTxt();

  function getRandomQuote(){
    if (quotes.length === 0) {
        document.getElementById("quote-text").textContent = "No quotes available.";
        document.getElementById("quote-author").textContent = "";
        return;
    }
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const textElement = document.getElementById("quote-text");
    const authorElement = document.getElementById("quote-author");

    textElement.textContent = quotes[randomIndex].text;
    authorElement.textContent = "- " + quotes[randomIndex].author;
  }