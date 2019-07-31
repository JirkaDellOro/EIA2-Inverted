# L04_DataStructures
<img src="Material/OrdnungChaos.jpg">  

Albert Einstein war wohl unbestritten eines der größten Genies, welche die Menschheit je hervorgebracht. Es ist unwahrscheinlich jemanden zu beleidigen, wenn in dieser Lektion davon ausgegangen wird, das keine beteiligte Person einen ähnlichen Status genießt. Das gilt wohl für die meisten, die an der Konzeption interaktiver Anwendungen beteiligt und vielleicht mehr noch für die Nutzer der Anwendungen. Wer also nicht Einsteins Genie für sich in Anspruch nimmt, könnte von Ordnung doch profitieren.   

## Separation Of Concerns
Ebenso unstrittig wie Einsteins Genialität ist das Prinzip der Trennung der Zuständigkeiten (SoC) in der Softwareentwicklung. Hierbei geht es darum, dass ein Teil der ganzen Software auch eine klare und von den anderen Teilen getrennte Zuständigkeit hat. Diese Zuständigkeit lässt sich mit einem knappen Satz beschreiben. Wenn in diesem Satz das Wort "und" vorkommt, ist möglicherweise etwas faul.  
Bei der Cocktailbar haben wir schon vieles richtig gemacht, insbesondere, wenn wir das Ganze aus einer sehr übergeordneten Perspektive und die für die Entwicklung von Web-Applikationen grundlegende Separation betrachten.  
- [x] Arbeite diesen knappen [Artikel in SelfHTML.org](https://wiki.selfhtml.org/wiki/HTML/Tutorials/Trennung_von_Inhalt,_Pr%C3%A4sentation_und_Verhalten) durch. Vergleiche mit deiner eigenen Arbeit und prüfe, ob Du alles berücksichtigt hast.  

Der CSS-Teil der Cocktailbar beeinflusst nur die visuelle Gestaltung und fügt keine Inhalte oder Interaktionsmöglichkeiten hinzu. Das Skript kümmert sich ausschließlich um die Auswertung der Interaktion. Die HTML-Datei liefert die Struktur der Seite und die Interaktionselemente und stellt die Datenquelle dar... ups, da sind einige **UND**s drin. Und da knirscht es auch bald.

## Trennung von Struktur und Inhalt
In SelfHTML ist beschrieben, dass das HTML-Dokument Struktur und Inhalt bereit stellen soll. Das passt auch recht gut für statische Seiten, bei denen die Inhalte sich nie wesentlich ändern werden. Schon der Blackmailer Companion war aber ein gutes Gegenbeispiel. Der wesentliche Inhalt entsteht dort erst durch die Interaktion mit dem Nutzer und weder kann noch sollte er in der HTML-Datei statisch festgelegt sein. Diese legt nur die grobe Struktur fest. Richtig bleibt aber, dass das, was mit Hilfe der HTML-Datei entsteht, nämlich das DOM, weiterhin Struktur und Inhalt bereitstellt, selbst aber dynamisch ist und vom Skript manipuliert wird.  
Die Vereinigung von Struktur und Inhalt bei der Cocktailbar ist problematisch, denn das Angebot der Bar und die Preise können sich ändern. Und gehen wir davon aus, dass der Barkeeper nicht selbst unter den Entwicklern der Online-Cocktailbar ist, stellt sich die Frage, wie das geänderte Angebot nun in die App findet. Soll der Betreiber selbst im HTML-Code herumfuhrwerken? Und riskieren, dass die ganze App nicht mehr funktioniert, weil er einen Tippfehler bei einem Attribut hat? Diese Option darf ausgeschlossen werden.  
Das heißt, die bisherige Trennung der Zuständigkeiten muss um die Trennung des Inhaltes von Struktur, Verhalten und Gestaltung erweitert werden, sodass der Inhalt verändert werden kann, ohne Änderungen an den anderen Zuständigkeiten vornehmen zu müssen oder versehentlich zu vorzunehmen.  

## Erweiterung des Anwendungsfalldiagramms
Zwei Dinge sind aus obigem zu folgern:
- es gibt einen weiteren Akteur, den Barkeeper
- ihm muss eine Möglichkeit zur Verfügung gestellt werden das Angebot anzupassen ohne in die eigentliche Applikation einzugreifen  

|Hier erscheint jetzt ein Video|
|-
|Zweigeteilt 
|1. groß das Diagramm, das von Hand gezeichnet wird, 
|2. Jirkas sprechender Kopf  

> Inhalt: die Erweiterung des Anwendungsfalldiagramms um den zweiten Akteur und die Anwendungsfälle
> - Angebot ändern
> - Preise ändern

## Algorithmen und Datenstrukturen
Neben dem Prinzip des "Divide et Impere", ist es bei der Konzeption von Anwendungen grundsätzlich eine sehr gute Vorgehensweise zwischen den Algorithmen und den Datenstrukturen zu unterscheiden. In Kombination stellen beide zusammen die Anwendung dar. Bestimme und untersuche einerseits die zu verarbeitenden Information, und überlege, wie diese Information strukturiert werden sollte, um sie gut verarbeiten zu können. Daraus ergeben sich die Datenstrukturen. Überlege andererseits, wie diese Information verarbeitet werden soll, somit konzipierst Du die Algorithmen.  

- **FunFact**: viele Quellen schreiben den ersten Algorithmus, der je für einen Computer konzipiert wurde, Lady Ada Lovelace (1815-1852) zu. Der zugehörige mechanische Computer, die "Analytical Engine", konnte zu dieser Zeit noch nicht funktionsfähig hergestellt werden. Adas Algorithmus aber funktionierte!  

Die Konzeption der Algorithmen und Datenstrukturen stellt also die Grundlage für eine nachfolgende Programmierung dar. Ohne diese Grundlage die Programmierung zu beginnen ist eine erratische Vorgehensweise und führt bei komplexeren Anwendungen in der Regel zu erhöhtem Aufwand und minderwertigen Lösungen.  

Die getrennte Betrachtung führt zu guten Datenstrukturen, die auch von noch nicht geplanten Algorithmen für andere Zwecke verarbeitet werden können, und zu Algorithmen, die wiederum noch nicht bekannte Daten verarbeiten können.  

## Datenstruktur für die Cocktailbar
Die Cocktailbar funktioniert ja recht gut, sie ist aber völlig unflexibel und lässt den Barkeeper außen vor. Es ist also wünschenswert, dass die Seite im Prinzip so bleibt, aber nicht von einer statischen HTML-Datei abgeleitet wird sondern dynamisch auf der Grundlage von Daten erzeugt wird, die der Barkeeper selbst pflegen kann. Eine einfache Möglichkeit ist, ihm eine spezielle und simpel strukturierte Textdatei an die Hand zu geben, in welche er nach einem übersichtlichen Muster seine Daten eintragen kann. Er soll also nicht mit einem Chaos konfrontiert werden, das Genialität fordert, sondern mit Ordnung.

|Hier erscheint jetzt ein Video|
|-
|Zweigeteilt 
|1. groß ein Notizblatt, auf dem verschiedene Ansätze notiert werden, 
|2. Jirkas sprechender Kopf  

> Inhalt: die Suche nach günstigen Datenstrukturen
> - Untersuchen, aus welchen Informationen das Angebot des Barkeepers eigentlich besteht
>   - Feststellung: name und preis eines Artikels (Item)
>   - Feststellung: unterschiedliche Kategorien z.B. Drinks, Container, Extras etc. (Category)
> Feststellung in Tabellenform darstellen
> - Ansatz für jedes Item zwei Variablen anzulegen, z.B. drink1: string = "Mojito" und drink1price: number = 3.50 ist sinnlos, da der Algorithmus dann alle deklarierten Variablen einzeln verwenden muss und bei Veränderungen nicht mehr funktioniert. Auch mit Schleifen nicht behandelbar.
> - Tabellenform weist aber auch schon auf Arrays hin
>   - simple oder assoziative?
> - Simple würden den Job erledigen, sind aber unübersichtlich und weniger hilfreich. Unterschiedliche Datentypen? Mehrdimensional? Formatierung?
> - Mit assioziativen lassen sich die Daten sehr gut strukturieren
>   - Interface Item mit vordefinierten Schlüsseln name: string und price: number
>   - Interface Data mit variablen Schlüsseln [category: string] und  Item[] als Wert
> - Damit Daten anlegen.
>   - Eine Datei für die Interfaces, eine für die Daten selbst 

## JSON
Nur bedingt für diesen Zweck geeignet, ohne Editor. Aber grundsätzlich für viele Zwecke!
