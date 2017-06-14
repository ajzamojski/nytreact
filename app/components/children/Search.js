// Include React
var React = require("react");

// Creating the Form component
var Form = React.createClass({

  // Here we set a generic state associated with the text being searched for
  getInitialState: function() {
    return { searchTerm: "", startYear: "", endYear: "" };
  },

  // This function will respond to the user input
  handleChange: function(event) {

    var querySearch = {};
    querySearch[event.target.id] = event.target.value;
    this.setState(querySearch);

    //

  },

  // When a user submits...
  handleSubmit: function(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();

    var querySearch = {
      searchTerm: this.state.searchTerm,
      startYear: this.state.startYear,
      endYear: this.state.endYear
    }
    console.log(querySearch);
    console.log(event);
    // Set the parent to have the search term
    if ( this.state.searchTerm != "" || this.state.startYear != "" || this.state.endYear != "")
    {
      this.props.setTerm(querySearch);
    }
    this.setState({
      searchTerm: "",
      startYear: "",
      endYear: ""
    });
  },
  // Here we describe this component's render method
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Query</h3>
        </div>
        <div className="panel-body text-center">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <h4 className="">
                <strong>Search</strong>
              </h4>

              {/*
                Note how each of the form elements has an id that matches the state.
                This is not necessary but it is convenient.
                Also note how each has an onChange event associated with our handleChange event.
              */}
              <h3 className="">
                Topic
              </h3>
              <input
                value={this.state.searchTerm}
                type="text"
                className="form-control text-center"
                id="searchTerm"
                onChange={this.handleChange}
                required
              />
              <br />
              <h3 className="">
                <strong>Start Year</strong>
              </h3>
              <input
                value={this.state.startYear}
                type="number"
                className="form-control text-center"
                id="startYear"
                onChange={this.handleChange}
                required
              />
              <br />
              <h3 className="">
                <strong>End Year</strong>
              </h3>
              <input
                value={this.state.endYear}
                type="number"
                className="form-control text-center"
                id="endYear"
                onChange={this.handleChange}
                required
              />
              <br />
              <button
                className="btn btn-primary"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Form;
