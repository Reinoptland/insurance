const readline = require("readline-sync");

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

let premieBedrag = 75;

function bepaalLeeftijdPremieGedeelte(leeftijdUser) {
  if (leeftijdUser <= 18) {
    return -20;
  } else if (leeftijdUser > 18 && leeftijdUser <= 30) {
    return -10;
  } else if (leeftijdUser > 30 && leeftijdUser <= 50) {
    return 0;
  } else if (leeftijdUser > 50 && leeftijdUser <= 70) {
    return 30;
  } else if (leeftijdUser > 70) {
    return 50;
  } else {
    console.log("ERROR!", leeftijdUser, "input invalid");
  }
}

const leeftijdPremieGedeelte = bepaalLeeftijdPremieGedeelte(leeftijd);

premieBedrag = premieBedrag + leeftijdPremieGedeelte;

function bepaalPakketPremieGedeelte(pakketKeuze) {
  if (pakketKeuze === "a") {
    return 0;
  } else if (pakketKeuze === "b") {
    return 20;
  } else if (pakketKeuze === "c") {
    return 50;
  } else {
    console.log("ERROR!", pakketKeuze, "input invalid");
  }
}

const pakketPremieGedeelte = bepaalPakketPremieGedeelte(pakket);
premieBedrag = premieBedrag + pakketPremieGedeelte;

function bepaalEigenRisicoGedeelte(risicoBedrag) {
  return (385 - risicoBedrag) * 0.04;
}

const eigenRisicoKorting = bepaalEigenRisicoGedeelte(risico);
premieBedrag = premieBedrag + eigenRisicoKorting;

function berekenMaandBedrag(leeftijdUser, pakketKeuze, risicoBedrag) {
  console.log("TEST!", leeftijdUser, pakketKeuze, risicoBedrag);
}

berekenMaandBedrag(leeftijd, pakket, risico);

console.log("Uw bedrag per maand: €", premieBedrag);

// 1. Make it work -> Input -> Output (alles mag)
// 2. Make it better
// - Leesbaarheid
// - Structuur
// - Korter / hergebruik van code
// - Tests?
// - robuuster (input validatie), mensen mogen niet alles invullen
// 3. (Make it fast)
// - Performance (senior is daar verantwoordelijk)
