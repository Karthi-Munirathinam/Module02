//3.Print the country which use US Dollars as currency

//creating a XMLHTTP Request
var request = new XMLHttpRequest();

//Open/Initialising a connection
request.open('GET','https://restcountries.eu/rest/v2/all',true);

//Sending the request
request.send();

//Receiving the data
request.onload = function(){
    //All countries data
    var data = JSON.parse(this.response);
    // console.log(data);
    //All countries that use US Dollars as currency
    //data.currencies[0]:
    var USDollarCurrency = data.filter(function currency(element){
        return element.currencies[0].code === 'USD';
    }).map(function name(element){
        return element.name;
    });
    //data.currencies[1]:
    var RemCountries = data.filter(function rem(element){
        return element.currencies.length > 1 && element.currencies[0].code !== 'USD' ;
    });
    var RemUSD = RemCountries.filter(function rem(element){
        return element.currencies[1].code === 'USD';
    }).map(function name(element){
        return element.name;
    });
    //Merging both data
    var USdollarsCountries = [...USDollarCurrency,...RemUSD];
    console.log(`Countries which use US Dollar as currency:::`);
    console.log(USdollarsCountries);    
}
