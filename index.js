// const readline = require("readline-sync");

// const leeftijd = readline.questionInt("Wat is uw leeftijd: ");

// console.log("U bent:", leeftijd, "jaar");

// const pakket = readline.question(`Welk pakket wilt u?
// a: Basis
// b: Uitgebreid
// c: Extra
// `);

// console.log("U koos:", pakket);

// const risico = readline.questionInt(
//   "Hoeveel eigen risico wilt u? (385 - 885): "
// );

// console.log("U wil €", risico, "eigen risico");

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

function bepaalEigenRisicoGedeelte(risicoBedrag) {
  return (385 - risicoBedrag) * 0.04;
}

function berekenMaandBedrag(leeftijdUser, pakketKeuze, risicoBedrag) {
  let premieBedrag = 75;
  const leeftijdPremieGedeelte = bepaalLeeftijdPremieGedeelte(leeftijdUser);
  const pakketPremieGedeelte = bepaalPakketPremieGedeelte(pakketKeuze);
  const eigenRisicoKorting = bepaalEigenRisicoGedeelte(risicoBedrag);

  const maandBedrag =
    premieBedrag +
    leeftijdPremieGedeelte +
    pakketPremieGedeelte +
    eigenRisicoKorting;

  return maandBedrag;
}

const maandBedrag = berekenMaandBedrag(67, "c", 485);

console.log("Uw bedrag per maand: €", maandBedrag);

// 1. Make it work -> Input -> Output (alles mag)
// 2. Make it better
// - Leesbaarheid
// - Structuur
// - Korter / hergebruik van code
// - Tests?
// - robuuster (input validatie), mensen mogen niet alles invullen
// 3. (Make it fast)
// - Performance (senior is daar verantwoordelijk)
