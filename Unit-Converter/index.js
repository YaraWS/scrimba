
let number = 10
let mainNumber = document.getElementById("mainNumber")
mainNumber.innerHTML = number

let length = document.getElementById("length")
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")

function Length(){
    let feet = number * 3.28
    let metres = number / 3.28
    let roundFeet = feet.toFixed(3)
    let roundMetres = metres.toFixed(3)
    length.innerHTML = number + " meters = " + roundFeet + " feet" + " | " + number + " feet = " + roundMetres + " meters" 
    }

function Volume(){
    let liters = number *  0.264172 
    let gallons = number / 0.264172 
    let roundLiters = liters.toFixed(3)
    let roundGallons = gallons.toFixed(3)
    volume.innerHTML = number + " liters = " + roundGallons + " gallons | " + number + " gallons = " + roundLiters + " liters" 
    }

function Mass(){
    let pounds = number * 2.2
    let kilos = number / 2.2
    let roundPounds = pounds.toFixed(3)
    let roundKilos = kilos.toFixed(3)
    mass.innerHTML =  number + " kilos = " + roundPounds + " pounds | " + number + " pounds = " + roundKilos + " kilos"
    }