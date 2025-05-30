const convertBtn = document.getElementById("convert-btn");
const inputEl = document.getElementById("num-input");

const metresToFeetRatio = 3.28084;
const litresToGallonsRatio = 0.264172;
const kilosToPoundsRatio = 2.20462;

let valuesArr = [
    {name: "length", ratio: metresToFeetRatio, unitFrom: "metres", unitTo: "feet"},
    {name: "volume", ratio: litresToGallonsRatio, unitFrom: "litres", unitTo: "gallons"},
    {name: "mass", ratio: kilosToPoundsRatio, unitFrom: "kilograms", unitTo: "pounds"}
];

convertBtn.addEventListener("click", function() {
    console.log("clicked!");
    const inputVal = inputEl.value;

    
    let conversionBoxes = document.querySelectorAll(".conversion-text");
    for (let i = 0; i < conversionBoxes.length; i++) {
        let convertedLength = inputVal * valuesArr[i].ratio;
        let inverseLength = inputVal / valuesArr[i].ratio;

        conversionBoxes[i].innerHTML = `${inputVal} ${valuesArr[i].unitFrom} = 
        ${convertedLength.toFixed(3)} ${valuesArr[i].unitTo} 
        | ${inputVal} ${valuesArr[i].unitTo} = ${inverseLength.toFixed(3)} ${valuesArr[i].unitFrom}`
    }
    
})