function getCurrentYear() {
    var currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
}

function getLastModified() {
    var lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = "Last Modification: " + lastModified;
}

window.onload = function() {
    getCurrentYear();
    getLastModified();
};