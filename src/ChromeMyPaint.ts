import MyPaint from './AbstractMyPaint';

class ChromeMyPaint extends MyPaint {
  private static instance: ChromeMyPaint;

  initialize() {}

  static override getInstance() {
    if (!this.instance) {
      this.instance = new ChromeMyPaint(document.querySelector('#canvas'));
    }
    return this.instance;
  }
}

export default ChromeMyPaint;
