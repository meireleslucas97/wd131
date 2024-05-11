document.addEventListener("DOMContentLoaded", function() {
    getCurrentYear();
    getLastModified();
});

function getCurrentYear() {
    var currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
}

function getLastModified() {
    var lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = "Last Modification: " + lastModified;
}

const temp = 27;
const windSpeed = 11;
function calculateWindchill (temp, windSpeed) {
    if (temp <= 20 && windSpeed > 5) {
        const windchill = 35.74 + 0.6215 * temp - 35.75 * windSpeed ** 0.16 + 0.4275 * temp * windSpeed ** 0.16;
        return windchill;
    } else {
        return "N/A";
    }
}
const windchillFactor = document.querySelector('#windchill-factor');
windchillFactor.textContent = calculateWindchill(temp, windSpeed); 

