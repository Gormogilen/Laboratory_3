javascript: (function () {
    var rows = document.querySelectorAll("table tr");
    var maxTemperature = -Infinity;
    var hottestDate = "";
    for (var i = 1; i < rows.length; i++) {
        var cells = rows[i].querySelectorAll("td");
        var date = cells[2].textContent.trim();
        var temperature = parseFloat(cells[3].textContent);
        if (!isNaN(temperature) && temperature > maxTemperature) {
            maxTemperature = temperature;
            hottestDate = date;
        }
    }

    if (hottestDate !== "") {
        alert("Найспекотніший день: " + hottestDate + "\nМаксимальна температура: " + maxTemperature + "°C");
    } else {
        alert("Не вдалося знайти дані про температуру.");
    }
})();
