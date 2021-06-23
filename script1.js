//2.Get all the countries with population of less than 2 lacs using Filter function

//Creating a XMLHTTP request:
var request = new XMLHttpRequest();

//Initiating a connection
request.open('GET','https://restcountries.eu/rest/v2/all',true);

//Sending the connection
request.send();

//Receiving the data
request.onload = function(){
    //All countries data
    var data = JSON.parse(this.response);
    // console.log(data);
    //All countries data with population less than 2 lacs
    var populationLessThanTwoLacs = data.filter(function population(element){
        return element.population < 200000;
    }).map(function names(element){
        return element.name;
    });
    console.log(`Countries with population less than two lacs:::`);
    console.log(populationLessThanTwoLacs);
}