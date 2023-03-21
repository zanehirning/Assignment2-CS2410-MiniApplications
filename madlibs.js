let noun = document.getElementById("noun");
let verb1 = document.getElementById("verb1");
let verb2 = document.getElementById("verb2");
let adjective = document.getElementById("adjective");
let object = document.getElementById("object");
let generate = document.getElementById("generate");
let MadLibOutput = document.getElementById("MadLib-output");

function createStory() {
    if (object.value == "" || !isNaN(object.value)) {
        MadLibOutput.innerHTML = `Please enter an object.`;
    }
    if (adjective.value == "" || !isNaN(adjective.value)) {
        MadLibOutput.innerHTML = `Please enter an adjective.`;
    }
    if (verb2.value == "" || !isNaN(verb2.value)) {
        MadLibOutput.innerHTML = `Please enter your second verb.`;
    }
    if (verb1.value == "" || !isNaN(verb1.value)) {
        MadLibOutput.innerHTML = `Please enter your first verb.`;
    }
    if (noun.value == "" || !isNaN(noun.value)) {
        MadLibOutput.innerHTML = `Please enter a noun.`;
    }
    if (!noun.value == "" && !verb1.value == "" && !verb2.value == "" && !adjective.value == "" && !object.value == "") {
        MadLibOutput.innerHTML = `Once upon a time, there was a person named ${noun.value}. ${noun.value} was a very ${adjective.value} person. Every day they ${verb1.value} with their favorite ${adjective.value} ${object.value}. This made ${noun.value} very happy. But, one day the ${adjective.value} ${object.value} ${verb2.value}. This made ${noun.value} very sad.`;
    }
}

generate.addEventListener("click", () => { createStory(); });

