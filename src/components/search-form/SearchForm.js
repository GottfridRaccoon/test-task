import React from 'react'
import "./SearchForm.css"
const SearchForm = () => {
	return (

		<div className="container-fluid">

			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse search-dropdown" >

				<div className="dropdown">
					<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						Категория
					</button>
					<ul className="dropdown-menu show" aria-labelledby="dropdownMenuButton1">
						<li><a className="dropdown-item" href="#">all</a></li>
						<li><a className="dropdown-item" href="#">art</a></li>
						<li><a className="dropdown-item" href="#">biography</a></li>
						<li><a className="dropdown-item" href="#">computers</a></li>
						<li><a className="dropdown-item" href="#"> history</a></li>
						<li><a className="dropdown-item" href="#">medical</a></li>
						<li><a className="dropdown-item" href="#">poetry</a></li>
					</ul>
				</div>
				<div className="dropdown">
					<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						Сортировать по
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						<li><a className="dropdown-item" href="#">Action</a></li>
						<li><a className="dropdown-item" href="#">Another action</a></li>
						<li><a className="dropdown-item" href="#">Something else here</a></li>
					</ul>
				</div>
				<div className="search-form">
					<form >
						<input className="form-control" type="text" placeholder="Search" aria-label="Search"></input>
					</form>
				</div >
			</div>

		</div>




	)
}
export default SearchForm