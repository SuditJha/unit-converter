/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
console.log()
*/

const lengthEl = document.getElementById("length");
const volumeEl = document.getElementById("volume");
const massEl = document.getElementById("mass");
const inputEl = document.getElementById("input")
const btnEl = document.getElementById("input-btn");

btnEl.addEventListener("click", function(){
    const convertValue = Number(inputEl.value);
    if(convertValue){
        convertLength(convertValue);
        convertVolume(convertValue);
        convertMass(convertValue);
    }
    else {
        lengthEl.innerHTML = `<p class="output-value">0 meter = 0 foot | 0 foot = 0 meter`
        volumeEl.innerHTML = `<p class="output-value">0 liter = 0 gallon | 0 gallons = 0 liter`
        massEl.innerHTML = `<p class="output-value">0 kilogram = 0 pound | 0 pounds =  kilogram`

    }
    
})

function convertLength(value){
    const feet = (value * 3.281).toFixed(3);
    const meter = (value / 3.281).toFixed(3); 
    lengthEl.innerHTML = `<p class="output-value">${value} meters = ${feet} feet | ${value} feet = ${meter} meters`
}

function convertVolume(value){
    const gallon = (value * 0.264).toFixed(3);
    const liter = (value / 0.264).toFixed(3);
    volumeEl.innerHTML = `<p class="output-value">${value} liters = ${gallon} gallons | ${value} gallons = ${liter} liters`
}

function convertMass(value){
    const pound = (value * 2.204).toFixed(3);
    const kilogram = (value / 2.204).toFixed(3);
    massEl.innerHTML = `<p class="output-value">${value} kilograms = ${pound} pounds | ${value} pounds = ${kilogram} kilograms`
}