Bild Vorschlag: https://dilbert.com/strip/1995-11-17

Mongo Installationsanleitung (Community Server): https://docs.mongodb.com/manual/installation/  
Nicht "as a service" installieren, sonst startet sich der Kollege beim Computerstart immer selbst, das wollen wir ja nicht.

Der MongoCompass ist eine grafische Oberfläche zur Visualisierung/Bearbeitung der Daten. Brauchen wir also auch nicht.

zum Ausführen einfach direkt in der Konsole `path/to/mongod.exe --dbpath <path/to/db/folder>` eingeben.

`npm install @types/mongodb` sowie `mongodb`, auch hier wieder der Hinweis auf node_modules und package.json

Online: https://www.mongodb.com/
- "try free"
- wähle beliebigen Anbieter (AWS hat gratis Angebote in DE) sowie Cluster Name
- dort dann über `Clusters > Collections` DBs und Collections anlegen (beim ersten Mal über "add my own Data", bei jedem weiteren Mal links unter "Create Database" bzw bei existierender DB bei dem Plus daneben für eine neue Collection)
- User über `Database Access` anlegen
- Zugriff auf DB über `Network Access > Add IP Address` erlauben. Um alles zu erlauben nutze `0.0.0.0/0`.
- Den Link zur DB findet man unter `Clusters > Connect > [einer der drei Optionen, am besten DB-Compass]`, dieser sieht ungefähr so aus: `mongodb+srv://<user>:<password>@test-czq5m.mongodb.net/test`. Wenn man eine andere der drei Optionen als DB Compass nutzt, stehen in dem Link noch weitere Infos bzw ist es ein Shell Command.  

wichtigste Änderungen: nicht mehr `mongodb` sondern `mongodb+srv` vorne. Hinten steht nicht mehr der DB name sondern der Cluster Name. Cluster über den DBs drüber
