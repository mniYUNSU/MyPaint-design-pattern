import MyPaint from './AbstractMyPaint';
import ChromeMyPaint from './ChromeMyPaint';
import IEMyPaint from './IEMyPaint';

export abstract class MyPaintMenu {
  myPaint: MyPaint;
  protected constructor(myPaint: MyPaint) {
    this.myPaint = myPaint;
  }
  abstract initialize(): void;

  static getInstance(myPaint: MyPaint) {}
}

export class IEMyPaintMenu extends MyPaintMenu {
  private static instance: IEMyPaintMenu;
  override initialize(): void {}
  static override getInstance(myPaint: IEMyPaint): IEMyPaintMenu {
    if (!this.instance) {
      this.instance = new IEMyPaintMenu(myPaint);
    }
    return this.instance;
  }
}

export class ChromeMyPaintMenu extends MyPaintMenu {
  private static instance: ChromeMyPaintMenu;
  override initialize(): void {}
  static override getInstance(myPaint: ChromeMyPaint): ChromeMyPaintMenu {
    if (!this.instance) {
      this.instance = new ChromeMyPaintMenu(myPaint);
    }
    return this.instance;
  }
}
