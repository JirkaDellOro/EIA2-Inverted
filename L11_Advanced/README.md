# L11 Advanced



- `abstract` 

**Video: **
Diese Lektion startet mit einem Video
- Lösung des Ufo-Projektil-Problems.
  - Lösungsvarianten vorstellen und implementieren
    - Ufo kennt moveables und streut dort Projektile ein
    - Main fragt Ufos, ob sie eins auf Lager haben
  - dritte Lösungsvariante: Ufo schickt CustomEvent an Canvas
    - in Aktivitätsdiagrammen ergänzen
    - implementieren
      - shoot projectile nicht mehr als Handler sonder als normale Funktion mit startPosition als Parameter
        - origin -> _origin
