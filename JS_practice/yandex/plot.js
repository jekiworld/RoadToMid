const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function plot(x, y, x1, y1, x2, y2) {
    if (x1 <= x && x <= x2) {
        if (y > y2) {
            return 'N';
        } else if (y < y1) {
            return 'S';
        }
    } else if (y1 <= y && y <= y2) {
        if (x < x1) {
            return 'W';
        } else if (x > x2) {
            return 'E';
        }
    } else {
        if (x < x1 && y > y2) {
            return 'NW';
        } else if (x > x2 && y > y2) {
            return 'NE';
        } else if (x < x1 && y < y1) {
            return 'SW';
        } else if (x > x2 && y < y1) {
            return 'SE';
        }
    }
    return null;
}
