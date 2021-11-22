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
  console.log("HI!", leeftijdUser);

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
console.log("PREMIE LEEFTIJD:", leeftijdPremieGedeelte);

if (leeftijd <= 18) {
  premieBedrag = premieBedrag - 20;
} else if (leeftijd > 18 && leeftijd <= 30) {
  premieBedrag = premieBedrag - 10;
} else if (leeftijd > 30 && leeftijd <= 50) {
  // no change
} else if (leeftijd > 50 && leeftijd <= 70) {
  premieBedrag = premieBedrag + 30;
} else if (leeftijd > 70) {
  premieBedrag = premieBedrag + 50;
} else {
  console.log("ERROR!", leeftijd, "input invalid");
}

if (pakket === "a") {
  // no change
} else if (pakket === "b") {
  premieBedrag = premieBedrag + 20;
} else if (pakket === "c") {
  premieBedrag = premieBedrag + 50;
} else {
  console.log("ERROR!", pakket, "input invalid");
}

const eigenRisicoKorting = (385 - risico) * 0.04;

premieBedrag = premieBedrag + eigenRisicoKorting;

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
