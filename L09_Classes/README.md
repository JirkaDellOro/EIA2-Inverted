# Classes
<img src="Material/Alan-kay.jpg">

Als Sohn eines Wissenschaftlers und einer Künstlerin hat Alan Kay nie zwischen Kunst und Wissenschaft unterschieden. Während er als Jazzgitarrist und Gitarrenlehrer Geld verdiente, erwarb er deinen Bachelorabschluss in Mathematik und Molekularbiologie, einen Masterabschluss in Elektrotechnik und den Ph.D. in Informatik. Er prägte maßgeblich den Begriff der objektorientierten Programmierung.  

## Objektorientierte Programmierung
Dieses Entwurfsparadigma für Software erlaubt eine intuitive Modellierung und Konzeption auch komplexer Softwareanwendungen. Aus deiner Erfahrung weißt Du, dass sich die von dir wahrgenommene Realität aus einer Unzahl von materiellen (Autos, Häuser, Lebewesen, Möbel etc.) und immateriellen (Sprache, Gefühle, Konten, Identitäten etc.) Teilen zusammensetzt. Diese Umwelt vollständig zu beschreiben ist wohl unmöglich, die einzelnen Teile aber kannst Du auf unterschiedlichen Abstraktionsebenen schon besser erfassen.  
Dabei vereinfachst, klassifizierst und generalisierst Du und baust im Kopf ein Modell der Realität auf, was dir erlaubt Vorhersagen zu treffen, auch wenn Du nicht alle Details deiner aktuellen Umgebung kennst. Du weißt was ein Hund ist, obwohl es den Hund gar nicht gibt. Es gibt immer nur ganz spezifische Exemplare von Hund. Trotzdem gehst Du davon aus, dass ein dir völlig unbekannter Hund bellen kann. Du weißt, dass ein Hund in der Regel vier Beine hat, eine Schnauze und einen Schwanz, dass er neben bellen auch die Fähigkeit hat zu knurren und zu beißen und manchmal furchtbar zu stinken.  
Ähnlich gehst Du beim objektorientierten Entwurf vor. Wenn Du ein System planst, überlegst Du, aus welchen Teilen es sich zusammensetzt, welche gleichartigen Teile es gibt, wie Du diese beschreiben kannst und wie die Teile mit ihrer Umwelt interagieren. Du abstrahierst und generalisierst und kannst für verschiedene Klassen von Teilen Eigenschaften identifizieren, die das einzelne, tatsächlich existierende Teil näher beschreiben. Bei der Klasse Hund könnte das beispielsweise die Größe oder die Fellfarbe sein. Diese Eigenschaften sind in gewissen Grenzen variabel, ohne dass das beschriebene Tier kein Hund mehr wäre. Auch wenn es manchmal schwer zu glauben ist.  

<img src="Material/Hunde.jpeg"/>  
<small><a href="https://zaypa.com/wie-wahle-ich-deinen-hund-fur-dich-und-deine-familie.html">https://zaypa.com/wie-wahle-ich-deinen-hund-fur-dich-und-deine-familie.html</a></small>

## Entwurf
Bislang hatten wir komplexere Datenstrukturen mit Interfaces irgendwo im Code beschrieben. Damit haben wir schon Eigenschaften von Objekten angegeben. Beispielsweise besitzen alle Vektoren aus dem vorangegangenen Kapitel die Eigenschaften x und y, bei jedem einzelnen tatsächlich erschaffenen Vektor sind sie mit individuellen Werten definiert. Was mit diesen Vektoren aber geschieht, ist an ganz anderen Stellen im Code implementiert. So werden Vektoren addiert oder skaliert und der Code dafür muss jedes mal neu geschrieben werden.

> **FunFact:** Schau dir einmal im kompilierten Javascript-Code an, was von Interfaces übrig bleibt... sie sind komplett verschwunden. Interfaces sind lediglich ein Anweisung für den Compiler mit der Du angibst, welche Datenstruktur Du willst, damit er die helfen kann, dich daran zu halten.  

Beim objektorientierten Entwurf definierst Du nicht nur die Eigenschaften, sondern auch die Aktivitäten, die ein Objekt der beschriebenenen Klasse ausführen können soll. So wie der Hund beißen, bellen, knurren und stinken kann, kann der Vektor vielleicht seine Länge ändern, oder durch Addition mit einem anderen Vektor zu einem resultierenden Vektor werden und so weiter. Im Diagramm schreibst Du hierzu einfach unter dem Feld für den Namen des Typs und dem Feld für die Eigenschaften nun ein drittes Feld, in dem Du die Aktivitäten auflistest.  

<img src="Material/draw.io/Vector_ClassDiagram.svg">

Bislang hattest Du Interfaces nur als Randnotiz mit in die Aktivitätsdiagramme eingetragen. Nun lernst Du einen neuen Diagramtyp kennen: **das Klassendiagramm**. Hier wird dargestellt, wie die Klassen aufgebaut sind und miteinander in Beziehung stehen.  

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

Vector ist jetzt nicht mehr nur eine Objektstruktur, die sich mit einem Interface beschreiben lässt, Vector ist jetzt eine Klasse. So wird nun statt `interface` das Schlüsselwort `class` benutzt. Die Aktivitäten werden wie gewohnt als Funktionen implementiert, aber das Schlüsselwort `function` wird nicht mehr angegeben.

> **Hinweis:** Funktionen innerhalb von Klassen werden "Methoden" genannt. Objekte der Klasse verfügen nun über Methoden mit denen sie sich und ihre Umwelt beeinflussen können.

## Instanzierung

Der obenstehende Code beschreibt die Klasse Vektor, es existiert aber noch kein Exemplar eines Objektes dieser Klasse. Die Erzeugung eines solchen erfolgt, ganz anders als bei der Arbeit mit Interfaces, mit dem Schlüsselwort `new`

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



<hr>

# Fünf Fragen beginnen
## Frage 1: was hat es?
## Frage 2: was kann es?    

Beispiel: Vector-Interface zu Vector-Klasse umbauen
Bauplan-Metapher
Architekt
Constructor

## Frage 3: was weiß es?
## Frage 4: wer hält es?
## Frage 5: was ist es?

