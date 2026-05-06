# CheckPoint 7

<br>

![JavaScript](.gitbook/assets/Code_JS-1200x630.original.avif)\
<br>

### 1. ¿Qué diferencia a Javascript de cualquier otro lenguaje de programación?

<br>

JavaScript es especial por varias razones que lo han convertido en uno de los lenguajes de programación más importantes y populares en el desarrollo web y más allá. A continuación, te explico en detalle por qué JavaScript es especial:

​

* **Lenguaje de programación del navegador**

​

JavaScript es el único lenguaje de programación que se ejecuta de forma nativa en todos los navegadores web modernos sin necesidad de plugins adicionales. Esto significa que cualquier página web puede incluir código JavaScript para hacerla interactiva, dinámica y más atractiva para el usuario.

​

* **Versatilidad y omnipresencia**

<br>

**Frontend:** JavaScript es el lenguaje principal para el desarrollo del lado del cliente (frontend). Permite manipular el DOM (Document Object Model), gestionar eventos, validar formularios, crear animaciones, y mucho más.

<br>

**Backend:** Con la llegada de Node.js, JavaScript también se usa en el servidor, lo que permite a los desarrolladores usar un solo lenguaje para todo el stack de desarrollo (full stack).

<br>

**Aplicaciones móviles y de escritorio:** Frameworks como React Native, Electron y otros permiten crear aplicaciones móviles y de escritorio usando JavaScript.

​

* **Ecosistema y comunidad**

​

JavaScript tiene un ecosistema enorme con miles de librerías y frameworks (React, Angular, Vue, etc.) que facilitan el desarrollo rápido y eficiente. Además, cuenta con una comunidad global muy activa que contribuye constantemente con herramientas, tutoriales y soporte.

​

* **Evolución constante**

​

JavaScript no es un lenguaje estático; evoluciona continuamente a través del estándar ECMAScript, que introduce nuevas características y mejoras regularmente, manteniéndolo moderno y relevante.

​

* **Facilidad de aprendizaje y uso**

​

JavaScript es relativamente fácil de aprender para principiantes debido a su sintaxis flexible y su naturaleza interpretada, lo que permite probar código rápidamente en cualquier navegador sin necesidad de configuraciones complejas.

​

* **Interactividad y experiencia de usuario**

​

JavaScript permite crear experiencias de usuario ricas e interactivas, desde menús desplegables hasta juegos en línea, pasando por aplicaciones web complejas que funcionan casi como aplicaciones nativas.

​

* **Integración con otras tecnologías web**

​

JavaScript se integra perfectamente con HTML y CSS, los otros pilares del desarrollo web, permitiendo manipular y modificar la estructura y el estilo de las páginas web en tiempo real.

​

***

​

Resumiendo, JavaScript es especial porque es el lenguaje universal del navegador, extremadamente versátil, con un ecosistema robusto y en constante evolución, que permite crear desde simples interacciones hasta aplicaciones web completas y complejas. Esta combinación única lo hace indispensable en el mundo del desarrollo web y tecnológico actual.

\
<br>

### 2. ¿Cuáles son algunos tipos de datos JS?

<br>

En JavaScript, los tipos de datos se dividen principalmente en dos categorías: tipos primitivos y tipos de objetos. A continuación vamos a ver detalladamente cada uno de ellos:

<br>

#### **1. Tipos Primitivos**

Son los los tipos de datos básicos que no son objetos y que representan valores simples. Los tipos primitivos en JavaScript son los siguientes:\
<br>

* **Number:**

Representa tanto números enteros como números de punto flotante.

Ejemplo: 42, 3.14.\
<br>

* **BigInt:**

Representa números enteros muy grandes que exceden el límite de Number.

Se escriben con una **n** al final.

Ejemplo: 9007199254740991n.\
<br>

* **String:**

Cadena de texto.

Ejemplo: "Hola mundo".\
<br>

* **Boolean:**

Representa un valor lógico, que puede ser `true` o `false`.\
<br>

* **Undefined:**

Representa una variable que ha sido declarada pero no inicializada.\
<br>

* **Null:**

Representa la ausencia intencional de cualquier valor u objeto.\
<br>

* **Symbol:**

Representa un identificador único e inmutable, usado principalmente para propiedades de objetos que no colisionen.

Ejemplo: Symbol('id').

\
<br>

#### **2. Tipos de Objetos**

<br>

Los objetos son colecciones de propiedades y pueden contener métodos.\
<br>

* **Object:**

Tipo base para todos los objetos.

Puede contener pares clave-valor.\
<br>

* **Array:**

Un tipo especial de objeto para almacenar listas ordenadas de valores.

Ejemplo: \[1, 2, 3].\
<br>

* **Function:**

También es un objeto, representa funciones.

Ejemplo: function() { return "Hola"; }.

Date, RegExp, Map, Set, entre otros, son tipos de objetos incorporados que tienen funcionalidades específicas.\
<br>

<br>

| Tipo de dato | Descripción                 | Ejemplo           |
| ------------ | --------------------------- | ----------------- |
| Number       | Números enteros y decimales | 123, 3.14         |
| BigInt       | Números enteros muy grandes | 9007199254740991n |
| String       | Texto                       | "Hola"            |
| Boolean      | Valores lógicos             | true, false       |
| Undefined    | Variable no inicializada    | undefined         |
| Null         | Valor nulo intencional      | null              |
| Symbol       | Identificador único         | Symbol('id')      |
| Object       | Colección de propiedades    | { nombre: "Ana" } |
| Array        | Lista ordenada de valores   | \[1, 2, 3]        |
| Function     | Funciones como objetos      | function() {}     |

\
<br>

**Los tipos primitivos en JavaScript son inmutables**. Esto significa que una vez que se crea un valor primitivo, no puede ser cambiado o modificado. Por ejemplo, si tienes una cadena de texto (string) o un número (number), no puedes alterar ese valor directamente; cualquier operación que parezca modificarlo en realidad crea un nuevo valor.

Para ilustrar:

Las cadenas de texto son inmutables: si haces una operación como concatenar o cambiar un carácter, se genera una nueva cadena, no se modifica la original. Los números, booleanos, null, undefined, symbol y bigint también son inmutables por naturaleza. En contraste, **los objetos en JavaScript son mutables**, lo que significa que sus propiedades o contenido pueden cambiar después de ser creados.

Esta inmutabilidad de los tipos primitivos es fundamental para entender cómo funcionan las asignaciones y comparaciones en JavaScript.

\
<br>

### 3. ¿Cuáles son las tres funciones de String en JS?

<br>

\
<br>

### 4. ¿Qué es un condicional?

<br>

Un condicional en JavaScript es una estructura de control que permite al programa tomar decisiones y ejecutar diferentes bloques de código según si una condición lógica es verdadera (`true`) o falsa (`false`).&#x20;

Es fundamental para crear comportamiento dinámico, evaluando condiciones (`if`, `else`, `switch`) para dirigir el flujo.&#x20;



**Tipos y Características Principales:**



* **`if` / `else if` / `else`:** La estructura básica. Evalúa una condición; si es verdadera, ejecuta el bloque `if`, de lo contrario, puede ejecutar un `else`.



**Ejemplo Básico `if/else`:**

```js
let edad = 18;
if (edad >= 18) {
    console.log("Eres mayor de edad."); // Se ejecuta si es true
} else {
    console.log("Eres menor de edad."); // Se ejecuta si es false
}
```



Puede darse el caso en el que haya que ir seleccionando opciones dependiendo de las anteriores, es decir, condicionales anidadas.



```javascript
let parece = 'pato';
let habla = 'cuack';
let andaComo = 'pato';
if (parece === 'pato') {
    if (habla === 'cuack') {
        if (andaComo === 'pato') {
            console.log("¡Es un pato!")
        } else {
            console.log("Esto no es un pato")
        }
    }    
}
```



Desgraciadamente si la condición no se cumple, el código entra en la parte `else` , que se convierte en una especie de cajón desastre ya que se puede entender como "si no cumple lo anterior haz esto", y en caso de necesitar hacer otro crivado no lo lograremos con esta estructura... Para ello usaremos `else if`  para anidar otra condición si no se cumple la anterior.

```javascript
let parece = 'perro';
let habla = 'cuack';
let andaComo = 'perro';

if (parece === 'pato') { 
    if (habla === 'cuack') { 
        if (andaComo === 'pato') { 
            console.log("¡Es un pato!"); 
        } 
    } 
} else if (parece === 'perro') { 
    if (habla === 'guau') { 
        if (andaComo === 'perro') { 
            console.log("¡Es un perro!"); 
        } 
    } else {
        console.log("No es un pato ni un perro");
    }
} else { 
    console.log("No es un pato ni un perro");  
}

```





* **Operador Ternario (`? :`):** Un atajo compacto para `if...else` de una sola línea. Su sintaxis es: `condición ? expresión1 : expresión2`.



* **`switch`:** Ideal para evaluar una variable contra múltiples casos (`case`) posibles.



* **Valores `truthy` y `falsy`:** En JS, las condiciones no solo reciben `true`/`false`. Valores como `0`, `""` (cadena vacía), `null`, `undefined` o `NaN` se consideran `false` (falsy), mientras que el resto son `true` (truthy).&#x20;

