# Naming
## Self-explanatory
The developers code must be self-explanatory. This requires the strict use of naming conventions. Use names, that clearly explain the activity or information addressed and don't be greedy with letters. Short names are allowed only in very small scopes or when their meaning is clear by convention, such as `y` for a vertical position.
## Variables and functions
The names of variables and functions must start lowercase and follow the camelCase notation, with uppercase letters indicating the start of a new part in a compound name such as `animalLion`. The names of variables describe an information or an object. Names of functions and methods strictly describe activities e.g. `calculateHorizontalPosition(...)` or questions e.g. `isHit()`
## Formal parameters
Name formal parameters in a functions signature like variables, but prefix them with an underscore like `_event: Event`
## Classes, interfaces and namespaces/modules
Names of classes, interfaces and namespaces or modules start with an uppercase Letter and then follow the camelCase notation (PascalCase). The name describes exactly one object of that type, not an activity. E.g. `ObjectManager`. 
## Enums
The names of enumerations and their elements are written all uppercase, with underscores seperating parts of the name e.g. `EVENT_TYPES.EXIT_FRAME`
## Avoid ambiguities
Bad example from the DOM-API: `getElementById(...)` vs `getElementsByTagName(...)`. Only the little `s` in the middle indicates that one returns a collection, not a single element. Better: `getElementCollectionByTagName(...)`. However, in `getElements(...)`, the `s` is clearly visible, since it's the last letter.
## Prefixes
Some prefixes may be helpful for finding names for variables, use is encouraged  

|Prefix|Example|Meaning
|-|-|-
|`n`|`nObjects`|an amount
|`i`|`iObject`|an index
|`x`, `y`, `z`|`xPos`|a direction or dimension
|`min`, `max`|`maxHeight`|boundaries  

## Use context and reduce redundancy
For example, `state` may have different meaning depending on the context. `Machine.state` indicates something different than `Address.state`. However, it is redundant to write `Machine.stateTheMachineOperatesIn` or `Address.stateAsThePoliticalEntity`, since the context is provided already by the namespaces. Use this instead of implementing redundancies.

# Comments
Use comments sparsely! If you feel that some code needs commenting rethink it and the naming of its components. Remember that you need to maintain comments just as you need to maintain code. Otherwise comments are not only useless but obstructive. Comments are allowed in the following cases

# Structure
## Size
A function should not consist of more than 20 lines of code. If possible, split it up into smaller functions each of which has an explanatory name. This way, the calling function consists of multiple calls that are easy to read and interpret, and the concerns are distributed to smaller functions with the same qualities.
Also, watch out for the size of classes, beware of monsters! Keep the number of attributes low
## Separation of Concerns
One function/method should care only about one concern and do this well
## Indentation Depth
A function should not indent more than two levels. Use return statements not only at the end, but so called "early outs" and throw exceptions to keep indentation level low.
## Top Down
Order functions and methods in such a way, that the call sits above the called function in code. Reading from top to bottom, the code displays the hierarchy of calls making it possible to understand the overall structure first before diving into the details.

# Miscellaneous
## Explicit types
Strictly use explicit typing wherever possible. The type `any` is prohibited. 
## Semicolons
Always end statements with semicolon.
## Literal strings
Literal strings should be enclosed in double quotiation marks e.g. `"Hello World!"`
## Magic numbers
Are simply disallowed. Never use a literal value in a function call when its meaning is not extremely obvious (e.g. `Math.pow(x, 5)` to retrieve x to the power of 5). In all other cases, define a variable with a explanatory name and assign the literal value to it. This way, there is a value and a meaning to it, and its value can be changed in a single place.
## Files
Use one file per class. Interfaces may be compiled with using classes. Use PascalCase for filenames, exactly the same name as the classes.
## Additional reading
https://github.com/basarat/typescript-book/blob/master/docs/styleguide/styleguide.md  
https://github.com/Platypi/style_typescript  
https://github.com/excelmicro/typescript
