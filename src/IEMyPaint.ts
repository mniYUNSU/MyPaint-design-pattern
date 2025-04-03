import MyPaint from './AbstractMyPaint';

class IEMyPaint extends MyPaint {
  private static instance: IEMyPaint;

  initialize() {}

  static override getInstance() {
    if (!this.instance) {
      this.instance = new IEMyPaint(document.querySelector('#canvas'));
    }
    return this.instance;
  }
}

export default IEMyPaint;
