export default class BooksQuery {
	__key = 'AIzaSyA-z2W6oz2PLV962x0-9TznjN6ikzVJOzc'
	query = async (find) => {
		const query = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${find}&key=${this.__key}&maxResults=40`,
		)
		return query
	}
}
