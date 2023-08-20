import { Modal } from "./Modal";

export class ArticaleModal extends Modal {
	constructor(calasses, { id, title, urlToImage, tags, content, date }) {
		super(calasses)
		this.id = id;
		this.title = title;
		this.urlToImage = urlToImage;
		this.tags = tags;
		this.content = content;
		this.date = date;
	}

		//Article Modal generator
	generatorArticle() {
		let tamlate = '';
		let article = document.createElement('div');
		article.className = 'article-modal__content';

		this.urlToImage &&
			(tamlate += `<img class="strategy__image" src=${this.urlToImage} alt="strategy">`);

		if (this.title || this.tags || this.content || this.date) {
			tamlate += '<div class="strategy__content">';

			this.date &&
				(tamlate += `<p class="strategy__date">${this.date}</p>`);

			this.title &&
				(tamlate += `<h3 class="strategy__name">${this.title}</h3>`);

			this.content &&
				(tamlate += `<p class="strategy__text">${this.content}</p>`);

			if (this.tags) {
				(tamlate += '<div class="strategy__tags tags">');

				this.tags.map(tag => {
					tamlate += `<span class="tag tag_colored">${tag}</span>`;
				})

				tamlate += '</div>';
			}
			tamlate += '</div>';
		}
		article.innerHTML = tamlate;
		// console.log(article)
		// console.log(article.innerHTML)
		return article;
	}

	renderModal () {
		let content = this.generatorArticle();
		super.buildModal(content);
		// console.log(content)
	}
}