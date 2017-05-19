var wine = [
  { "name": "Merlot", "myRating": "10", "deleteRow": "delete"},
  { "name": "Pinor Noir", "myRating": "10", "deleteRow": "delete"},
  { "name": "Rose", "myRating": "10", "deleteRow": "delete"},
  { "name": "Champagne", "myRating": "10", "deleteRow": "delete"},
];

function displayWines() {
    var tbody = $('#wine tbody');
    var props = ["name", "myRating", "deleteRow"];
    $.each(wines, function(i, wine) {
        var tr = $('<tr>');
        $.each(props, function(i, prop) {
            $('<td>').html(wine[prop]).appendTo(tr);  
        });
        tbody.append(tr);
    });  
}

$(document).ready(function(){
    displayWines();
    $( "#myForm" ).submit(function( event ) {
        var values = {};
        $.each($('#myForm').serializeArray(), function(i, field) {
            values[field.name] = field.value;
        });
        wine.push(values);
        console.log(wines);
        var tbody = $('#wine tbody');
        tbody.empty();
        displayWines();
        event.preventDefault();
    });
});

$(document).ready(function(){
    $("#form").hide();
    $("#addwine").click(function(){
        $("#table").hide();
    });
    $("#addwine").click(function(){
        $("#form").show();
    });
});

$(document).ready(function(){
    $("#submit").click(function(){
        $("#form").hide();
    });
    $("#submit").click(function(){
        $("#table").show();
    });
});

function deleteRow(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}