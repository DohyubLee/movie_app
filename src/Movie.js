import React, { Component } from 'react';
import LinesEllipsis from 'react-lines-ellipsis'
import './Movie.css';
import PropTypes from 'prop-types'; //추가 모듈 props의 타입체크


class Movie extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string,
        genres: PropTypes.array.isRequired,
        synopsis: PropTypes.string.isRequired

    }

    render() {
        console.log(this.props);
        return (
            <div className="Movie">
                <div className="Movie__Column">
                    <MoviePoster poster={this.props.poster} alt={this.props.title} />
                </div>
                <div className="Movie__Column">
                    <h1>{this.props.title}</h1>
                    <div className="Movie__Genres">
                        {this.props.genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                    </div>
                    <p className="Movie__Synopsis">
                        <LinesEllipsis
                        text={this.props.synopsis}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                        />  
                    </p>
                </div>
            </div>
        );
    }
}
// MoviePoster, MovieGenre 추가 컴포넌트 생성
function MoviePoster({poster, alt}) {
    return (
        <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
    )
}
function MovieGenre({genre}) {
    return (
        <span className="Movie__Genre">{genre}</span>
    )
}
MoviePoster.prototype = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}
MovieGenre.prototype = {
    genre: PropTypes.string.isRequired
}

export default Movie;