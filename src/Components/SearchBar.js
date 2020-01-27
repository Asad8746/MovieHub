import React from "react";
import { Field, reduxForm } from "redux-form";
import { getMovies } from "../Actions";
import { connect } from "react-redux";

class SearchBox extends React.Component {
  renderInput = ({ type, placeholder, input, meta }) => {
    return (
      <div className="ui search">
        <div className="ui inverted transparent icon input">
          <input
            type={type}
            placeholder={placeholder}
            onChange={input.onChange}
            value={input.value}
            style={{ color: "white" }}
          />
          <button
            className="ui inverted icon button"
            onClick={this.props.handleSubmit(this.onSubmit)}
            style={{ marginLeft: -40 }}
          >
            <i className="verted circular search link icon "></i>
          </button>
        </div>
      </div>
    );
  };
  onSubmit = formValues => {
    this.props.getMovies(formValues.movie);
  };
  render() {
    return (
      <div>
        <form
          className="ui form"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <Field
            name="movie"
            component={this.renderInput}
            placeholder="Search Movies"
            type="text"
          />
        </form>
      </div>
    );
  }
}
const validate = formValues => {
  let errors = {};
  if (!formValues.movie) {
    errors.movie = "Please Enter any Movie title";
  }
  return errors;
};
const searchBoxWrapped = reduxForm({ form: "SearchedMovie", validate })(
  SearchBox
);

export default connect(null, { getMovies })(searchBoxWrapped);
