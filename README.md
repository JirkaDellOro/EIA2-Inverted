Willkommen zum invertierten Unterricht des Moduls
# Entwicklung interaktiver Anwendungen II (EIA2)
## Rückblick
Im Modul "Entwicklung interaktiver Anwendungen I" (EIA1) wurden Sie zunächst an HTML und CSS heran geführt, um damit eine Grundlage für die weiteren Schritte zu schaffen. Denn als technische Plattform dienen in dieser Modulreihe Internetbrowser, da sie auf allen gängigen Geräten zur Verfügung stehen. 
Darüber hinaus haben sie tiefergehende Kenntnisse im Umgang mit einer imperativen Programmiersprache erlangt und Aufgaben mit Hilfe einfacher, prozeduraler Algorithmen gelöst. Es wurde TypeScript verwendet, da - im Vergleich zu Javascript - einerseits die verwendeten Datenstrukturen sichtbar werden und andererseits automatische und umfassende Hilfestellung bei der Implementation gewährleistet wird. Auch erste Interaktionen konnten Sie mit Hilfe der Ereignissteuerung umsetzen. Durch die Manipulation des "Document Object Model" (DOM) konnten Sie die Reaktionen des Systems für Nutzer planvoll sichtbar machen. Hierzu hatten Sie ein gutes Verständnis der DOM-Klassenhierarchie und des Laufzeitverhaltens erlangt.
## Einblick
Es ist erforderlich, dass sämtliche Inhalte des Moduls EIA1 verinnerlicht sind und angewendet werden können, insbesondere
- Die Arbeit mit Github und Visual Studio Code
- Die Informationsrepräsentation im binären und hexadezimalen System
- Die grundlegenden in Javascript und TypeScript verwendeten Datentypen
- Einfache und assoziative Arrays
- Die Sprachkonstrukte imperativer
Programmiersprachen: Anweisungen, Operatoren, Kontrollstrukturen, Funktionen
- Generierung dynamischer Webseiten
- DOM-Klassen- und Laufzeit-Hierarchie
- Problemlösungsstrategie
- Die Arbeit mit der Browserkonsole und Debugging im Browser
## Ausblick
In EIA2 lernen Sie, auch komplizierte Aufgabenstellungen anzugehen, wobei die Konzeption im Vordergrund steht. Hierzu werden Sie Diagrammformen der "Unified Modelling Language" (UML) verwenden, um mit deren Hilfe Probleme zu durchdringen und Lösungen zu konzipieren. Ihre nachfolgenden Implementationen mit TypeScript stellen lediglich Nachweise der erfolgreichen Konzeption dar.  
Zunächst werden mit diesen Mittel Aufgabenstellungen bearbeitet, die sich direkt an die DOM-Manipulationen von EIA1 anschließen. Danach werden zusätzlich die interaktiven Formularelemente des HTML-Standards eingesetzt und ausgewertet. Nutzer können damit Informationen an andere Rechner zur Auswertung oder Speicherung senden, daher beschäftigen Sie sich mit den entsprechenden Strukturen bezüglich Server und Datenbank. Danach befasst sich der Kurs mit dem objektorientierten Paradigma der Software-Entwicklung, das es zulässt, auch für sehr komplexe Aufgabenstellungen intuitiv zu konzipieren. Damit einher gehen erweiterte Anwendungen der UML-Diagramme und Implementationsdetails. Die grafische Darstellung erfolgt dann über das HTMLCanvasElement, was eine freie Gestaltung zulässt, und die Nutzer-Interaktionen können weit über die für Webseiten üblichen hinausgehen.
## Gliederung
### L00_Preface
- Medienkonzeption bei DM
- Aufbau der Veranstaltung
- Verwendete Technik
- Landscape
- Coding Guidelines
### L01_Recap & Foundation
- Code structures as activities
- Activity- & Object-Nodes
- Simple and Complex Datatypes
- Javascript Standard-Objects
- Javascript Global Functions
- Document Object Model
- Retrieving & Creating Elements
- Designtime, Compiletime, Runtime
- Tracetable
- Debugger
### L02_Events
- Event-Object, Listener, Handler
- Implementation
- Propagation (Phases)
- Targets
- Pointer, Keyboard, Window
- this-binding, Arrow-Function
- Drag&Drop
  - mark element as draggable
  - set dataTransfer-object on dragstart
  - event-information is saved and accessible on drop
  - allow drop on element, preventDefault on dragover
  - get dataTransfer-object on drop and process
### L03_FormElements
- Input Text, different types
- Radiobutton, Checkbox
- Slider, Stepper
- Select, Datalist
- Output
- Name 
- Iteration on Elements
- Change- & Input-Event
- Attributes without value
  - multiple for select
  - checked for checkbox
### L04_CreateFormFromDataFile
- Interfaces
- Associative Array
  - homogenous
  - heterogenous
  - static keys
  - dynamic keys
- JSON
- Export
- Iterate over elements
### L05_SendFormData
- GET/POST
- QueryString
- FormData-Object
- Fetch (former XMLHttpRequest)
- Promise
### L06_RequestResponse
- ServerSide
- Node
  - install @types/node with npm
  - argv
  - env
- Heroku
  - start new app in Heroku
  - connect to repository and branch
  - deploy app and view log
  - add and edit package.json
  - call app via http -> server missing
- Server- & URL-Class
  - add http-Server and create response
  - find parameters in browser analysis (if possible for GET)
  - show node URL scheme in documentation
- CORS
- localhost
### L07_Database
- NoSQL
- MongoDB
  - start mongod in terminal
  - see port and other messages
  - start shell in system console
  - type some commands
  - see response in terminal
- Mongo in Node
  -    install @types
- Database on MongoDB Atlas (former mLab)
- Database.ts - Module
- Callbacks
- Anonymous and nested functions
### L08_Canvas
- HTMLCanvasElement
- RenderingContext
- Immediate/Deferred Rendering
- Path-Metaphor
- Drawing Commands
- Relative Positioning
- Save/Restore
- Shortcuts fillRect and strokeRect
- Create functions for drawing repetitive images
### L09_Classes
- Refactor interfaces to classes
- Class-Diagram
- Property/Attribute
- Method
- Constructor
- Instance/Object
- Garbage Collection
- Animation
### L10_Inheritance
- Identify common properties and behaviours
- Superclass, Subclass
- Inheritance in Diagram
- Polymorphism
- Abstract classes & methods
- Animate different objects with common base
### L11_Advanced
- Scopes and Visibility
  - public
  - protected
  - private
- Static
### L12_Addition
- Exceptions
- Enums
- Generics