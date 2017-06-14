// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// Geocoder API
var geocodeAPI = "da65faec12af4ff79d54f9f26fac8a42";

// Helper functions for making API Calls
var helper = {

  // This function serves our purpose of running the query to geolocate.
  runQuery: function(terms) {

    console.log(terms);
    //nyt api key: aa6000d3436c41f19617e9efe013e22a
    var apiKey = "da65faec12af4ff79d54f9f26fac8a42";
    // Figure out the geolocation
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey;
    queryURL += "&q=" + terms.searchTerm;
    console.log(queryURL);
    return axios.get(queryURL).then(function(response) {
      console.log(response);
      // If get get a result, return that result's formatted address property
      if (response.data.response.docs[0]) {
        return response.data.response.docs;
      }
      // If we don't get any results, return an empty string
      return "";
    });
  },

  // This function hits our own server to retrieve the record of query results
  getHistory: function() {
    return axios.get("/api");
  },

  // This function posts new searches to our database.
  postHistory: function(location) {
    return axios.post("/api", { location: location });
  }
};

// We export the API helper
module.exports = helper;
