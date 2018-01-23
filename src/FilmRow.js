import React, { Component } from 'react';

let baseULR = 'https://image.tmdb.org/t/p/w780/';

class FilmRow extends Component{

	clickHandler = () => {
    	this.props.onClick(this.props.allFilms);
  	}

	render (){
		const film = this.props.allFilms.map(f => {
			 return (
			<div className="film-row" id={f.id} key={f.id} onClick={this.clickHandler}> 
				<img src ={baseULR+f.poster_path} alt={f.title}/>
			    <h1 className="Title">
			    	{f.title}
			    </h1>
			    <p>
			    	{f.release_date}
			    </p>
			</div>
			)
		}

  );
		return (
			<div>{film}</div>
		);
	}

}

export default FilmRow;
