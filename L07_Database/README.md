# Database
<img src="Material/Dilbert.gif">
<small>Quelle: <a href="https://dilbert.com/strip/1995-11-17">https://dilbert.com/strip/1995-11-17</a></small>  

Mit dem Cocktailbar-Client kann der Kunde einen Cocktail zusammenstellen, seine Bestellung überprüfen und abschicken. Der Server nimmt die Bestellung entgegen und formuliert eine Bestätigung, die der Client anzeigt. Dumm nur: der Barkeeper bekommt davon immer noch nichts mit. Denn anders als an einer nicht-virtuellen Bar, kommunizieren Barkeeper und Kunde nun asynchron. Der Barkeeper ist also höchstwahrscheinlich nicht zugegen, wenn die Bestellung hereinkommt und arbeitet sie stattdessen zu irgendeiner anderen Zeit ab. Die Bestellungen müssen also irgendwie gespeichert werden und zwar so, dass der Barkeeper darauf jederzeit Zugriff hat.  

Es wäre möglich, dass der Server für jede Bestellung eine Datei anlegt und diese in seinem Massenspeicher ablegt, oder alle Bestellungen in einer Datei sammelt. Allerdings sollten auch alte Bestellungen gelöscht, oder vielleicht alle Bestellungen des gleichen Kunden herausgesucht, oder zur Optimierung des Angebots die Häufigkeit der Bestellung einer bestimmten Drink-Extra-Kombination ermittelt werden können. Für all dies müssten wieder entsprechende Algorithmen und Datenstrukturen konzipiert und implementiert werden. Da solche Anforderungen bei der Entwicklung interaktiver Anwendungen aber sehr häufig auftreten und oft ähnlich sind, gibt es bereits Standardsoftware, welche Daten speichert, verwaltet und auswertet: Datenbanksysteme!  

## Relationale Datenbanken
Seit den 1970er Jahren dominieren relationale Datenbanken, bei denen die Daten in Tabellenstrukturen untergebracht werden und durch Querverweise ein Netz von Tabellen aufgespannt wird. Mit der Standard-Query-Language (SQL) wurde eine Abfragesprache entwickelt, mit der komplexe Anweisungen formuliert werden können, welche die Datenbanksoftware dann selbständig ausführt um Daten aus dem Bestand zu liefern oder zu manipulieren. Heute ist insbesondere die Open-Source-Datenbanksoftware MySQL sehr weit im Internet verbreitet.
> **FunFact:** Dem Namen MySQL wird meist intuitiv die Bedeutung "MeinSQL" zugesprochen. Tatsächlich hat der (norwegische? liauische?) Entwickler Michael Widenius sein 1994 gestartetes Open-Source-Projekt aber nach seiner Tochter My benannt.

## NoSQL-Datenbanken
Mit dem durch das Internet stetig wachsenden Datenaufkommen wurde der Bedarf an Skalierungsmöglichkeiten immer größer. Die Leistung und Kapazität einer Datenbank sollte also während des Betriebs durch Einsatz von mehr Hardware einfach vergrößert werden können. Relationale Datenbanksysteme sind aber ursprünglich nicht dafür ausgelegt, die Daten zu verteilen. 
NoSQL bzw. dkumentenorientierte Datenbanken adressieren dieses Problem. Die zu verwaltenden Daten müssen dabei nicht in starr definierte Tabellenform gebracht werden, sondern jeder Datensatz kann als beliebig strukturiertes Dokument abgelegt werden.  
Das No in NoSQL bedeutet "Not only", es gibt also auch Systeme, die mit SQL arbeiten können. Dokumentenorientierte Datenbanken sind eine Variante der NoSQL-Datenbanken, es gibt noch andere.

## MongoDB
2009 wurde mit MongoDB eine NoSQL-Datenbanksoftware veröffentlicht, die Javascript als interne Verkehrssprache nutzt. Abfragen und Aggregationsfunktionen können direkt als Javascript-Anweisungen formuliert werden, außerdem können ganze Anweisungsfolgen zum Datenbanksystem geschickt und dort ausgeführt werden.  

> **FunFact:** Der Name MongoDB leitet sich von *humongous* ab, womit die grotesken Größe der Datenmengen gemeint ist, die mit dieser Software verwaltet werden können.

Für dich ist der riesige Vorteil der Nutzung dieser Datenbanksoftware, dass Du keine weitere Abfrage- oder Programmiersprache lernen musst. Die Anweisungen, die MongoDB für Node.js bereit stellt, sind auch in TypeScript definiert, so dass Du sie mit der gewohnten Unterstützung einsetzen kannst, genauso wie die modernen Konzept der ansynchronen Kommunikation mit dem Datenbanksystem wie `Promise` und `async/await`.  
Wenn auch die aktuellen Installationen im Internet noch von JavaScript, PHP und MySQL dominiert sind, bist Du mit Node.js, TypeScript und MongoDB zudem sehr zukunftsträchtig aufgestellt, wie die Grafiken von Google-Trend nahelegen.

![](Material/NODE_MONGO_TS.png)
![](Material/PHP_MYSQL_JS.png)

Für die Konzeption ist es allerdings zunächst unerheblich, welche Systeme letztlich zum Einsatz kommen.

## Use-Case-Diagramm
Durch den Einsatz einer Datenbanksoftware ist es nicht mehr erforderlich, eine Datenverwaltung selbst zu entwickeln. Komplexität entsteht nun aber durch die Kommunikation zwischen den Systemen Client, Server und Datenbanksystem. Das wird schon im erweiterten Use-Case-Diagram deutlich.

![](Material/draw.io/UseCase.svg)

Neben der Datenbank wurde nun auch ein Client für den Barkeeper berücksichtigt, denn schließlich sitzt er wahrscheinlich nicht im Rechenzentrum und kann direkt die Maschinen manipulieren, auf denen der Server läuft.  
Spätestens jetzt sollte klar werden, wie hilfreich Anwendungsfalldiagramme in frühen Stadien der Softwareentwicklung sind. 

> - [x] Studiere intensiv das dargestellte Diagramm und erkläre was es darstellt.

Das Diagramm stellt lediglich die Grundfunktionalitäten dar, tatsächlich kann es schnell noch deutlich komplexer werden, wenn die Anforderungen steigen. Beispielsweise wäre es sicher wünschenswert, wenn der Barkeeper nach dem Ändern des Angebotes oder dem Löschen einer Bestellung eine Rückmeldung bekommt und sein Interface auf den aktuellen Stand gebracht wird.  
Auch ist hier nur das Verhalten dargestellt, welches im fehlerfreien Lauf erwartet wird. Wenn unterschiedliche Systeme aber miteinander kommunizieren sind Fehler wie Verbindungsabbrüche oder falsche Nutzereingaben an der Tagesordnung. Die Fehlerbehandlung macht oft den größten Teil der letztlich entwickelten Software aus, und würde an dieser Stelle den Rahmen weit sprengen.

## Allgemeine Datenbankstruktur
```plaintext
MongoDB-Instanz
├   admin
├   config
├   local
├ Database_1
├ Database_2
│ ├ Collection_1
│ ├ Collection_2
│ │ ├ {key: value, key: value, ...}
│ │ ├ {key: value, key: value, ...}
│ │ ├ {key: value, key: value, ...}
│ │ └ ...
│ ├ Collection_3
│ └ ...
├ Database_3
└ ...
``` 
- Eine MongoDB-Instanz kann mehrere Datenbanken verwalten.
- Die Datenbanken admin, config und local werden dabei standardmäßig angelegt und sind für die interne Funktionalität erforderlich
- Die kannst beliebige viele eigene Datenbanken anlegen
- In jeder Datenbank können beliebig viele Collections untergebracht sein
- Jede Collection enthält eine beliebige Anzahl an Dokumenten
- Ein Dokument ist im Wesentlichen lediglich ein JSON-String

## Datenbankstruktur für die Cocktailbar
Da jede Bestellung vom Server leicht in einen JSON-String umgewandelt wird, bietet es sich an, diese beispielsweise in einer Collection namens `orders` abzulegen. Das Angebot des Barkeepers sollte in einer Collection `offer` liegen. Dabei wäre es möglich, das komplette Angebot als ein einziges Dokument abzulegen, so wie es derzeit auch vorliegt. Allerdings wäre die Funktionalität einer Datenbank besser genutzt, wenn man das Angebot auf mehrere Dokumente aufteilt, welche man beispielsweise mit dem Schlüssel `type` voneinander unterscheidet. Die Dokumente sähen dann so aus:
```typescript
{ "type": "Drink", "offer": [ { "name": "Mojito", "price": 25.00 }, {"name": "Caipirinha", "price": 30.00 }, ... ] }
{ "type": "Extras", "offer": [ { "name": "Ice", "price": 0.50 }, { "name": "Lemon", "price": 0.20}, ... ]}
...
```

## Installation

Mongo Installationsanleitung (Community Server): https://docs.mongodb.com/manual/installation/  

https://docs.mongodb.com/manual/administration/install-community/

Install MongoD as a Service deaktiveren!

Nicht "as a service" installieren, sonst startet sich der Kollege beim Computerstart immer selbst, das wollen wir ja nicht. Der MongoCompass ist eine grafische Oberfläche zur Visualisierung/Bearbeitung der Daten. Brauchen wir also auch nicht.

zum Ausführen einfach direkt in der Konsole `path/to/mongod.exe --dbpath <path/to/db/folder>` eingeben.

`npm install @types/mongodb` sowie `mongodb`, auch hier wieder der Hinweis auf node_modules und package.json.

package.json erhält neue Einträge
gitignore, je nachdem, wo node_modules installiert wurde

# Alles zuerst üben, dann Video anschauen

## MongoDB
- Datenbank in cmd-Window starten
## Mongo Shell
- Shell in zweitem cmd-Window starten
- connect zur Datenbank beobachten
- zunächst einiges mit der Mongo-Shell spielen
- bis klar ist, was die Datenbank macht und wie die Befehle lauten und arbeiten
## Zugriff von Server aus planen
## Zugriff implementiere
## Server
- Server in drittem cmd-Window starten
- connect beobachten
## Client
- Pfade implementieren sofern erforderlich
- Client in viertem Fenster (Browser) starten
- Funktionen beobachten



Online: https://www.mongodb.com/
- "try free"
- wähle beliebigen Anbieter (AWS hat gratis Angebote in DE) sowie Cluster Name
- dort dann über `Clusters > Collections` DBs und Collections anlegen (beim ersten Mal über "add my own Data", bei jedem weiteren Mal links unter "Create Database" bzw bei existierender DB bei dem Plus daneben für eine neue Collection)
- User über `Database Access` anlegen
- Zugriff auf DB über `Network Access > Add IP Address` erlauben. Um alles zu erlauben nutze `0.0.0.0/0`.
- Den Link zur DB findet man unter `Clusters > Connect > [einer der drei Optionen, am besten DB-Compass]`, dieser sieht ungefähr so aus: `mongodb+srv://<user>:<password>@test-czq5m.mongodb.net/test`. Wenn man eine andere der drei Optionen als DB Compass nutzt, stehen in dem Link noch weitere Infos bzw ist es ein Shell Command.  

wichtigste Änderungen: nicht mehr `mongodb` sondern `mongodb+srv` vorne. Hinten steht nicht mehr der DB name sondern der Cluster Name. Cluster über den DBs drüber
