fetch("https://disease.sh/v3/covid-19/all")
    .then(res => res.json())
    .then(data => {
        document.getElementById("world-total-cases").innerHTML = data.cases.toLocaleString();
        document.getElementById("world-tests").innerHTML = data.tests.toLocaleString();
        document.getElementById("world-active-cases").innerHTML = data.active.toLocaleString();
        document.getElementById("world-deaths").innerHTML = data.deaths.toLocaleString();
    })

fetch("https://disease.sh/v3/covid-19/countries/United%20States")
.then(res => res.json())
.then(data => {
    document.getElementById("us-total-cases").innerHTML = data.cases.toLocaleString();
    document.getElementById("us-tests").innerHTML = data.tests.toLocaleString();
    document.getElementById("us-active-cases").innerHTML = data.active.toLocaleString();
    document.getElementById("us-deaths").innerHTML = data.deaths.toLocaleString();
})

fetch("https://disease.sh/v3/covid-19/countries")
.then(res => res.json())
.then(data => {

    let countryList = [];

    for (let i = 0; i < data.length; i++) {
        countryList.push(data[i].country);
    }

    let dropBox = document.getElementById("country-dropdown");
    for (let i = 0; i < countryList.length; i++) {
        dropBox.options.add(new Option(countryList[i]));
    }

})

let dropBox = document.getElementById("country-dropdown");

function updateStats() {
    let dropVal = dropBox.options[dropBox.selectedIndex].text;
    console.log(dropVal);

    fetch("https://disease.sh/v3/covid-19/countries/"+dropVal)
        .then(res => res.json())
        .then(data => {
            document.getElementById("other-total-cases").innerHTML = data.cases.toLocaleString();
            document.getElementById("other-tests").innerHTML = data.tests.toLocaleString();
            document.getElementById("other-active-cases").innerHTML = data.active.toLocaleString();
            document.getElementById("other-deaths").innerHTML = data.deaths.toLocaleString();
        })
}

function defaultStats() {
    fetch("https://disease.sh/v3/covid-19/countries/Afghanistan")
        .then(res => res.json())
        .then(data => {
            document.getElementById("other-total-cases").innerHTML = data.cases.toLocaleString();
            document.getElementById("other-tests").innerHTML = data.tests.toLocaleString();
            document.getElementById("other-active-cases").innerHTML = data.active.toLocaleString();
            document.getElementById("other-deaths").innerHTML = data.deaths.toLocaleString();
        })
}


