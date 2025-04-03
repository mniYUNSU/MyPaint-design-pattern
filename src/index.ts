import { ChromeMyPaintFactory } from './MyPaintFactory.js';

function main() {
  const factory = ChromeMyPaintFactory;
  const myPaint = factory.createMyPaint();
  const myPaintMenu = factory.createMyPaintMenu(myPaint);
  const myPaintHistory = factory.createMyPaintHistory(myPaint);
  myPaint.initialize();
  myPaintMenu.initialize();
  myPaintHistory.initialize();
}

main();
