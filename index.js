// Your code here
class Polygon {
    constructor(polySides) { this.polySides = polySides }
    get countSides() { return this.polySides.length }
    get perimeter() {
        const perimeter = this.polySides.reduce((sideA, sideB) => { return sideA + sideB });
        return perimeter;
    }
}
class Triangle extends Polygon {
    constructor(polySides) { super(polySides) }
    get isValid() {
        if(this.polySides[0] + this.polySides[1] > this.polySides[2] && this.polySides[0] + this.polySides[2] > this.polySides[1] && this.polySides[1] + this.polySides[2] > this.polySides[0]) {
            return true;
        } else { return false }
    }
}
class Square extends Polygon {
    constructor(polySides) { super(polySides) }
    get isValid() {
        if (this.polySides[0] === this.polySides[1] && this.polySides[0] === this.polySides[2] && this.polySides[0] === this.polySides[3]) {
            return true;
        } else { return false }
    }
    get area() {
        const perimeter = this.perimeter;
        const area = perimeter / 4;
        return area * area;
    }
}