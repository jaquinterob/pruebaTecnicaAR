"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on("end", function () {
    inputString = inputString.split("\n");
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function staircase(n) {
    if (isNaN(n)) {
        return "n invalido porque no es un numero";
    }
    if (n > 99) {
        return "n invalido porque es mayor que 99";
    }
    if (n < 1) {
        return "n invalido porque es menor que 1";
    }
    let respuesta = "";
    for (let i = 1; i <= n; i++) {
        for (let espacios = n - 1; espacios >= i; espacios--) {
            respuesta += " ";
        }
        for (let numerales = 1; numerales <= i; numerales++) {
            respuesta += "#";
        }
        respuesta += "\n";
    }
    console.log(respuesta);
    return respuesta;
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    staircase(n);
}

module.exports = staircase;
