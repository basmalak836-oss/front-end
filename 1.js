const happyQuotes = [
    "Happiness is not something ready made. It comes from your own actions. - Dalai Lama",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "Life is what happens to you while you're busy making other plans. - John Lennon"
];  
const sadQuotes = [
    "Tears come from the heart and not from the brain. - Leonardo da Vinci",
    "Every human walks around with a certain kind of sadness. They may not wear it on their sleeves, but it's there if you look deep. - Taraji P. Henson",
    "The word 'happy' would lose its meaning if it were not balanced by sadness. - Carl Jung"
];  
const happyButton = document.getElementById("happy_btn");
const sadButton = document.getElementById("sad_btn");
const quoteDisplay = document.getElementById("quote_display");
happyButton.addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * happyQuotes.length);
    const randomQuote = happyQuotes[randomIndex];
    quoteDisplay.textContent = randomQuote;
});
sadButton.addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * sadQuotes.length);
    const randomQuote = sadQuotes[randomIndex];
    quoteDisplay.textContent = randomQuote;
}); 
