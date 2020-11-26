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

    var inputValue_datetime = inputElement_datetime.property("value");
  

    console.log(inputValue_datetime);


    var filterData = tableData.filter(i=>i.datetime == inputValue_datetime);
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


