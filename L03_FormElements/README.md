# L03_FormElements
<img src="Material/PassierscheinA38.png">  

Interaktion war von Anfang an ein Kernpunkt von HTML. Das World-Wide-Web basiert auf der Idee von wissenschaftlichen Dokumenten, die durch interaktive Verweise, den Links, miteinander verknüpft sind. Der Fokus wurde erst sehr viel später auf Katzenvideos gelegt.

> Fun-Fact: Tim Berners Lee, the first Website of the world wide web [WWW](http://line-mode.cern.ch/www/hypertext/WWW/TheProject.html)  

Sehr früh wurden aber auch schon HTML-Elemente unterschiedlichen Typs entwickelt, die es einem Nutzer ermöglichen, Informationen einzugeben. Damit werden auch heute noch Formulare gestaltet. Die Elemente reagieren automatisch auf die Interaktion des Nutzers und geben eine optische Rückmeldung, ohne dass eine weitergehende Programmierung erforderlich ist. Für die Grundfunktionalität genügt reines HTML.  
In diesem Kapitel lernst Du die wichtigsten Elemente kennen, erfährst, wie Du sie nutzen kannst und welche Informationen sie liefern. Ähnliche Elemente findet man auch in anderen Entwicklungsumgebungen zur Gestaltung von User-Interfaces.  

> - [x] Bringe den Code [L03_FormElements/Overview](https://github.com/JirkaDellOro/EIA2-Inverted/tree/master/X01_Appendix/Code/Overview/L03_FormElements) aus dem Anhang bei dir lokal zum Laufen. In dieser Lektion wirst Du seine Funktionalität nach und nach freischalten und untersuchen. Zunächst erscheint nur die Überschrift "Form-Elements".

## Texteingabe
Die wichtigste Eingabemöglichkeit ist die von Text. Mit dem Keyboard-Event könnte man zwar beim Tippen jeden Buchstaben abfangen und damit eine Zeichenkette zusammen setzen, es geht aber sehr viel einfacher. Das generische `input`-Element bringt in seiner Urform als Textfeld schon diese Grundfunktionalität, kann aber noch viel mehr.  
> Beispiel: <input type="text" placeholder="Gib hier etwas ein" required>
### Platzhalter
Dem Attribut `placeholder` kann ein Wert zugewiesen werden, der dem Nutzer beispielsweise als Eingabeaufforderung dienen kann. Sobald der Nutzer die Eingabe beginnt, verschwindet der Platzhalter automatisch und wird wieder angezeigt, wenn das Feld gelert wird.
### Passworteingabe
Der Wert "password" für das Attribut `type` bewirkt, dass die Eingabe nicht angezeigt wird und auch nicht kopiert werden kann. 
### Prüfung
Zum Beispiel wird durch die Angabe von "email" oder "url" als Wert für das Attribut `type` schon eine einfache Prüfung der eingegebenen Zeichenkette vorgenommen um gröbste Eingabefehler zu erkennen und die Ungültigkeit anzuzeigen. Wird das 'wertlose' Attribute `required` angegeben, wird zudem angezeigt, dass die Eingabe zwingend erforderlich ist. Die Darstellung kann per CSS und den Pseudo-Selektoren `:invalid`, `:valid` und `:required` angepasst werden.  
Eine deutlich komplexere Überprüfung kann mit Hilfe von regulären Ausdrücken erfolgen, was allerdings einige Expertise erfordert. Hierzu wird im Attribut `pattern` der zu verwendende reguläre Ausruck festgelegt. Im Beispiel werden genau 3 Ziffern eingefordert.
### Textarea
Eine größere Variante des `input`-Elementes ist die `textarea`. Hier können längere Texte über mehrere Zeilen eingegeben werden, bei Überlauf erscheint eine Laufleiste und der Nutzer kann das Feld ggf. in seiner Größe vom Nutzer verändern.  
### Übungen
> - [x] Aktiviere jetzt in der HTML-Datei das Fieldset mit der `id` "fsText". Entferne hierzu die umschließenden Kommentar-Auszeichnungen `<!--` und `-->`. Am einfachsten geht das, indem Du den ganzen Absatz markierst und dann `Ctrl+#` drückst. Speichere die Datei.
> - [x] Das Fieldset mit der Bezeichnung "Text-Input" sollte nun bei der aktualisierten Anzeige der Datei im Browser erscheinen. Prüfe das Verhalten der Elemente und vollziehe nach, wie es zustande kommt. Bedenke, dass noch kein Skript am Werk ist.  
> - [x] Aktiviere nun das Skript "FormElements.js" in der HTML-Datei. Bediene dann weiter die Elemente und beobachte die Ausgabe in der Konsole. Wann wird das `input`-Event verschickt, wann `change`?
> - [x] Untersuche den Code in der Datei FormElements.ts und kläre, wie er funktioniert.  

## Selektionen
Häufig soll der Nutzer auch zwischen verschiedenen Möglichkeiten auswählen, ohne selbst Text einzugeben. Hierzu müssen ihm die Auswahlmöglichkeiten präsentiert und eine eindeutige Interaktionsmöglichkeit angeboten werden. HTML bietet hier verschiedene Elemente bzw. Elementtypen an.  

### Datalist
Hiermit kann einem Textfeld eine Liste von vordefinierten Einträgen zugewiesen werden. Der Nutzer kann per Zeigerinteraktion einen solchen Eintrag auswählen oder durch Eintippen auf der Tastatur die Auswahl einschränken. Er kann aber immer noch auch Freitext eingeben und die Auswahl ignorieren. Die Kopplung von `input` und `datalist` geschieht durch die Attribute `list` und respektive `id`.  

### Radiobutton
Beispiel: <input type="radio" name="radio"><input type="radio" name="radio" checked><input type="radio" name="radio">  
Dieser Typ ist speziell für Single-Choice-Auswahlen gemacht. Alle `input`-Elemente des Typs `radio`, welche den gleichen Wert im Attribut `name` tragen, werden als Gruppe behandelt. Nur ein Element der Gruppe kann markiert sein.  

### Checkbox
Beispiel: <input type="checkbox"><input type="checkbox" checked><input type="checkbox" id="c3">  
Mit `input`-Elementen des Typs `checkbox` werden dagegen klassischerweise Multiple-Choice-Auswahlen dargestellt.  

> **Achtung:** Radiobuttons und Checkboxes beziehen sich in der Regel auf einen nebenstehenden Text. Für den Nutzer ist es sehr ärgerlich, wenn diese Beziehung nicht auch zur Unterstützung der Interaktion genutzt wird, er also nicht auf den Text klicken kann um zu interagieren. Dabei ist es äußerst einfach dies zu berücksichtigen, der Text muss lediglich von einem `label`-Tag umschlossen sein. Die Kopplung von `label`- und `input`-Element geschieht dann einfach mit Hilfe der Attribute `for` und `id`. Dies sollte **immer** implementiert werden!  

### Select
Beispiel: <select name="Select" id="select">
<option value="option1">1.</option>
<option value="option2" selected>2.</option>
<option value="option2" selected>3.</option>
</select>  

Am mächtigsten ist das `select`-Element, auch 'Dropdown-Menü' oder 'ComboBox' genannt. Auf engem Raum kann eine vordefinierte Auswahl an Optionen als Single- oder auch Multiple-Choice Auswahl angeboten werden. Dabei können sogar noch Untergruppierungen vorgenommen werden.  

### Übungen
- [x] Aktiviere nun das zweite Fieldset, es trägt die `id` "fsSelection". Experimentiere im Browser mit den Selektions-Elementen.
- [x] Beobachte in der Konsole genau die Zuordnung von Elementname und Wert. Was fällt dir auf? Wo kommen die Werte her? Vergleiche mit den Texteingaben.
- [x] Aktiviere nun im Skript den Code zu "// Handling checkbox". Warum ist dieser Code hier, was ist dessen Sinn? Beobachte die Ausgabe in der Browserkonsole.
- [x] Ergänze das `select`-Tag um das 'wertlose' Attribut `multiple`. Wähle nun im Browser dort bei gedrückter Ctrl- oder Shift-Taste mehrere Optionen. Beobachte erneut die Ausgabe und halte deine Beobachtung fest.

## Weitere Eingabeelemente
Es gibt noch einige Eingabeelemente, die sich gänzlich anders verhalten. Ihre grundlegende Funktionsweise erschließt sich recht schnell und einfach.  

- [x] Aktiviere das Fieldset mit der `id` "fsSpecial". Experimentiere damit, verändere die Attributwerte und bediene die Elemente im Browser. Beobachte die Konsolenausgaben.
- [x] Beantworte die Frage nach der Wirkung des `value`-Attributs  

## Ausgabeelemente
Es gibt zudem noch ein paar standardisierte Elemente, welche dem Nutzer Rückmeldung geben. Sie dienen also der Interaktion des Systems mit dem Nutzer.

- [x] Aktiviere das letzte Fieldset, es hat die `id` "fsOutput". 
- [x] Aktiviere auch die letzten Codefragmente. Erkläre, wie die Ausgabeelemente angesteuert werden.

# Konzeption und Implementation einer formulargesteuerten Anwendung
<img src="Material/Cocktail.jpg" width="20%" align="right">  

Die nächste geniale Geschäftsidee steht an: Eine Online-Cocktailbar!  

Kunden können hier mit Hilfe eines Webformulars spontan einen Cocktail bestellen, der Ihnen wenige Tage später per Post nach Hause geliefert wird.
<figcaption><small>Bildquelle: <a href="https://www.parkhotel-waldeck.de/cocktailbar">https://www.parkhotel-waldeck.de/cocktailbar</a></small></figcaption>

## Anwendungsfalldiagramm (Use-Case-Diagram)
Mit Hilfe des Anwendungsfalldiagramms machst Du dir zunächst einen groben Überblick über die Anforderungen an deine Anwendung. Das geht ganz schnell und hilft ungemein bei der Konzeption.  

|Hier erscheint jetzt ein Video|
|-
|Zweigeteilt 
|1. groß das Diagramm, das von Hand gezeichnet wird, 
|2. Jirkas sprechender Kopf  

>Inhalt: die Erstellung des Diagramms mit den Anwendungsfällen  
> - Anwendung starten
> - Buchstabe wählen
> - Buchstabe positionieren
> - Buchstabe löschen.

## Skizze: User Interface 
Als Nächstes machst Du dir eine Skizze des Erscheinungsbildes der Anwendung. Das wird schon einiges über die erforderliche darunterliegende Struktur verraten. Die Skizze versiehst Du schon mit den HTML-Auszeichnungen und Eigenschaften, die dir dabei sinnvoll erscheinen. Unterscheide dabei zwischen statischen und dynamischen Elementen und Eigenschaften. Für die Dynamik trägst Du hier schon ein, an welchen Elementen Listener installiert werden soll und welche Ereignisse dabei mit welchen Aktivitäten verknüpft werden. Prüfe, ob alle Interaktionsmöglichkeiten zur Realisierung der Anwendungsfälle gegeben sind.

|Hier erscheint jetzt ein Video|
|-
|Dreigeteilt 
|1. groß die Skizze, die von Hand gezeichnet wird, 
|2. klein das Use-Case-Diagramm
|3. klein Jirkas sprechender Kopf  

> Inhalt:  
> - Überschrift (h1)
> - Ein Feld mit Handlungsanweisung (p)
> - ein Feld mit Rahmen für den Brief (div, click-event-listener zum Platzieren)
> - mehrere Buchstaben mit Rahmen (span, click-event-listener zum Löschen)
> - das umschließende document (document, keydown-listener zur Buchstabenauswahl)

## Aktivitätsdiagramme
Jetzt hast Du bereits aus der Sicht des Nutzers die wesentlichen Aktivitäten, die beteiligten Elemente und die auszuwerteten Ereignisse festgehalten. Nun wechselst Du auf die Sicht aus dem System heraus und legst fest, wie es arbeiten soll. Dazu nutzt Du jetzt Aktivitätsdiagramme. Ein Event bildet dabei jeweils als Signalempfang einen Startknoten für eine Aktivität.  
Beginne dabei zunächst wieder mit einer Übersicht über die Aktivitäten. Nimm dir dann nacheinander die einzelnen Aktivitäten vor und verfeinere sie. Wiederhole diesen Prozess, bis Du zu den atomaren Aktionen gekommen bist die sich in Programmanweisungen umsetzen lassen. Am Anfang musst Du hierzu wahrscheinlich nach diesen Anweisungen noch etwas recherchieren.  

|Hier erscheint jetzt ein Video|
|-
|Dreigeteilt 
|1. groß die Aktivitätsdiagramme, die von Hand gezeichnet werden, 
|2. klein das Use-Case-Diagramm und die Skizze im Wechsel nach Bedarf
|3. klein Jirkas sprechender Kopf  

> Inhalt:  
> - die vier Signalempfange im Hauptprogramm bilden Startpunkte: 1. Load von Window, 2. Keydown auf Document, 3. Klick auf Brief, 4. Klick auf Buchstabe
> - Beginn mit 4. Klick -> deleteLetter (kurze Recherche führt zu removeChild)
> - Dann 3. Klick -> placeLetter, hierfür werden Position und der Buchstabe gebraucht
>   - Zur Position die Angaben im MouseEvent untersuchen
>   - der gewählte Buchstabe muss irgendwo gespeichert sein
>   - am Buchstaben Listener für deleteLetter installieren
> - Dann 2. Keydown -> chooseLetter (kurze Recherche führt zu key im KeyEvent)
>   - gewählten Buchstaben in einer globalen Variable im Hauptprogramm speichern
> - Dann 1. die Listener installieren am Document und dem Brief
> - Schließlich das Hauptprogramm, hier lediglich die Variable `chosen` anlegen und den load-Listener installieren.

## Implementation
Wenn Du den Eindruck hast, mit deiner Konzeption alles für eine erste Implementation der Anwendung berücksichtigt zu haben, kannst Du dich daran machen. 

|Hier erscheint jetzt ein Video|
|-
|Dreigeteilt 
|1. groß das Programm, das gerade getippt wird
|2. klein das Aktivitäts-Diagramm
|3. klein Jirkas sprechender Kopf  

> Inhalt:
> - HTML-Datei ist bereits angelegt, die statischen Elemente vorhanden, ebenso die Einbindung des Stylesheets und des Skripts
> - jetzt wieder in der Reihenfolge von 1 bis 4 werden die zuvor konzipierten Aktivitäten implementiert.

## Testing
Während der Implementation wird das Programm immer wieder getestet. Es ist wichtig möglichst so zu implementieren, dass nicht erst ein abschließender Test Fehler zu Tage fördert, sondern dass immer lauffähige Zwischenstände existieren, die entsprechend in das Code-Repository aufgenommen werden.  

|Hier erscheint jetzt ein Video|
|-
|Zweigeteilt 
|1. das Blackmailer-Programm und offener Entwicklerbereich
|2. klein Jirkas sprechender Kopf  

> Inhalt:
> - Breakpoints setzen um das Programm zu verfolgen
> - Dabei fällt auf, dass nach deleteLetter noch placeLetter aufgerufen wird 
> - Varianten der Lösung des Problems besprechen
>   1. stopPropagation in deleteLetter
>   2. Abfrage target==currentTarget in placeLetter
>   3. gleich auf die Installation des Listeners an den Letters verzichten und stattdessen ein handleClickOnMail mit Fallunterscheidung bauen.
> - weiteres mögliches Problem besprechen: Verschachtelung in Letters
>   - Lösung: currentTarget löschen



- Name 
- Iteration on Elements
- FormData-Object
- Process values locally