# L01 Recap & Foundation
<img src="Material/steve-jobs-learn-to-program.jpg"></img>
## Einleitung
In diesem Kapitel wiederholst und festigst Du einige Inhalte der Veranstaltung "Entwicklung interaktiver Anwendungen I". Ein tiefes Verständnis dieser und ein sicherer Umgang mit diesen ist Voraussetzung für die folgenden Kapitel.
Außerdem wirst Du die Aktivitätsdiagramme der "Unified Modelling Language" (UML2.5) kennen lernen, mit deren Hilfe Du im weiteren Verlauf der Veranstaltung Algorithmen beschreiben und konzipieren wirst.
Darüber hinaus lernst Du mit Verfolgungstabellen (Trace Tables) und dem browserinternen Debugger umzugehen, welche wichtige Werkzeuge für die Fehlersuche während der Implementation deiner konzipierten Anwendungen sind.
## Rückblick
Aus "Entwicklung interaktiver Anwendungen I" sind dir bekannt:
- Grundlagen imperativer, prozeduraler Programmierung
  - Anweisungen und Anweisungsfolgen
  - Variablen und Datentypen, primitiv und komplex
  - Kontrollstrukturen wie Bedingungen und Schleifen
  - Funktionen und Parameter  
- Document Object Modell
  - Klassenhierarchie, welche die Vererbungsbeziehungen beschreibt und wie die Funktionalitäten der Elementtypen erweitert werden.
  - Objekthierarchie der Elemente und wie damit ein Dokument beschrieben und manipuliert werden kann (Parent-Child-Relation).
- Standard Javascript Objects
    - Array
    - Math
    - ggf. weitere
- Standard Browser Objects
    - Window
    - Document
    - ggf. weitere
- Globale Javascript Functions
    - parseInt(...)
    - parseFloat(...)
    - ggf. weitere

## Allgemeines
Ein Computer kann, sehr vereinfacht ausgedrückt, eigentlich nicht viel mehr, als Information aus einem Speicher auszulesen, sie mit einer anderen Information zu verknüpfen, beispielsweise mit Hilfe einer mathematischen Operation, und das Ergebnis wieder im Speicher abzulegen. Der Code
```typescript
v = v + 1;
```
schaut an der Stelle im Speicher, die mit `v` bezeichnet ist nach dem dort hinterlegten Wert, addiert den literal angegebenen Wert `1` dazu und speichert das Ergebnis wiederum an die Stelle `v` zurück.  
>**Achtung:** bei Verwendung des Zuweisungsoperators `=` wird zuerst der Ausdruck auf der rechten Seite ausgewertet und das Ergebnis der linken Seite zugewiesen.  
### Variablen
Die mit `v` bezeichnete Speicherstelle kann also unterschiedliche Werte halten, ihr Wert ist variabel. Vereinfachend spricht man meist schlicht von der "Variablen `v`".  
Damit das obige Programm laufen kann, muss also diese Variable überhaupt erst existieren.

- [x] Öffne einen Browsertab und darin die Konsole. Tippe die obige Programmzeile ein, Du solltest damit einen 'ReferenceError' provozieren können.  

Eine Variable wird mit Hilfe des Schlüsselworts `let` angelegt. Diesen Vorgang nennt man **Deklaration**.
```typescript
let v;
```
>*Übung: Tippe in die Browserkonsole `let v;`. Was passiert jetzt? Mit Hilfe der Pfeiltasten kannst Du nun die zuvor getippte Zeile wieder hervorholen und erneut ausführen lassen. Was ist das Ergebnis?*  

NaN bedeutet "Not a Number", das Ergebnis ist also keine Zahl. Das liegt daran, das `v` zwar existiert, aber den Wert `undefined` hatte. Das Ergebnis von `undefined + 1` ist `NaN`.  
Was bislang noch fehlt ist die **Definition** von `v` so dass diese Variable einen Wert besitzt. Das erreicht man einfach mit dem Zuweisungsoperator und einem literalen Wert.  
>*Übung: Tippe `v = 1` in die Browserkonsole und lasse dann die Programmzeile erneut ausführen. Was geschieht nun?*  

Das vollständige Programm inklusive einer Zeile für die Ausgabe in der Konsole sieht nun also folgendermaßen aus:
```typescript
let v = 1;
v = v + 1;
console.log(v);
```  

|Übung: Erstelle das Programm mit TypeScript und teste es im Browser.
|-

>**Achtung:** 
> - Deklaration und Definition können in eine Zeile geschrieben werden.
> - Neben `let` wird auch, und wurde vor allem früher, das Schlüsselwort `var` verwendet, dass aber eine etwas andere Wirkung hat. Wir verwenden konsequent `let`!
### Typen
