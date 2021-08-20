import React from 'react'
import SearchForm from '../search-form'
import './Header.css'
const Header = () => {
	return (
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark nav-wrapper">
			<a class="navbar-brand" href="#">Поиск книги</a>
			<SearchForm />
		</nav>

	)
}
export default Header