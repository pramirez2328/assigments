"use strict";
class RainyCountry {
    constructor(name, rainLevel) {
        this.name = name;
        this.rainLevel = rainLevel;
    }
    getInfo(element) {
        element.innerText = `${this.name} has a rain level of ${this.rainLevel} inches.`;
        return element;
    }
}
class SnowyCountry {
    constructor(name, snowLevel) {
        this.name = name;
        this.snowLevel = snowLevel;
    }
    getInfo(element) {
        element.innerText = `${this.name} has a snow level of ${this.snowLevel} inches.`;
        return element;
    }
}
class IslandCountry {
    constructor(name, landSize) {
        this.name = name;
        this.landSize = landSize;
    }
    getInfo(element) {
        element.innerText = `${this.name} has a land size of ${this.landSize} square miles.`;
        return element;
    }
}
const countries = [
    new RainyCountry('United States', 28),
    new SnowyCountry('Norway', 20),
    new RainyCountry('Brazil', 40),
    new IslandCountry('Japan', 145937),
    new SnowyCountry('Sweden', 30),
    new IslandCountry('Australia', 2968464),
];
const snowyCountriesList = [];
/*
6. Perform the following operations to build the snowyCountriesList:
a. Create a function to perform the following:
1) The function must receive a country object of type ICountry (e.g.
country:ICountry).
2) It checks the country’s “snowLevel” property
a) If the property is present in this object, return the country object
b) Otherwise, return the null value
b. Use your function to filter the list of countries.
c. If the object returned by this function is a SnowyCountry, then add this country to
the snowyCountriesList.
d. Use type predicates and type assertions where required and necessary in your
implementations.
e. Create additional functions as needed (if any).
7. Construct and render the following information to the DOM (the index.html).
a. Display all the country information from the countries list.
b. Display all the snowy country information and the total annual snow level from the snowyCountriesList.*/
// Type predicate to check if a country is a SnowyCountry
function isSnowyCountry(country) {
    return country.snowLevel !== undefined;
}
// Filter countries to find SnowyCountry instances
countries.forEach((country) => {
    if (isSnowyCountry(country)) {
        snowyCountriesList.push(country);
    }
});
// Calculate total snow level for snowy countries
function calculateTotalSnowLevel(snowyCountries) {
    return snowyCountries.reduce((total, country) => total + country.snowLevel, 0);
}
// Render all countries
function renderAllCountries(countries, container) {
    countries.forEach((country) => {
        const countryInfo = document.createElement('div');
        country.getInfo(countryInfo);
        container.appendChild(countryInfo);
    });
}
// Render snowy countries and total snow level
function renderSnowyCountries(snowyCountries, container) {
    const totalSnowLevel = calculateTotalSnowLevel(snowyCountries);
    snowyCountries.forEach((country) => {
        const countryInfo = document.createElement('div');
        country.getInfo(countryInfo);
        container.appendChild(countryInfo);
    });
    const totalSnowInfo = document.createElement('div');
    totalSnowInfo.innerText = `Total annual snow level: ${totalSnowLevel} inches.`;
    container.appendChild(totalSnowInfo);
}
// DOM containers
const allCountriesContainer = document.getElementById('all-countries');
const snowyCountriesContainer = document.getElementById('snowy-countries');
// Render information to the DOM
renderAllCountries(countries, allCountriesContainer);
renderSnowyCountries(snowyCountriesList, snowyCountriesContainer);
