const readline = require("readline-sync");
function getInputFromUser() {
  const leeftijd = readline.questionInt("Wat is uw leeftijd: ");

  console.log("U bent:", leeftijd, "jaar");

  const pakket = readline.question(`Welk pakket wilt u?
    a: Basis
    b: Uitgebreid
    c: Extra
    `);

  console.log("U koos:", pakket);

  const risico = readline.questionInt(
    "Hoeveel eigen risico wilt u? (385 - 885): "
  );

  console.log("U wil €", risico, "eigen risico");
  return {
    leeftijd: leeftijd,
    pakket: pakket,
    risico: risico,
  };
}

module.exports = {
  getInputFromUser: getInputFromUser,
};
