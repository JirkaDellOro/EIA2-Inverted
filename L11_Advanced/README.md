# L11 Advanced

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
static difference(_v0: Vector, _v1: Vector): Vector
  let vector: Vector = new Vector(_v0.x - _v1.x, _v0.y - _v1.y);
  return vector
}

```
Nun steckt die Komplexität der Erzeugung eines neuen Vektors und der komponentenweisen Subtraktion in der Vektorklasse. Nun kann die neue Klassenmethode `difference` einfach und intuitiv verwendet werden.
```typescript
let difference: Vector = Vector.difference(_hotspot, this.position);
```

- [x] Definiere in deiner Superklasse eine statische Eigenschaft und eine statische Methode. Lasse das Hauptprogramm die Eigenschaft in der Konsole ausgeben und die Methode aufrufen. Nutze statt einer Objektreferenz nun einfach den Klassennamen hierfür.

- `static`
- speed in Ufo und Projectil
- Pfade in den Klassen
- Vector(0,0) in Vector

## Gültigkeit
Wiederholung von Sichtbarkeitsbereichen local, global, function, block, namespace, module etc.

## Sichtbarkeit
### `public`
### `private`
### `protected`

## `get`/`set`

## Garbage Collection


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
  
