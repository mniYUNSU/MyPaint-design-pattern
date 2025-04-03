import MyPaint from './AbstractMyPaint';
import ChromeMyPaint from './ChromeMyPaint';
import IEMyPaint from './IEMyPaint';
import { ChromeMyPaintHistory, IEMyPaintHistory } from './MyPaintHistory';
import { ChromeMyPaintMenu, IEMyPaintMenu } from './MyPaintMenu';

export abstract class AbstractMyPaintFactory {
  static createMyPaint() {
    throw new Error('하위 클래스에서 구현해야 함.');
  }

  static createMyPaintMenu(myPaint: MyPaint) {
    throw new Error('하위 클래스에서 구현해야 함.');
  }

  static createMyPaintHistory(myPaint: MyPaint) {
    throw new Error('하위 클래스에서 구현해야 함.');
  }
}

export class ChromeMyPaintFactory extends AbstractMyPaintFactory {
  static override createMyPaint() {
    return ChromeMyPaint.getInstance();
  }

  static override createMyPaintMenu(myPaint: ChromeMyPaint) {
    return ChromeMyPaintMenu.getInstance(myPaint);
  }

  static override createMyPaintHistory(myPaint: ChromeMyPaint) {
    return ChromeMyPaintHistory.getInstance(myPaint);
  }
}

export class IEMyPaintFactory extends AbstractMyPaintFactory {
  static override createMyPaint() {
    return IEMyPaint.getInstance();
  }

  static override createMyPaintMenu(myPaint: IEMyPaint) {
    return IEMyPaintMenu.getInstance(myPaint);
  }

  static override createMyPaintHistory(myPaint: ChromeMyPaint) {
    return IEMyPaintHistory.getInstance(myPaint);
  }
}
