import React from "react";

const MovieItem = props => {
  return (
    <div
      className="ui card"
      style={{ cursor: "pointer" }}
      onClick={props.Click}
    >
      <div class="image">
        <img
          src={`https://image.tmdb.org/t/p/w500/${props.poster}`}
          alt={props.title}
        />
      </div>
      <div className="content">
        <div className="header">{props.title}</div>
        <div className="description">
          <div className="ui sub header">Overview</div>
          {props.description}
        </div>
      </div>
      <div className="extra content">
        <div className="ui sub header">Language : {props.language}</div>
        <div className="ui sub header">Total Votes : {props.votes}</div>
        <div className="ui sub header">
          Votes Average : {props.average_votes}
        </div>
        <div className="ui sub header">Popularity : {props.popularity}</div>
        <div className="ui sub header">Release Date : {props.date}</div>
      </div>
    </div>
  );
};

export default MovieItem;
