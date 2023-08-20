import { Articale } from './js/Articale.js';
import { Modal } from './js/Modal.js';
import { ArticaleModal } from './js/ArticaleModal.js';

const data = [
	{
		id: 1,
		title: 'Increasing Prosperity With Positive Thinking',
		urlToImage: './src/img/strategies/1.jpg',
		tags: ['Art', 'Design'],
		content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
		date: '01.01.2020'
	},
	{
		id: 2,
		title: 'Motivation Is The First Step To Success',
		urlToImage: './src/img/strategies/2.jpg',
		tags: ['Culture'],
		content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
		date: '01.01.2020'
	},
	{
		id: 3,
		title: 'Success Steps For Your Personal Or Business Life',
		urlToImage: './src/img/strategies/3.jpg',
		tags: ['Culture', 'Design', 'Art'],
		content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
		date: '01.01.2020'
	}
];

window.onload = function () {
	console.log('hello RS');

	//render Articles
	if (data) {
		renderArticlesToDom();
	}

	//Tags
	addTagsClickHandler();

	//generate base modal from modal class
	addToolsClickHandler();

}
const addTagsClickHandler = () => {
	document.querySelector('.strategies__tags').addEventListener('click', (e) => {
		if (e.target.classList.contains('tag')) {
			let clikedTag = e.target;
			removeSelectedTags();
			selectClickTag(clikedTag);

			if (clikedTag.innerText === 'All') {
				showAllStrategies(clikedTag.innerText, clikedTag);
			} else {
				filterStrategyBySelectedTag(clikedTag.innerText);
			}
		}
	})

};

const removeSelectedTags = () => {
	let tags = document.querySelectorAll('.strategies__tags .tag');
	tags.forEach(tag => {
		tag.classList.remove('tag_selected');
		tag.classList.add('tag_bordered');
	})
}

const selectClickTag = (clikedTag) => {
	clikedTag.classList.add('tag_selected');
	clikedTag.classList.remove('tag_bordered');
}

const showAllStrategies = (selectedTag, tag) => {
	let strategies = document.querySelectorAll('.strategy-wrapper .strategy');
	strategies.forEach(strategy => {
		strategy.classList.remove('strategy_hidden');
	})
}

const filterStrategyBySelectedTag = (selectedTag) => {
	let strategies = document.querySelectorAll('.strategy-wrapper .strategy');
	strategies.forEach(strategy => {
		strategy.classList.add('strategy_hidden');
		strategy.querySelectorAll('.tag').forEach(tag => {
			if (tag.innerText === selectedTag) {
				strategy.classList.remove('strategy_hidden');
			}
		})
	})
}

const renderArticlesToDom = () => {
	let strategiesWrapper = getStrategisWrapper();
	generationArticles(data).forEach(article => {
		strategiesWrapper.append(article.generatorArticle());
	})

	addStrategyClickHandler();

}

const getStrategisWrapper = () => {
	const strategiesConstainer = document.querySelector('.strategy-wrapper');
	strategiesConstainer.innerHTML = '';

	return strategiesConstainer;
}

const generationArticles = (data) => {
	let articles = [];
	data.forEach(article => {
		articles.push(new Articale(article))
	})
	// console.log(articles)
	return articles;
}

const addToolsClickHandler = () => {
	document.querySelector('.tools__button .button').addEventListener('click', () => {
		genarateToolsModal();
	})
}

const genarateToolsModal = () => {
	renderModalWindow('test conten for Tools Modal')
}

const renderModalWindow = (content) => {
	let modal = new Modal('tools-modal');
	modal.buildModal(content);
}

const addStrategyClickHandler = () => {
	document.querySelector('.strategy-wrapper').addEventListener('click', (e) => {
		if (e.target.closest('.strategy')) {

			let clickedStrategyId = e.target.closest('.strategy').getAttribute('data-id');
			let clickedStrategyData = getClickedData(clickedStrategyId);
			// console.log(clickedStrategyData)
			renderArticleModalWindow(clickedStrategyData);
		}
	})
}

const getClickedData = (id)=> {
	 return data.find(article => article.id == id)
}

const renderArticleModalWindow = (article) => {
	let modal = new ArticaleModal('article-modal', article);
	modal.renderModal();
}