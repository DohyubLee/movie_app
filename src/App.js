import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  state = {}
  
  componentDidMount() {
    this._getMovies();
  }
  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie title={movie.title_english} poster={movie.large_cover_image} genres={movie.genres} synopsis={movie.synopsis} key={movie.id} />
      // css로 꾸미기에 앞서 필요한 데이터 모두 movie컴포넌트로 props하기
    })
    return movies;
  }

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    })
  }
  _callApi = () => {
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating")
    .then(res => res.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }
  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
