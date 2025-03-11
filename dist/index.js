import IEMyPaint from './IEMyPaint.js';
import ChromeMyPaint from './ChromeMyPaint.js';
function myPaintFactory(type) {
    if (type === 'ie') {
        return IEMyPaint.getInstance();
    }
    else if (type === 'chrome') {
        return ChromeMyPaint.getInstance();
    }
    else {
        throw new Error('NO TYPE');
    }
}
function main() {
    myPaintFactory('ie');
    myPaintFactory('chrome');
}
main();
