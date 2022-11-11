// on dom loaded
document.addEventListener("DOMContentLoaded", function () {
  // on button click
  document.getElementById("button").addEventListener("click", onButtonClick);

  // javascript function called onButtonClick
  function onButtonClick() {
    // get the value of the textareas and store them in variables
    var verbs = document.getElementById("verbs").value;
    // convert verbs to list of strings split by comma, remove whitespace and line breaks
    verbsList = verbs.split(",").map(function (verb) {
      // trim and to lower case
      return verb.trim().toLowerCase();
    });

    let nouns = document.getElementById("nouns").value;
    // noun list
    nounsList = nouns.split(",").map(function (noun) {
      return noun.trim().toLowerCase();
    });

    var adjectives = document.getElementById("adjectives").value;
    // adjective list
    adjectivesList = adjectives.split(",").map(function (adjective) {
      // trim and to lower case
      return adjective.trim().toLowerCase();
    });

    var adverbs = document.getElementById("adverbs").value;
    // adverb list
    adverbsList = adverbs.split(",").map(function (adverb) {
      // trim and to lower case
      return adverb.trim().toLowerCase();
    });

    let noun = nounsList[Math.floor(Math.random() * nounsList.length)];

    let verb = verbsList[Math.floor(Math.random() * verbsList.length)];

    let adjective =
      adjectivesList[Math.floor(Math.random() * adjectivesList.length)];

    let adverb = adverbsList[Math.floor(Math.random() * adverbsList.length)];

    // generate a random sentence
    let sentence =
      "The " + adjective + " " + noun + " " + verb + " " + adverb + ".";

    // display the random sentence
    document.getElementById("sentence").innerHTML = sentence;
  }
});
