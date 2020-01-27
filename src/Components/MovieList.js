import React from "react";
import MovieItem from "./MovieItem";
import { connect } from "react-redux";
import { changePage, getMovie } from "../Actions";
import history from "../history";

class MovieList extends React.Component {
  renderMovieItem = () => {
    if (Object.keys(this.props.movies).length === 0) {
      console.log("this runs");
      return (
        <div className="ui centered message">
          <div className="header">Search for your Favourite Movie</div>
        </div>
      );
    }
    if (this.props.movies.total_results === 0) {
      return (
        <div className="ui message">
          <div className="header">Found no Movie</div>
        </div>
      );
    }
    return this.props.movies.results.map(movie => {
      return (
        <MovieItem
          title={movie.title}
          description={movie.overview}
          votes={movie.vote_count}
          average_votes={movie.vote_average}
          language={movie.original_language}
          popularity={movie.popularity}
          poster={movie.poster_path}
          date={movie.release_date}
          Click={() => {
            history.push(`/movie/${movie.id}`);
          }}
        />
      );
    });
  };
  returnPages = total_pages => {
    let pages = [];
    for (let i = 1; i <= total_pages; i += 1) {
      pages.push(i);
    }
    return pages;
  };
  renderButtons = () => {
    if (Object.keys(this.props.movies).length === 0) {
      return;
    }
    const btns = this.returnPages(this.props.movies.total_pages).map(el => {
      return (
        <button
          className=" ui blue button"
          onClick={() => {
            this.props.changePage(el);
          }}
        >
          {el}
        </button>
      );
    });
    return (
      <div
        className="ui center aligned segment"
        style={{ backgroundColor: "#3b444b" }}
      >
        <div className="ui small buttons">{btns}</div>
      </div>
    );
  };
  render() {
    console.log(
      this.returnPages(3).map(el => {
        return el * 2;
      })
    );
    return (
      <div className="ui conatiner">
        <div className="ui container ui three stackable cards">
          {this.renderMovieItem()}
        </div>
        {this.renderButtons()}
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return { movies: state.movies };
};
export default connect(mapStatetoProps, { changePage, getMovie })(MovieList);
