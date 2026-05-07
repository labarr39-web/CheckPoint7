# CheckPoint 7

<br>

<figure><img src=".gitbook/assets/Code_JS-1200x630.original.avif" alt=""><figcaption></figcaption></figure>

<br>

### 1. ¿Qué diferencia a Javascript de cualquier otro lenguaje de programación?





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

Un condicional en JavaScript es una estructura de control que permite al programa tomar decisiones y ejecutar diferentes bloques de código dependiendo de si una condición lógica es verdadera (`true`) o falsa (`false`).&#x20;

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
        }
    } else {
    console.log("Esto no es un pato")
    }
} 
```



Desgraciadamente si la condición no se cumple, el código entra en la parte `else` , que se convierte en una especie de cajón desastre ya que se puede entender como "si no cumple lo anterior haz esto", y en caso de necesitar otro cribado no lo lograremos con esta estructura... Para ello usaremos `else if`  para anidar otra condición si no se cumple la anterior.

```javascript
let parece = 'perro';
let habla = 'guau';
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





* **Operador Ternario (`? :`):** Un atajo compacto para `if...else` de una sola línea y su sintaxis es: `condición ? expresión1 : expresión2` . Pero de este operador hablaremos un poco más adelante.





* **`switch`:** Ideal para evaluar una variable contra múltiples casos (`case`) posibles.

Supongamos que estamos en una tienda virtual y queremos comprar por ejemplo una prenda de vestir, pero dependiendo de la talla el precio varía; así pues, podríamos anidar estructures `else if` , una por cada talla, lo cual haría un código más complicado de leer (y más fácil de cometer un error al escribirlo), imagina cómo puede quedar el código teniendo que anidar las opciones desde la talla XXS hasta la XXXL...&#x20;

En lugar de ello podríamos usar `switch...case` , cuya sintáxis básica es:

```
switch (expresión) {
  case valor1:
    //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
    [break;]
  case valor2:
    //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
    [break;]
  ...
  case valorN:
    //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
    [break;]
  default:
    //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
    [break;]
}
```



**expresión:**

Es una expresión que es comparada con el valor de cada instancia `case`.



**case valorN:**

Una instancia `case valorN` se usa para compararla con `expresión`.&#x20;

Si `expresión` coincide con `valorN`, las declaraciones dentro de la instancia `case` se ejecutan hasta que se encuentre el final de la declaración `switch` o hasta encontrar una interrupción `break`.



**default:**

La instancia `default`, es declarada para ejecutarse si el valor de `expresión` no coincide con ninguna de las instancias `case valorN`.

***

#### **Descripción**

Si ocurre una coincidencia, el programa ejecuta las declaraciones asociadas correspondientes. Si la expresión coincide con múltiples entradas, la primera será la seleccionada, incluso si las mayúsculas son tenidas en cuenta.

El programa primero busca la primer instancia `case` cuya expresión se evalúa con el mismo valor de la expresión de entrada (usando comparación estricta, `===` ) y luego transfiere el control a esa cláusula, ejecutando las declaraciones asociadas. Si no se encuentra una cláusula de `case` coincidente, el programa busca la cláusula `default` opcional, y si se encuentra, transfiere el control a esa instancia, ejecutando las declaraciones asociadas. Si no se encuentra una instancia `default` el programa continúa la ejecución en la instrucción siguiente al final del `switch`. Por convención, la instancia `default` es la última cláusula, pero no tiene que ser así.

La declaración `break` es opcional y está asociada con cada etiqueta de `case` y asegura que el programa salga del `switch` una vez que se ejecute la instrucción coincidente y continúe la ejecución en la instrucción siguiente. Si se omite el `break` el programa continúa la ejecución en la siguiente instrucción en la declaración de `switch` .



#### **Ejemplos**

En el siguiente ejemplo, si `expresión` se resuelve a "Platanos", el algoritmo compara el valor con el `case` "Platanos" y ejecuta la declaración asociada. Cuando se encuentra un `break`, el programa sale del condicional `switch` y ejecuta la declaración que lo procede. Si se omite el `break`, el `case` "Cerezas" también es ejecutado.

```javascript
switch (expr) {
  case "Naranjas":
    console.log("El kilogramo de naranjas cuesta $0.59.");
    break;
  case "Manzanas":
    console.log("El kilogramo de manzanas cuesta $0.32.");
    break;
  case "Platanos":
    console.log("El kilogramo de platanos cuesta $0.48.");
    break;
  case "Cerezas":
    console.log("El kilogramo de cerezas cuesta $3.00.");
    break;
  case "Mangos":
  case "Papayas":
    console.log("El kilogramo de mangos y papayas cuesta $2.79.");
    break;
  default:
    console.log("Lo lamentamos, por el momento no disponemos de " + expr + ".");
}

console.log("¿Hay algo más que te quisiera consultar?");
```



#### ¿Y si me olvido de poner un break?

Si no se pone un  `break`, el script se ejecutará desde donde se cumple la condición y ejecutará el siguiente  `case`  independientemente si esta condición se cumple o no. Veámoslo con un ejemplo:

```javascript
var foo = 0;
switch (foo) {
  case -1:
    console.log("1 negativo");
    break;
  case 0: // foo es 0, por lo tanto se cumple la condición y se ejecutara el siguiente bloque
    console.log(0);
  // NOTA: el "break" olvidado debería estar aquí
  case 1: // No hay sentencia "break" en el 'case 0:', por lo tanto este caso también será ejecutado
    console.log(1);
    break; // Al encontrar un "break", no será ejecutado el 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log("default");
}
```



#### ¿`Default` debe ir al final?

No, no es necesario.&#x20;

JavaScript retornará a la instancia `default` en caso de no encontrar una coincidencia:

```javascript
var foo = 5;
switch (foo) {
  case 2:
    console.log(2);
    break; // al encontrar este 'break' no se continuará con el siguiente 'default:'
  default:
    console.log("default");
  // fall-through
  case 1:
    console.log("1");
}
```



Al estar el `case 1:` a continuación de `default`, y al no haber un `break` de por medio, veremos que la declaración del `case 1:` será ejecutada, apareciendo el resultado `1` en el _log de consola._



#### **Operación única con múltiples casos**

Este método toma ventaja del hecho de que, si no hay un `break` debajo de una declaración `case`, continuará la ejecución hasta el siguiente `case`, ignorando si en dicho caso se cumple o no el criterio indicado. Comprobar en la sección _¿Qué pasa si olvido un `break`?_

Este es un ejemplo de operación única con sentencia `switch` secuencial, donde cuatro valores diferentes se comportan exactamente de la misma manera:

```javascript
var Animal = "Jirafa";
switch (Animal) {
  case "Vaca":
  case "Jirafa":
  case "Perro":
  case "Cerdo":
    console.log("Este animal subirá al Arca de Noé.");
    break;
  case "Dinosaurio":
  default:
    console.log("Este animal no lo hará.");
}
```



#### **Operaciones encadenadas con múltiples casos**

Este es un ejemplo de una sentencia `switch` secuencial con múltiples operaciones, donde, dependiendo del valor entero dado, se pueden recibir diferentes resultados. Esto demuestra que el algoritmo correrá en el orden en que se coloquen las declaraciones `case`, y que no tiene que ser numéricamente secuencial. En JavaScript, también es posible combinar definiciones con valores `"string"` dentro de estas declaraciones `case`.

```javascript
var foo = 1;
var output = "Salida: ";
switch (foo) {
  case 10:
    output += "¿Y ";
  case 1:
    output += "Cuál ";
    output += "Es ";
  case 2:
    output += "Tu ";
  case 3:
    output += "Nombre";
  case 4:
    output += "?";
    console.log(output);
    break;
  case 5:
    output += "!";
    console.log(output);
    break;
  default:
    console.log("Por favor, selecciona un valor del 1 al 6.");
}
```



La salida (output) de este ejemplo:

| Value                                  | Log text                                   |
| -------------------------------------- | ------------------------------------------ |
| foo es NaN o no es 1, 2, 3, 4, 5 ni 10 | Por favor, selecciona un valor del 1 al 6. |
| 10                                     | Salida: ¿Y Cuál Es Tu Nombre?              |
| 1                                      | Salida: Cuál Es Tu Nombre?                 |
| 2                                      | Salida: Tu Nombre?                         |
| 3                                      | Salida: Nombre?                            |
| 4                                      | Salida: ?                                  |
| 5                                      | Salida: !                                  |















* **Valores `truthy` y `falsy`:** En JS, las condiciones no solo reciben `true`/`false`. Valores como `0`, `""` (cadena vacía), `null`, `undefined` o `NaN` se consideran `false` (falsy), mientras que el resto son `true` (truthy).&#x20;

