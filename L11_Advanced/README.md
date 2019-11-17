# L11 Advanced

![](Material/Sims.png)

**Video:**
Diese Lektion startet mit einem Video
- Lösung des Ufo-Projektil-Problems.
  - Lösungsvarianten vorstellen und implementieren
    - Ufo kennt moveables und streut dort Projektile ein
    - Main fragt Ufos, ob sie eins auf Lager haben
    - beide Lösung widersprechen SoC, da die Klassen zu schlau werden
  - dritte Lösungsvariante: Ufo schickt CustomEvent an Canvas
    - in Aktivitätsdiagrammen ergänzen
    - implementieren
      - shoot projectile nicht mehr als Handler sonder als normale Funktion mit startPosition als Parameter
        - origin -> _origin

Die objektorientierte Modellierung bietet noch einige zusätzliche Möglichkeiten, welche die Entwicklung und Wartung von Softwaresystemen vereinfachen und verbessern. Komplexere Software wird meist im Team entwickelt, verschiedene Teile, Module und Klassen werden von unterschiedlichen Leuten entworfen, implementiert und genutzt. Es ist ungemein hilfreich und praktisch, wenn diese Mechanismen genutzt werden, um Missverständnisse zwischen den Teammitgliedern zu vermeiden oder Fehler bei der Programmierung von vorneherein auszuschließen.

- [x] Entwirf für diese Lektion ein kleines Programm bestehend aus einer Superklasse, einer Subklasse davon, einem Hauptprogramm und einer HTML-Datei, welche deine Skripte lädt. Die Funktion ist zunächst irrelevant, es geht nur um Struktur.

## `Abstract`
### Abstrakte Klasse
Von der Klasse `Moveable` bei Asteroids werden keine Objekte instanziert, nur von den Subklassen. `Moveable` ist somit eine völlig abstrakte Klasse, sie stellt wie "Hund" lediglich ein Konzept, eine Idee, dar (vergleiche Platons Ideenlehre). Mit dem reservierten Wort `abstract` kann eine Klasse als solche gekennzeichnet werden. Der Versuch, ein Objekt dieser Klasse zu instanzieren, wird nun bereits vom TypeScript-Compiler geahndet.  

- [x] Markiere deine Superklasse als abstrakt, in dem Du einfach `abstract` vor `class` schreibst. Versuche im Hauptprogramm ein Objekt der Klasse erzeugen zu lassen und beachte die Fehlermeldungen.

Objekte der Subklassen können dennoch weiter die Methoden der abstrakten Superklasse nutzen.

- [x] Überprüfe diese Aussage, indem Du in deiner Superklasse eine Methode implementierst und diese aus einem Objekt der Subklasse heraus aufrufen lässt.

### Abstrakte Methode
Es gibt aber auch Methoden, die in der abstrakten Superklasse nicht sinnvoll implementiert werden können, sondern nur in den Subklassen. `draw()` in `Moveable` ist hierfür ein gutes Beispiel. Dennoch muss die Superklasse `Moveable` die Methode `draw` aufweisen, damit das Hauptprogramm alle `Moveable`s einfach verwalten und deren `draw`-Methoden aufrufen kann.  

Solche Methoden abstrakter Klassen sollten ebenfalls mit `abstract` markiert werden. Dann muss dort keinen Rumpf implementiert werden und es wird erzwungen, dass die Methode in der Subklasse definiert werden muss.

- [x] Markiere eine neue Methode deiner abstrakten Superklasse als abstrakt. Erhältst Du eine Fehlermeldung, wenn Du diese Methode in der Subklasse nicht definierst?

> **Hinweis**: Du kannst die Abstraktion schon beim Entwurf im Klassendiagramm darstellen, hierzu werden die entsprechenden Klassen- und Methodennamen lediglich kursiv geschrieben. 

## Static
In die entgegengesetzte Richtung zielt das Prinzip der statischen Methoden und Eigenschaften von Klassen. Diese können nämlich genutzt werden, ohne dass eine Instanz der Klasse geschaffen werden muss. Die Klasse, oder ein Teil davon, wird also sehr konkret. Hierfür genügt es, das reservierte Wort `static` der Deklaration einer Methode oder Eigenschaft voran zu stellen.  

Bei Asteroids könnten statische Methoden in der Vektorklasse hilfreich sein. Folgende Zeile aus `isHit` beispielsweise ist recht unschön

```typescript 
let difference: Vector = new Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
```
Es wäre besser lesbar, wenn die Vektorklasse die Differenz zweier Vektoren berechnen und den resultierenden Vektor liefern könnte. Das ist einfach in der Vektorklasse zu implementieren

```typescript
static getDifference(_v0: Vector, _v1: Vector): Vector
  let vector: Vector = new Vector(_v0.x - _v1.x, _v0.y - _v1.y);
  return vector
}

```
Nun steckt die Komplexität der Erzeugung eines neuen Vektors und der komponentenweisen Subtraktion in der Vektorklasse und die neue Klassenmethode `getDifference` kann einfach und intuitiv verwendet werden.
```typescript
let difference: Vector = Vector.getDifference(_hotspot, this.position);
```

- [x] Definiere in deiner Superklasse eine statische Eigenschaft und eine statische Methode. Lasse das Hauptprogramm die Eigenschaft in der Konsole ausgeben und die Methode aufrufen. Nutze statt einer Objektreferenz nun einfach den Klassennamen hierfür.

> **Hinweis**: Im Klassendiagramm werden statische Methoden oder Eigenschaften durch Unterstreichung gekennzeichnet!

## Gültigkeit
Variablen, die innerhalb eines mit geschweiften Klammern abgegrenzten Code-Block mit `let` deklariert werden, sind nur innerhalb des entsprechenden Blocks gültig. Dabei können sie andere Variablen gleichen Namens, die ausserhalb des Blocks gültig sind "verdecken". Dies wird in folgendem simplen Beispiel sichtbar.

```typescript
let x: string = "I'm valid outside";
{
  let x: string = "I'm valid inside";
  console.log(x);
}
console.log(x);
```
Erzeugt wird die Ausgabe
```plaintext
I'm valid inside
I'm valid outside
```
Es ist erkennbar, dass für die Dauer der Ausführung des Blocks zwei Variablen namens `x` existierten, denn der Inhalt der "äußeren" wurde nicht verändert. Die "innere" verlor dagegen nach Beendigung des Blocks ihre Gültigkeit. Die verließ ihren "Scope" und der von ihr belegte Speicher wird wieder freigegeben. Die "äußere" aber existiert weiterhin und ihr Inhalt wird ausgegeben.

Solche Blöcke können Schleifenkörper oder if-Blocks abgrenzen, Funktions- oder Methodenrümpfe, Klassen, Objekte und Namespaces. Wie in obigem Beispiel ist es auch möglich, obgleich selten, einen Block zu definieren, ausschließlich um einen Gültigkeitsbereich abzugrenzen.

- [x] Untersuche den Code "Scopes" im Anhang zu dieser Lektion und bringe ihn entweder in der Konsole oder im Browser zum Laufen. In diesem Code wird zehnmal die Variable x als `string` deklariert und mit unterschiedlichen Zeichenketten definiert. Die Werte bezeichnen den Gültigkeitsbereich.
- [x] Erkläre die Ausgaben und die beiden Abweichungen.

## Sichtbarkeit
Es existieren also mehrere Gültigkeitsbereiche nebeneinander und ineinander verschachtelt. Insbesondere dann, wenn aus einem Bereich in einen anderen zugegriffen werden soll, so wie das Asteroid-Hauptprogramm beispielsweise auf die Eigenschaften oder Methoden der Moveables zugreift, kann schnell Verwirrung entstehen. Denn manche Informationen bieten die Klassen und Objekt tatsächlich für den Zugriff "von Außen" als Schnittstelle an, anderes dagegen brauchen sie lediglich für die interne Funktion. Hier kann ein Zugriff zu Fehlern führen

Bei der objektorientierten Modellierung können durch Sichtbarkeitsmodifikatoren Eigenschaften und Methoden gegen den Zugriff geschützt werden. Das erhöht nicht nur die Sicherheit, sondern macht es bei der Entwicklung im Team für alle sehr viel leichter, die richtigen Zugriffe zu finden und auszuwählen. Diese Modifikatoren sind lediglich reservierte Worte, die bei der Deklaration der Methoden und Eigenschaften voran gestellt werden.

### `public`
Der Zugriff ist völlig öffentlich. Dies ist auch die Standardsichtbarkeit, wenn kein Modifikator angegeben wird. Daher konnte Asteroids bisher funktionieren. Eine Analogie könnte ein Vorgarten sein, in den jeder hineinlaufen und mit den Dingen dort hantieren kann.

> **Hinweis**: Im Klassendiagramm wird `public` mit dem Zeichen `+` markiert

### `private`
Der Zugriff ist nur Objekten der gleichen Klasse erlaubt. In den meisten Fällen greift also das Objekt selbst auf seine eigenen Eigenschaften und Methoden zu. Eine Analogie könnte das Schlafzimmer der Eltern sein, auf dessen Interieur nur die Erwachsenen im Haus haben.

> **Hinweis**: Im Klassendiagramm wird `private` mit dem Zeichen `-` markiert

### `protected`
Der Zugriff ist nur Objekten der gleichen Klasse und deren Subklassen erlaubt. Eine Analogie ist der Rest des Hauses, den Eltern und Kinder nutzen können, aber anderen, die nicht zur Familie gehören, verschlossen bleibt.

> **Hinweis**: Im Klassendiagramm wird `protected` mit dem Zeichen `#` markiert


**Video**
- die Diagramme werden überarbeitet und untersucht, wo static und die Sichtbarkeitsmodifikatoren eingesetzt werden sollten
  - Vector: getDifference, getSum, getScaled, getRandom
  - Pfade in Klassen static, Geschwindigkeiten
- Es erfolgt gleich die Implementation

## Zugriffsfunktionen 
### `set`
Manchmal ist es wünschenswert, dass eine Eigenschaft eines Objektes verändert werden kann, so als wäre sie `public`, aber dass das Objekt selbst von der geplanten Änderung erfährt und noch eingreifen kann oder erforderliche Prozesse dabei auslöst. Beispielsweise könnte das Objekt überprüfen, ob der einzutragende Wert innerhalb bestimmter Grenzen liegt und die Übernahme verweigern, wenn dies nicht so ist. Hierzu könnte es also eine Methode anbieten und das eigentlich Attribut als `private` deklarieren, um nur selbst darauf Zugriff zu haben.

```typescript
private value: number;

setValue(_newValue: number): void {
  if (_newValue < 100)
    this.value = _newValue;
}
```
Soll nun also die Eigenschaft `value` des Objektes `instance` verändert werden, wird die Anweisung `instance.setValue(...)` genutzt. Da solche Anwendungsfälle häufig auftreten und die Schreibweise `instance.value = ...` für die Veränderung einer Eigenschaft schlicht einfacher und intuitiver erscheint ist, gibt es einen speziellen Methodentyp: den "Setter"

```typescript
private valuePrivate: number;

set value(_newValue: number): void {
  if (_newValue < 100)
    this.valuePrivate = _newValue;
}
```

Nun wird beispielsweise bei der Anweisung `instance.value = 59;` automatisch diese Setter-Methode aufgerufen und das, was auf der rechten Seite des Zuweisungsoperators steht, hier `59`, als Parameter übergeben. Gleiches geschieht auch bei den kombinierten Zuweisungsoperatoren (siehe Anhang). Zu beachten ist, dass es nun gar keine Eigenschaft `value` in der Klasse mehr gibt, denn das würde einen Namenskonflikt mit dem Setter bedeuten. Daher wird intern im Beispiel das Attribut intern mit `valuePrivate` bezeichnet. Von "außen" betrachtet aber verfügt `instance` über eine Eigenschaft `value` die nun eine besondere Funktionalität aufweist und nicht unkontrolliert verändert werden kann. 

- [x] Die Vektorklasse verfügt bereits über eine Methode `set(...)`. Ist das ein "Setter"?

### `get`
Das Pendant zu `set` ist natürlich `get`. Damit kann beispielsweise eine Eigenschaft gelesen werden, die gar nicht gespeichert ist, sondern erst berechnet wird, wenn jemand danach fragt. Ein Kandidat für einen sogenannten "Getter" könnte ein Attribut `length` der Vektorklasse sein. Die Länge eines Vektors lässt sich leicht mit dem Satz des Pythagoras berechnen, Javascripts `Math`-Objekt hält hierfür die Methode `hypot` bereit. Da die Elemente des Vektors sich ständig ändern, wäre es unnötiger Aufwand, bei jeder Änderung die Länge zu berechnen und zu speichern. Mit 

```typescript
get length(): number {
    return Math.hypot(this.x, this.y);
}
```

erscheint es von außen betrachtet aber so, als wäre diese Eigenschaft ständig vorhanden, denn sie kann einfach mit z.B. `let speed: number = velocity.length;` abgerufen werden. Die Anweisung verschleiert, dass es sich eigentlich um den Aufruf einer Methode handelt.

## Garbage Collection
Wenn eine Variable ihren Gültigkeitsbereich verlässt, wird der von ihr belegte Speicher freigegeben und steht wieder für andere Informationen zur Vefügung. Bei Variablen, die auf Objekte verweisen, wird aber nur der Verweis gelöscht, das referenzierte Objekt dagegen bleibt im Speicher, denn es könnten noch andere Variablen darauf verweisen. Diese würden dann ins Leere deuten und Fehler erzeugen. Werden die Objekte allerdings nie gelöscht, wird der Speicher immer mehr zugemüllt und es kommt irgendwann zu einem Programmversagen.

Bei einem Javascript-Programm wird der Speicher daher von einem Algorithmus, dem sogenannten "Garbage Collector" überwacht. Dieser Müllmann durchforstet in unregelmäßgen Zeitabständen den Speicher, findet Objekte die nicht mehr gebraucht werden und löscht diese. In den meisten Fällen geschieht das völlig unmerklich, bei Animationen allerdings kann dieser Vorgang zu sichtbaren Störungen führen, wenn ein Bild einmal etwas länger stehen bleibt als andere. Durch Wiederverwendung von Objekten kann der Effekt minimiert werden

# Asteroid Reloaded
- hitDetection generalisieren
  - alles kollidiert mit anderem außer Asteroiden untereinander
  - isHit-Methode in Moveable anlegen als isHitBy(_partner)
    - Kollisionsradius hinzufügen
    - Vectorklasse einen length-getter spendieren
    - Vectorklasse eine statische diff-Methode spendieren
    - bei Kollision expendable = true;
  - Asteroiden ausnehmen
  - Ufotorpedos explodieren im Rohr -> einen kleinen Timeslice vorausschicken.
- Hotspot integrieren als Subklasse von Projectile
  
