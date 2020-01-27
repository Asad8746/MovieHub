import React from "react";
import ReactDOM from "react-dom";
import history from "../history";
import { connect } from "react-redux";
import { getMovie } from "../Actions";
class Modal extends React.Component {
  componentDidMount() {
    this.props.getMovie(this.props.match.params.id);
  }

  renderCollection = (list = []) => {
    if (list.length > 1) {
      return list.map(el => {
        return `${el.name}, `;
      });
    }
    if (list.length === 0) {
      return;
    }
    return list[0].name;
  };
  renderContent = movie => {
    if (Object.keys(this.props.movie).length === 0) {
      return <div className="ui text loader">Loading</div>;
    }
    return (
      <React.Fragment>
        <div className="ui header">
          <h3>{movie.title}</h3>
          <h6>{movie.tagline}</h6>
        </div>

        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          className="ui centered medium image"
          alt={movie.original_title}
        />
        <div className="content">
          <div className="description">
            <div className="ui sub header">Overview</div>
            <p>{movie.overview}</p>
          </div>
          <div className="ui relaxed list">
            <div className="item">
              Genres : {this.renderCollection(movie.genres)}
            </div>
            <div className="item">
              Spoken Languages : {this.renderCollection(movie.spoken_languages)}{" "}
            </div>
            <div className="item">
              Original Language : {movie.original_language}
            </div>
            <div className="item">Total Votes : {movie.vote_count} </div>
            <div className="item">Vote Average : {movie.vote_average}</div>
            <div className="item">Popularity : {movie.popularity}</div>
            <div className="item">Release Date : {movie.release_date}</div>
            <div className="item">Status : {movie.status}</div>
            <div className="item">Budget : {movie.budget}</div>
            <div className="item">
              Production Companies :
              {this.renderCollection(movie.production_companies)}
            </div>
            <div className="item">
              Production Countries :{" "}
              {this.renderCollection(movie.production_countries)}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };
  onDismiss = () => {
    history.push("/");
  };

  render() {
    return ReactDOM.createPortal(
      <div
        className="ui dimmer modals visible active"
        onClick={() => {
          this.onDismiss();
        }}
      >
        <div
          className="ui standard modal visible active"
          onClick={e => e.stopPropagation()}
          style={{ marginTop: 400 }}
        >
          {this.renderContent(this.props.movie)}
        </div>
      </div>,
      document.querySelector("#modal")
    );
  }
}
const mapStateToProps = state => {
  return { movie: state.movie };
};
export default connect(mapStateToProps, { getMovie })(Modal);
