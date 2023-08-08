export default class Loader {
  static classes = {
    hidden: 'is-hidden',
  };
  constructor(selector) {
    this.loaderEl = this.getLoader(selector);
  }

  getLoader(selector) {
    return document.querySelector(selector);
  }

  hide() {
    this.loaderEl.classList.add(Loader.classes.hidden);
  }

  show() {
    this.loaderEl.classList.remove(Loader.classes.hidden);
  }
}