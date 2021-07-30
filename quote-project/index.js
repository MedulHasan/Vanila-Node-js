/*

* Title: Quotes Library
*Description: Utility libery for getting a list of Quotes
*Author: Medul Hasan (I am learning from learn with sumit)
*Date: 30/7/2021

*/

//Dependencies
const math = require('./lib/math');
const quotes = require('./lib/quotes');

const app = {};

app.config = {
    setTime: 1000
};

app.printAQuotes = function printAQuotes() {

    let allQuotes = quotes.allQuotes();
    let numberOfQuotes = allQuotes.length;
    let randomNumber = math.getRandomNumber(1, numberOfQuotes);
    let selectQuotes = allQuotes[randomNumber - 1];
    console.log(selectQuotes);
}

app.indefiniteLoop = function indefiniteLoop() {
    setInterval(app.printAQuotes, app.config.setTime);
};

app.indefiniteLoop();