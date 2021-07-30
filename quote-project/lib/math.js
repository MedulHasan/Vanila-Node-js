/*

* Title: Quotes Library
*Description: Utility libery for getting a list of Quotes
*Author: Medul Hasan (I am learning from learn with sumit)
*Date: 30/7/2021

*/

const math = {};

math.getRandomNumber = function getRandomNumber(min, max) {
    let minimum = min;
    let maximum = max;
    minimum = typeof minimum === ' number' ? minimum : 0;
    maximum = typeof maximum === ' number' ? maximum : 0;
    return Math.floor(Math.random() * (maximum - minimum + 1) + min)
};

module.exports = math
// let b = math.getRandomNumber(1, 6);
// console.log(b);