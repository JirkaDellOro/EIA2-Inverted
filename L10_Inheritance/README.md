# L10_Inheritance

<img src="Material/barabara-liskov.jpg" width="100" align="right"/>
<img src="Material/jeannette-wing.jpg" width="100" align="left"/>

1987 stellte Bararbara Liskov auf einer Konferenz ein Grundprinzip der objektorientierten Modellierung vor. Danach soll ein Objekt einer Klasse durch ein Objekt einer Sub-Klasse dieser Klasse ersetzt werden können, ohne dass das Programm, welches das Objekt verwendet, verändert werden muss. 1993 formalisierte Sie zusammen mit Jeannette Wong was heute als das **Liskov'sche Substitutionsprinzip** bekannt ist.

## Generalisierung vs Spezialisierung
Bezogen auf Hunde kann das Liskov'sche Substitutionsprinzip folgendermaßen beispielhaft dargestellt werden:  
Wenn Hunde grundsätzlich bellen können, dann können auch Subklassen von `Hund`, wie `Dogge`, `Pinscher` und `Pudel` bellen. Wenn Du also an einem Haus klingelst, an dem ein Schild "Warnung vor dem Hund" steht, darfst Du davon ausgehen, dass ein Hund bellen wird. Es ist nicht erforderlich, dass auf dem Schild "Warnung vor dem Pudel" steht, auch wenn der Hund in dem Haus ein Pudel sein sollte.  

`Pudel` ist eine Spezialisierung von `Hund`, `Hund` ist die Generalisierung von `Pudel`.  

Pudel gelten als besonders gelehrig und werden daher gerne für besondere Tricks und im Zirkus eingesetzt. Dabei ist es wiederum unerheblich, ob es sich um Toy-, Zwerg-, oder Großpudel handelt. Diese sind Spezialisierungen von Pudel, die sich in der Varianz der Größe unterscheiden.  

Der `Hund` kann weiter generalisiert werden, denn er gehört zu der Familie der `Hundeartigen`, zu denen beispielsweise auch Bären, Robben und Stinktiere gehören. Zusammen mit den `Katzenartigen` stellen die `Hundeartigen` die `Raubtiere` die wiederum zu der Klasse der `Säugetiere` gehören, von denen auch der `Mensch` eine Spezialisierung darstellt.

## Darstellung im Klassendiagramm
In der Biologie teilt man ein in Klassen, Rassen, Arten, Gattungen, Familien, Ordnungen und so weiter. Bei der objektorientierten Modellierung muss man lediglich Klassen unterscheiden in Super- und Subklassen. 

Die Superklasse stellt die Generalisierung einer Subklasse dar, die Subklasse eine Spezialisierung der Superklasse.

Im Klassendiagramm verweisen Pfeile mit einer dreieckigen und leeren Spitze von der Subklasse auf ihre Superklasse und stellen so diese Beziehung dar. Der oben angeführte Exkurs in die Biologie, der übrigens keiner wissenschaftlichen Überprüfung standhält, könnte im Klassendiagramm folgendermaßen aussehen.  

![](Material/draw.io/Dogs_ClassDiagram.svg)

- [x] Studiere das Diagramm und mache dir die Beziehung zwischen Sub- und Superklasse klar.
- [x] Beschreibe nur anhand des Diagramms die Eigenschaften und Fähigkeiten eines Zwergpudels.
- [x] Sollten die Pudel eigene Subklassen bilden? Was wäre eine Alternative?

