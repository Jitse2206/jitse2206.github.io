---
titel: 'ZUÏN'
volgorde: 3
stap: 4
jaar: '2025 tot 2026'
kort: 'ZUÏN helpt kinderen en ouders meer te weten te komen over het energieverbruik in huis, en bevordert de communicatie erover.'
beschrijving: 'Een duurzaam horloge voor kinderen van 10 tot 12 jaar dat thuis toont in welke kamer er te veel energie verbruikt wordt.'
intro: 'ZUÏN is een duurzaam horloge voor kinderen van 10 tot 12 jaar. Wanneer het kind thuiskomt, krijgt het horloge een extra functie: er verschijnen eilandjes die elk een kamer van het huis voorstellen. Wordt er een piekverbruik gesignaleerd, dan geeft het eilandje dat aan met een brandend symbool. Het kind kan dan zelf op ontdekking waar het piekverbruik precies vandaan komt.'
tijdlijn: 'groepsproject, gebruikersonderzoek met kinderen'
tags: ['groepswerk', 'gebruiksgericht', 'interviews', 'arduino']
technieken: ['gebruikersonderzoek', 'UX', 'Arduino', '3D printen']
briefing:
  vak: 'Project gebruiksgericht ontwerpen'
  jaar: '2e bachelor, 2025 tot 2026'
  duur: 'Eén volledig jaar'
  groepsproject: 'Ja, met drie'
  opdracht: 'Hoe kunnen slimme producten mensen helpen om op het juiste moment de juiste duurzame keuzes te maken, zonder extra cognitieve of financiële belasting?'
teksten:
  briefing: |-
    We werkten volgens de Triple Diamond: drie keer na elkaar eerst breed verkennen en daarna focussen. Zo gingen we van onderzoek naar een concept, en van een concept naar een uitgewerkt product. Elke fase sloten we af met testen bij kinderen of ouders.

    Het hele proces, met alle testen en resultaten, staat uitgebreid gedocumenteerd op GitHub.
  ideegeneratie: |-
    In de eerste fase brachten we het probleem in kaart met drie interviews, een benchmark van tien bestaande producten en deskresearch.

    Daarna maakten we drie quick and dirty prototypes: een knuffelbeer, een horloge en een tamagotchi. Op de Dag van de Wetenschap testten we ze met vijf kinderen, en het horloge kwam als favoriet naar boven. Een expert wees ons erop dat gamification vaak maar twee tot vier weken werkt. We moesten dus verder kijken dan punten en beloningen alleen.

    In een tweede testronde in De Krook vergeleken we drie interfaces met vijf kinderen. We gebruikten daarvoor een Wizard-of-Oz-opstelling, waarbij wij achter de schermen het horloge bestuurden, en lieten de kinderen hardop denken terwijl ze het gebruikten.
  technieken: |-
    Dit project draaide vooral om gebruikersonderzoek. Het werk werd eerlijk verdeeld binnen het team.
  resultaat: |-
    In het eindconcept is de mascotte Leaf een betrouwbare vriend van het kind. Bij een piekverbruik verschijnt er vuur op het eilandje van die kamer. Het kind gaat dan op zoek om het eiland te redden, in plaats van iemand de schuld te geven. Het kind houdt zelf de controle, en ouder en kind ontdekken het verbruik samen. Het horloge heeft een draairing met een voelbare klik en een instelbaar bandje.

    Het horloge werkt deels: het heeft een vereenvoudigde interface waarin je kunt swipen en waarop het brandicoontje verschijnt. Een hub stelt het overmatige verbruik voor en geeft het horloge via Bluetooth een signaal om het vlammetje te tonen.

    Ik ben het meest trots op de Arduino-interface op het touchscreenhorloge, die ik zelf geprogrammeerd heb.

    Een test over een langere periode, met de hub en het horloge samen, konden we niet meer uitvoeren door problemen met de verbinding.
  reflectie: |-
    Over samenwerken leerde ik vooral veel over timemanagement, omdat iedereen een andere agenda heeft. Ik leerde ook niet uit te stellen, zodat we nog dingen konden opvangen als iemand van de groep iets niet volledig kon afwerken. En ik leerde luisteren naar elkaars ideeën en ze samen te bundelen.

    Na feedback van de leerkracht zou ik de testen nu anders aanpakken: meer focussen op de echte gebruikerservaring en de leefwereld van het kind, zodat het horloge echt deel wordt van die leefwereld in plaats van een losstaand product.
techniekblokken:
  - titel: 'Gebruikersonderzoek'
    tekst: 'In de beginfase deden we alle gebruikerstesten samen. We interviewden ook vijf ouders en lieten hen kaarten sorteren, om te begrijpen hoe zij thuis met energie en met hun kinderen omgaan. Later in het jaar was ik vooral verantwoordelijk voor de UX: ik testte de mascotte en de soorten eilanden met kinderen. Zo bedachten kinderen in twee klassen hun eigen droomeiland, en interviewden we vijf kinderen uit het vierde leerjaar.'
  - titel: 'Ergonomie'
    tekst: 'Met antropometrische gegevens bepaalden we de maten van het horloge. We printten prototypes in drie maten, S, M en L, en testten ze met vijf kinderen. Zo kwamen we tot een draaiknop, een scherm en een polsband die passen bij kleine polsen en handen.'
  - titel: 'Materialen en kleuren'
    tekst: 'Met drie moodboards testten we bij de scouts welke materialen en kleuren het best aansluiten bij de kinderen.'
  - titel: 'Interface in Arduino'
    tekst: 'Ik werkte zelf een smartwatch uit in Arduino, met een touchscreen van Seeed. Via Bluetooth is het horloge verbonden met een hub die het signaal voor het vlammetje geeft. De afbeelding op de wijzerplaat is een speelse visualisatie voor de kinderen, in het thema van de eilanden en de natuur.'
  - titel: '3D printen'
    tekst: 'Het horloge werd 3D geprint.'
meerLezen: 'https://github.com/Grotesmurf696/ZUIN/tree/main'
cover:
  src: ./cover.jpg
  alt: 'ZUÏN-horloge met beige geprinte band en een kleurrijk scherm met eilandjes, om een pols'
coverOrigineel:
  src: ./cover-origineel.jpg
  alt: 'ZUÏN-horloge met beige geprinte band en een kleurrijk scherm met eilandjes, om de pols van een hand'
beelden:
  - src: ./zuin-idee-01.jpg
    rol: idee
    alt: 'Quick and dirty prototype van een kartonnen knuffelbeer naast kaartjes met berichten'
  - src: ./zuin-idee-02.jpg
    rol: idee
    alt: 'Quick and dirty prototype van een tamagotchi uit karton, met kaartjes van de schermen'
  - src: ./zuin-idee-03.jpg
    rol: idee
    alt: 'De eerste prototypes samen op een tafel: de kartonnen beer, een horloge en een tamagotchi'
  - src: ./zuin-techniek-01.jpg
    rol: techniek
    titel: 'Gebruikersonderzoek'
    alt: 'Drie borden met gele en oranje post-its van de card sorting met ouders'
  - src: ./zuin-techniek-02.jpg
    rol: techniek
    titel: 'Gebruikersonderzoek'
    alt: 'Mascotte Leaf: een groen blaadje met een geel sjaaltje dat zwaait'
  - src: ./zuin-techniek-03.jpg
    rol: techniek
    titel: 'Ergonomie'
    alt: 'Geprinte horlogeprototypes in drie maten naast een zwart horloge en vier draaiknoppen'
  - src: ./zuin-techniek-04.jpg
    rol: techniek
    titel: 'Ergonomie'
    alt: 'Testopstelling in De Krook met horlogeprototypes, een laptop en een tablet op tafel'
  - src: ./zuin-techniek-05.jpg
    rol: techniek
    titel: 'Materialen en kleuren'
    alt: 'Kinderen bij een tafel met drie borden van de materiaal- en kleurtest'
  - src: ./zuin-resultaat-01.jpg
    rol: resultaat
    alt: 'ZUÏN-horloge aan de lader, met een groen eilandje op het scherm'
  - src: ./zuin-resultaat-02.jpg
    rol: resultaat
    alt: 'ZUÏN-horloge aan de lader, met een eilandje en een vlammetje op het scherm'
  - src: ./zuin-resultaat-03.jpg
    rol: resultaat
    alt: 'ZUÏN-horloge aan de lader, met de tijd op het scherm'
---
