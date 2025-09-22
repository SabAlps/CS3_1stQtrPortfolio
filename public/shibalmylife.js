rli = require('readline').createInterface({ input: process.stdin }).on('line', get_line);

function get_line(line) {
    line == 'END' ? rli.close() : solve(line);
}

function solve(line) {
    const age = parseInt(line);
    let result = "You can watch movies with ratings: ";

    result += "G";

    let ratings = [];

    if (age >= 0 && age < 13) {
        ratings.push("PG (with a parent)");
    } else {
        ratings.push("PG");
    }

    if (age >= 13) {
        ratings.push("R-13");
    }
    if (age >= 16) {
        ratings.push("R-16");
    }
    if (age >= 18) {
        ratings.push("R-18");
    }

    if (ratings.length > 0) {
        result += ", " + ratings.slice(0, ratings.length - 1).join(", ");
        if (ratings.length > 1) result += " and ";  
        result += ratings[ratings.length - 1];
    }

    console.log(result);
}

