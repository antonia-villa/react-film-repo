import React, { Component } from 'react';
import FilmRow from "./FilmRow.js";

class FilmListing extends Component{

	render (){
		const allFilms = this.props.films.map(film => {
			return (<FilmRow film={film} onClick={this.props.onClick}/>)
		})
		return(
			<div> 
				<h4>{allFilms}</h4>
			</div>
		)}
}

export default FilmListing;

