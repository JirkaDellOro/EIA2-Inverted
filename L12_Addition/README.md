# L12_Addition

<a href="https://www.youtube.com/watch?v=PK_yguLapgA"><img src="Material/Ariane5Failure.jpg"/></a>
<small>Quelle: https://docplayer.net/docs-images/66/55611304/images/11-0.jpg</small>

- [x] Klicke auf das Bild, wenn Du sehen möchtest, wie ein kleiner Softwarefehler 290 Millionen Euro in Rauch aufgehen lässt.

In diesem Kapitel lernst Du noch einige fortgeschrittene Strukturen der Softwareentwicklung kennen. Auch wenn Du sie im Kurs vielleicht nicht verwendest, solltest Du sie gesehen und verstanden haben. 

## Aufzählungstyp
Häufig ist es erforderlich, eine Information mit einem Datentyp zu beschreiben, der nur eine enge und diskrete Auswahl an Werten beschreiben kann. Das simpelste Beispiel für einen solchen Datentyp ist `boolean`. Hier sind nur zwei Werte zulässig `true` und `false`. Der Versuch, einer Variablen dieses Typs beispielsweise ein `maybe` zuzuweisen, scheitert.

Du kannst selbst solche Aufzählungstypen mit dem reservierten Wort `enum` (Enumeration [engl]: Aufzählung) kreieren.

```typescript
enum TASK {
    WATCH,
    PATROL,
    CHASE,
    SLEEP
}
```
Der Typ im Beispiel könnte genutzt werden, um die Aufgaben eines Wachhundes zu bezeichnen. Ein Objekt vom Typ des Wachhundes könnte dann über eine Eigenschaft `task` verfügen, welche nur diese vier Werte annehmen kann.

```typescript
class Watchdog extends Dog {
    private task: TASK = TASK.WATCH;

    update(): void {
        switch (this.task) {
            case TASK.SLEEP:
                ...
                break;
            case TASK.WATCH:
                ...
                break;
            ...
        }
    }
}
```

Wird die Methode `update` des Wachhundes nun zyklisch abgearbeitet, können je nach aktuellem `task` unterschiedliche Aktivitäten bzw. Verhaltensmethoden aufgerufen werden. Der `switch` stellt bereits das hierfür erforderliche Konstrukt dar.

- [x] wie könnten die zugehörigen Aktivitäten aussehen? Erstelle grobe Aktivitätsdiagramme hierfür.

Ohne den speziellen Aufzählungstyp wäre `task` vielleicht einfach vom Typ `number`. Dann gäbe es die Aufgaben 0, 1, 2 und 3 und man müsste an anderer Stelle festhalten, welche Zahl welche Aufgabe bedeutet. Zudem wären dann auch Zahlen gültig, zu denen gar keine Aufgabe definiert ist. Da sind Fehler vorprogrammiert. `task` könnte aber auch vom Typ `string` sein und mit den Werten `"sleep"`, `"watch"` und so weiter besetzt werden. Dann wäre das Programm wieder lesbar, ist aber sehr fehleranfällig, denn falsche Schreibweisen wie `"petrol"`schleichen sich ein.

Mit Hilfe des Aufzählungstyps aber kann TypeScript schon beim Schreiben des Codes die richtigen Vorschläge machen, die zulässigen Werte zur Auswahl stellen und Fehler sofort erkennen.

> **Hinweis**: Laut UML-Standard wird eine Enumeration im Klassendiagramm durch die Markierung `<<enumeration>>` gekennzeichnet. Analog gilt das für Interfaces mit `<<interface>>`

## Ausnahmebehandlung
In den vorangegangenen Lektionen wurde das Thema Fehlerbehandlung weitestgehend ausgeklammert. Lediglich wenn TypeScript durch die strikten Einstellungen des Compilers und des Linters Fehlerquellen angezeigt hat, wurde der Code entsprechend angepasst.  

Gerade wenn ein System mit anderen Systemen oder mit Menschen kommuniziert, entstehen viele Fehler zur Laufzeit und sind schwer vorhersehbar. Wird zudem versucht, alle möglichen Fehler durch Verzweigungen im Code abzufangen, steigt die Komplexität des Programms rasant an.

```typescript
interface Greet {
    greet: string;
}
let greets: Greet[] = [{ greet: "Hi" }, { greet: "Hallo" }, { greet: "Servus" }];

let input: string | null = prompt("Lass dich grüßen!", "Gib hier eine Zahl ein");
let greet: string = greets[Number(input)].greet;
alert(greet);
console.log("Done");
```

- [x] Implementiere das obenstehende Mini-Programm in einem eigenen Namespace und lasse es im Browser laufen. Was geschieht, wenn Du eine Zahl jenseits 0, 1 und 2 eingibst oder beliebige Zeichen?

Wenn das Programm seinen Dienst quittiert, tut es dies leise. Der Nutzer hat keine Ahnung was passiert, sofern er nicht Medienkonzeption in Furtwangen studiert hat und deswegen selbsverständlich die Entwicklerkonsole geöffnet ist. Dort erscheint eine Fehlermeldung.

- [x] Erkläre den Fehler!

Vielleicht ist der Fehler aber gar nicht so gravierend, dass das Programm beendet werden müsste. Oder der Nutzer sollte darüber informiert werden, dass etwas schiefgelaufen ist, so dass er die Ursache prüfen kann. Im Beispiel könnte man natürlich einfach abfragen, ob die Eingabe gültig ist. Es gibt aber noch einen anderen Mechanismus, der auch mit noch unbekannten Fehlerquellen umgehen kann: **Exception-Handling!**

### Error-Objekt
Javascript kann bei einem solchen Ausnahmefehler (Exception), der zum Absturz des Programms führt, automatisch ein Error-Objekt erzeugen. Ähnlich einem Event, das durch das DOM weitergereicht wird, kann dieses Objekt durch das Programm gereicht, eher sogar "geworfen" werden. Dieses Objekt enthält Informationen über das Problem, die ausgewertet werden können. Damit müssen also nicht alle Fehler präventiv vermieden werden, sondern sie können im Nachhinein behandelt werden.  

### `try`
Um den Mechanismus zu nutzen wird zunächst der Code-Block eingegrenzt, der den zu behandelnden Fehler provozieren könnte. Dies geschieht, wie üblich, durch Einfassen in geschweifte Klammern, nun aber mit dem reservierten Wort `try` davor. Damit wird Javascript angewiesen, zu versuchen den Code im Block auszuführen und ein Error-Objekt zu werfen, wenn etwas schief geht.

### `catch`
An diesen Block muss sich nun direkt ein Block anschließen, der mit dem reservierten Wort `catch` versehen ist. Jetzt wird auch die Wurf-Analogie deutlich, denn hier wird das Error-Objekt aufgefangen und kann innerhalb des Blocks verarbeitet werden. Dazu wird nach der `catch`-Anweisung ein formaler Parameter deklariert, wie es auch bei Funktionen oder Methoden üblich ist. Allerdings kommt eine Eigenheit von TypeScript zum Tragen: wie bei der `for..in`- und der `for..of`-Loop ist keine Typ-Annotation erlaubt.

Mit `try` und `catch` gestaltet sich obiger Code zum Beispiel so:

```typescript
namespace L12_Exception {
    interface Greet {
        greet: string;
    }
    let greets: Greet[] = [{ greet: "Hi" }, { greet: "Hallo" }, { greet: "Servus" }];

    try {
        let input: string | null = prompt("Lass dich grüßen!", "Gib hier eine Zahl ein");
        let greet: string = greets[Number(input)].greet;
        alert(greet);
    } catch (_error) {
        alert("Tschüss!");
        console.log(_error);
    }
    console.log("Done");
}
```

- [x] Erweitere deinen Beispielcode entsprechend und experimentiere dann damit.

### `finally`
Nach dem `catch`-Block kann sich noch ein `finally`-Block anschließen. Der Code darin wird auf jeden Fall ausgeführt, egal ob es eine Exception gab oder nicht. Selbst wenn der Beispielcode in einer Funktion definiert ist, und sowohl im `try`- als auch im `catch`-Block eine `return`-Anweisung steht, die Funktion dort also zurückkehrt, wird zuvor noch der `finally`-Block abgearbeitet. Die Ausgabe "Done" aber kommt dann nicht mehr.

### `throw`
Du kannst auch selbst eine Exception erzeugen und werfen lassen. Das entspricht etwa der Erzeugung eines CustomEvents, das Du durch das DOM schickst. Das Error-Objekt wird die Kette der Funktionsaufrufe zurück geschickt, bis es in einer der aufrufenden Funktionen von einem `catch`-Block verarbeitet wird. Geschieht letzteres nicht, kommt es als "Unhandled Exception" auf der Konsole raus...

Das bedeutet, dass nun neben `return` und `await` eine dritte Möglichkeit zur Verfügung steht, um Funktionen zu beenden oder zu unterbrechen. Je nach Anwendungsfall kann die Verwendung von `throw` äußerst effizient sein.

- [x] Verfolge den Code "Exception" im Anhang zu dieser Lektion mit dem Debugger!

## Arrow-Functions
Seit Javascript XXX gibt es eine weitere Schreibweise für Funktionen, die etwas kryptischer aussieht, aber im Wesentlichen gleichbedeutend ist mit der dir bekannten und etwas intuitiveren Schreibweise mit `function`.

```typescript
// classic
function doSomething(_parameter: number): string {
   ...
}

// arrow
let doSomething: Function = (_parameter: number): string => {
   ...
};
```

In beiden Fällen sieht der Aufruf identisch aus, im Beispiel etwa `doSomething(42);`.  

Die Arrow-Schreibweise ähnelt aber eher einer Variablendeklaration und -definition. Was dabei nämlich besser zum Ausdruck kommt ist, dass auch Funktionen nur Objekte sind, die von Variablen referenziert werden. Die Variable `doSomething` verweist also auf ein Funktions-Objekt, das einen Parameter vom Typ `number` entgegen nimmt und einen `string` zurück liefert. Der Pfeil verweist auf den Funktionskörper, der den eigentlichen Code beinhaltet.



## Generics
- this-binding, Arrow-Function
- Drag&Drop
  - mark element as draggable
  - set dataTransfer-object on dragstart
  - event-information is saved and accessible on drop
  - allow drop on element, preventDefault on dragover
  - get dataTransfer-object on drop and process


- Event names asteroidBreak and ufoShoots candidates for enum
- Progressive Web Apps