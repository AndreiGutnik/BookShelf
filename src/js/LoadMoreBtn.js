export default class LoadMoreBtn {
	static classes = {
		hidden: 'is-hidden',
	}
	constructor({ selector, isHidden = false }) {		
		this.button = this.getButton(selector);
		isHidden && this.hide();
  }

  getButton(selector) {
    return document.querySelector(selector);
  }

	hide() {
		this.button.classList.add(LoadMoreBtn.classes.hidden);
	}

	show() {
		this.button.classList.remove(LoadMoreBtn.classes.hidden);
	}

	enable() {
		this.button.disabled = false;
    this.button.textContent = 'Load more';
	}
	
	disable() {
		this.button.disabled = true;
		this.button.textContent = 'Loading...';
	}
}