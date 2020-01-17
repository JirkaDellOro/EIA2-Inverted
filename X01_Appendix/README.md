# Anhang

## 1. Unified Modelling Language

### 1.1. Activity Diagrams

#### 1.1.1. Elements
![](UML/Elements.png)

#### 1.1.2. Basic flow structures
<table>
<th align="left">Linear</th>
<tr></tr>
<tr><td><img src="UML/BasicLinear.svg"/></td></tr>
<tr><td><pre lang="typescript">
console.log("Hello");
</pre></td></tr>
</table>

<table>
<th align="left">Conditional</th>
<tr></tr>
<tr><td><img src="UML/BasicConditional.svg"/></td></tr>
<tr><td><pre lang="typescript">
...
if (!(x > 1))
  console.log("Hello");
</pre></td></tr>
</table>

<table>
<th align="left">Exclusive Conditional</th>
<tr></tr>
<tr><td><img src="UML/BasicExclusive.svg"/></td></tr>
<tr><td><pre lang="typescript">
...
if (x > 1)
  console.log("Goodbye");
else
  console.log("Hello");
console.log(", my dear");
</pre></td></tr>
</table>


<table>
<th align="left">Multiple Conditions</th>
<tr></tr>
<tr><td><img src="UML/BasicExclusive.svg"/></td></tr>
<tr><td><pre lang="typescript">
...
if (x > 1)
  console.log("Goodbye");
else
  console.log("Hello");
console.log(", my dear");
</pre></td></tr>
</table>


