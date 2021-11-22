const { berekenMaandBedrag } = require("./businessLogic");
const { getInputFromUser } = require("./userInterface");

function main() {
  const { leeftijd, pakket, risico } = getInputFromUser();
  const maandBedrag = berekenMaandBedrag(leeftijd, pakket, risico);
  console.log("Uw bedrag per maand: €", maandBedrag);
}

main();

// 1. Make it work -> Input -> Output (alles mag)
// 2. Make it better
// - Leesbaarheid
// - Structuur
// - Korter / hergebruik van code
// - Tests?
// - robuuster (input validatie), mensen mogen niet alles invullen
// 3. (Make it fast)
// - Performance (senior is daar verantwoordelijk)
