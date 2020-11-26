// from data.js
var tableData = data;


// get table body in index.html
var tBody = d3.select("tbody")


// add tableData into table body
tableData.forEach(i=>{ 
    var row = tBody.append("tr");
    Object.entries(i).forEach(([key,value])=>{
        var cell = row.append("td");
        cell.text(value);
    });
});

// getting a ref to the button
var button = d3.select("button");

function deleteRows(){
    var table = document.getElementById("to-be-changed")
    while(table.rows.length > 0) {
        table.deleteRow(0);
      }
};

button.on("click",function(){
    d3.event.preventDefault();

    var inputElement_datetime = d3.select("#datetime");
    var inputElement_city = d3.select("#city");
    var inputElement_state = d3.select("#state");
    var inputElement_country = d3.select("#country");
    var inputElement_shape = d3.select("#shape");

    var inputValue_datetime = inputElement_datetime.property("value");
    var inputValue_city = inputElement_city.property("value").toLowerCase();
    var inputValue_state = inputElement_state.property("value").toLowerCase();
    var inputValue_country = inputElement_country.property("value").toLowerCase();
    var inputValue_shape = inputElement_shape.property("value").toLowerCase();

    console.log(inputValue_datetime);
    console.log(inputValue_city);
    console.log(inputValue_state);
    console.log(inputValue_country);
    console.log(inputValue_shape);


    var keys = ['datetime','city','state','country','shape'];
    var values = [inputValue_datetime,inputValue_city,inputValue_state,inputValue_country,inputValue_shape];
    var filter = {};

    for(var i=0;i<keys.length;i++){
        if (values[i]!=""){
            filter[keys[i]] = values[i];
        };
    };
    console.log(filter);
        
    var filterData= tableData.filter(function(item) {
        for (var key in filter) {
          if (item[key] === undefined || item[key] != filter[key])
            return false;
        }
        return true;
      });
      
      console.log(filterData);
    
    deleteRows();

    filterData.forEach(i=>{
        var row = tBody.append("tr");
        Object.entries(i).forEach(([key,value])=>{
            var cell = row.append("td");
            cell.text(value);
        });
    });

});




