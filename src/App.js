import React, { Component } from 'react';
import TMDB from "./TMDB.js";
import FilmListing from "./FilmListing.js";
import FilmDetails from "./FilmDetails.js";


import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      movieData: {}
    }
  }

   handleClick = (data) => {
      const url = `https://api.themoviedb.org/3/movie/${data}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`
      console.log(data);
      fetch(url).then(response => {
        response.json().then(data => {
          //console.log(data) // take a look at what you get back!
          this.setState({ movieData: data});
       });
     });
   }


  render() {
    return (
      <div className="film-library container">
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          <div><FilmListing films={TMDB.films} onClick={this.handleClick}/></div>
        </div>

        <div className="film-details">
         <h1 className="section-title">DETAILS</h1>
         <div><FilmDetails filmDetails={this.state.movieData} /></div>
        </div>
      </div>
    );
  }
}

export default App;
