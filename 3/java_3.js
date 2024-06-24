function createAdder(x) {
    return function(y) {
        return x + y;
    };
}

const addFive = createAdder(5);
const result = addFive(3);
console.log('Результат:', result);
