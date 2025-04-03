import MyPaint from './AbstractMyPaint';
import ChromeMyPaint from './ChromeMyPaint';
import IEMyPaint from './IEMyPaint';

export abstract class MyPaintHistory {
  myPaint: MyPaint;
  protected constructor(myPaint: MyPaint) {
    this.myPaint = myPaint;
  }
  abstract initialize(): void;

  static getInstance(myPaint: MyPaint) {}
}

export class IEMyPaintHistory extends MyPaintHistory {
  private static instance: IEMyPaintHistory;
  override initialize(): void {}
  static override getInstance(myPaint: IEMyPaint): IEMyPaintHistory {
    if (!this.instance) {
      this.instance = new IEMyPaintHistory(myPaint);
    }
    return this.instance;
  }
}

export class ChromeMyPaintHistory extends MyPaintHistory {
  private static instance: ChromeMyPaintHistory;
  override initialize(): void {}
  static override getInstance(myPaint: ChromeMyPaint): ChromeMyPaintHistory {
    if (!this.instance) {
      this.instance = new ChromeMyPaintHistory(myPaint);
    }
    return this.instance;
  }
}
