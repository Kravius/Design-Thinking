export class Articale {
	constructor({ id, title, urlToImage, tags, ...rest }) {
		this.id = id;
		this.title = title;
		this.urlToImage = urlToImage;
		this.tags = tags;
	}

	//Articel generator
	generatorArticle() {
		let tamlate = '';
		let article = document.createElement('article');
		article.className = 'strategy block-shadowed';
		article.setAttribute('data-id', this.id);

		this.urlToImage &&
			(tamlate += `<img class="strategy__image" src=${this.urlToImage} alt="strategy">`);

		if (this.title || this.tags) {
			tamlate += '<div class="strategy__content">';

			this.title &&
				(tamlate += `<h3 class="strategy__name">${this.title}</h3>`);

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
}