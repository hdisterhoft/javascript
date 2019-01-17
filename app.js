// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

 


var buildtable = function(data2use) {
    tbody.html('')
    data2use.forEach(function(potato) {
    console.log(potato);

    var row = tbody.append("tr");
    Object.entries(potato).forEach(function([key, value]) {
        console.log(key, value);

        var cell = tbody.append("td");
        cell.text(value);
    });
    });
};

buildtable(tableData);

var submit = d3.select("#filter-btn");

submit.on("click", function() {

  
  d3.event.preventDefault();

  
  var inputElement = d3.select("#datetime");

 
  var inputValue = inputElement.property("value");

  var filteredData = tableData.filter(dates => dates.datetime === inputValue);
 
  console.log(filteredData)


  buildtable(filteredData);
});

  