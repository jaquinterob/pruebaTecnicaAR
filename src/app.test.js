const staircase = require("./app");

test('n="abc" -> "n invalido porque no es un numero"', () => {
    const n = "abc";
    expect(staircase(n)).toBe("n invalido porque no es un numero");
});

test('n=0 -> "n invalido porque es menor que 1"', () => {
    const n = 0;
    expect(staircase(n)).toBe("n invalido porque es menor que 1");
});

test('n=100 -> "n invalido porque es mayor que 99"', () => {
    const n = 100;
    expect(staircase(n)).toBe("n invalido porque es mayor que 99");
});

test("n=2 -> escalera 2*2", () => {
    const n = 2;
    const escalera = " #\n##\n";
    expect(staircase(n)).toBe(escalera);
});

test("n=3 -> escalera 3*3", () => {
    const n = 3;
    const escalera = "  #\n ##\n###\n";
    expect(staircase(n)).toBe(escalera);
});
