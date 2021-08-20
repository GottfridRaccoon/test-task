import React, { useEffect } from "react";
import './ContentItems.css'
import BooksQuery from "../../services/BooksService";
const books = new BooksQuery()

const ContentItems = () => {
	const [book, bookChange] = React.useState({ books: {} })
	const [isLoaded, isLoadedChange] = React.useState({ load: false })
	const bookQuery = () => {
		books.query("javascript").
			then(bookData => bookData.json())
			.then(bookData => {
				bookChange({ books: bookData })
				isLoadedChange({ load: true })

			})
	}

	React.useEffect(() => {
		bookQuery()

	}, [])
	if (!isLoaded.load) {
		return <h1>Load</h1>
	}
	else {
		const { books } = book

		return (
			<div className="content-items-wrapper">
				{

					books.items.map((e, i) => {
						// e.volumeInfo.autors.length > 1 ? e.volumeInfo.map(e => e.autors) : 
						console.log(e.volumeInfo.categories)
						return (
							<div className="content-border-wrapper">
								<div className="content-item">
									{e.volumeInfo.readingModes.image ? <img className="content-items-image" src={e.volumeInfo.imageLinks.thumbnail}></img> : null}
									<h3>{e.volumeInfo.title}</h3>
									<ul class="list-group list-group-flush">
										<li class="list-group-item">{e.volumeInfo.categories ? e.volumeInfo.categories[0] : null}</li>
										<li class="list-group-item">{e.volumeInfo.authors ?
											e.volumeInfo.authors.join(', ') :
											null}</li>
										<li class="list-group-item">{e.volumeInfo.title}</li>

									</ul>
								</div>
							</div>

						)
					}

					)
				}


			</div>
		)
	}



}
export default ContentItems