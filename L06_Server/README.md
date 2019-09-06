# L06_Server
<img src="Material/ServerName.jpg">
<small>Quelle: <a href="https://xkcd.com/910/">https://xkcd.com/910/</a></small>  

Ein reiner Fileserver wird natürlich den Ansprüchen nicht gerecht, welche die Cocktailbar an die Gegenseite der Kommunikation stellt. Die Bestellung kommt zwar an, aber die Serversoftware ist nicht darauf programmiert, damit etwas anzufangen. Was genau damit geschehen soll, wurde allerdings noch gar nicht definiert. Im vorangegangenen Kapitel wurde lediglich festgehalten, dass der Server die Bestellung entgegen nehmen soll.  

![](../L05_Client/Material/draw.io/UseCase.svg)  

In diesem Kapitel soll daher zunächst die Grundlage für die Weiterverarbeitung geschaffen werden. Der Server soll eine asynchrone Kommunikation mit dem Client führen, Daten von diesem entgegen nehmen und eine Antwort erzeugen können, die über das einfache Ausliefern von statischen Dateiinhalten hinausgeht. Kurzum: ein Applikation-Server wird erstellt.

## Node.js
Der Server wird voraussichtlich nicht in einem Browser laufen. Üblicherweise sind Server auf Maschinen installiert, die in einem Rechenzentrum in lebensfeindlicher Umgebung stehen und nicht mit der Interaktion mit Usern beschäftigt sind. Ein Browser, der doch vordringlich für die Mensch-Maschine-Kommunikation verantwortlich ist, wäre da nur hinderlich. Daher sind Server meist in niederen Sprachen wie C++, Java usw. programmiert und werden ggf. in ihrere Funktionalität mit Hilfe von Skriptsprachen wie Pearl, CGI oder PHP erweitert.  

2009 kam der damals 28jährige Student Ryan Dahl auf die Idee, Googles V8-Javascript-Interpreter außerhalb des Browsers zu nutzen, um verschiedene Module zu erweitern und damit einen Server zu programmieren. Der Einsatz von Javascript war vor allem motiviert durch Unterstützung der Ereignissteuerung, womit Server nicht durch wartende Prozesse blockiert werden. Ryan schuf damit Node.js, eine Programmierumgebung, mit der es möglich ist, Javascript und damit auch kompiliertes TypeScript außerhalb von Browsern zu nutzen und damit Anwendungen zu entwickeln. VSCode selbst ist eine solche Anwendung! Ryan erklärt Node.js selbst in diesem [Google Talk](https://www.youtube.com/watch?v=F6k8lTrAE2g) (danger, very techy)

> **FunFact:** 2018 kündigte Ryan Dahl die Entwicklung von Deno an, womit er Node.js Konkurrenz macht. Unter anderem soll Deno direkt TypeScript-Programme interpretieren, ohne dass daraus zuvor Javascript-Dateien erzeugt werden müssen. Hier ist Ryans [Github-Profil](https://github.com/ry)

Für dich ist der riesige Vorteil von Node.js, dass Du keine weitere Programmiersprache lernen musst, um einen Server zu entwickeln. Ebenso kannst Du damit Desktop-Programme für Windows, Mac oder Linux bauen (siehe VSCode). Mit TypeScript und Node.js bist Du sehr gut aufgestellt.

## Entwickeln mit Node.js

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
Node kommt mit einigen neuen Standardobjekten und Modulen, für EIA2 brauchst Du aber nur sehr wenige davon. Die Dokumentation findest Du um Netz auf https://nodejs.org/de/docs/.  
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



## Design
- Einen Port auf dem System für Anfragen öffnen
- Listener installieren, der auf eine Anfrage reagiert
- Handlerfunktion, welche die Anfrage verarbeitet und eine Antwort formuliert

Activity-Diagram!

## Documentation


## Implementation 1
- bis Reaktion auf Request

## handleRequest
- Parameter erklären
- Query verarbeiten
- Antwort bauen
- Header erklären

## Implementation 2

## Heroku

## Client
- Pfade anpassen










Node.js sollte bereits installiert sein.

`npm install @types/node` für die Node types, entweder im Projekt oder mit `-g`. 
In diesem Zusammenhang kann man ggf auch eine .gitignore einsetzen, um die node_modules nicht mit zu pushen. Dafür muss man dann aber wahrscheinlich auch auf die package.json eingehen. 

Heroku funktioniert wie bisher, man könnte sich aber auch überlegen die Studi-cloud zu verwenden (Anleitung dazu: https://studicloud.hs-furtwangen.de/). Studi-Cloud ist allerdings deutlich schwieriger in jeder Hinsicht: Keinerlei Automatisierung, kein Userinterface, keine einfache Umgangsform und dann auch noch Linux. Da müsste man dann ggf auch noch in Linux und Shell Commands einsteigen, was den Rahmen definitiv sprengen würde, für Interessierte Studis aber durchaus interessant sein kann (letztes Semester immerhin einer).

Es kann sein dass `port == undefined` nicht funktioniert, ich glaube darum haben wir es letztes Semester mit `!port` gecheckt.

PS: Ports nicht vergessen zu erklären
