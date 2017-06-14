// Include React
var React = require("react");

// Here we include all of the sub-components
var Search = require("./children/Search");
var Saved = require("./children/Saved");
var Results = require("./children/Results");

// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

// Creating the Main component
var Main = React.createClass({

  // Here we set a generic state associated with the number of clicks
  // Note how we added in this history state variable
  getInitialState: function() {
    return { searchTerm: "", startYear: "", endYear: "", results: [], history: [] };
  },

  // The moment the page renders get the History
  componentDidMount: function() {
    // Get the latest history.
    // helpers.getHistory().then(function(response) {
    //   console.log(response);
    //   if (response !== this.state.history) {
    //     console.log("History", response.data);
    //     this.setState({ history: response.data });
    //   }
    // }.bind(this));
  },

  // If the component changes (i.e. if a search is entered)...
  componentDidUpdate: function(prevProps, prevState) {

    console.log(prevState.results);
    var querySearch = {
      searchTerm: this.state.searchTerm,
      startYear: this.state.startYear,
      endYear: this.state.endYear
    };

    console.log(this.state.searchTerm);
    console.log(this.state.startYear);
    console.log(this.state.endYear);
    console.log(this.state.searchTerm);
    // Run the query for the address
    if (prevState.searchTerm !== this.state.searchTerm) {
      helpers.runQuery(querySearch).then(function(data) {
        console.log(data);
        // this.setState({results: []});

        // if (data !== this.state.results) {
                  console.log(this.state.results);
          console.log("updating new results in Main");
          this.setState({results: data});

          // After we've received the result... then post the search term to our history.
          // helpers.postHistory(this.state.searchTerm).then(function() {
          //   console.log("Updated!");

          //   // After we've done the post... then get the updated history
          //   // helpers.getHistory().then(function(response) {
          //   //   console.log("Current History", response.data);

          //   //   console.log("History", response.data);

          //   //   this.setState({ history: response.data });

          //   // }.bind(this));
          // }.bind(this));
          
        // }
      }.bind(this));
    }
  },
  // This function allows childrens to update the parent.
  setTerm: function(term) {
    console.log(term);
    this.setState({
      searchTerm: term.searchTerm,
      startYear: term.startYear,
      endYear: term.endYear});
  },
  // Here we render the function
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2 className="text-center">New York Times Article Search!</h2>
            <p className="text-center">
              <em>Search for and anotate articles of interest</em>
            </p>
          </div>
          <div>
          {/*this.state.searchTerm + this.state.startYear + this.state.endYear*/}
          </div>

          <div className="col-md-12">

            <Search setTerm={this.setTerm} />

          </div>

          <div className="col-md-12">

            {/*<Saved address={this.state.results} />*/}

          </div>

        </div>

        <div className="row">

          <Results articles={this.state.results} />

        </div>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
