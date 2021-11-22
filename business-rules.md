# Rules

- Doel: bedrag weergeven wat een verzekerde per maand moet betalen op basis van de keuzes
- Inputs: Leeftijd, pakket, eigen risico
- Output: Bedrag per maand

## Regels

- Er is een minimaal basis bedrag voor de basis verzekering: € 75

### Leeftijd

- Categorie < 18 -> € -20
- Categorie tussen 18 en 30 -> € -10
- Categorie tussen 31 en 50 -> € 0
- Categorie tussen > 50 -> € + 30
- Categorie tussen > 70 -> € + 50

### Pakket

- Basis (niks extra)
- Uitgebreid -> + € 20
- Extra -> + € 50

## Eigen risico

- 385 -> 0
- 500 euro range
- 885 -> - € 20

Ergens daartussen in is korting naar rato:

- 485 -> 100 extra -> - €4
  etc..
