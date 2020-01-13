# eiaSteroids
Welcome to this example project demonstrating the skills taught in the course  
**Entwicklung interaktiver Anwendungen II (EIA2)**  
at the Hochschule Furtwangen University (HFU)  
to the students of the curriculum Medienkonzeption (MKB)  

## Design
Most prominent are the skills to design complex software solutions using UML diagrams, specifically use-case, activity- and class-diagrams. Thus, browse the design documentation below first:  

- [Design](#-design)  

## Production
Programming skills are required to prove the designs and to reiterate them. Also a designer must be capable of creating prototypes herself in order to tinker and come up with new ideas. Here is the game designed:

- [Play **eiaSteroids**](eiaSteroids.html)

Find the code here
- [Code](https://github.com/JirkaDellOro/EIA2-Inverted/tree/master/X01_Appendix/Code/L12_Addition/eiaSteroids) 

## Reference
For completeness, this project also offers a code documentation automatically created by [TypeDoc](https://typedoc.org/), based on the comments in the code files in JSDoc format. See here:

- [Reference](Documentation/Code/index.html)

## Tools
These are the tools used for this project and throughout the course.
- [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
- [TypeScript](https://www.typescriptlang.org/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [git](https://git-scm.com/)
- [Github](https://github.com/)
- [draw.io](https://www.draw.io/)

## Notice
eiaSteroids was created by Prof. Jirka Dell'Oro-Friedl at the HFU in 2020. Please contact me for questions at del@hs-furtwangen.de

# Design
The following documentation is a compilation of the finalized UML-diagrams created during the design, the production and the documentation of eiaSteroids. The first drafts where created with draw.io, the second draft by hand during the video shootings for the online course. Scans of the handmade diagrams can be found in the online course.  
The activity diagrams are not complete, since many small functions were trivial or already designed on similar entities. Also, in contrast to the first scribble, there is no hyperjump. Instead, a more interesting energy handling was designed which included a shield to protect the players spaceship at the cost of energy loss.

## Scribble
![](Documentation/Diagrams/Asteroids_Scribble.svg)

## Use-Case-Diagram
![](Documentation\Diagrams\Asteroids_UseCaseDiagram.svg)

## Class-Diagram
![](Documentation\Diagrams\Asteroids_ClassDiagram.svg)

## Activity diagrams for the main program
![](Documentation\Diagrams\Asteroids_ActivityDiagram-Main_1.svg)  
![](Documentation\Diagrams\Asteroids_ActivityDiagram-Main_2.svg)

## Activity diagram for the class Moveable
![](Documentation\Diagrams\Asteroids_ActivityDiagram-Moveable.svg) 

## Activity diagram for the class Asteroid
![](Documentation\Diagrams\Asteroids_ActivityDiagram-Asteroid.svg) 

## Activity diagram for the class Projectile
![](Documentation\Diagrams\Asteroids_ActivityDiagram-Projectile.svg) 

## Activity diagram for the class Ufo
![](Documentation\Diagrams\Asteroids_ActivityDiagram-Ufo.svg) 

