export default class Section {
  constructor({ initialCards: items, renderer }, containerSelector) {
    this.items = items;
    this._renderer = renderer;
    this._containerSelector = containerSelector;
    this._containerElement = document.querySelector(this._containerSelector);
  }
  renderItems() {
    this.items.forEach(item => {
      const element = this._renderer(item);
      this.addItem(element);
    });
  }
  addItem(element) {
    this._containerElement.prepend(element);
  }
}
