# L06_Server
<img src="Material/ServerName.jpg">
<small>Quelle: <a href="https://xkcd.com/910/">https://xkcd.com/910/</a></small>  

Ein reiner Fileserver wird natürlich den Ansprüchen nicht gerecht, welche die Cocktailbar an die Gegenseite der Kommunikation stellt. Die Bestellung kommt zwar an, aber die Serversoftware ist nicht darauf programmiert, damit etwas anzufangen. Was genau damit geschehen soll, wurde allerdings noch gar nicht definiert. Im vorangegangenen Kapitel wurde lediglich festgehalten, dass der Server die Bestellung entgegen nehmen soll.  

![](../L05_Client/Material/draw.io/UseCase.svg)  

In diesem Kapitel soll daher zunächst die Grundlage für die Weiterverarbeitung geschaffen werden. Der Server soll eine asynchrone Kommunikation mit dem Client führen, Daten von diesem entgegen nehmen und eine Antwort erzeugen können, die über das einfache Ausliefern von statischen Dateiinhalten hinausgeht. Kurzum: ein Applikation-Server wird erstellt.

![](../L06_Server/Material/ClientServer.svg)  
Der Anwendungsfall kann in obenstehendem, domänenübergreifenden Aktivitätsdiagramm dargestellt werden. Jedes beteiligte System, gegebenenfalls auch der Nutzer, wird dabei in einem eigenen Bereich, einer sogenannten Swimlane, also Schwimmbahn, dargestellt.

## Node.js
Der Server wird voraussichtlich nicht in einem Browser laufen. Üblicherweise sind Server auf Maschinen installiert, die in einem Rechenzentrum in lebensfeindlicher Umgebung stehen und nicht mit der Interaktion mit Usern beschäftigt sind. Ein Browser, der doch vordringlich für die Mensch-Maschine-Kommunikation verantwortlich ist, wäre da nur hinderlich. Daher sind Server meist in niederen Sprachen wie C++, Java usw. programmiert und werden ggf. in ihrere Funktionalität mit Hilfe von Skriptsprachen wie Pearl, CGI oder PHP erweitert.  

2009 kam der damals 28jährige Student Ryan Dahl auf die Idee, Googles V8-Javascript-Interpreter außerhalb des Browsers zu nutzen, um verschiedene Module zu erweitern und damit einen Server zu programmieren. Der Einsatz von Javascript war vor allem motiviert durch Unterstützung der Ereignissteuerung, womit Server nicht durch wartende Prozesse blockiert werden. Ryan schuf damit Node.js, eine Programmierumgebung, mit der es möglich ist, Javascript und damit auch kompiliertes TypeScript außerhalb von Browsern zu nutzen und damit Anwendungen zu entwickeln. VSCode selbst ist eine solche Anwendung! Ryan erklärt Node.js selbst in diesem [Google Talk](https://www.youtube.com/watch?v=F6k8lTrAE2g) (danger, very techy)

> **FunFact:** 2018 kündigte Ryan Dahl die Entwicklung von Deno an, womit er Node.js Konkurrenz macht. Unter anderem soll Deno direkt TypeScript-Programme interpretieren, ohne dass daraus zuvor Javascript-Dateien erzeugt werden müssen. Hier ist Ryans [Github-Profil](https://github.com/ry)

Für dich ist der riesige Vorteil von Node.js, dass Du keine weitere Programmiersprache lernen musst, um einen Server zu entwickeln. Ebenso kannst Du damit Desktop-Programme für Windows, Mac oder Linux bauen (siehe VSCode). Mit TypeScript und Node.js bist Du sehr gut aufgestellt.  

- [x] Wie kannst Du ermitteln, welche Node-Version auf deinem Rechner installiert ist?
- [x] Stelle sicher, dass Du eine aktuelle Version hast und führe gegebenenfalls ein Update durch.

## Entwickeln mit Node.js
### Types
Damit TypeScript bei der Entwicklung einer Node.js-Applikation richtig helfen kann, muss es die neuen Datentypen kennen, die Node mitbringt. Diese installierst Du wieder einfach per npm auf deiner Entwicklungsmaschine, am besten auf der obersten Ebene deines EIA2-Projektes:
```
npm install @types/node
```
Dabei entsteht ein Ordner `node_modules` und eine Datei `package.lock.json`. Letztere kannst Du in dein Repository übernehmen oder löschen. Im Ordner `node_modules` allerdings befinden sich die Definitionsdateien für TypeScript und später kommen noch weitere Module dazu, die richtig Platz brauchen. Daher solltest Du diese nicht auf dein Github-Repository pushen. Wähle stattdessen im SourceControl-View von VSCode für diesen Ordner die Option "Add File to .gitignore" (z.B. per Rechtsklick). Dann wird sich Git nicht mehr um diesen Ordner kümmern.

### Run
Ein Skript mit Node laufen zu lassen ist denkbar einfach. Da auf deiner Maschine bereits Node installiert ist (sonst würden VSCode und der TypeScript-Compiler nicht funktionieren) musst Du lediglich in der Konsole
```
node NameDesSkripts.js
```
eingeben, wobei NameDesSkripts natürlich mit dem Namen der Skript-Datei zu ersetzen ist, die Du tatsächlich laufen lassen möchtest.

### Debug
In VSCode kann das Skript, in welchem sich gerade der Cursor befindet, auch ganz einfach mit Ctrl+F5 gestartet werden. Dann nämlich läuft der VSCode-Debugger an und verarbeitet das Skript, greift aber nicht ein. Die Skriptausgaben sind in der DEBUG CONSOLE zu finden.  

Mit Tastendruck auf F5 alleine startest Du den Debugger mit der vollen Funktionalität und kannst nun wie mit dem Browserdebugger durch das laufende Programm navigieren, Breakpoints setzen und Variablen beobachten.

### API
Node kommt mit einigen neuen Standardobjekten und Modulen, für EIA2 brauchst Du aber nur sehr wenige davon. Die Dokumentation findest Du im Netz auf https://nodejs.org/de/docs/.  
Das Objekt `process` beispielsweise liefert Informationen zur Umgebung, in der ein Node-Programm gerade ausgeführt wird. 

|Hier erscheint jetzt ein Video|
|-
|Zweigeteilt 
|1. VSCode 
|2. Jirkas sprechender Kopf  

>Inhalt: eine erste Node-Anwendung  
> - namespace (erst prüfen, wie es damit weiter geht)
> - Variablen
> - Starten (Commandline, Ctrl+F5, F5)
> - Debuggen
> - Events, Unterschiede zu bisher
> - Timeout
> - process

- [x] Eine kleine Aufgabe mit einer Node-App lösen! Hierzu CLI-Parameter entgegen nehmen. Farben-Konverter? Bin-Dez-Hex? Eliza?

## Erweiterungen
Zusätzlich zu den schon fest eingebauten Modulen, werden auch Standard-Erweiterungen mitgeliefert. Um einen Server zu bauen, brauchen wir dabei das Module `http`. Das Module `url` ist hilfreich um den query-String zu extrahieren und zu interpretieren. Beide Module können mit dem Schlüsselwort `import` geladen und einer Variablen zugewiesen werden, über welche in der Folge auf die Funktionen und Objekte der Module zugegriffen werden kann. Der Asterisk `*` gibt an, dass sämtliche Funktionalität importiert werden soll, hier könnte auch eine Auswahl getroffen werden.
```typescript
import * as Http from "http";
import * as Url from "url";

export namespace ... {
    Http.createServer(...);
}
```
**Achtung:** Wird `input` verwendet, geht TypeScript davon aus, dass ein eigenes, neues Modul erzeugt werden soll und fordert das Schlüsselwort `export` vor `namespace`, auch wenn es hier bedeutungslos ist.

Auch die Standardmodule, die wahlweise importiert werden wie `http` und `url`, sind in der [Node-Dokumentation](https://nodejs.org/de/docs/) beschrieben.

## Design
|Hier erscheint jetzt ein Video|
|-
|Zweigeteilt 
|1. Diagrammerstellung auf Papier 
|2. Jirkas sprechender Kopf  

>Inhalt: 
> - Einen Port auf dem System für Anfragen öffnen
> - Listener installieren, der auf eine Anfrage reagiert
> - Handlerfunktion, welche die Anfrage verarbeitet und eine Antwort formuliert

## Implementation 1
|Hier erscheint jetzt ein Video|
|-
|Dreigeteilt 
|1. groß das Programm, das gerade getippt wird
|2. klein die Diagramme im Wechsel
|3. klein Jirkas sprechender Kopf  

> Inhalt:
> - Implementation bis Reaktion auf Request

## handleRequest
Die Events, die in diesem System verwendet werden, sind keine DOM-Events, schließlich ist HTML nicht die Grundlage auf der Serverseite. Deswegen folgen sie auch nicht der Konvention, dass immer ein Event-Objekt an den Handler übergeben wird. 
Der Handler zum Request-Event erwartet zwei Parameter, den ersten vom Typ `IncomingMessage` und den zweitem vom Typ `ServerResponse` aus dem `http`-Modul.  

`IncomingMessage` liefert Informationen zur eingegangenen Request, zum Beispiel den URL als String. Um daraus bequem den Query-Teil zu extrahieren, bietet das `url`-Modul hilfreiche Methoden. `parse` interpretiert den URL und erzeugt daraus ein neues Objekt, dessen Eigenschaft `query` nun wieder ein assoziatives Array darstellt.

`ServerResponse` ist ein Objekt, welches die Informationen für die Antwort sammelt. Dabei wird, wie bei Kommunikationsprotokollen üblich, diese Information in zwei grundlegende Kategorien aufgeteilt
- Header: Information zur eigentlichen Nachricht
- Body: die Nachricht selbst.

Mit der Methode `write(...)` des ServerResponse-Objektes kannst Du ganz einfach Zeichenketten der Nachricht anfügen, mit `end()` wird die Antwort verschickt. Header-Informationen integrierst Du mit `setHeader(...)`. Eine simple Antwort kann man also derart zusammenbauen:
```typescript
function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");
    _response.write("Was geht?");
    _response.end();
}
```
Im Beispiel verschickt der Server lediglich die Antwort mit dem Inhalt "Was geht?". Der Header gibt an, dass die Antwort ein mit utf-8 kodierter Text ist, also z.b. kein Bild, und dass sie von jedem geöffnet werden darf. Auch hier bedeutet der Asterisk wieder "alles".

## Implementation 2
|Hier erscheint jetzt ein Video|
|-
|Dreigeteilt 
|1. groß das Programm, das gerade getippt wird
|2. klein die Diagramme im Wechsel
|3. klein Jirkas sprechender Kopf  

> Inhalt:
> - Parameter verarbeiten
> - Probleme umschiffen, Header einbauen
> - Verschiedene Ausgaben auf Konsole und in Antwort
> - JSON erzeugen

## Heroku
- In Landschaft verorten
- PaaS
- signup
    - for free
    - primary language: Node.js
- rechts oben "New"
    - "create new app"
    - App name muss einzigartig sein und nur kleine Buchstaben nutzen
    - Region Europe
    - create app
- dashboard
    - nur zwei Views derzeit wichtig deploy und logs
    - View logs rechts oben unter "More" in neuem Fenster öffnen
    - die zwei Fenster nebeneinander setzen
    - im Deploy-Fenster "Connect to Github" wählen um die untere Auswahl zu verändern
      - dort erneut "Connect to Github" wählen
      - im Popup mit Github verbinden
      - Repository auswählen
- Deploy
    - Deploy Master Branch
    - Ausgaben in beiden Fenstern beobachten
    - Crash!

## package.json
  - eine Heroku-App ist zunächst ganz blank
  - wir hatten Node installiert und dann mit Node das Programm gestartet
  - package.json trägt diese Infos
  - erstellen mit npm init
  - Pfade auf das auszuführende Skript legen
  - start in scripts nicht vergessen

## Client
- port von process
- Pfade anpassen