import React, { Component } from 'react';

class FilmDetails extends Component{
	render (){
		return(
			<div> 
				<p>{this.props.filmDetails.overview}</p>
			</div>
			)
	}
}


export default FilmDetails;

