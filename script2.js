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
    let USDollarCurrency = data.filter((element) => {
        for (var i in element.currencies)
        {
            if(element.currencies[i].code === "USD"){
                return true;
            }
        }
    }).map((element) => element.name);
    console.log(`Countries that use US Dollars as currency:::`)
    console.log(USDollarCurrency);
}