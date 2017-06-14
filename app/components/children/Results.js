// Include React
var React = require("react");

// This is the History component. It will be used to show a log of  recent searches.
var History = React.createClass({

  handleClick: function(article) {
    console.log(article);
  },

  // Here we describe this component's render method
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Search History</h3>
        </div>
        <div className="col-md-12">

          {console.log(this.props.articles)}
          {/* Here we use a map function to loop through an array in JSX */}
          {this.props.articles.map(function(search, i) {
            // console.log("results updated")
            // console.log(search.headline.main);
            console.log(this);
          
            if (i < 5) {
                { console.log("print " + i) }
                return (
                    <div>
                      <p>{search.headline.main} - {}</p>
                      <button className= "btn btn-primary btn-lg" onClick={this.handleClick.bind(this, search)}> Save </button>
                    </div>
                )
              }

          }.bind(this))
        }
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = History;
