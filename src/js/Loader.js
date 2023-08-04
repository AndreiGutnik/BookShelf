export default class Loader{ 
	static classes = {
		loader: 'loader',
	}
	constructor({ selector }) {
		this.loaderEl = this.getLoader(selector);
	}

	getLoader(selector){
		return document.querySelector(selector);
	}

	hide() {
		this.loaderEl.classList.add(Loader.classes.loader);
	}

	show() {
		this.loaderEl.classList.remove(Loader.classes.loader);
	}
}