const quotes = [{
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall. ",
        author: "-Nelson Mandela"
    },
    {
        quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        author: "-Mother Teresa"

    },
    {
        quote: "Always remember that you are absolutely unique. Just like everyone else. ",
        author: "-Margaret Mead"

    },
    {
        quote: "The purpose of our lives is to be happy.",
        author: " -Dalai Lama"

    },
    {
        quote: "Be the change that you wish to see in the world.",
        author: "― Mahatma Gandhi"

    },
    {
        quote: "The journey of a thousand miles begins with one step.",
        author: "- Lao Tzu"

    },
    {
        quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
        author: "- Mark Twain"

    },
    {
        quote: "Those who dare to fail miserably can achieve greatly.",
        author: "- John F. Kennedy"

    },
    {
        quote: "Life is ten percent what happens to you and ninety percent how you respond to it.",
        author: "- Charles Swindoll"

    },
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "-Winston Churchill"

    }

];

function generate() {
    let quotePara = document.querySelector(".randomQuotes");
    console.log(quotePara);
    let authorPara = document.querySelector(".randomAuthor");

    let quoteArr = Math.floor(Math.random() * quotes.length);
    console.log(quoteArr);

    let quoteGenerator = quotes[quoteArr];
    console.log(quoteGenerator.quote);

    quotePara.innerHTML = quoteGenerator.quote;
    authorPara.innerHTML = quoteGenerator.author;
    console.log(quoteGenerator.author);
}