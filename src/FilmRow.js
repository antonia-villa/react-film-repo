import React, { Component } from 'react';

let baseULR = 'https://image.tmdb.org/t/p/w780/';

class FilmRow extends Component{

	clickHandler = () => {
    	this.props.clickCallback(this.props.film.id);
  	}

	render (){
			 return (
			<div className="film-row" id={this.props.film.id} key={this.props.film.id} onClick={this.clickHandler}> 
				<img src ={baseULR+this.props.film.poster_path} alt={this.props.film.title}/>
			    <h1 className="Title">
			    	{this.props.film.title}
			    </h1>
			    <p>
			    	{this.props.film.release_date}
			    </p>
			</div>
			)

	}
}

export default FilmRow;
