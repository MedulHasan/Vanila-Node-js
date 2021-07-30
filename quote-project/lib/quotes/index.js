/*

* Title: Quotes Library
*Description: Utility libery for getting a list of Quotes
*Author: Medul Hasan (I am learning from learn with sumit)
*Date: 30/7/2021

*/

const fs = require('fs');

const quotes = {};

quotes.allQuotes = function allQuotes() {
    const file = fs.readFileSync(`${__dirname}/quotes.txt`, 'utf8');

    const arrayOfQuotes = file.split(/\r?\n/);

    return arrayOfQuotes;
}

module.exports = quotes;
// let a = quotes.allQuotes();
// console.log(a);