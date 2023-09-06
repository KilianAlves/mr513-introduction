export interface Shape {
    readonly name: string;
    readonly isPolygon: boolean;
    getArea(): number;
}

export abstract class AbstractShape implements Shape{
    readonly name: string;
    readonly isPolygon: boolean;

    constructor(name: string, isPolygon: boolean) {
        this.name = name;
        this.isPolygon = isPolygon;
    }
    abstract getArea(): number;
}

export class Rectangle  extends AbstractShape{
    side1: number;
    side2: number;

    constructor(name: string, side1: number, side2: number) {
        super(name,true);
        this.side1 = side1;
        this.side2 = side2;
    }

    getArea(): number {
        return this.side1 * this.side2;
    }
}

export class Square extends Rectangle{
    constructor(name: string, side: number) {
        super(name,side, side)
    }
}

export class Circle extends AbstractShape{
    radius: number;

    constructor(name: string, radius: number) {
        super(name,false);
        this.radius = radius;
    }

    getArea(): number {
        return this.radius* Math.PI;
    }
}



export function displayShape(shape: Shape): void {
        if (shape.isPolygon == true) {
            console.log(shape.name + " est un polygone. Son aire est " + shape.getArea() + " .");
        } else {
            console.log(shape.name + " n'est pas un polygone. Son aire est " + shape.getArea() + " .");
        }
    }