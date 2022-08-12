# Operatoren
Eine Liste der wichtigsten Operatoren in TypeScript / JavaScript

## Zuweisungsoperator

<table>
<tr align="left"><td width="50">Zeichen</td><td width="200">Name</td><td width="120">Beispiel</td><td>Anmerkung</td></tr>  
<tr><td><code>=</code></td><td>Zuweisung</td><td><code>x = 7;</code></td><td>Der Variablen auf der linken Seite wird der Wert auf der rechten Seite zugewiesen</td></tr>  
</table>

## Arithmetische Operatoren  

<table>
<tr align="left"><td width="50">Zeichen</td><td width="200">Name</td><td width="120">Beispiel</td><td>Anmerkung</td></tr>  
<tr><td><code>+</code></td><td>Addition</td><td><code>x + 5;</code></td><td>Liefert das Ergebnis der Addition des linken und rechten Wertes ohne Speicherung.</td></tr>  
<tr><td><code>-</code></td><td>Subtraktion</td><td><code>17 - x;</code></td><td>Liefert das Ergebnis der Subtraktion des linken und rechten Wertes ohne Speicherung.</td></tr>
<tr><td><code>*</code></td><td>Multiplikation</td><td><code>5 * x;</code></td><td>Liefert das Ergebnis der Multiplikation des linken und rechten Wertes ohne Speicherung.</td></tr>
<tr><td><code>/</code></td><td>Division</td><td><code>x / 2;</code></td><td>Liefert das Ergebnis der Division des linken durch den rechten Wert ohne Speicherung.</td></tr>
<tr><td><code>%</code></td><td>Modulo</td><td><code>x % 10;</code></td><td>Liefert den Rest der ganzzahligen Division des linken durch den rechten Wert ohne Speicherung.</td></tr>
</table>  

## Kombinierte Operatoren  

<table>
<tr align="left"><td width="50">Zeichen</td><td width="200">Name</td><td width="120">Beispiel</td><td>Anmerkung</td></tr>  
<tr><td><code>+=</code></td><td>Additionszuweisung</td><td><code>x += 19;</code></td><td>Der Wert der Variablen wird um den rechtsstehenden Wert erhöht. Gleichbedeutend mit <code>x = x + 19;</code></td></tr>
<tr><td><code>-=</code></td><td>Subtraktionszuweisung</td><td><code>x -= 3;</code></td><td>Der Wert der Variablen wird um den rechtsstehenden Wert vermindert. Gleichbedeutend mit <code>x = x - 3;</code></td></tr>
<tr><td><code>*=</code></td><td>Multiplikationszuweisung</td><td><code>x *= 100;</code></td><td>Der Wert der Variablen wird um den rechtsstehenden Faktor erhöht. Gleichbedeutend mit <code>x = x *100;</code></td></tr>
<tr><td><code>/=</code></td><td>Divisionszuweisung</td><td><code>x /= 4;</code></td><td>Der Wert der Variablen wird um den rechtsstehenden  Divisor vermindert. Gleichbedeutend mit <code>x = x / 4;</code></td></tr>
<tr><td><code>++</code></td><td>Inkrement</td><td><code>x++;</code></td><td>Der Wert der Variablen wird um 1 erhöht. Gleichbedeutend mit <code>x += 1;</code></td></tr>
<tr><td><code>--</code></td><td>Dekrement</td><td><code>x--;</code></td><td>Der Wert der Variablen wird um 1 vermindert. Gleichbedeutend mit <code>x -= 1;</code></td></tr>
</table>

## Vergleichsoperatoren  

<table>
<tr align="left"><td width="50">Zeichen</td><td width="200">Name</td><td width="120">Beispiel</td><td>Anmerkung</td></tr>  
<tr><td><code>==</code></td><td>Wertgleichheit</td><td><code>x == "AB"</code></td><td>Liefert den Wert true, wenn die Werte auf der linken und rechten Seite gleich sind. Vorsicht bei floats!!</td></tr>
<tr><td><code>===</code></td><td>Wert- und Typgleichheit</td><td><code>x === "42"</code></td><td>Liefert den Wert true, wenn die Wertgleichheit zutrifft und beide Ausdrücke auch vom gleichen Typ sind.</td></tr>
<tr><td><code>!=</code></td><td>Ungleichheit</td><td><code>x != "AB"</code></td><td>Liefert den Wert true, wenn die Werte auf der linken und rechten Seite unterschiedlich sind.</td></tr>
<tr><td><code>></code></td><td>Größer</td><td><code>x > 2.32</code></td><td>Liefert den Wert true, wenn der linke Wert größer als der rechte ist.</td></tr>
<tr><td><code><</code></td><td>Kleiner</td><td><code>x < 2.32</code></td><td>Liefert den Wert true, wenn der linke Wert kleiner als der rechte ist.</td></tr>
<tr><td><code>>=</code></td><td>Größergleich</td><td><code>x >= 2.32</code></td><td>Liefert den Wert true, wenn der linke Wert größer als der rechte oder genau gleich ist.</td></tr>
<tr><td><code><=</code></td><td>Kleinergleich</td><td><code>x <= 2.32</code></td><td>Liefert den Wert true, wenn der linke Wert kleiner als der rechte oder genau gleich ist.</td></tr>
</table>

## Logische Operatoren  

<table>
<tr align="left"><td width="50">Zeichen</td><td width="200">Name</td><td width="120">Beispiel</td><td>Anmerkung</td></tr>  
<tr><td><code>&&</code></td><td>Und</td><td><code>x>2 && x<9</code></td><td>Liefert den Wert true, wenn der linke und der rechte Ausdruck beide den Wert true haben. Hier, wenn x zwischen 2 und 9 liegt.</td></tr>  
<tr><td><code>||</code></td><td>Oder</td><td><code>x<2 || x>9</code></td><td>Liefert true, wenn wenigstens einer der beiden Ausdrücke true ist. Hier, wenn x außerhalb des Bereichs 2 bis 9 liegt.</td></tr>  
<tr><td><code>!</code></td><td>Nicht</td><td><code>!(x > 10)</code></td><td>Negiert den Ausdruck, liefert also true, wenn der folgende Ausdruck false ist. Hier, wenn x <= 10.</td></tr> 
</table>

## Bitweise Operatoren

Damit werden direkt Bitmuster manipuliert. Siehe [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)
