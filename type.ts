class Point { x: number; y: number }
let point: Point = new Point();
// point.x = 1;
// point.y = 1;

class Rect {
    private x1: number;
    public x2: number;
    y1: number;
    y2: number;
    private readonly MAX_COORD = 1000;
    constructor(x?: number, y?: number) {
        // this.x1 = x
    }
    square() {
        return Math.abs(this.x1 - this.x2) * Math.abs(this.y1 - this.y2)
    }

}

let rect: Rect = new Rect();
// rect.x1 = 1;
// rect.x2 = 1;
// rect.y1 = 1;
// rect.y2 = 1;

let rect1: Rect = new Rect(10, 20);
// rect1.x1 = 5;
rect1.x2 = 5;
rect1.square()

