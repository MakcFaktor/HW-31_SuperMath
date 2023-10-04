function SuperMath(X, Y, znak) {
    this.X = X;
    this.Y = Y;
    this.znak = znak;
}


SuperMath.prototype.check = function () {
    const validOperators = ['+', '-', '/', '*', '%'];


    if (validOperators.includes(this.znak)) {
        const confirmMessage = `Ви хочете зробити операцію ${this.znak} з ${this.X} і ${this.Y}? (так/ні)`;
        const userConfirm = confirm(confirmMessage);


        if (userConfirm) {
            return this.performOperation();
        } else {
            const userInput = this.input();
            return userInput.performOperation();
        }
    } else {
        return 'Недійсний оператор. Укажіть дійсний оператор.';
    }
};


SuperMath.prototype.performOperation = function () {
    switch (this.znak) {
        case '+':
            return this.X + this.Y;
        case '-':
            return this.X - this.Y;
        case '/':
            return this.X / this.Y;
        case '*':
            return this.X * this.Y;
        case '%':
            return this.X % this.Y;
        default:
            return 'Invalid operator';
    }
};




SuperMath.prototype.input = function () {
    const newX = parseFloat(prompt('Введіть нове значення для X:'));
    const newY = parseFloat(prompt('Введіть нове значення для Y:'));
    const newZnak = prompt('Введіть дійсний оператор (+, -, /, *, %):');


    return new SuperMath(newX, newY, newZnak);
};


const obj = new SuperMath(12, 3, '/');
const result = obj.check();
console.log('Результат:', result);
