//1.Get all the countries from Asia continent/region using Filter function:

//Creating a XMLHTTPRequest
var request = new XMLHttpRequest();
//Initiating the connection
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//Sending the connection
request.send();
//Receiving data
request.onload = function(){
    //All countries data
    var data = JSON.parse(this.response);       
    // console.log(data);
    //All countries data from Asia region
    var countriesFromAsia = data.filter(function region(element){
        return element.region === 'Asia';       
    }).map(function name(element){
        return element.name;
    });
    //Printing all countries from Asia region
    console.log(`Countries from Asia Continent:::`);
    console.log(countriesFromAsia);
}