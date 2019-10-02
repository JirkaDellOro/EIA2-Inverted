# Arithmetische und kombinierte Operatoren  

Zeichen<img width="100"/>|Name<img width="400"/>|Beispiel<img width="200"/>|Anmerkung  
:-:|:-|:-|:-|  
`+`|Addition|`x + 5;`|Liefert das Ergebnis der Addition des linken und rechten Wertes ohne Speicherung.  
`-`|Subtraktion|`17 - x;`|Liefert das Ergebnis der Subtraktion des linken und rechten Wertes ohne Speicherung.  
*|Multiplikation|5 * x;|Liefert das Ergebnis der Multiplikation des linken und rechten Wertes ohne Speicherung.  
/|Division|x / 2;|Liefert das Ergebnis der Division des linken durch den rechten Wert ohne Speicherung.
%|Modulo|x % 10;|Liefert den Rest der ganzzahligen Division des linken durch den rechten Wert ohne Speicherung.
+=|Additionszuweisung|x += 19;|Der Wert der Variablen wird um den rechtsstehenden Wert erhöht. Gleichbedeutend mit X = X + 19;
-=|Subtraktionszuweisung|x -= 3;|Der Wert der Variablen wird um den rechtsstehenden Wert vermindert. Gleichbedeutend mit X = X - 3;
*=|Multiplikationszuweisung|x *= 100;|Der Wert der Variablen wird um den rechtsstehenden Faktor erhöht. Gleichbedeutend mit X = X *100;
/=|Divisionszuweisung|x /= 4;|Der Wert der Variablen wird um den rechtsstehenden  Divisor vermindert. Gleichbedeutend mit X = X / 4;
++|Inkrement|x++;|Der Wert der Variablen wird um 1 erhöht. Gleichbedeutend mit X += 1;
--|Dekrement|x--;|Der Wert der Variablen wird um 1 vermindert. Gleichbedeutend mit X -= 1;

# Vergleichsoperatoren  

Zeichen|Name|Beispiel|Anmerkung  
-|-|-|-  
==|Gleichheit|x == "AB"|Liefert den Wert true, wenn die Werte auf der linken und rechten Seite gleich sind. Vorsicht bei floats!!  
!=|Ungleichheit|x != "AB"|Liefert den Wert true, wenn die Werte auf der linken und rechten Seite unterschiedlich sind.  
\>|Größer|x > 2.32|Liefert den Wert true, wenn der linke Wert größer als der rechte ist.  
\<|Kleiner|x < 2.32|Liefert den Wert true, wenn der linke Wert kleiner als der rechte ist.  
\>=|Größergleich|x >= 2.32|Liefert den Wert true, wenn der linke Wert größer als der rechte oder genau gleich ist.  
\<=|Kleinergleich|x <= 2.32|Liefert den Wert true, wenn der linke Wert kleiner als der rechte oder genau gleich ist.  

# Logische Operatoren  

Zeichen|Name|Beispiel|Anmerkung  
-|-|-|-  
&&|Und|x>2 && x<9|Liefert den Wert true, wenn der linke und der rechte Ausdruck beide den Wert true haben. Hier, wenn x zwischen 2 und 9 liegt.  
\|\||Oder|`x<2 \|\| x>9`|Liefert true, wenn wenigstens einer der beiden Ausdrücke true ist. Hier, wenn x außerhalb des Bereichs 2 bis 9 liegt.  
!|Nicht|!(x > 10)|Negiert den Ausdruck, liefert also true, wenn der folgende Ausdruck false ist. Hier, wenn x <= 10.  
 
