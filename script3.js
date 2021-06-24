//4.Population of all countries and print all Countries name,captal and flag;

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

    var totalPopulation = data.reduce(function pop(total,element){
        return total + element.population;
    },0);
    console.log("Total population::: "+ totalPopulation);

    console.log(`Countries name::capital::flag::::`)
    data.forEach((element) => console.log(element.name + " "+ element.capital + " " + element.flag));    
}