class IEMyPaint {
    static instance;
    constructor(canvas) {
        if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
            throw new Error('canvas 엘리먼트를 입력하세요.');
        }
    }
    initialize() { }
    initializeMenu() { }
    static getInstance() {
        if (!this.instance) {
            this.instance = new IEMyPaint(document.querySelector('#canvas'));
        }
        return this.instance;
    }
}
export default IEMyPaint;
