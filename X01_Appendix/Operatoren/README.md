# Arithmetische und kombinierte Operatoren  

<table>
<tr align="left"><td width="100">Zeichen</td><td width="200">Name</td><td width="150">Beispiel</td><td>Anmerkung</td></tr>  
<tr><td>+</td><td>Addition</td><td>x + 5;</td><td>Liefert das Ergebnis der Addition des linken und rechten Wertes ohne Speicherung.</td></tr>  <tr align="left"><td width="100">Zeichen</td><td width="200">Name</td><td width="150">Beispiel</td><td>Anmerkung</td></tr>  

<tr><td>-</td><td>Subtraktion</td><td>17 - x;</td><td>Liefert das Ergebnis der Subtraktion des linken und rechten Wertes ohne Speicherung.</td></tr>
<tr><td>*</td><td>Multiplikation</td><td>5 * x;</td><td>Liefert das Ergebnis der Multiplikation des linken und rechten Wertes ohne Speicherung.</td></tr>
<tr><td>/</td><td>Division</td><td>x / 2;</td><td>Liefert das Ergebnis der Division des linken durch den rechten Wert ohne Speicherung.</td></tr>
<tr><td>%</td><td>Modulo</td><td>x % 10;</td><td>Liefert den Rest der ganzzahligen Division des linken durch den rechten Wert ohne Speicherung.</td></tr>
<tr><td>+=</td><td>Additionszuweisung</td><td>x += 19;</td><td>Der Wert der Variablen wird um den rechtsstehenden Wert erhöht. Gleichbedeutend mit x = x + 19;</td></tr>
<tr><td>-=</td><td>Subtraktionszuweisung</td><td>x -= 3;</td><td>Der Wert der Variablen wird um den rechtsstehenden Wert vermindert. Gleichbedeutend mit x = x - 3;</td></tr>
<tr><td>*=</td><td>Multiplikationszuweisung</td><td>x *= 100;</td><td>Der Wert der Variablen wird um den rechtsstehenden Faktor erhöht. Gleichbedeutend mit x = x *100;</td></tr>
<tr><td>/=</td><td>Divisionszuweisung</td><td>x /= 4;</td><td>Der Wert der Variablen wird um den rechtsstehenden  Divisor vermindert. Gleichbedeutend mit x = x / 4;</td></tr>
<tr><td>++</td><td>Inkrement</td><td>x++;</td><td>Der Wert der Variablen wird um 1 erhöht. Gleichbedeutend mit x += 1;</td></tr>
<tr><td>--</td><td>Dekrement</td><td>x--;</td><td>Der Wert der Variablen wird um 1 vermindert. Gleichbedeutend mit x -= 1;</td></tr>
</table>

# Vergleichsoperatoren  

<table>
<tr align="left"><td width="100">Zeichen</td><td width="200">Name</td><td width="150">Beispiel</td><td>Anmerkung</td></tr>  
<tr><td>==</td><td>Gleichheit</td><td>x == "AB"</td><td>Liefert den Wert true, wenn die Werte auf der linken und rechten Seite gleich sind. Vorsicht bei floats!!  
<tr><td>!=</td><td>Ungleichheit</td><td>x != "AB"</td><td>Liefert den Wert true, wenn die Werte auf der linken und rechten Seite unterschiedlich sind.  
<tr><td>></td><td>Größer</td><td>x > 2.32</td><td>Liefert den Wert true, wenn der linke Wert größer als der rechte ist.  
<tr><td><</td><td>Kleiner</td><td>x < 2.32</td><td>Liefert den Wert true, wenn der linke Wert kleiner als der rechte ist.  
<tr><td>>=</td><td>Größergleich</td><td>x >= 2.32</td><td>Liefert den Wert true, wenn der linke Wert größer als der rechte oder genau gleich ist.  
<tr><td><=</td><td>Kleinergleich</td><td>x <= 2.32</td><td>Liefert den Wert true, wenn der linke Wert kleiner als der rechte oder genau gleich ist.</td></tr>
</table>   
 
# Logische Operatoren  
<table>
<tr align="left"><td width="100">Zeichen</td><td width="200">Name</td><td width="150">Beispiel</td><td>Anmerkung</td></tr>  
<tr><td>&&</td><td>Und</td><td>x>2 && x<9</td><td>Liefert den Wert true, wenn der linke und der rechte Ausdruck beide den Wert true haben. Hier, wenn x zwischen 2 und 9 liegt.</td></tr>  
<tr><td>||</td><td>Oder</td><td>x<2 || x>9</td><td>Liefert true, wenn wenigstens einer der beiden Ausdrücke true ist. Hier, wenn x außerhalb des Bereichs 2 bis 9 liegt.</td></tr>  
<tr><td>!</td><td>Nicht</td><td>!(x > 10)</td><td>Negiert den Ausdruck, liefert also true, wenn der folgende Ausdruck false ist. Hier, wenn x <= 10.
</table>
 
