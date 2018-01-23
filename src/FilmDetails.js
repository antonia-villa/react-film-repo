import React, { Component } from 'react';

class FilmDetails extends Component{
	render (){
		const filmDetails = this.props.filmDetails.map(f => {
		return(
			<div> 
				<p>{f.overview}</p>
			</div>
			)
		});
		return (
			<div>{filmDetails}</div>
	);
}
}


export default FilmDetails;

