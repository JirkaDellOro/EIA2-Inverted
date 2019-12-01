# L12_Addition

<a href="https://www.youtube.com/watch?v=PK_yguLapgA"><img src="Material/Ariane5Failure.jpg"/></a>
<small>Quelle: https://docplayer.net/docs-images/66/55611304/images/11-0.jpg</small>

- [x] Klicke auf das Bild, wenn Du sehen möchtest, wie ein kleiner Softwarefehler 290 Millionen Euro in Rauch aufgehen lässt.

In diesem Kapitel lernst Du noch einige fortgeschrittene Strukturen kennen, die interaktive Anwendungen flexibler, wartbarer und sicherer machen. Auch wenn Du sie im Kurs vielleicht nicht verwendest, solltest Du sie gesehen und verstanden haben. Zudem werden einige Konstrukte vorgestellt, die nicht unbedingt empfehlenswert, aber weit verbreitet sind, und dich bei deinen Recherchen im Netz irritieren könnten.

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

## Funktions-Objekt
Funktionen sind in Javascript, wie alles andere, Objekte. Sie können beispielsweise mit Hilfe von Variablen referenziert werden. Folgendes ist also möglich:

```typescript
function doSomething(_parameter: number): string {
   ...
}

let doToo: Function = doSomething;
doToo(42);
```

Das Ergebnis ist das gleiche wie beim Aufruf `doSomething(42);` denn `doToo` und `doSomething` referenzieren das gleiche Funktionsobjekt.

### Anonyme Funktionen
Die Funktion kann auch gleich bei der Erzeugung einer Variablen zugeordnet werden, dann ist es nicht erforderlich einen Funktionsnamen zu vergeben. Die Funktion selbst ist dann "anonym".

```typescript
let doSomething: Function = function(_parameter: number): string {
   ...
}
```

Die Funktionserzeugung ist gleichbedeutend mit der im Beispiel darüber. Allerdings kann `doSomething(...)` nun erst nach der Definition aufgerufen werden, was eher unschön ist.

Anonyme Funktionen werden häufig dort genutzt, wo sie als Parameter übergeben werden und nicht als mehrfachverwendbare Objekte im Zugriff bleiben müssen. Beispiel:

```typescript
setTimeout(function (): void {
        console.log("Timeout");
    },         2000);
```

Der Timeout-Funktion wird das anonyme Funktionsobjekt sofort übergeben und nach zwei Sekunden wird es aufgerufen. Danach ist das Funktionsobjekt Müll und wird vom Garbage Collector irgendwann entsorgt. 

Für solche kleinen Funktionen ist diese Anonymität akzeptabel, grundsätzlich vermindern solche Konstrukte aber eher die Lesbarkeit und Wartbarkeit des Programms.

### Arrow-Functions
Seit 2015 ist in Javascript eine weitere Schreibweise für Funktionen üblich, die etwas kryptischer aussieht, aber im Wesentlichen gleichbedeutend ist mit der dir bekannten und etwas intuitiveren Schreibweise mit `function`.

```typescript
let doSomething: Function = (_parameter: number): string => {
   ...
};
```
Aus dem reservierten Wort `function` vor der Parameterliste ist nun der Doppelpfeil zwischen dem Rückgabetyp und dem Funktionskörper geworden.

### this-binding
Ein Unterschied aber ist die Funktionalität innerhalb von Klassen. Wird eine Arrow-Function als Methode deklariert, wird sie in der Konsole als Eigenschaft. Interessanter aber ist der Unterschied bei der Verwendung als Event-Handler.   
- Innerhalb klassischer Methoden verweist `this` dann auf das Event-Target und nicht auf die Instanz der Klasse. Das führt häufig zu unerwarteten Fehlern. 
- Bei Arrow-Functions dagegen verweist `this` weiterhin, wie zu erwarten, auf die Instanz. Daher ist diese Schreibweise in dem Fall zu bevorzugen.
- Es gibt auch die Möglichkeit, eine klassische Methode so zu modifizieren, dass auch sie als Event-Handler die Instanz mit `this` referenziert. Hierzu existiert die Funktion `bind` des Funktionsobjektes. 

- [x] Wenn Du dies besser verstehen möchtest, experimentiere etwas mit dem Code "FunctionObject" im Anhang.

## Drag&Drop
Eine wichtige Standardfunktionalität des DOM wurde in diesem Kurs bislang noch nicht behandelt. Insbesondere bei Desktopanwendungen ist es sehr üblich, Objekte direkt zu manipulieren, nicht also über Formularelemente, sondern beispielsweise per drag & drop. Die Verwendung ist recht einfach:

- `draggable` ist eine Eigenschaft, definiert in der Klasse HTMLElement. Erhält sie den Wert `true` verändert sich das Maus-Verhalten auf dem entsprechenden Element.
- wird die Maustaste gedrückt, während sich der Mauscursor über dem Element befindet, wird ein Event vom Typ `dragstart` gefeuert.
- das Event-Objekt ist vom Typ `DragEvent` und verfügt über eine Eigenschaft `dataTransfer`, die ein Objekt vom Typ `DataTransfer` referenziert.
- die Methode `setData(key, value)` fügt `dataTransfer` Informationen hinzu. 
- ein HTMLElement, auf dem dann der Drop stattfinden können soll, muss diesen zulassen. Dazu muss es auf ein `dragover`-Event hören und mit `event.preventDefault()` sein Standardverhalten unterbinden, welches die Ablehnung des Drops ist.
- nun kann es auf ein `drop`-Event reagieren, wobei dem entsprechendem Handler das beim `drag` erzeugte und mit zusätzlichen Informationen versorgte Event übergeben wird.
- mit `getData(key)` können die Informationen ausgelesen und verarbeitet werden, zum Beispiel um das Drop-Ziel zu verändern.

- [x] Im Anhang befindet sich ein kleines Beispielprogramm "DragDrop" mit einer rudimentären Implementation des DOM-Drag&Drop-Mechanismus, mit dem noch viel mehr möglich ist. Schaue es dir an! 

## Debugger in VSCode

## Branches


## Plattformen
Die technische Basis, die für diese Modulreihe "Entwicklung interaktiver Anwendungen" herangezogen wird, entstammt der Webtechnologie. Das bedeutet aber nicht, dass deine Konzeption sich auf Internetseiten beschränken muss. Mit dem, was Du jetzt gelernt hast, kannst Du vollwertige native Apps und Desktop-Programme konzipieren und entwickeln. Hierzu verwendest Du Techniken, die deine Software auf eine erweiterte Plattform hieven, im Inneren arbeitet dabei weiter ein Browser und/oder Node, der Nutzer bekommt davon aber nichts mit.

### Electron
Wird von GitHub selbst entwickelt und verwendet Node.js sowie Chromium, die Entwicklerversion des Chrome-Browsers. Der Funktionsumfang wird erweitert um Systemfunktionen wie Zugriffe auf das Dateisystem, so dass aus deiner Web-App eine vollwertige, native Desktopanwendung für Windows, Mac und Linux werden kann. 

Du arbeitest übrigens schon eine Weile mit einer solchen Anwendung, den Visual Studio Code ist eine Electron-App!

### Cordova/PhoneGap
Cordova und PhoneGap sind zwei im Wesentlichen identische Produkte, die denselben Ursprung haben und von Apache beziehungsweise Adobe weiterentwickelt werden. Ihnen liegt das gleiche Prinzip zugrunde wie Electron, allerdings für mobile Android- und iOS-Geräte. So kann deine WebApp über die entsprechenden Stores vertrieben werden und im Betrieb auf GPS, Beschleunigungssensoren, Kamera etc. zugreifen.

Die Wikipedia mobile App ist eine PhoneGap-Anwendung!

### Progressive Web Apps
Seit 2015 schickt sich ein weiteres Modell an den App-Markt aufzumischen: Progressive Web Apps. Diese kommen zunächst wie eine gewöhnliche Web-App daher, installieren aber beim ersten Besuch einen "Service-Worker" auf dem Smartphone. Diese Software lädt gezielt Inhalte herunter und speichert sie auf dem Gerät, um die Funktionalität der App auch zu erhalten, wenn keine Internetverbindung besteht. Es wird zudem angeboten, eine Verknüpfung auf dem Home-Screen zu erstellen, sie kann im Vollbildmodus gestartet und Push-Nachrichten vom Server angezeigt werden, auch wenn die App gerade nicht aktiv ist. Dadurch wirkt die PWA wie eine vollwertige native App bei minimalem Mehraufwand gegenüber der reinen Web-Entwicklung. Der riesige Vorteil: ist erst einmal ein potenzieller Nutzer über eine Suchmaschine auf dem Angebot gelandet, muss er es nicht erst wieder verlassen, in den Store geleitet werden um dort die Installation einer App und später den Start derselben in die Wege zu leiten, sondern die Nutzung der App hat bereits begonnen!

Der mobile Twitter Client ist eine Progressive Web App


[Asteroids](..\X01_Appendix\Code\L11_Advanced\Asteroids2\index.html)
