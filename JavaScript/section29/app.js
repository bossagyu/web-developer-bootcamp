class Color {
    constructor(r,g,b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    greet() {
        return `${this.name}からこんにちは`;
    }
}

const c1 = new Color(244, 244, 1, 'tomato');
console.log(c1.greet());

function hex(r, g, b) {
    return '#115511';
}

function rgb(r, g, b) {
    return `rgb(${r}, ${g}, ${b})`;
}


function makeColor(r, g, b) {
    const color = {};

    color.r = r;
    color.g = g;
    color.b = b;

    color.rgb = function() {
        const {r, g, b} = this;
        return `rgb(${r}, ${g}, ${b})`;
    }
    color.hex = function() {
        // 計算式が面倒だったので適当
        return '#aabb11'; 
    }
    return color;
}

const firstColor = makeColor(35, 255, 150);
console.log(firstColor.rgb());
const hexColor = makeColor();
console.log(hexColor.hex());