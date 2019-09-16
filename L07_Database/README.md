# Database
<img src="Material/Dilbert.gif">
<small>Quelle: <a href="https://dilbert.com/strip/1995-11-17">https://dilbert.com/strip/1995-11-17</a></small>  

Mit dem Cocktailbar-Client kann der Kunde einen Cocktail zusammenstellen, seine Bestellung überprüfen und abschicken. Der Server nimmt die Bestellung entgegen und formuliert eine Bestätigung, die der Client anzeigt. Dumm nur: der Barkeeper bekommt davon immer noch nichts mit. Denn anders als an einer nicht-virtuellen Bar, kommunizieren Barkeeper und Kunde nun asynchron. Der Barkeeper ist also höchstwahrscheinlich nicht zugegen, wenn die Bestellung hereinkommt und arbeitet sie stattdessen zu irgendeiner anderen Zeit ab. Die Bestellungen müssen also irgendwie gespeichert werden und zwar so, dass der Barkeeper darauf jederzeit Zugriff hat.  

Es wäre möglich, dass der Server für jede Bestellung eine Datei anlegt und diese in seinem Massenspeicher ablegt, oder alle Bestellungen in einer Datei sammelt. Allerdings sollten auch alte Bestellungen gelöscht, oder vielleicht alle Bestellungen des gleichen Kunden herausgesucht, oder zur Optimierung des Angebots die Häufigkeit der Bestellung einer bestimmten Drink-Extra-Kombination ermittelt werden können. Für all dies müssten wieder entsprechende Algorithmen und Datenstrukturen konzipiert und implementiert werden. Da solche Anforderungen bei der Entwicklung interaktiver Anwendungen aber sehr häufig auftreten und oft ähnlich sind, gibt es bereits Standardsoftware, welche Daten speichert, verwaltet und auswertet: Datenbanken!  

## Relationale Datenbanken
Seit den 1970er Jahren dominieren relationale Datenbanken, bei denen die Daten in Tabellenstrukturen untergebracht werden und durch Querverweise ein Netz von Tabellen aufgespannt wird. Mit der Standard-Query-Language (SQL) wurde eine Abfragesprache entwickelt, mit der komplexe Anweisungen formuliert werden können, welche die Datenbanksoftware dann selbständig ausführt um Daten aus dem Bestand zu liefern oder zu manipulieren. Heute ist insbesondere die Open-Source-Datenbank MySQL sehr weit im Internet verbreitet.
> **FunFact** My

## NoSQL-Datenbanken
- Datenaufkommen immer größer
- neue Konzepte erforderlich um leichter skalieren zu können


## MongoDB
![](Material/NODE_MONGO_TS.png)
![](Material/PHP_MYSQL_JS.png)

Server-seitige JavaScript-Ausführung: JavaScript ist die Verkehrssprache von MongoDB und kann für Abfragen und Aggregationsfunktionen (wie beispielsweise MapReduce) verwendet werden, außerdem kann JavaScript direkt zur Datenbank geschickt und dort ausgeführt werden.

## Use-Case-Diagramm
- um Datenbank erweitern
- Server sendet Daten und Abfragen
- Datenbank speichert und liefert
- zwischen Server und Barkeeper noch System Barkeeper-Client

## Aufbau einer dokumentenorientierten Datenbank
- Datenbank-System verwaltet
- Datenbanken, diese beinhalten
- Collections von
- Dokumenten welche lediglich
- JSON-Dokumente darstellen

-> Grafik!

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
