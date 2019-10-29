# L09_Classes
<img src="Material/Alan-kay.jpg">

Als Sohn eines Wissenschaftlers und einer Künstlerin hat Alan Kay nie zwischen Kunst und Wissenschaft unterschieden. Während er als Jazzgitarrist und Gitarrenlehrer Geld verdiente, erwarb er deinen Bachelorabschluss in Mathematik und Molekularbiologie, einen Masterabschluss in Elektrotechnik und den Ph.D. in Informatik. Er prägte maßgeblich den Begriff der objektorientierten Programmierung.  

## Objektorientierte Programmierung
Dieses Entwurfsparadigma für Software erlaubt eine intuitive Modellierung und Konzeption auch komplexer Softwareanwendungen.  

Aus deiner Erfahrung weißt Du, dass sich die von dir wahrgenommene Realität aus einer Unzahl von materiellen (Autos, Häuser, Lebewesen, Möbel etc.) und immateriellen (Sprache, Gefühle, Konten, Identitäten etc.) Teilen zusammensetzt. Diese Umwelt vollständig zu beschreiben ist wohl unmöglich, die einzelnen Teile aber kannst Du auf unterschiedlichen Abstraktionsebenen schon besser erfassen. Dabei vereinfachst, klassifizierst und generalisierst Du und baust im Kopf ein Modell der Realität auf, was dir erlaubt Vorhersagen zu treffen, auch wenn Du nicht alle Details deiner aktuellen Umgebung kennst. Du weißt was ein Hund ist, obwohl es den Hund gar nicht gibt. Es gibt immer nur ganz spezifische Exemplare von Hund. Trotzdem gehst Du davon aus, dass ein dir völlig unbekannter Hund bellen kann. Du weißt, dass ein Hund in der Regel vier Beine hat, eine Schnauze und einen Schwanz, dass er neben bellen auch die Fähigkeit hat zu knurren und zu beißen und manchmal furchtbar zu stinken.  

Ähnlich gehst Du beim objektorientierten Entwurf vor. Wenn Du ein System planst, überlegst Du, aus welchen Teilen es sich zusammensetzt, welche gleichartigen Teile es gibt, wie Du diese beschreiben kannst und wie die Teile mit ihrer Umwelt interagieren. Du abstrahierst und generalisierst und kannst für verschiedene Klassen von Teilen Eigenschaften identifizieren, die das einzelne, tatsächlich existierende Teil näher beschreiben. Bei der Klasse Hund könnte das beispielsweise die Größe oder die Fellfarbe sein. Diese Eigenschaften sind in gewissen Grenzen variabel, ohne dass das beschriebene Tier kein Hund mehr wäre. Es bleibt ein Hund, auch wenn es manchmal schwer zu glauben ist.  

<img src="Material/Hunde.jpeg"/>  
<small><a href="https://zaypa.com/wie-wahle-ich-deinen-hund-fur-dich-und-deine-familie.html">https://zaypa.com/wie-wahle-ich-deinen-hund-fur-dich-und-deine-familie.html</a></small>

## Entwurf
Bislang hatten wir komplexere Datenstrukturen mit Interfaces irgendwo im Code beschrieben. Damit haben wir schon Eigenschaften von Objekten angegeben. Beispielsweise besitzen alle Vektoren aus dem vorangegangenen Kapitel die Eigenschaften x und y, bei jedem einzelnen tatsächlich erschaffenen Vektor sind sie mit individuellen Werten definiert. Was mit diesen Vektoren aber geschieht, ist an ganz anderen Stellen im Code implementiert. So werden Vektoren addiert oder skaliert und der Code dafür muss jedes mal neu geschrieben werden.

> **FunFact:** Schau dir einmal im kompilierten Javascript-Code an, was von Interfaces übrig bleibt... sie sind komplett verschwunden. Interfaces sind lediglich ein Anweisung für den Compiler mit der Du angibst, welche Datenstruktur Du willst, damit er dir helfen kann, dich daran zu halten.  

Beim objektorientierten Entwurf definierst Du nicht nur die Eigenschaften, sondern auch die Aktivitäten, die ein Objekt der beschriebenenen Klasse ausführen können soll. So wie der Hund beißen, bellen, knurren und stinken kann, kann der Vektor vielleicht seine Länge ändern, oder durch Addition mit einem anderen Vektor zu einem resultierenden Vektor werden und so weiter. Im Diagramm schreibst Du hierzu einfach unter dem Feld für den Namen des Typs und dem Feld für die Eigenschaften nun ein drittes Feld, in dem Du die Aktivitäten auflistest.  

<img src="Material/draw.io/Vector_ClassDiagram.svg">

Bislang hattest Du Interfaces nur als Randnotiz mit in die Aktivitätsdiagramme eingetragen. Nun lernst Du einen neuen Diagrammtyp kennen: **das Klassendiagramm**. Hier wird dargestellt, wie die Klassen aufgebaut sind und miteinander in Beziehung stehen.  

- [x] Wo hast Du so etwas bloß schon mehrmals gesehen?

## Implementation  
Die im Diagramm dargestellte Vektorklasse kann folgendermaßen implementiert werden

```typescript
class Vector {
    x: number;
    y: number;

    scale(_factor: number): void {
        this.x *= _factor;
        this.y *= _factor;
    }

    add(_addend: Vector): void {
        this.x += _addend.x;
        this.y += _addend.y;
    }
}
```

Vector ist jetzt nicht mehr nur eine Objektstruktur, die sich mit einem Interface beschreiben lässt, Vector ist jetzt eine Klasse. So wird nun statt `interface` das reservierte Wort `class` benutzt. Die Aktivitäten werden wie gewohnt als Funktionen implementiert, aber das Schlüsselwort `function` wird nicht mehr angegeben.

> **Hinweis:** Funktionen innerhalb von Klassen werden "Methoden" genannt. Objekte der Klasse verfügen nun über Methoden mit denen sie sich und ihre Umwelt beeinflussen können.

Das Programm, dass einen solchen Vektor nutzt, muss nun nicht mehr wissen, wie man einen Vektor skaliert oder einen zweiten hinzuaddiert. Es genügt zu wissen, dass man es tun kann und welche Parameter der Vektor hierzu braucht. Den Rest macht der Vektor selbst. Damit wird der Vektor zu einer Black-Box, deren interne Arbeitsweise nicht bekannt sein muss, um sie zu verwenden.

## Instanzierung

Der obenstehende Code beschreibt die Klasse Vektor, es existiert aber noch kein Exemplar eines Objektes dieser Klasse. Die Erzeugung eines solchen erfolgt, ganz anders als bei der Arbeit mit Interfaces, mit der Anweisung `new`. Diesen Vorgang nennt man auch Instanzierung, denn es wird eine Instanz der Klasse geschaffen.

- [x] Aus welchen Zusammenhängen kennst Du `new` bereits?
- [x] Implementiere die Vektorklasse in einem neuen `namespace` und füge darunter die untenstehenden Zeilen an. 

```typescript
let v1: Vector = new Vector();
v1.scale(2);
console.log(v1);
```  
- [x] Teste das Programm im Browser oder mit Node. Welche Konsolenausgabe erhältst Du?
- [x] Verfolge das Programm mit dem Debugger bis hinein in die Methode `scale` der Klasse. Was hat es mit dem Schlüsselwort `this` auf sich?
- [x] Zu Beginn der Klasse werden die Eigenschaften x und y deklariert. Ergänze den Code an dieser Stelle so, dass sie auch gleich mit dem Wert 0 definiert werden. Was ändert sich beim nächsten Test und Debuggen?
- [x] Spendiere der Klasse eine neue Methode `set(_x: number, _y: number)` welche den Eigenschaften eines Objektes der Klasse die Werte von `_x` bzw. `_y` zuweist. Lasse v1 vor dem Aufruf von `scale` diese Methode ausführen mit Werten die Du dir ausdenkst. Was geschieht jetzt?

## Klasse vs. Objekt
Häufig werden die Begriffe Klasse und Objekt verwechselt oder unscharf gebraucht. Das führt zu Verwirrung und Fehlern. Auch wenn der Unterschied in diesem Text bereits mehrfach herausgestellt wurde, soll an dieser Stelle noch einmal explizit darauf eingegangen werden.
Eine Klasse beschreibt die Struktur, die ein Objekt derselben aufweisen soll, und die Methoden, die mit einem solchen Objekt verknüpft werden. Sie ist vergleichbar mit dem Hunde-Genom oder mit dem Hausbauplan eine Architekten. Ist die Klasse definiert, können beliebig viele Objekte der Klasse erzeugt werden, so wie ein ganzer Hundewurf, eine Siedlung oder ein ganzes Array voller Vektoren. Jedes dieser Objekte besitzt die in der Klasse angegebenen Eigenschaften, gegebenenfalls mit individuellen Werten, wie Fellfarbe, Dachziegeltyp oder Koordinate.  

<img src="Material/Instanzierung.svg">

Ein Objekt einer Klasse kann zudem die in der Klasse definierten Methoden nutzen, ohne dass eine Referenz auf das Objekt der Methode als Parameter übergeben werden muss. Stattdessen wird das Objekt innerhalb der Methode automatisch mit dem reservierten Wort `this` referenziert. Der Aufruf der Methode erfolgt mit Hilfe der Punkt-Syntax `object.method(...)`. Da das Objekt eine Instanz einer bestimmten Klasse ist, wird damit die Methode eindeutig identifiziert, auch wenn andere Klassen über eine Methode gleichen Namens verfügen sollten.

## Constructor
Die Hausbau-Metapher führt dich gleich zu einem weiteren interessanten Aspekt. Der Architekt, also Du, macht zwar den Plan, gebaut wird ein Haus aber von einem Bauunternehmer. Im Englischen ist das der Constructor.  

Auch bei der Instanzierung von Objekten kommt ein Constructor zum Einsatz, den Du im Deutschen wiederum Konstruktor nennen kannst. Er ist eine besondere Methode, die automatisch aufgerufen wird, wenn die Anweisung `new` ausgeführt wird und kümmert sich darum, dass das Objekt ordentlich gebaut wird. Ein Standardkonstruktor ist in Javascript immer dabei und tritt nicht in Erscheinung. Du kannst aber für jede Klasse einen eigenen Konstruktor definieren.   

Ein Konstruktor ist dann von Bedeutung, wenn weitere Informationen zum Bau des Objektes einfließen sollen oder währenddessen zwingend noch weitere Aktivitäten ausgeführt werden müssen. Bei einem Haus sollte der Constructor vielleicht wissen, welche Ziegel er nun tatsächlich auflegen soll, da diese Eigenschaft des Hauses variabel ist. Wird ein Hund konstruiert, soll vielleicht gleich die Gemeinde informiert werden, damit sie die Hundesteuer eintreiben kann.

Bei der Vektorklasse erscheint es sinnvoll, bei der Konstruktion eines Vektors gleich die Komponenten mitzugeben, so dass die Eigenschaften x und y des Vektors sofort die gewünschten Werte erhalten.

```typescript
class Vector {
    x: number;
    y: number;

    constructor(_x: number, _y: number) {
        this.set(_x, _y);
    }

    set(_x: number, _y: number): void {
        this.x = _x;
        this.y = _y;
    }

    ...
```
Zur Instanzierung eines Vektors ist nun die Übergabe zweier Werte zwingend erforderlich. TypeScript wird einen Fehler melden, wenn Du versuchst einen Vektor wie zuvor nur mit `new Vector();` zu instanzieren. `new Vector(10, -3)` dagegen wird akzeptiert und der Vektor wird mit diesen Werten angelegt.

> **Hinweis:** Die set-Methode ist übrigens die, welche Du weiter oben schon hättest implementieren sollen. Falls es nicht geklappt hat, kannst Du hier spicken...






# Fünf Fragen 
## Frage 1: was hat es?
## Frage 2: was kann es?    
## Frage 3: was weiß es?
## Frage 4: wer hält es?
## Frage 5: was ist es?

# Zwei Direktiven
## So schlau wie nötig
## So dumm wie möglich