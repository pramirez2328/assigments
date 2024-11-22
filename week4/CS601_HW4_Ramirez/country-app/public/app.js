"use strict";
class Country {
    constructor(name) {
        this.name = name;
    }
}
class RainyCountry extends Country {
    constructor(name, rainLevel) {
        super(name);
        this.rainLevel = rainLevel;
    }
    getInfo(element) {
        element.innerText = `${this.name} has a rain level of ${this.rainLevel} inches.`;
        return element;
    }
}
class SnowyCountry extends Country {
    constructor(name, snowLevel) {
        super(name);
        this.snowLevel = snowLevel;
    }
    getInfo(element) {
        element.innerText = `${this.name} has a snow level of ${this.snowLevel} inches.`;
        return element;
    }
}
class IslandCountry extends Country {
    constructor(name, landSize) {
        super(name);
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
const snowyCountriesList = countries.filter((country) => country instanceof SnowyCountry);
// Calculate total snow level for snowy countries
function calculateTotalSnowLevel(snowyCountries) {
    return snowyCountries.reduce((total, country) => total + country.snowLevel, 0);
}
// Render all countries
function renderAllCountries(countries, container) {
    countries.forEach((country) => {
        const countryInfo = document.createElement('p');
        country.getInfo(countryInfo);
        container.appendChild(countryInfo);
    });
}
// Render snowy countries and total snow level
function renderSnowyCountries(snowyCountries, container) {
    const totalSnowLevel = calculateTotalSnowLevel(snowyCountries);
    snowyCountries.forEach((country) => {
        const countryInfo = document.createElement('p');
        country.getInfo(countryInfo);
        container.appendChild(countryInfo);
    });
    const totalSnowInfo = document.createElement('h3');
    totalSnowInfo.innerText = `Total annual snow level: ${totalSnowLevel} inches.`;
    container.appendChild(totalSnowInfo);
}
// DOM containers
const allCountriesContainer = document.getElementById('all-countries');
const snowyCountriesContainer = document.getElementById('snowy-countries');
// Render information to the DOM
renderAllCountries(countries, allCountriesContainer);
renderSnowyCountries(snowyCountriesList, snowyCountriesContainer);
