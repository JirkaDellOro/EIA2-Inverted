# L08_Canvas
<img src="Material/bobross.jpg"/>
<small>Quelle: <a href="http://pix4.qmde.de/www.quotenmeter.de/pics/sonstiges/2019/medien/bobross_ox__W1000xh0.jpg">http://pix4.qmde.de/www.quotenmeter.de/pics/sonstiges/2019/medien/bobross_ox__W1000xh0.jpg</a></small>  

Die standardisierten und HTML-Elemente vereinfachen die Gestaltung einer Web-Applikation enorm, und Formular-Elemente unterstützen sogar komplexe Interaktion in einer den meisten Nutzer bereits geläufigen Form. Allerdings sind die Gestaltungsmöglichkeiten dadurch recht eingeschränkt. Ebenso übliche Formen der Informationsvermittlung, wie beispielsweise Diagramme, lassen sich damit nicht zur Laufzeit erzeugen. Es sei denn, man nutzt das `HTMLCanvasElement`!  
> **FunFact:** Canvas heißt so viel wie Plane, Segel, Markise... aber auch Leinwand.

Das `HTMLCanvasElement`stellt eine rechteckige Fläche auf einer Browserseite zur Verfügung, deren einzelne Bildpunkte (Pixel) mit Hilfe von Zeichenbefehlen beliebig eingefärbt werden können. Innerhalb dieser Fläche lassen sich frei Formen und Farben dynamisch generieren. 
> **FunFact:** Pixel ist ein Kunstwort, dass sich aus **Pic**ture und **El**ement oder **Cell** zusammensetzt. Eine Rastergrafik, wie sie unsere modernen Monitore darstellen, unsere Kameras liefern oder unsere Webseiten aufbauen, sind aus einer Vielzahl solcher farbiger Pixel zusammengesetzt.

## CanvasRenderingContext
Die Befehle für diese Bildmanipulation stellt das `HTMLCanvasElement` aber nicht direkt zur Verfügung, sondern es bietet hierfür spezielle Programmierschnittstellen (Application Programming Interfaces, API) an, die in diesem Zusammenhang CanvasRenderingContext genannt werden. Sie können sehr umfangreich sein und es gibt sie sowohl für 2D- als auch für 3D-Grafikdarstellung z.B. mit WebGL. Mit dem folgenden Code wird ein solcher CanvasRenderingContext für die Bildmanipulation in zwei Dimensionen von einem im DOM vorhandenen Canvas angefordert und eine Referenz darauf gespeichert.  
```typescript
let canvas: HTMLCanvasElement = document.querySelector("canvas");
let crc2: CanvasRenderingContext = canvas.getContext("2D");
```
- [x] Erstelle eine HTML-Datei und lege dort mit `<canvas>` ein Canvas-Element an.
- [x] Erstelle eine TypeScript-Programm, welches den RenderingContext des Canvas-Elementes anfordert und eine Referenz in einer Variable namens `crc2` speichert, wie oben angegeben.
- [x] Gib in einer weiteren Zeile `crc2.` und verschaffe dir einen Eindruck von der Menge der Zeichenbefehle, die dir nun zur Verfügung stehen.  

Die Pixel des Canvas-Elements werden beim Aufbau des DOMs zunächst mit der Farbe `#FFFFFF`, also weiß, besetzt. Daher fällt der Canvas auf weißem Hintergrund nicht ins Auge. Der einfachste Befehl, den Du nutzen kannst um das zu ändern, ist `fillRect()`, wobei zunächst die Füllfarbe als Eigenschaft `fillStyle` des RenderingContexts definiert werden muss.
```typescript
crc2.fillStyle = "#FF0000";
crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
```
- [x] Finde heraus, welche Bedeutung die Parameter der Methode `fillRect` haben. Experimentiere damit.

## Pfade
`fillRect(...)`, `clearRect(...)` und `strokeRect(...)` sind die einzigen Zeichenbefehle, die sofort ein sichtbares Ergebnis liefern. Komplexere Formen definierst Du zunächst mit Hilfe eines Pfad-Objektes und nutzt dann die Zeichenbefehle `stroke()` und `fill()`. Daraufhin erst werden die Pixel, die innerhalb oder am Rande des Pfades liegen nach der zuvor definierten Füll- oder Linienvorschrift mit Farbe versehen.

```typescript
crc2.beginPath();
crc2.arc(100, 100, 20, 0, 1.5 * Math.PI);
crc2.closePath();
crc2.stroke();
```
- [x] Erkunde, was `arc` bewerkstelligt und was die Parameter bedeuten.
- [x] Finde heraus, wie Du die Linienfarbe ändern kannst.


## Maleralgorithmus
## Immediate/Deferred Rendering
## Drawing Commands
## Relative Positioning
## Save/Restore
## Shortcuts fillRect and strokeRect
## Create functions for drawing repetitive images
