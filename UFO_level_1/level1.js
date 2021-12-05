
console.log("level1.js loaded");

var data = data;

console.log(data);

// Get a reference to the table body
var tbody = d3.select("tbody");


// Loop Through `data` and console.log each ufo sighting object

data.forEach(function(ufoSighting) {
  console.log(ufoSighting);

// append one table row `tr` for each ufo sighting object

  var row = tbody.append("tr");

//Use `Object.entries` and console.log each ufo Sighting value

  Object.entries(ufoSighting).forEach(function([key, value]) {
    console.log(key, value);

// Append a cell to the row for each value

    var cell = row.append("td");

//  update each cell's text 

    cell.text(value);
  });
});



var button = d3.select("#filter-btn");

var form = d3.select("form");

button.on("click", runEnter);
form.on("submit",runEnter);

// the event handler function for the form
function runEnter() {

// Prevent the page from refreshing
d3.event.preventDefault();
    
// Select the input element and get the raw HTML node
var inputElement = d3.select("#datetime");

// Get the value property of the input element
var inputValue = inputElement.property("value");

// console.log(inputValue);
 
var filteredData = data.filter(obj => obj.datetime == inputValue);



console.log(filteredData.length);

// Remove previous table so another date can be filtered and repopulate the table
tbody.selectAll("tr").remove();

// Repopulate table with filtered data
filteredData.forEach(function(ufoSighting) {
    //console.log(ufoSighting);


  // append one table row `tr` for each ufo sighting object
  
    var row = tbody.append("tr");
  
  //Use `Object.entries` and console.log each ufo Sighting value
  
    Object.entries(ufoSighting).forEach(function([key, value]) {
      //console.log(key, value);
  
  // Append a cell to the row for each value
  
      var cell = row.append("td");
  
  //  update each cell's text 
  
      cell.text(value);
    });
  });

  if (filteredData.length == 0) { 
    var emptyRow = tbody.append("tr");
    var emptyCell = emptyRow.append("td");
    emptyCell.text("No Record Found");
}
};

