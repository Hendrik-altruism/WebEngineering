fetch("covid.json").then(function (response) { return response.json()
    .then(function (data) {
    var min = Object.entries(data.Fallzahlen)[0];
    var max = Object.entries(data.Fallzahlen)[0];
    var sum = 0;
    var count = Object.keys(data.Fallzahlen).length;
    for (var _i = 0, _a = Object.entries(data.Fallzahlen); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        if (min[1] > value) {
            min = [key, value];
        }
        if (max[1] < value) {
            max = [key, value];
        }
        sum += value;
    }
    console.log("Minimum: " + min[0] + " mit " + min[1] + " Infektionen");
    console.log("Maximum: " + max[0] + " mit " + max[1] + " Infektionen");
    console.log("Total: " + sum + " Infektionen");
    console.log("landesweiter Durschschnitt: " + sum / count + " Infektionen pro Bundesland");
    }); 
});
