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

function bepaalEigenRisicoGedeelte(risicoBedrag) {
  return (385 - risicoBedrag) * 0.04;
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

module.exports = {
  berekenMaandBedrag: berekenMaandBedrag,
};
