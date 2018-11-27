//create array of quotes (objects)
var quotes = [
{quote: 'I hate to lose more than I love to win.', source: "Jimmy Connors"},
{quote: 'I just try to play tennis and don\'t find excuses. You know, I just lost because I lost, not because my arm was sore.', source: "Goran Ivanisevic"},
{quote: 'I love the winning, I can take the losing, but most of all I love to play.', source: "Boris Becker", year: 1990},
{quote: 'I never knew I was grunting, it was just part of my strokes.', source: "Monica Seles"},
{quote: 'I play each point like my life depends on it.', source: "Rafael Nadal"},
{quote: 'Being number two sucks.', source: "Andre Agassi"},
{quote: 'Everybody loves success, but they hate successful people.', source: "John McEnroe", year: 1984},
{quote: 'Tennis has given me soul.', source: "Martina Navratilova"},
{quote: 'If you\'re a champion, you have to have it in your heart.', source: "Chris Evert", year: 1964},
{quote: 'I never look back, I look forward.', source: "Steffi Graf"},
{quote: 'I\'m not afraid of anyone, but sometimes I\'m afraid of myself.', source: "Justine Henin", year: 2009}
];
// create random quote with random number
function getRandomQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    return randomNumber;
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

    var randomObjectNumber = getRandomQuote();

        var html = "<p class='quote'>"
        + quotes[randomObjectNumber].quote +
        "</p>"
        + "<p class='source'>"
        + quotes[randomObjectNumber].source;

        if (quotes[randomObjectNumber].year !== undefined) {
            html += "<span class='year'>"
            + quotes[randomObjectNumber].year +
            "</span>";
        } else {
            html += "";
        }
        document.getElementById('quote-box').innerHTML = html;
// set backround color
        getRandomColor();
        document.getElementById('bgcolor').style.backgroundColor = getRandomColor();
}

// button
document.getElementById('loadQuote').onclick = printQuote

//test
console.log();
