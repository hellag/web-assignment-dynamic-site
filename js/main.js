function getResults() {
    displayHeader("Αποτελέσματα");
    fetch('./results.json')
        .then((response) => response.json())
        .then((json) => displayResults(json.results))
}

function displayHeader(data) {
    $('#header-title').empty();
    $('#header-title').append("<span>" + data + "</span><br/>")
}

function displayResults(data) {
    $('#results').empty();
    const element = document.createElement("tr");
    const element2 = document.createElement("tr");
    element.setAttribute("id", "sub-result");
    element2.setAttribute("id", "header-sub-result");
    $('#results').append(element2);
    $('#results').append(element);
    $.each(data, function (key, value) {
        console.log(value.id);
        $('#header-sub-result')
            .append($("<th></th>")
                .attr("value", key)
                .text(value.winnerParticipant + "/" + value.loosingParticipant));
    });

    $.each(data, function (key, value) {
        console.log(value.id);
        $('#sub-result')
            .append($("<td></td>")
                .attr("value", key)
                .text(value.winnerScore + " - " + value.losingScore));
    });

}

function getGrading() {
    displayHeader("Βαθμολογία");
    $('#results').empty();

}
function displayGrading() {
    $('#results').empty();

}

function calculateResults() {

}

function displayProgram(data) {
    $('#results').empty();
    $.each(data, function (key, value) {
        console.log(value.id);
        $('#results')
            .append($("<span></span><br/>")
                .attr("value", key)
                .text(value.winnerParticipant + "/" + value.loosingParticipant + " - " + value.dateMatch));
    });
}

function getProgram() {
    displayHeader("Πρόγραμμα");
    fetch('./results.json')
        .then((response) => response.json())
        .then((json) => displayProgram(json.results))

}