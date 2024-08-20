class circle{
    
    constructor(radius,squareR ) {
        this.radius = radius;
    }

    getDiameter() {
        return this.radius * 2;
    }
    getArea() {
        return Math.round(Math.PI * Math.pow(this.radius, 2));
    }
}

export default circle;