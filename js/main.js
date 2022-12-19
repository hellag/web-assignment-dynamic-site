function getResults() {
    displayHeader("Αποτελέσματα");
    fetch('./results.json')
        .then((response) => response.json())
        .then((json) => displayResults(json.results))
}

function displayHeader(data) {
    $('#header-title').empty();
    $('#header-title').append("<span>"+data+"</span><br/>")
}

function displayResults(data) {
    $('#results').empty();
    $.each(data, function (key, value) {
        console.log(value.id);
        $('#results')
            .append($("<td></td>")
                .attr("value", key)
                .text(value.winnerScore+" - "+value.losingScore));
    });

}

function getGrading() {
    displayHeader("Βαθμολογία");



}

function calculateResults() {

}



function getProgram() {
    displayHeader("Πρόγραμμα");

}