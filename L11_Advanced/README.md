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


## Klassenattribute
- `static`
- speed in Ufo und Projectil
- Pfade in den Klassen

## Gültigkeit
Wiederholung von Sichtbarkeitsbereichen local, global, function, block, namespace, module etc.

## Sichtbarkeit
### public
### private
### protected

## Abstraktion
- `abstract` 

## getter/setter

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
  
