Node.js sollte bereits installiert sein.

`npm install @types/node` für die Node types, entweder im Projekt oder mit `-g`. 
In diesem Zusammenhang kann man ggf auch eine .gitignore einsetzen, um die node_modules nicht mit zu pushen. Dafür muss man dann aber wahrscheinlich auch auf die package.json eingehen. 

Heroku funktioniert wie bisher, man könnte sich aber auch überlegen die Studi-cloud zu verwenden (Anleitung dazu: https://studicloud.hs-furtwangen.de/). Studi-Cloud ist allerdings deutlich schwieriger in jeder Hinsicht: Keinerlei Automatisierung, kein Userinterface, keine einfache Umgangsform und dann auch noch Linux. Da müsste man dann ggf auch noch in Linux und Shell Commands einsteigen, was den Rahmen definitiv sprengen würde, für Interessierte Studis aber durchaus interessant sein kann (letztes Semester immerhin einer).

Es kann sein dass `port == undefined` nicht funktioniert, ich glaube darum haben wir es letztes Semester mit `!port` gecheckt.

PS: Ports nicht vergessen zu erklären
