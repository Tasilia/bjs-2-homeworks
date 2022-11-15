function parseCount(count) {
    parsedCount = Number.parseInt(count);
    if (isNaN(parsedCount)) {
        throw new Error("Невалидное значение");
    }
    return parsedCount;
}
function validateCount(count) {
    try {
        return parseCount(count);
    } catch (error) {
        return error;
    }
}
class Triangle{
    constructor(a, b, c) {
        if (a + b < c || a + c < b || c + b < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this. c = c;
    }
    getPerimeter() {
        return this.a + this.b + this.c;
    }
    getArea() {
        let p = this.getPerimeter() / 2;
        let area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return Number((area).toFixed(3));
    }
}
function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch(error) {
        function getArea() { 
            return "Ошибка! Треугольник не существует";
        }
        function getPerimeter() { 
            return "Ошибка! Треугольник не существует";
        }
        return {getPerimeter, getArea};
    }
}