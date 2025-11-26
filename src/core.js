   alert("was geht leute")

   
   const allQuestions = [
        {
          frage: "Welches Land gilt als Ursprung des Weihnachtsbaums?",
          antworten: ["Frankreich", "Deutschland", "England", "Italien"],
          korrekterIndex: 3,
        },
        {
          frage: "Wer schrieb das Lied „Stille Nacht, heilige Nacht“?",
          antworten: [
            "Franz Xaver Gruber",
            "Johannes Daniel Falk",
            "Joseph Mohr",
            "Adolphe Adam",
          ],
          korrekterIndex: 2,
        },
        {
          frage:
            "Welches Getränk ist traditionell auf deutschen Weihnachtsmärkten beliebt?",
          antworten: ["Glühwein", "Bier", "Kakao", "Apfelsaft"],
          korrekterIndex: 0,
        },
        {
          frage:
            "Welches Tier zieht laut Legende den Schlitten des Weihnachtsmanns?",
          antworten: ["Pferde", "Hunde", "Rentiere", "Esel"],
          korrekterIndex: 2,
        },
        {
          frage: "Wann feiern orthodoxe Christen Weihnachten?",
          antworten: ["24. Dezember", "25. Dezember", "6. Januar", "7. Januar"],
          korrekterIndex: 3,
        },
        {
          frage: "Was stellt man traditionell am 6. Dezember vor die Tür?",
          antworten: ["Socken", "Nikolausstiefel", "Mützen", "Handschuhe"],
          korrekterIndex: 1,
        },
        {
          frage: "Welche Farbe hat der Mantel des klassischen Weihnachtsmanns?",
          antworten: ["Rot", "Grün", "Blau", "Weiß"],
          korrekterIndex: 0,
        },
        {
          frage: "Welches Gebäck wird oft in Sternform gebacken?",
          antworten: [
            "Lebkuchen",
            "Vanillekipferl",
            "Zimtsterne",
            "Spekulatius",
          ],
          korrekterIndex: 2,
        },
        {
          frage: "Welche Figur bringt in Italien die Geschenke zu Weihnachten?",
          antworten: ["Santa Claus", "Christkind", "Nikolaus", "La Befana"],
          korrekterIndex: 3,
        },
        {
          frage: "Wie viele Adventssonntage gibt es traditionell?",
          antworten: ["Drei", "Vier", "Fünf", "Sechs"],
          korrekterIndex: 1,
        },
        {
          frage:
            "Welche Pflanze wird oft zu Weihnachten als Dekoration aufgehängt?",
          antworten: ["Tannenzweige", "Rosen", "Misteln", "Stechpalmen"],
          korrekterIndex: 2,
        },
        {
          frage:
            "Welche Stadt gilt als Ursprungsort des Liedes „Stille Nacht“?",
          antworten: ["Oberndorf bei Salzburg", "Wien", "München", "Salzburg"],
          korrekterIndex: 0,
        },
        {
          frage:
            "Welches traditionelle Gebäck wird in Polen an Weihnachten gegessen?",
          antworten: ["Lebkuchen", "Stollen", "Panettone", "Makowiec"],
          korrekterIndex: 3,
        },
        {
          frage: "Wer verfasste das Gedicht „A Visit from St. Nicholas“?",
          antworten: [
            "Washington Irving",
            "Clement Clarke Moore",
            "Charles Dickens",
            "Hans Christian Andersen",
          ],
          korrekterIndex: 1,
        },
        {
          frage:
            "Welche Farbe hatten die ursprünglichen Weihnachtskugeln in Deutschland?",
          antworten: ["Grün", "Rot", "Gold", "Silber"],
          korrekterIndex: 2,
        },
        {
          frage:
            "Welche Pflanze ist in England traditionell mit Küssen verbunden?",
          antworten: ["Misteln", "Stechpalmen", "Tannenzweige", "Rosmarin"],
          korrekterIndex: 0,
        },
        {
          frage: "Wer schrieb das Weihnachtslied „Leise rieselt der Schnee“?",
          antworten: [
            "Eduard Ebel",
            "Franz Xaver Gruber",
            "Joseph Mohr",
            "Johannes Daniel Falk",
          ],
          korrekterIndex: 0,
        },
        {
          frage:
            "Welches europäische Land ist für den Brauch des Krampus bekannt?",
          antworten: ["Italien", "Schweiz", "Deutschland", "Österreich"],
          korrekterIndex: 3,
        },
        {
          frage:
            "Welches Gewürz wird traditionell in dänischem Gløgg verwendet?",
          antworten: ["Zimt", "Kardamom", "Nelken", "Ingwer"],
          korrekterIndex: 1,
        },
        {
          frage: "In welchem Jahrhundert entstand der Weihnachtsbaumbrauch?",
          antworten: [
            "14. Jahrhundert",
            "15. Jahrhundert",
            "16. Jahrhundert",
            "17. Jahrhundert",
          ],
          korrekterIndex: 2,
        },
        {
          frage:
            "Welches Getränk gehört in den traditionellen britischen Christmas Pudding?",
          antworten: ["Rotwein", "Rum", "Apfelsaft", "Bier"],
          korrekterIndex: 1,
        },
        {
          frage: "Welche Figur bringt in Deutschland Geschenke an Heiligabend?",
          antworten: ["Weihnachtsmann", "Christkind", "Nikolaus", "Julbock"],
          korrekterIndex: 1,
        },
        {
          frage: "Welche Frucht wird häufig in Christstollen verarbeitet?",
          antworten: ["Orangen", "Äpfel", "Rosinen", "Kirschen"],
          korrekterIndex: 2,
        },
        {
          frage:
            "Welches Land ist bekannt für den Brauch, am Heiligen Abend ein Feuer anzuzünden?",
          antworten: ["Dänemark", "Norwegen", "Finnland", "Schweden"],
          korrekterIndex: 3,
        },
        {
          frage: "Wer komponierte die Musik zu „O du fröhliche“?",
          antworten: [
            "Franz Xaver Gruber",
            "Joseph Mohr",
            "Adolphe Adam",
            "Johannes Daniel Falk",
          ],
          korrekterIndex: 3,
        },
        {
          frage:
            "Welches Gebäck ist in Österreich traditionell zu Weihnachten beliebt?",
          antworten: ["Lebkuchen", "Vanillekipferl", "Panettone", "Makowiec"],
          korrekterIndex: 1,
        },
        {
          frage: "Welche Kerzen brennt man traditionell am Adventskranz?",
          antworten: [
            "Teelichter",
            "Adventskerzen",
            "Baumkerzen",
            "Streichhölzer",
          ],
          korrekterIndex: 1,
        },
        {
          frage:
            "Welche Figur erscheint am Nikolaustag in manchen Regionen Deutschlands mit Rute?",
          antworten: [
            "Knecht Ruprecht",
            "Weihnachtsmann",
            "Christkind",
            "Julbock",
          ],
          korrekterIndex: 0,
        },
        {
          frage: "Welches Land feiert Weihnachten traditionell am 7. Januar?",
          antworten: ["Griechenland", "Italien", "Russland", "England"],
          korrekterIndex: 2,
        },
        {
          frage: "Welche Farbe hat das klassische Christkind in Darstellungen?",
          antworten: ["Blau", "Rot", "Weiß", "Grün"],
          korrekterIndex: 2,
        },
        {
          frage: "Welche Pflanze wird oft als Kranz zu Advent dekoriert?",
          antworten: ["Stechpalmen", "Misteln", "Tannenzweige", "Rosmarin"],
          korrekterIndex: 2,
        },
        {
          frage:
            "Welche Süßigkeit hängt man traditionell in den Weihnachtsbaum?",
          antworten: ["Bonbons", "Schokolade", "Lebkuchen", "Marzipan"],
          korrekterIndex: 2,
        },
        {
          frage:
            "In welchem Land bringt das Christkind traditionell die Geschenke?",
          antworten: ["Deutschland", "Frankreich", "Spanien", "England"],
          korrekterIndex: 0,
        },
        {
          frage:
            "Welche Pflanze wird in Skandinavien zu Weihnachten oft als Dekoration genutzt?",
          antworten: ["Misteln", "Stechpalmen", "Rosen", "Tannenzweige"],
          korrekterIndex: 3,
        },
        {
          frage:
            "Welches Weihnachtslied beginnt mit „Oh Tannenbaum, oh Tannenbaum“?",
          antworten: [
            "Leise rieselt der Schnee",
            "Oh Tannenbaum",
            "Stille Nacht",
            "Morgen, Kinder, wird’s was geben",
          ],
          korrekterIndex: 1,
        },
        {
          frage: "Welches Land ist für die Weihnachtshexe „La Befana“ bekannt?",
          antworten: ["Spanien", "Deutschland", "Frankreich", "alien"],
          korrekterIndex: 3,
        },
        {
          frage:
            "Welches traditionelle Weihnachtsgebäck stammt aus Deutschland?",
          antworten: ["Stollen", "Panettone", "Makowiec", "Vanillekipferl"],
          korrekterIndex: 0,
        },
        {
          frage: "Wer schrieb das Gedicht „A Visit from St. Nicholas“?",
          antworten: [
            "Charles Dickens",
            "Clement Clarke Moore",
            "Hans Christian Andersen",
            "Washington Irving",
          ],
          korrekterIndex: 1,
        },
        {
          frage:
            "Welche Kerzenfarbe wird traditionell in Schweden für Lucia genutzt?",
          antworten: ["Weiß", "Rot", "Gelb", "Grün"],
          korrekterIndex: 0,
        },
        {
          frage: "Welche Zutaten gehören klassisch in Glühwein?",
          antworten: [
            "Rotwein, Zucker, Gewürze",
            "Apfelsaft, Honig, Zimt",
            "Bier, Zucker, Nelken",
            "Rotwein, Milch, Schokolade",
          ],
          korrekterIndex: 0,
        },
        {
          frage:
            "Welches Tier ist Symbol für Weihnachten in manchen Ländern Europas?",
          antworten: ["Esel", "Pferd", "Hund", "Rentier"],
          korrekterIndex: 3,
        },
        {
          frage: "Welche Farbe hat traditionell ein Adventskalender?",
          antworten: ["Grün", "Blau", "Rot oder bunt", "Schwarz"],
          korrekterIndex: 2,
        },
        {
          frage:
            "Welche Frucht ist oft Bestandteil eines englischen Christmas Pudding?",
          antworten: ["Äpfel", "Rosinen", "Kirschen", "Pflaumen"],
          korrekterIndex: 1,
        },
        {
          frage: "In welchem Land gilt der Weihnachtsmann als „Santa Claus“?",
          antworten: ["Deutschland", "Kanada", "England", "USA"],
          korrekterIndex: 3,
        },
        {
          frage:
            "Welches traditionelle deutsche Weihnachtsgebäck ist oft länglich und mit Trockenfrüchten gefüllt?",
          antworten: ["Stollen", "Panettone", "Lebkuchen", "Vanillekipferl"],
          korrekterIndex: 0,
        },
        {
          frage: "Wer komponierte die Musik zu „O du fröhliche“?",
          antworten: [
            "Johannes Daniel Falk",
            "Franz Xaver Gruber",
            "Joseph Mohr",
            "Adolphe Adam",
          ],
          korrekterIndex: 0,
        },
        {
          frage:
            "Welche Figur bringt in manchen Regionen Österreichs Geschenke?",
          antworten: ["Krampus", "Weihnachtsmann", "Christkind", "Nikolaus"],
          korrekterIndex: 2,
        },
        {
          frage:
            "Welche Zutat gehört traditionell in den österreichischen Vanillekipferl-Teig?",
          antworten: ["Haselnüsse", "Walnüsse", "Mandeln", "Pistazien"],
          korrekterIndex: 2,
        },
        {
          frage: "Welches Lied beginnt mit „Leise rieselt der Schnee“?",
          antworten: [
            "stille Nacht",
            "Oh Tannenbaum",
            "Morgen, Kinder, wird’s was geben",
            "Leise rieselt der Schnee",
          ],
          korrekterIndex: 3,
        },
        {
          frage:
            "Welche Figur ist in Italien am 6. Januar aktiv und bringt Süßigkeiten für Kinder?",
          antworten: ["Weihnachtsmann", "La Befana", "Christkind", "Nikolaus"],
          korrekterIndex: 1,
        },
        {
          frage: "Wer bringt traditionell in Deutschland die Geschenke?",
          antworten: [
            "Weihnachtsmann",
            "Nikolaus",
            "Christkind",
            "Knecht Ruprecht",
          ],
          korrekterIndex: 2,
        },

        {
          frage:
            "Wie nennt man den Stern, dem die Heiligen Drei Könige folgten?",
          antworten: [
            "Stern der Hoffnung",
            "Stern von Bethlehem",
            "Stern von Nazareth",
            "Stern des Ostens",
          ],
          korrekterIndex: 1,
        },

        {
          frage: "Was stellt man sich zu Weihnachten ins Wohnzimmer?",
          antworten: [
            "Sandkasten",
            "Sonnenliege",
            "Trampolin",
            "Weihnachtsbaum",
          ],
          korrekterIndex: 3,
        },

        {
          frage: "Wie nennt man die vier Sonntage vor Weihnachten?",
          antworten: [
            "Adventssonntage",
            "Fastensonntage",
            "Osterzeit",
            "Wintersonntage",
          ],
          korrekterIndex: 0,
        },

        {
          frage: "Wie heißt das Rentier mit der roten Nase?",
          antworten: ["Donner", "Rudolph", "Blitzen", "Comet"],
          korrekterIndex: 1,
        },

        {
          frage: "Wie nennt man den 26. Dezember in Deutschland?",
          antworten: ["Stephanstag", "Nikolaustag", "Heiligabend", "Wintertag"],
          korrekterIndex: 0,
        },

        {
          frage: "Wie viele Kerzen gehören auf einen Adventskranz?",
          antworten: ["Drei", "Sechs", "Vier", "Fünf"],
          korrekterIndex: 2,
        },

        {
          frage: "Welches Sternzeichen beginnt kurz nach Weihnachten?",
          antworten: ["Schütze", "Fische", "Skorpion", "Steinbock"],
          korrekterIndex: 3,
        },

        {
          frage: "In welchem Land wurde der Adventskranz erfunden?",
          antworten: ["Deutschland", "Schweden", "Österreich", "Schweiz"],
          korrekterIndex: 0,
        },

        {
          frage: "Was symbolisiert die Kerze auf dem Adventskranz?",
          antworten: ["Schnee", "Licht in der Dunkelheit", "Freude", "Wärme"],
          korrekterIndex: 1,
        },

        {
          frage: "Wer schrieb das Lied „Last Christmas“?",
          antworten: ["ABBA", "Wham!", "Elton John", "The Beatles"],
          korrekterIndex: 1,
        },

        {
          frage: "Warum hängen viele Menschen Mistelzweige auf?",
          antworten: [
            "Um Wünsche zu erfüllen",
            "Weil man sich darunter küssen darf",
            "Wegen des Dufts",
            "Um böse Geister zu vertreiben",
          ],
          korrekterIndex: 1,
        },

        {
          frage:
            "In welchem Land ist das Schmücken eines Weihnachtsbaums entstanden?",
          antworten: ["Norwegen", "Italien", "Frankreich", "Deutschland"],
          korrekterIndex: 3,
        },

        {
          frage: "Was macht man an Heiligabend oft mit der Familie?",
          antworten: [
            "Sportturnier",
            "Geschenke auspacken",
            "Hausaufgaben",
            "Autowaschen",
          ],
          korrekterIndex: 1,
        },

        {
          frage:
            "Wie heißt der Brauch, bei dem Kinder von Haus zu Haus ziehen und singen?",
          antworten: ["Karneval", "Sternsingen", "Halloween", "Laternenlauf"],
          korrekterIndex: 1,
        },

        {
          frage: "Was backt man oft zu Weihnachten?",
          antworten: ["Pizza", "Pfannkuchen", "Plätzchen", "Brezeln"],
          korrekterIndex: 2,
        },

        {
          frage: "Wie nennt man das große Essen am Heiligabend?",
          antworten: [
            "Abendbrot",
            "Festmahl",
            "Heiligabendessen",
            "Weihnachtsbraten",
          ],
          korrekterIndex: 3,
        },

        {
          frage:
            "Welches Metall wird in vielen Weihnachtsliedern erwähnt (z. B. „Silberglöckchen“)?",
          antworten: ["Kupfer", "Silber", "Gold", "Eisen"],
          korrekterIndex: 1,
        },

        {
          frage: "Welche Süßigkeit hängt man manchmal an den Weihnachtsbaum?",
          antworten: [
            "Schokoweihnachtsmänner",
            "Bonbons",
            "Kaugummis",
            "Schokoriegel",
          ],
          korrekterIndex: 0,
        },

        {
          frage: "Wie heißt der Bösewicht, der Weihnachten stehlen will?",
          antworten: ["Grinch", "Scrooge", "Jack Frost", "Krampus"],
          korrekterIndex: 0,
        },

        {
          frage: "Was bedeutet das Wort „Advent“?",
          antworten: ["Hoffnung", "Ankunft", "Licht", "Frieden"],
          korrekterIndex: 1,
        },

        {
          frage:
            "In welchem Land wurde der Brauch des „Christbaum-Schmückens“ zuerst populär?",
          antworten: ["Dänemark", "Schweiz", "Deutschland", "Frankreich"],
          korrekterIndex: 2,
        },

        {
          frage: "Was feiern Christen an Weihnachten eigentlich?",
          antworten: [
            "Geburt Jesu",
            "Ende des Jahres",
            "Wintersonnenwende",
            "Beginn des Winters",
          ],
          korrekterIndex: 0,
        },

        {
          frage: "In welchem Land ist „Jul“ die Bezeichnung für Weihnachten?",
          antworten: ["Italien", "Griechenland", "Spanien", "Norwegen"],
          korrekterIndex: 3,
        },

        {
          frage: "Welches Land feiert Weihnachten erst am 7. Januar?",
          antworten: ["Frankreich", "Spanien", "Russland", "Italien"],
          korrekterIndex: 2,
        },

        {
          frage: "Was verschenken die Heiligen Drei Könige laut Bibel?",
          antworten: [
            "Silber, Räucherwerk und Salz",
            "Münzen, Weihwasser und Stoff",
            "Brot, Wein und Öl",
            "Gold, Weihrauch und Myrrhe",
          ],
          korrekterIndex: 3,
        },

        {
          frage: "Wie heißt der berühmte Weihnachtsballettklassiker?",
          antworten: [
            "Dornröschen",
            "Schneekönigin",
            "Der Nussknacker",
            "Schwanensee",
          ],
          korrekterIndex: 2,
        },

        {
          frage:
            "Wie viele Tage liegen zwischen Heiligabend und dem Dreikönigstag?",
          antworten: ["12", "10", "14", "7"],
          korrekterIndex: 0,
        },

        {
          frage: "Welches Land feiert Weihnachten im Sommer?",
          antworten: ["Finnland", "Polen", "Australien", "Kanada"],
          korrekterIndex: 2,
        },

        {
          frage: "Wie nennt man den Abend vor Weihnachten in England?",
          antworten: [
            "Holy Night",
            "Santa Night",
            "Christmas Eve",
            "Christmas Morning",
          ],
          korrekterIndex: 2,
        },

        {
          frage: "In welchem Monat beginnt der Advent meistens?",
          antworten: ["Dezember", "November", "Oktober", "Januar"],
          korrekterIndex: 1,
        },

        {
          frage:
            "Welches Tier soll laut Legende in der Krippe beim Jesuskind gestanden haben?",
          antworten: ["Pferd und Schaf", "Hund", "Ochse und Esel", "Löwe"],
          korrekterIndex: 2,
        },

        {
          frage: "Welches Symbol steht für Frieden und Weihnachten?",
          antworten: ["Rose", "Eiche", "Mistelzweig", "Palme"],
          korrekterIndex: 2,
        },

        {
          frage: "Welches Tier zieht den Schlitten vom Weihnachtsmann?",
          antworten: ["Hund", "Ziege", "Pferd", "Rentier"],
          korrekterIndex: 3,
        },

        {
          frage:
            "Wie hieß der erste Coca-Cola-Weihnachtsmann-Werbespot-Jahrzehnt?",
          antworten: ["1980er", "1950er", "1930er", "1960er"],
          korrekterIndex: 2,
        },

        {
          frage:
            "Wie viele Tage dauert die Weihnachtszeit offiziell in der katholischen Kirche?",
          antworten: ["10", "15", "8", "12"],
          korrekterIndex: 3,
        },

        {
          frage:
            "Welches traditionelle deutsche Weihnachtsgebäck ist oft länglich und mit Trockenfrüchten gefüllt?",
          antworten: ["Vanillekipferl", "Panettone", "Lebkuchen", "Stollen"],
          korrekterIndex: 3,
        },
        {
          frage:
            "Wie viele Kalorien hat ungefähr ein klassischer Lebkuchenherz (100 g)?",
          antworten: ["500", "150", "350", "250"],
          korrekterIndex: 2,
        },

        {
          frage:
            "Aus welchem Land stammt der Brauch, Plätzchen für den Weihnachtsmann bereitzustellen?",
          antworten: ["Deutschland", "Finnland", "England", "USA"],
          korrekterIndex: 3,
        },

        {
          frage:
            "Welcher Zucker wird traditionell für das Bestäuben von Vanillekipferln verwendet?",
          antworten: [
            "Kristallzucker",
            "Puderzucker",
            "Rohrzucker",
            "Kandiszucker",
          ],
          korrekterIndex: 1,
        },

        {
          frage:
            "Was war der ursprüngliche Zweck des Lebkuchens im Mittelalter?",
          antworten: ["Geschenk", "Reiseproviant", "Medizin", "Schmuck"],
          korrekterIndex: 2,
        },

        {
          frage:
            "Welches Tier ist auf der Verpackung vieler Spekulatius-Sorten abgebildet?",
          antworten: ["Rentier", "Engel", "Stern", "Windmühle"],
          korrekterIndex: 3,
        },

        {
          frage: "Welches Gewürz ist in fast jedem Weihnachtsgebäck enthalten?",
          antworten: ["Vanille", "Muskat", "Zimt", "Pfeffer"],
          korrekterIndex: 2,
        },

        {
          frage:
            "Welches Getränk passt laut vielen Briten „perfekt zu Christmas Pudding“?",
          antworten: ["Tee", "Kakao", "Glühwein", "Brandy"],
          korrekterIndex: 3,
        },

        {
          frage:
            "Was ist in einem typischen Dresdner Christstollen IMMER enthalten?",
          antworten: [
            "Kirschen",
            "Apfel",
            "Schokolade",
            "Rosinen und Marzipan",
          ],
          korrekterIndex: 3,
        },

        {
          frage: "Welches Land hat den Lebkuchen erfunden?",
          antworten: ["Italien", "Österreich", "Niederlande", "Deutschland"],
          korrekterIndex: 3,
        },

        {
          frage: "Wie nennt man den süßen, dicken Zuckerguss auf Plätzchen?",
          antworten: ["Royal Icing", "Creme", "Glasur Classic", "Puderkruste"],
          korrekterIndex: 0,
        },

        {
          frage:
            "Wie viele Sorten Weihnachtsplätzchen backt eine deutsche Familie im Durchschnitt?",
          antworten: ["10", "12–15", "5–6", "2"],
          korrekterIndex: 2,
        },

        {
          frage:
            "Was war das erste Schokoladenprodukt mit Weihnachtsmotiv, das industriell hergestellt wurde?",
          antworten: [
            "Schokokugel",
            "Schokoweihnachtsmann",
            "Adventskalender mit Schokolade",
            "Schokonikolaus",
          ],
          korrekterIndex: 2,
        },

        {
          frage:
            "Wie nennt man den Zucker, der karamellisiert wird, um gebrannte Mandeln herzustellen?",
          antworten: [
            "Kristallzucker",
            "Fruchtzucker",
            "Rohrzucker",
            "Vanillezucker",
          ],
          korrekterIndex: 0,
        },

        {
          frage:
            "Welches Getränk wird traditionell aus Milch, Ei, Zucker und Muskat hergestellt?",
          antworten: [
            "Brandy",
            "Eggnog (Eierpunsch)",
            "Irish Coffee",
            "Glühwein",
          ],
          korrekterIndex: 1,
        },

        {
          frage: "Wie heißt das englische Wort für Zuckerstange?",
          antworten: [
            "Sugarstick",
            "Christmas Stick",
            "Sweet Pole",
            "Candy Cane",
          ],
          korrekterIndex: 3,
        },

        {
          frage: "Welche Form haben Zuckerstangen typischerweise?",
          antworten: ["Stern", "L-Form (Gehstock)", "Kreis", "Herz"],
          korrekterIndex: 1,
        },

        {
          frage: "Warum sind Zuckerstangen rot-weiß gestreift?",
          antworten: [
            "Reine Dekoration",
            "Zufall",
            "Symbol für Jesu Blut und Reinheit",
            "Wegen der Minze",
          ],
          korrekterIndex: 2,
        },

        {
          frage:
            "Was ist das beliebteste Weihnachtsgebäck in Deutschland laut Umfragen?",
          antworten: [
            "Zimtsterne",
            "Butterplätzchen",
            "Lebkuchen",
            "Vanillekipferl",
          ],
          korrekterIndex: 3,
        },

        {
          frage:
            "In welchem Jahr wurde das Lied „Stille Nacht, heilige Nacht“ erstmals gesungen?",
          antworten: ["1835", "1808", "1818", "1823"],
          korrekterIndex: 2,
        },

        {
          frage:
            "Welcher Papst führte im Jahr 336 n. Chr. den 25. Dezember offiziell als Feiertag der Geburt Christi ein?",
          antworten: [
            "Papst Julius I.",
            "Papst Gregor der Große",
            "Papst Leo III.",
            "Papst Urban II.",
          ],
          korrekterIndex: 0,
        },

        {
          frage:
            "Wie viele Geschenke bringt der Sänger im Lied „The Twelve Days of Christmas“ insgesamt?",
          antworten: ["120", "364", "365", "240"],
          korrekterIndex: 1,
        },

        {
          frage:
            "Aus welchem Land stammt der Brauch des Weihnachtsbaums ursprünglich?",
          antworten: ["Österreich", "Schweiz", "Frankreich", "Deutschland"],
          korrekterIndex: 3,
        },

        {
          frage:
            "Wie hieß der erste Schauspieler, der im Kino den Weihnachtsmann darstellte?",
          antworten: [
            "Richard Attenborough",
            "Thomas Edison’s Mitarbeiter (1898)",
            "Tim Allen",
            "Edmund Gwenn",
          ],
          korrekterIndex: 1,
        },

        {
          frage:
            "Welches Land feiert Weihnachten nach dem Julianischen Kalender am 7. Januar?",
          antworten: ["Rumänien", "Polen", "Griechenland", "Russland"],
          korrekterIndex: 3,
        },

        {
          frage:
            "Welche bekannte Weihnachtsfigur entstand aus der niederländischen Sinterklaas-Legende?",
          antworten: [
            "Santa Claus",
            "Father Christmas",
            "Der Grinch",
            "Saint Stephen",
          ],
          korrekterIndex: 0,
        },

        {
          frage:
            "In welchem Land befindet sich die Stadt, die als „offizielle Heimat des Weihnachtsmanns“ gilt?",
          antworten: ["Kanada", "Island", "Finnland (Rovaniemi)", "Schweden"],
          korrekterIndex: 2,
        },

        {
          frage:
            "Wie hieß der römische Feiertag, der vor Einführung von Weihnachten am 25. Dezember gefeiert wurde?",
          antworten: ["Floralia", "Lupercalia", "Saturnia", "Sol Invictus"],
          korrekterIndex: 3,
        },

        {
          frage:
            "Wie viele Jahre alt war Joseph laut apokryphen Quellen, als Jesus geboren wurde (ungefähr)?",
          antworten: ["25", "40", "60", "80"],
          korrekterIndex: 3,
        },
        {
          frage:
            "Welche bekannte Weihnachtsfigur entstand ursprünglich aus einer Werbefigur für eine Limonadenfirma?",
          antworten: ["Der Grinch", "Jack Frost", "Rudolph", "Frosty"],
          korrekterIndex: 2,
        },

        {
          frage: "In welchem Land wurde der Adventskranz erfunden?",
          antworten: ["Österreich", "Niederlande", "Deutschland", "Schweiz"],
          korrekterIndex: 2,
        },

        {
          frage:
            "Wie viele Tage umfasst die traditionelle Weihnachtszeit in der christlichen Liturgie?",
          antworten: ["7", "40", "21", "12"],
          korrekterIndex: 3,
        },

        {
          frage:
            "Welche Zutat gehört traditionell NICHT in einen klassischen Stollen?",
          antworten: ["Mohn", "Zitronat", "Rosinen", "Mandeln"],
          korrekterIndex: 0,
        },

        {
          frage:
            "Wie heißt das englische Weihnachtslied, in dem jemand „Figgy Pudding“ verlangt?",
          antworten: [
            "Deck the Halls",
            "We Wish You a Merry Christmas",
            "God Rest Ye Merry Gentlemen",
            "The First Noel",
          ],
          korrekterIndex: 1,
        },

        {
          frage:
            "Welche Stadt behauptet, den ersten offiziellen Weihnachtsmarkt der Welt gehabt zu haben?",
          antworten: ["Dresden", "Nürnberg", "Wien", "Straßburg"],
          korrekterIndex: 0,
        },

        {
          frage:
            "Welches der folgenden Rentiere stammt NICHT aus Clement Clarkes Moores berühmtem Gedicht?",
          antworten: ["Rudolf", "Comet", "Dancer", "Vixen"],
          korrekterIndex: 0,
        },

        {
          frage:
            "In welchem Jahr erschien der erste Coca-Cola-Weihnachtsmann im heute typischen Stil?",
          antworten: ["1954", "1905", "1931", "1923"],
          korrekterIndex: 2,
        },

        {
          frage:
            "Welche Farbe hatte der Weihnachtsmann in vielen Darstellungen, bevor er rot populär wurde?",
          antworten: ["Lila", "Grün", "Weiß", "Blau"],
          korrekterIndex: 1,
        },

        {
          frage:
            "Aus welchem Land stammt der Brauch, Weihnachtsgurken (Glaskugeln in Gurkenform) an den Baum zu hängen?",
          antworten: ["Finnland", "Polen", "USA", "Deutschland"],
          korrekterIndex: 2,
        },

        {
          frage:
            "Wie heißt die Figur, die in Island Kinder bestraft, die unartig waren?",
          antworten: ["Perchta", "Krampus", "Knecht Ruprecht", "Grýla"],
          korrekterIndex: 3,
        },

        {
          frage: "Welches Land isst traditionell KFC an Weihnachten?",
          antworten: ["Kanada", "Japan", "China", "Australien"],
          korrekterIndex: 1,
        },

        {
          frage:
            "Wie heißt die berühmte Ballettproduktion, die jedes Jahr zur Weihnachtszeit aufgeführt wird?",
          antworten: [
            "Dornröschen",
            "Der Nussknacker",
            "Don Quixote",
            "Schwanensee",
          ],
          korrekterIndex: 1,
        },

        {
          frage:
            "Welcher dieser Filme gilt NICHT als klassischer Weihnachtsfilm?",
          antworten: [
            "Die Geister, die ich rief",
            "Der Grinch",
            "Titanic",
            "Stirb langsam",
          ],
          korrekterIndex: 2,
        },

        {
          frage:
            "Welche Farbe hat die liturgische Kleidung vieler christlicher Kirchen am 1. Weihnachtsfeiertag?",
          antworten: ["Grün", "Rot", "Violett", "Gold/Weiß"],
          korrekterIndex: 3,
        },

        {
          frage: "Woher stammt der Brauch des „Julbocks“?",
          antworten: ["Dänemark", "Russland", "Schweden", "Griechenland"],
          korrekterIndex: 2,
        },

        {
          frage:
            "Wie nennt man das Fest, das am 6. Januar das Ende der Weihnachtszeit einläutet?",
          antworten: ["Jubilate", "Karfreitag", "Advent", "Epiphanias"],
          korrekterIndex: 3,
        },

        {
          frage:
            "Welche Weihnachtsleckerei wurde ursprünglich mit Pfeffer gewürzt?",
          antworten: ["Spekulatius", "Lebkuchen", "Stollen", "Dominosteine"],
          korrekterIndex: 1,
        },

        {
          frage:
            "In welchem Land stellt man traditionell Spinnen und Spinnennetze als Deko an Weihnachten auf?",
          antworten: ["Estland", "Spanien", "Ukraine", "Mexiko"],
          korrekterIndex: 2,
        },

        {
          frage:
            "Welcher dieser Namen ist KEIN alternativer Name für den Weihnachtsmann?",
          antworten: [
            "Sinterklaas",
            "Père Noël",
            "Weihnachtself",
            "Father Christmas",
          ],
          korrekterIndex: 2,
        },
      ];

      // =================================================================
      // 2. GLOBALE VARIABLEN & DOM
      // =================================================================
      const questionElement = document.getElementById("question-text");
      const optionsGrid = document.getElementById("options-grid");
      const nextButton = document.getElementById("next-button");
      const hintText = document.getElementById("hint-text");

      let currentQuizData = null; // Speichert die aktuelle Frage
      let solutionShown = false; // Flag, um zu wissen, ob die Lösung angezeigt wurde
      let availableQuestionIndices = []; // Indizes der Fragen, die noch nicht dran waren

      // =================================================================
      // 3. LOGIK
      // =================================================================

      /**
       * Wählt eine zufällige Frage aus der Liste aus (ohne Wiederholung, bis alle durch sind) und aktualisiert die UI.
       */
      function loadNextQuestion() {
        // Wenn alle Fragen durch sind, starte von vorn
        if (availableQuestionIndices.length === 0) {
          availableQuestionIndices = Array.from(
            { length: allQuestions.length },
            (_, i) => i
          );

          // Mische die Fragen-Indizes
          for (let i = availableQuestionIndices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [availableQuestionIndices[i], availableQuestionIndices[j]] = [
              availableQuestionIndices[j],
              availableQuestionIndices[i],
            ];
          }

          if (allQuestions.length === 0) {
            questionElement.textContent =
              "Fehler: Keine Fragen im Code gefunden!";
            return;
          }
        }

        // 1. Logik zurücksetzen
        solutionShown = false;
        hideNextButton();
        optionsGrid.innerHTML = ""; // Optionen leeren
        hintText.textContent =
          "Wähle eine Antwort oder drücke die **Leertaste** (Space), um die **Lösung** anzuzeigen.";

        // 2. Zufällige Frage wählen (ohne Wiederholung)
        const questionIndex = availableQuestionIndices.pop(); // Nehme den letzten Index aus der gemischten Liste

        currentQuizData = allQuestions[questionIndex];

        // 3. UI laden
        loadQuizUI(currentQuizData);
      }

      /**
       * Behandelt den Klick auf eine Antwort-Option.
       */
      function handleOptionClick(event) {
        if (solutionShown) return; // Ignoriere Klicks, wenn die Lösung schon gezeigt wurde

        const clickedOption = event.target;
        const isCorrect = clickedOption.getAttribute("data-correct") === "true";

        // Zeige Feedback für die gewählte Option
        if (isCorrect) {
          clickedOption.classList.add("correct-answer");
          hintText.textContent = "Richtig! Gut gemacht!";
        } else {
          clickedOption.classList.add("incorrect-answer");
          hintText.textContent =
            "Falsch. Die richtige Antwort ist nun grün markiert.";

          // Markiere die korrekte Antwort
          const correctOption = document.querySelector('[data-correct="true"]');
          if (correctOption) {
            correctOption.classList.add("correct-answer");
          }
        }

        // Deaktiviere alle Antwortfelder und zeige den Weiter-Button
        solutionShown = true;
        disableOptions();
        showNextButton();
      }

      /**
       * Aktualisiert die HTML-Elemente mit den Daten der geladenen Frage.
       */
      function loadQuizUI(quizData) {
        // 1. Frage aktualisieren
        questionElement.textContent = quizData.frage;

        // 2. Antwort-Kästchen neu erstellen
        optionsGrid.innerHTML = "";

        quizData.antworten.forEach((answerText, index) => {
          const optionDiv = document.createElement("div");
          optionDiv.classList.add("option");
          optionDiv.textContent = answerText;

          // Füge das Attribut für die Lösungs-Logik hinzu
          if (index === quizData.korrekterIndex) {
            optionDiv.setAttribute("data-correct", "true");
          }

          // Füge den Klick-Listener hinzu
          optionDiv.addEventListener("click", handleOptionClick);

          optionsGrid.appendChild(optionDiv);
        });

        optionsGrid.classList.remove("hidden");
      }

      /**
       * Zeigt die korrekte Lösung an (wird durch Leertaste ausgelöst)
       */
      function showSolution() {
        if (solutionShown) return;

        solutionShown = true;

        const correctOption = document.querySelector('[data-correct="true"]');

        if (correctOption) {
          correctOption.classList.add("correct-answer");
        }

        hintText.textContent =
          "Drücke **Enter**, um die nächste Frage zu laden.";
        disableOptions();
        showNextButton();
      }

      /**
       * Deaktiviert Klick-Events auf allen Optionen.
       */
      function disableOptions() {
        const options = document.querySelectorAll(".option");
        options.forEach((option) => {
          option.classList.add("disabled-option");
        });
      }

      function showNextButton() {
        nextButton.classList.remove("hidden");
      }

      function hideNextButton() {
        nextButton.classList.add("hidden");
      }

      // Event-Listener für Tastatureingaben
      document.addEventListener("keydown", function (event) {
        if (!currentQuizData) return;

        // 1. Leertaste: Lösung anzeigen
        if ((event.key === " " || event.keyCode === 32) && !solutionShown) {
          event.preventDefault(); // Verhindert Scrollen
          showSolution();
        }

        // 2. Enter-Taste: Nächste Frage laden (wenn Lösung gezeigt wurde)
        if ((event.key === "Enter" || event.keyCode === 13) && solutionShown) {
          event.preventDefault(); // Verhindert Formular-Aktionen
          loadNextQuestion();
        }
      });

      // Event-Listener für Button-Klick
      nextButton.addEventListener("click", loadNextQuestion);

      // Beim Laden der Seite starten
      window.addEventListener("load", loadNextQuestion);