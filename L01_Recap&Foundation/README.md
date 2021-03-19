## L01 Recap & Foundation
# L01.1 Grundlagen
<img src="Material/steve-jobs-learn-to-program.jpg">
<small>Quelle: <a href="https://www.challengecharterschool.net/wp-content/uploads/2017/07/Steve-Jobs.jpg">https://www.challengecharterschool.net/wp-content/uploads/2017/07/Steve-Jobs.jpg</a></small>

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

## Einblick
Ein Computer kann, sehr vereinfacht ausgedrückt, eigentlich nicht viel mehr, als Information aus einem Speicher auszulesen, sie mit einer anderen Information zu verknüpfen, beispielsweise mit Hilfe einer mathematischen Operation, und das Ergebnis wieder im Speicher abzulegen. Der Code
```typescript
v = v + 1;
```
schaut an der Stelle im Speicher, die mit `v` bezeichnet ist nach dem dort hinterlegten Wert, addiert den literal angegebenen Wert `1` dazu und speichert das Ergebnis wiederum an die Stelle `v` zurück.  

>**Achtung:** bei Verwendung des Zuweisungsoperators `=` wird zuerst der Ausdruck auf der rechten Seite ausgewertet und das Ergebnis der linken Seite zugewiesen.  

## Variablen
Die mit `v` bezeichnete Speicherstelle kann also unterschiedliche Werte halten, ihr Wert ist variabel. Vereinfachend spricht man meist schlicht von der "Variablen `v`".  
Damit das obige Programm laufen kann, muss also diese Variable überhaupt erst existieren.

- [x] Öffne einen Browsertab, bzw. eine beliebige Seite (z.B. hs-furtwangen.de), und darin die Konsole. Tippe die obige Programmzeile ein, Du solltest damit einen 'ReferenceError' provozieren können.  

Eine Variable wird mit Hilfe des Schlüsselworts `let` angelegt. Diesen Vorgang nennt man **Deklaration**.
```typescript
let v;
```

- [x] Tippe in die Browserkonsole `let v;`. Was passiert jetzt? Mit Hilfe der Pfeiltasten kannst Du nun die zuvor getippte Zeile wieder hervorholen und erneut ausführen lassen. Was ist das Ergebnis?  

NaN bedeutet "Not a Number", das Ergebnis ist also keine Zahl. Das liegt daran, das `v` zwar existiert, aber den Wert `undefined` hatte. Das Ergebnis von `undefined + 1` ist sicher keine Zahl sondern `NaN`.  
Was bislang noch fehlt ist die **Definition** von `v` so dass diese Variable einen Wert besitzt, bevor damit gerechnet wird. Das erreicht man einfach mit dem Zuweisungsoperator und einem literalen Wert.  

- [x] Tippe `v = 1` in die Browserkonsole und lasse dann die Programmzeile erneut ausführen. Was geschieht nun?  

Das vollständige Programm inklusive einer Zeile für die Ausgabe in der Konsole sieht nun also folgendermaßen aus:
```typescript
let v = 1;
v = v + 1;
console.log(v);
```  

- [x] Erstelle das Programm mit TypeScript in VSCode und teste es im Browser.

>**Achtung:** 
> - Deklaration und Definition können in eine Zeile geschrieben werden.
> - Neben `let` wird auch, und wurde vor allem früher, das Schlüsselwort `var` verwendet, dass aber eine etwas andere Wirkung hat. Wir verwenden konsequent `let`!  

## Datentypen
Die heute gebräuchlichen Computer speichern Informationen als lange Serien von Bits, kleinste Informationseinheiten, die nur zwei Zustände aufweisen können: an und aus. Damit werden aber ganz unterschiedliche Typen von Informationen kodiert: Zahlen, Texte, Bilder, Musik, Videos usw.  
Damit der Rechner nun aber die Informationen korrekt verarbeiten kann, muss bekannt sein, welchen Typ eine Bitfolge darstellen soll.  

- [x] Zeige mit dem Mauscursor in VSCode auf `v` in dem zuvor eingegebenen Programm. Was erscheint im Tooltip?

Typescript erkennt aus dem Zusammenhang, dass `v` vom Typ `number` sein soll. Diese Erkennung nennt man "inference".  

- [x] Setze die `1` bei der ersten Definition von `v` in Anführungszeichen. Welcher Typ wird nun angezeigt? Was wird ausgegeben, wenn das Programm nun läuft?

Typescript hat erkannt, dass `v` nun eine Zeichenkette darstellen soll, auch wenn nur ein Zeichen, die Ziffer 1, darin enthalten ist. Damit hat sich aber auch die Programmlogik geändert, denn der Additionsoperator `+` ist für Zeichenketten ganz anders definiert als für Zahlen.

- [x] Definiere `v` mit dem Schlüsselwort `true`. Welcher Typ wird nun angezeigt? Was ist nun zusätzlich zu sehen? Und was geschieht, wenn Du das Programm laufen lässt? (sofern es überhaupt kompiliert wurde...prüfe  hierzu das entstandene js-File, es sollte identisch sein)

>**Achtung:** Datentypen sind essentiell wichtig! Javascript geht allerdings sehr lax damit um und ändert, wenn man nicht sehr aufpasst, durchaus auch Datentypen während des Programmlaufs, weshalb hier viele Fehler passieren. TypeScript schafft Abhilfe...

So angenehm es auch ist, dass TypeScript die Typen aus dem Kontext inferieren kann und in der Folge auf Typfehler aufmerksam macht: noch besser ist es, sich bereits bei der Konzeption Gedanken um die gewünschten Datentypen zu machen und diese festzulegen! 

## Explizite Typisierung
Daher ist in diesem Kurs die explizite Annotation der Typen vorgeschrieben. Das bedeutet, dass bei der Deklaration der geforderte Typ durch Doppelpunkt getrennt hinter den Variablenbezeichner geschrieben werden muss. Zunächst sind dabei von Bedeutung die primitiven Typen 
- `number`,
- `string` und 
- `boolean`  

- [x] Annotiere `v` in der Deklaration als `number`. Wie verändert sich nun die Anzeige des Codes?

Eine andere Zuweisung als die eines Zahlenwertes ist nun gar nicht mehr erlaubt, Du wirst schon darauf hingewiesen, während Du das Programm noch schreibst. 

- [x] Setze nun statt `true` wieder die Zahl `1` ein, aber verändere den Addenden in Zeile 2 zu einer Zeichenkette, so dass das Programm nun wie untenstehend aussieht.  

```typescript
let v: number = 1;
v = v + "1";
console.log(v);
```
`v` ist vom Typ `number` und es soll das Ergebnis der Addition einer Zeichenkette und einer Zahl (dem aktuellen Wert von `v`) zugewiesen werden.
- [x] Warum funktioniert das nicht, und warum hat so etwas ähnliches vorhin funktioniert, als `v` mit `"1"` definiert wurde?

## Komplexe Datentypen
Neben den einfachen Datentypen wie `number`, `boolean` und `string` gibt es noch komplexe Datentypen. Diese können mehrere Informationseinheiten einfachen oder wiederum komplexen Typs enthalten. Man kann dabei unterscheiden zwischen homogenen Datenstrukturen, bei denen die darin verwalteten Informationseinheiten alle vom gleichen Typ sind, und heterogenen, bei denen unterschiedliche Datentypen verwaltet werden. Eine weitere Unterscheidung wird getroffen aufgrund unterschiedlicher Art der Adressierung der Informationen. Diese kann über einen Index erfolgen, also eine Zahl, welche die Position der Information in einer Reihe angibt, oder einen Schlüssel, der mit der Information assoziiert ist und den Zugang darstellt. Meist ist dieser Schlüssel vom Typ `string`, es sind aber auch andere Typen möglich. Schließlich ist es noch möglich zwischen vordefinierten Schlüsseln und solchen, die zur Laufzeit des Programms erzeugt werden zu unterscheiden.
### Array
Ein Array ist eine Datenstruktur, in der die enthaltenen Informationen, dann Elemente genannt, mit Indizes adressiert werden. In Javascript sind Arrays grundsätzlich heterogen. Ein Array kann mit den Anweisungen `[ ]` oder `new Array()` erzeugt werden. In die Klammern kann bereits bei der Erzeugung eine Liste von Elementen, durch Komma getrennt, angegeben sein.  

- [x] Schreibe in die Konsole `let a = [7, true, "Hallo"]`. Lasse dir `a` ausgeben und versuche mit der Syntax `a[index]` auf einzelne Elemente zuzugreifen, wobei Du `index` mit einer Zahl ersetzt. Was geschieht, wenn Du hier eine Zahl kleiner als 0 oder größer als 2 benutzt?
- [x] Gib ein `a[4] = [101, 102]`. Was siehst Du nun, wenn Du dir das Array ausgeben lässt, was bei a[3] und a[4]?  

Es lässt sich also alles Mögliche an beliebige Stellen in das Array 'reinwerfen', sogar andere Arrays. Mit TypeScript kann immerhin der Bereich der Typen der Elemente bis zur Homogenität eingeschränkt werden, wodurch eine wichtige Fehlerquelle reduziert wird. 
```typescript
let a: number[] = [7, true, "Hallo"];
```
Im obigen Beispiel wird sofort ein Fehler angezeigt, da die Werte auf Position 1 und 2 nicht vom Typ `number` sind.

### Assoziatives Array
Bei einem assoziativen Array werden die Elemente mit sogenannten Schlüsseln verknüpft. Ein solches assoziatives Array wird in der Regel mit Hilfe geschweifter Klammern erzeugt, wobei innerhalb der Klammern bereits Schlüssel-Werte-Paare angegeben werden können. Die Assoziation wird durch den Doppelpunkt `:` dargestellt.  

- [x] Schreibe in die Konsole `let s = {"zahl": 7, "wahr": true, text: "Hallo"}`. Lasse dir `s` ausgeben und versuche mit der Klammersyntax `s["key"]` und der Punktsyntax `s.key` auf einzelne Elemente zuzugreifen, wobei Du `key` mit der Zeichenkette ersetzt, die den Schlüssel darstellt. Was geschieht, wenn Du hier einen unbekannten Schlüssel benutzt?
- [x] Gib ein `s[4] = [101, 102]`. Was siehst Du nun, wenn Du dir das Array ausgeben lässt? Welche Bedeutung hat die Ziffer 4 jetzt und wie kommst Du gezielt an die Information, die damit assoziiert wurde?  

Nicht nur die Datentypen sind heterogen, sondern auch die Schlüssel können beliebig gewählt werden. Das ermöglicht große Flexibilität, aber auch Fehler, die schwer zu finden sind. Um assoziative Arrays stringenter zu strukturieren, stellt TypeScript `interface`s zur Verfügung. Damit lassen sich Schlüssel vordefinieren und die Datentypen für Werte und Schlüssel einschränken.  

Im folgenden Beispiel sind die Schlüssel frei wählbar, sind aber auf den Typ `string` beschränkt, und das Array ist auf Wahrheitswerte homogenisiert.
```typescript
interface MapStringToBoolean {
    [key: string]: boolean;
}
let a: MapStringToBoolean = {"wert1": true, "wert2": false};
```  

Im nächsten Beispiel sind die Schlüssel vordefiniert und die zugeordneten Werte müssen von bestimmten Typen sein.
```typescript
interface VectorWithMeaning {
    x: number;
    y: number;
    meaning: string;
}
let vector: VectorWithMeaning = {x: 12.4, y: -7.2, meaning: "Ortsvektor"};
```  

### Objekt
Ein Objekt ist ein assoziatives Array, dem Funktionen anhaften. Diese Funktionen können die Elemente des Arrays verändern, ohne dass ihnen Informationen zu dem Objekt mitgegeben werden müssen, denn sie sind ja ein Teil davon und haben Zugriff darauf. Um diese Funktionen von den üblichen zu unterscheiden werden sie Methoden genannt. Ein Objekt verfügt also über Methoden, mit der es sich, oder auch seine Umwelt, verändern kann. In den nächsten Lektionen wirst Du vordefinierte Objekte lediglich nutzen und erzeugen, später wirst Du lernen, wie Du ganz neue Objektstrukturen definieren kannst.
> **FunFact:** Tatsächlich ist alles in Javascript im Kern vom Typ Objekt. Selbst die primitiven Datentypen gaukeln nur ihre Primitivität vor, wodurch sie sich einsetzen lassen wie in 'klassischen' Programmiersprachen. 

### Werte vs. Referenzen
Ein wichtiger Unterschied zwischen primitiven und komplexen Datentypen ist die Art und Weise, wie Variablen mit Ihnen verknüpft sind.  

- [x] Deklariere zwei Variablen primitiven Typs (z.B. `v1`und `v2`). Definiere die erste und weise dann der zweiten den Wert der ersten zu (`v2 = v1`). Verändere dann den Wert der ersten und lasse beide ausgeben. Was stellst Du fest?
- [x] Deklariere nun zwei Variablen komplexen Typs. Definiere die erste mit mehreren Elementen und nutze dann den Zuweisungsoperator genau wie oben (`v2 = v1`). Verändere ein Element der ersten Variable. Lasse beide Variablen ausgeben. Was stellst Du hier fest?  

Nicht zu beachten, dass komplexe Datentypen als Referenzen adressiert werden, mehrere Variablen also auf den gleichen Datenbestand verweisen können, ist wiederum eine häufige Fehlerquelle. 

> - **Achtung:** Diese Referenzierung ist kein Problem, sondern eine wichtige Grundlage für die Anwendungsentwicklung.

## Fehlertypen
Du hast nun schon ganz unterschiedliche Fehler kennen gelernt. Die korrekte Benennung dieser hilft anderen dabei, dir zu helfen. Ein wichtiges Unterscheidungskriterium ist dabei der Zeitpunkt, zu dem der Fehler erkannt wird.
### Runtime Error
Tritt zur Laufzeit auf. Das ist ein hässlicher Fehlertyp, da er unter Umständen lange Zeit unentdeckt bleibt oder nur unter bestimmten Bedingungen reproduzierbar ist. Laufzeitfehler werden in der Browserkonsole angezeigt und müssen unbedingt beachtet werden, auch wenn das Programm weiterlaufen sollte.
### Compiletime Error
Tritt auf, wenn das TypeScript-Programm in ein Javascript-Programm übersetzt wird. Von diesen Fehlern wirst Du zunächst weitestgehend verschont bleiben, sofern Du dein Projekt ordentlich anlegst. Dieser Fehlertyp wird in der Konsole des Compilers, in der Regel also im VSCode-Terminal angezeigt. 
### Designtime Error
Das sind Fehler, die bereits angezeigt werden während Du den Code schreibst und zwar direkt im Code selbst. In VSCode werden hierzu rote Wellenlinien im Text und rote Kästchen am Rand angezeigt. Außerdem wird in der Console der "Problem"-Tab gefüllt. So kannst Du sofort reagieren und schnell experimentieren um den Fehler zu beheben. Außerdem werden beim Zeigen mit der Maus Fehlerbeschreibungen angezeigt und per QuickFix sogar Lösungen vorgeschlagen.
### Logical Error
Logikfehler sind nicht auf eine falsche Programmierung zurückzuführen, sondern auf schlechte Konzeption. Diese Fehler kann der Computer meistens gar nicht aufzeigen, da er nicht weiß, was Du eigentlich vorhattest. Solange das Programm ausführbar ist und keiner der anderen Fehlertypen auftritt, wird er es ausführen und davon ausgehen, dass er tut was Du dir vorgestellt hast. Hier hilft nur nachdenken, aber es gibt einige Hilfsmittel, die man dabei einsetzen kann!  

>**Hinweis:** TypeScript spielt gerade bei der Fehlervermeidung eine seiner großen Stärken aus, indem es viele Fehler zur Entwicklungszeit anzeigt. JavaScript hat hier fast nichts zu bieten, die Fehler zeigen sich erst im Betrieb.

# L01.2 Ablauf und Aktivität

## Trace Table
Mit Hilfe einer Verfolgungstabelle kann man den Zustand eines Programms zu jeder Zeit während des Laufs ermitteln und festhalten. Solche Tabellen von Hand zu erstellen ist eine gute Übung um den Programmlauf zu verstehen. Daher exerzieren wir dies im folgenden Video gemeinsam durch. Den Code dazu findest Du hier: [Cows.ts](../X00_Code/L01_Recap&Foundation/Cows/Cows.ts)

<div align="center"><video controls width="30%"> 
  <source src="http://games.hs-furtwangen.de/EIA2_Video/L01_V1_Tracetables_041019.mp4" type="video/mp4"> 
<a href="http://games.hs-furtwangen.de/EIA2_Video/L01_V1_Tracetables_041019.mp4"><img src="../X01_Appendix/Img/video.jpg" width="25%"/></a>
</video>  
<!-- <div align="center"><video controls width="30%"> 
  <source src="http://games.hs-furtwangen.de/EIA2_Video/=1NPw7w_8Es87bD1tJ2r_SrcizFRid5H2j"><img src="../X01_Appendix/Img/video.jpg" width="25%"/></a> -->
<a href="Material/Cows_TraceTable.jpg"><img src="Material/Cows_TraceTable.jpg" width="25%"/></a>
</div>  

## Debugger
Natürlich gibt es technische Hilfsmittel etwas ähnliches wie eine Verfolgungstabelle automatisch zu erzeugen. Hierzu verwendest Du den Debugger, also den "Entlauser".  

>**FunFact:** Der Begriff "Bug" für einen Programmfehler wurde übrigens von der berühmten Computerpionierin Grace Hopper geprägt, die in den 1950 Jahren tatsächlich eine in einem Relais verstorbene Motte für eine Fehlfunktion ihres Großcomputers verantwortlich machen konnte.

Mit dem Debugger kannst Du auf die Jagd nach Fehlern gehen. Da wir das Programm untersuchen, während es im Browser läuft, ist es sehr praktisch, dass der Browser einen solchen Debugger integriert hat. Unser kleines Programm weist derzeit keine Fehler auf, aber wir schauen trotzdem einmal, ob unsere Verfolgungstabelle mit den Ergebnissen des Debuggers übereinstimmt.  

<div align="center"><video controls width="30%"> 
  <source src="http://games.hs-furtwangen.de/EIA2_Video/L01_V2_Debugger_041019.mp4" type="video/mp4"> 
<a href="http://games.hs-furtwangen.de/EIA2_Video/L01_V2_Debugger_041019.mp4"><img src="../X01_Appendix/Img/video.jpg" width="25%"/></a>
</video>  
</div>
<!-- <div align="center"><video controls width="30%"> 
  <source src="http://games.hs-furtwangen.de/EIA2_Video/=1darMd4qMCoqoNENMgMBgaKCWuRYaQndL"><img src="../X01_Appendix/Img/video.jpg" width="25%"/></a> -->

## Aktivitätsdiagramm
Hier wird nun noch das Cows-Programm in ein Aktivitätsdiagramm überführt und dabei die wichtigsten Knoten und Kanten erklärt.  

<div align="center"><video controls width="30%"> 
  <source src="http://games.hs-furtwangen.de/EIA2_Video/L01_V3_ActivityDiagram_041019.mp4" type="video/mp4"> 
<a href="http://games.hs-furtwangen.de/EIA2_Video/L01_V3_ActivityDiagram_041019.mp4"><img src="../X01_Appendix/Img/video.jpg" width="25%"/></a>
</video>  
<!-- <div align="center"><video controls width="30%"> 
  <source src="http://games.hs-furtwangen.de/EIA2_Video/=1zp2S2wlZQdbBXxKyDKL8RwoDwKbWifi1"><img src="../X01_Appendix/Img/video.jpg" width="25%"/></a> -->
<a href="Material/Cows_ActivityDiagram.jpg"><img src="Material/Cows_ActivityDiagram.jpg" width="25%"/></a>
</div>
