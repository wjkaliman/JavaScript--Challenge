// from data.js
// this is reading from data.js
var tableData = data;
function init() {
    var tbody = d3.select("tbody");


    tableData.forEach(ufo_info => {
        console.log(ufo_info);
        var row = tbody.append("tr");

        Object.entries(ufo_info).forEach(([key, value]) => {
            console.log(key, value);
            var column = row.append("td");
            column.text(value);
        });
    });
}
//          Work flow part 1
//  using the UFO dataset array- data.js
// line 5-append a table to your webpage- find tbody- line 64 html
// line 8-looping through each array(ufo_info) and console log it out
// line 10-Append one table row `tr` for each object (ufo_info)

//  Use `Object.entries` to console.log each UFO Sighting value
//  object .entries gives us key values - what object-ufo_info
//  keys are the column names- Values are the info for the rows
// line 12- grabbing object- looking for keys and values
// line 14- adding columns by appending "td"

//          Work Flow part 2
// what do we do with the button?
//create var for button and use d3 to find HTML button id
// need a function when button is clicked -callback to function

var button = d3.select("#filter-btn");
button.on("click", function () {

    var inputdate = d3.select("#datetime");

    var inputValue = inputdate.property("value");
    console.log(inputValue);

    // Filter Data with date equal to input value- only then we can move forward
    var filteredData = data.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData)
    var tbody = d3.select("tbody");
    tbody.html("");

    filteredData.forEach(ufo_info => {
        console.log(ufo_info);
        var row = tbody.append("tr");

        Object.entries(ufo_info).forEach(([key, value]) => {
            console.log(key, value);
            var column = row.append("td");
            column.text(value);
        });

    });
})

init()

// line 36 button id "filter-btn"
// line 38 get the input info which is in date form
// line 40 Get the value of the input date,
// line 48 clears out data so when a date is entered thw request date is the only date and info displayed
// line 50 is looping through the filtered data and building the table/rows
// Init is loading on the loading of the javascript. 