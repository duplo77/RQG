//create array of quotes (objects)
var quotes = [
{quote: 'I hate to lose more than I love to win.', source: "Jimmy Connors", tags: "humor"},
{quote: 'I just try to play tennis and don\'t find excuses. You know, I just lost because I lost, not because my arm was sore.', source: "Goran Ivanisevic", tags: "humor"},
{quote: 'I love the winning, I can take the losing, but most of all I love to play.', source: "Boris Becker", year: 1990, tags: "inspiration"},
{quote: 'I never knew I was grunting, it was just part of my strokes.', source: "Monica Seles", tags: "humor"},
{quote: 'I play each point like my life depends on it.', source: "Rafael Nadal", tags: "motivation"},
{quote: 'Being number two sucks.', source: "Andre Agassi", tags: "humor"},
{quote: 'Everybody loves success, but they hate successful people.', source: "John McEnroe", year: 1984, tags: "humor"},
{quote: 'Tennis has given me soul.', source: "Martina Navratilova", tags: "inspiration"},
{quote: 'If you\'re a champion, you have to have it in your heart.', source: "Chris Evert", year: 1964, tags: "motivation"},
{quote: 'I never look back, I look forward.', source: "Steffi Graf", tags: "motivation"},
{quote: 'I\'m not afraid of anyone, but sometimes I\'m afraid of myself.', source: "Justine Henin", year: 2009, tags: "humor"}
];



// create random quote with random number
function getRandomQuote() {
    var randomNum = Math.floor(Math.random() * (quotes.length));
    return quotes[randomNum];
}

// create random color
function getRandomColor() {
	 var r = Math.floor(Math.random() * 256 );
	 var g = Math.floor(Math.random() * 256 );
   var b = Math.floor(Math.random() * 256 );
   var randomColor = 'rgb(' + r + ',' + g + ',' + b + ')';
   return randomColor;
}

// print Array in quote-Box
function printQuote () {

    var randomQuote = getRandomQuote();
    var year = "";

    if (randomQuote.year !== undefined) {
        year += "<span class='year'>"
        + randomQuote.year +
        "</span>";
    }

    var html = "<p class='quote'>"
    + randomQuote.quote +
    "</p>"
    + "<p class='source'>"
    + randomQuote.source + year
    + "<p class='tags'>"
    + randomQuote.tags;

/* way without tags
    if (randomQuote.year !== undefined) {
        html += "<span class='year'>"
        + randomQuote.year +
        "</span>";
    } else {
        html += "";
    }*/
    
// change the quotes
    document.getElementById('quote-box').innerHTML = html;

// change backround color
  getRandomColor();
    document.getElementById('bgcolor').style.backgroundColor = getRandomColor();
}

// button "Show another quote",when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// quote page opens
window.onload = printQuote();

// Auto-refresh the quote every 20sec
setInterval(printQuote, 20000);
