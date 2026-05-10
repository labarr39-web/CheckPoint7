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

El objeto String proporciona una variedad de métodos para trabajar con textos. Vamos a ver algunos de los más útiles

#### Métodos de transformación <a href="#metodos-de-transformacion" id="metodos-de-transformacion"></a>

<table><thead><tr><th width="155">Método</th><th width="200">Descripción</th><th>Ejemplo</th></tr></thead><tbody><tr><td><code>toUpperCase()</code></td><td>Convierte todos los caracteres a mayúsculas</td><td><pre class="language-javascript"><code class="lang-javascript">const str = "Hello World";
const result = str.toUpperCase();
console.log(result); // "HELLO WORLD"
</code></pre></td></tr><tr><td><code>toLowerCase()</code></td><td>Convierte todos los caracteres a minúsculas</td><td><pre class="language-javascript"><code class="lang-javascript">const str = "Hello World";
const result = str.toLowerCase();
console.log(result); // "hello world"
</code></pre></td></tr><tr><td><code>trim()</code></td><td>Elimina los espacios en blanco de ambos extremos</td><td><pre class="language-javascript"><code class="lang-javascript">const str = "   Hello World   ";
const result = str.trim();
console.log(result); // "Hello World"
</code></pre></td></tr></tbody></table>

#### Métodos de manipulación <a href="#metodos-de-manipulacion" id="metodos-de-manipulacion"></a>

<table><thead><tr><th width="155">Método</th><th width="200">Descripción</th><th width="395">Ejemplo</th></tr></thead><tbody><tr><td><code>concat()</code></td><td>Combina dos o más cadenas de texto</td><td><pre class="language-javascript"><code class="lang-javascript">const str1 = "Hello";
const str2 = "World";
const result = str1.concat(" ", str2);
console.log(result); // "Hello World"
</code></pre></td></tr><tr><td><code>slice()</code></td><td>Extrae una sección de una cadena</td><td><pre class="language-javascript"><code class="lang-javascript">const str = "JavaScript";
const result = str.slice(0, 4);
console.log(result); // "Java"
</code></pre></td></tr><tr><td><code>substring()</code></td><td>Devuelve una parte de la cadena entre los índices</td><td><pre class="language-javascript"><code class="lang-javascript">const str = "JavaScript";
const result = str.substring(4, 10);
console.log(result); // "Script"
</code></pre></td></tr><tr><td><code>substr()</code></td><td>Devuelve una parte de la cadena con una longitud</td><td><pre class="language-javascript"><code class="lang-javascript">const str = "JavaScript";
const result = str.substr(4, 6);
console.log(result); // "Script"
</code></pre></td></tr><tr><td><code>split()</code></td><td>Divide la cadena en un array usando un delimitador</td><td><pre class="language-javascript"><code class="lang-javascript">const str = "Hello World";
const result = str.split(" ");
console.log(result);//["Hello", "World"]
</code></pre></td></tr><tr><td><code>replace()</code></td><td>Reemplaza una parte de la cadena</td><td><pre class="language-javascript"><code class="lang-javascript">const str = "Hello World";
const result = str.replace("Hello", "Hi");
console.log(result);
// "Hi World"
</code></pre></td></tr></tbody></table>

#### Métodos de búsqueda <a href="#metodos-de-busqueda" id="metodos-de-busqueda"></a>

<table><thead><tr><th width="155">Método</th><th width="200">Descripción</th><th width="390">Ejemplo</th></tr></thead><tbody><tr><td><code>indexOf()</code></td><td>Devuelve el índice de la primera aparición</td><td><pre class="language-javascript"><code class="lang-javascript">const str = "Hello World";
const index = str.indexOf("World");
console.log(index); // 6
</code></pre></td></tr><tr><td><code>lastIndexOf()</code></td><td>Devuelve el índice de la última aparición</td><td><pre class="language-javascript"><code class="lang-javascript">const str = "Hello World World";
const index = str.lastIndexOf("World");
console.log(index); // 12
</code></pre></td></tr><tr><td><code>includes()</code></td><td>Determina si una subcadena está presente</td><td><pre class="language-javascript"><code class="lang-javascript">const str = "Hello World";
const result = str.includes("World");
console.log(result); // true
</code></pre></td></tr><tr><td><code>startsWith()</code></td><td>Determina comienza con una cadena</td><td><pre class="language-javascript"><code class="lang-javascript">const str = "Hello World";
const result = str.startsWith("Hello");
console.log(result); // true
</code></pre></td></tr><tr><td><code>endsWith()</code></td><td>Determina termina con una cadena</td><td><pre class="language-javascript"><code class="lang-javascript">const str = "Hello World";
const result = str.endsWith("World");
console.log(result); // true
</code></pre></td></tr></tbody></table>

#### Métodos de comparación <a href="#metodos-de-comparacion" id="metodos-de-comparacion"></a>

<table><thead><tr><th width="155">Método</th><th width="200">Descripción</th><th width="390">Ejemplo</th></tr></thead><tbody><tr><td><code>localeCompare()</code></td><td>Compara dos cadenas en una localización específica</td><td><pre class="language-javascript"><code class="lang-javascript">const str1 = "a";
const str2 = "b";
const result = str1.localeCompare(str2);
console.log(result); 
/* -1 (porque "a" es menor que "b" en el 
orden lexicográfico) */
</code></pre></td></tr><tr><td><code>normalize()</code></td><td>Devuelve la forma Unicode normalizada de la cadena</td><td><pre class="language-javascript"><code class="lang-javascript">const str = "\u00F1";
const normalizedStr=str.normalize("NFD");
console.log(normalizedStr); // "ñ"
</code></pre></td></tr></tbody></table>

#### Métodos de conversión

<table><thead><tr><th width="155">Método</th><th width="200">Descripción</th><th width="390">Ejemplo</th></tr></thead><tbody><tr><td><code>toString()</code></td><td>Convierte y devuelve la cadena como una representación de texto.</td><td><pre class="language-javascript"><code class="lang-javascript">const num = 123;
const str = num.toString();
console.log(str); // "123"
</code></pre></td></tr><tr><td><code>valueOf()</code></td><td>Devuelve el valor primitivo de un objeto <code>String</code>.</td><td><pre class="language-javascript"><code class="lang-javascript">const str = new String("Hello World");
const primitiveValue = str.valueOf();
console.log(primitiveValue); 
// "Hello World"
</code></pre></td></tr></tbody></table>

#### Métodos de acceso <a href="#metodos-de-acceso" id="metodos-de-acceso"></a>

<table><thead><tr><th width="155">Método</th><th width="200">Descripción</th><th width="390">Ejemplo</th></tr></thead><tbody><tr><td><code>charAt()</code></td><td>Devuelve el carácter en el índice especificado</td><td><pre class="language-javascript"><code class="lang-javascript">const str = "Hello World";
const char = str.charAt(6);
console.log(char); // "W"
</code></pre></td></tr><tr><td><code>charCodeAt()</code></td><td>Devuelve el valor Unicode de un carácter</td><td><pre class="language-javascript"><code class="lang-javascript">const str = "Hello World";
const code = str.charCodeAt(6);
console.log(code);
// 87 (código Unicode de "W")
</code></pre></td></tr><tr><td><code>codePointAt()</code></td><td>Devuelve el valor Unicode de un carácter (16 bits)</td><td><pre class="language-javascript"><code class="lang-javascript">const str = "😊";
const codePoint = str.codePointAt(0);
console.log(codePoint); // 128522
</code></pre></td></tr></tbody></table>

#### Métodos de plantillas <a href="#metodos-de-plantillas" id="metodos-de-plantillas"></a>

<table><thead><tr><th width="155">Método</th><th width="200">Descripción</th><th width="395">Ejemplo</th></tr></thead><tbody><tr><td><code>padStart()</code></td><td>Rellena el principio hasta alcanzar una longitud determinada</td><td><pre class="language-javascript"><code class="lang-javascript">const str = "5";
const paddedStr = str.padStart(3, "0");
console.log(paddedStr); // "005"
</code></pre></td></tr><tr><td><code>padEnd()</code></td><td>Rellena el final hasta alcanzar una longitud determinada</td><td><pre class="language-javascript"><code class="lang-javascript">const str = "5";
const paddedStr = str.padEnd(3, "0");
console.log(paddedStr); // "500"
</code></pre></td></tr><tr><td><code>repeat()</code></td><td>Repite una cadena un número de veces</td><td><pre class="language-javascript"><code class="lang-javascript">const str = "abc";
const repeatedStr = str.repeat(3);
console.log(repeatedStr); // "abcabcabc"
</code></pre></td></tr></tbody></table>

#### Métodos de Regex <a href="#metodos-de-regex" id="metodos-de-regex"></a>

<table><thead><tr><th width="155">Método</th><th width="200">Descripción</th><th width="395">Ejemplo</th></tr></thead><tbody><tr><td><code>match()</code></td><td>Busca coincidencias entre una cadena y una expresión regular</td><td><pre class="language-javascript"><code class="lang-javascript">const str = "Hello World";
const result = str.match(/World/);
console.log(result); // ["World"]
</code></pre></td></tr><tr><td><code>matchAll()</code></td><td>Devuelve un iterador con todas las coincidencias de una expresión</td><td><pre class="language-javascript"><code class="lang-javascript">const str = "Hello World World";
const iterator = str.matchAll(/World/g);
console.log([...iterator]); 
// [["World"], ["World"]]
</code></pre></td></tr></tbody></table>

### 4. ¿Qué es un condicional?

<br>

Un condicional en JavaScript es una estructura de control que permite al programa tomar decisiones y ejecutar diferentes bloques de código dependiendo de si una condición lógica es verdadera (`true`) o falsa (`false`).

Es fundamental para crear comportamiento dinámico, evaluando condiciones (`if`, `else`, `switch`) para dirigir el flujo.

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

Desgraciadamente si la condición no se cumple, el código entra en la parte `else` , que se convierte en una especie de cajón desastre ya que se puede entender como "si no cumple lo anterior haz esto", y en caso de necesitar otro cribado no lo lograremos con esta estructura... Para ello usaremos `else if` para anidar otra condición si no se cumple la anterior.

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

Supongamos que estamos en una tienda virtual y queremos comprar por ejemplo una prenda de vestir, pero dependiendo de la talla el precio varía; así pues, podríamos anidar estructures `else if` , una por cada talla, lo cual haría un código más complicado de leer (y más fácil de cometer un error al escribirlo), imagina cómo puede quedar el código teniendo que anidar las opciones desde la talla XXS hasta la XXXL...

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
    //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de 
    //la expresión
    [break;]
}
```

**expresión:**

Es una expresión que es comparada con el valor de cada instancia `case`.

**case valorN:**

Una instancia `case valorN` se usa para compararla con `expresión`.

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

Si no se pone un `break`, el script se ejecutará desde donde se cumple la condición y ejecutará el siguiente `case` independientemente si esta condición se cumple o no. Veámoslo con un ejemplo:

```javascript
var foo = 0;
switch (foo) {
  case -1:
    console.log("1 negativo");
    break;
  case 0: // foo es 0, por lo tanto se cumple la condición y se ejecutara el siguiente bloque
    console.log(0);
  // NOTA: el "break" olvidado debería estar aquí
  case 1: // No hay sentencia "break" en el 'case 0:', por lo tanto este caso también
          // será ejecutado
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

No, no es necesario.

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

**Valores `truthy` y `falsy`:**

En JS, las condiciones no solo reciben `true`/`false`. Valores como `0`, `""` (cadena vacía), `null`, `undefined` o `NaN` se consideran `false` (falsy), mientras que el resto son `true` (truthy).

### 5. ¿Qué es un operador ternario?

El **operador condicional** (**ternario**) es el único operador en JavaScript que tiene tres operandos. Este operador se usa con frecuencia como atajo para la instrucción `if`.

#### Sintaxis <a href="#sintaxis" id="sintaxis"></a>

```
condición ? expr1 : expr2
```

#### Parámetros <a href="#parametros" id="parametros"></a>

`condición`

Una expresión que se evalúa como true o false.

`expr1`, `expr2`

Expresión con valores de algún tipo.

#### Descripción <a href="#descripcion" id="descripcion"></a>

Si la `condición` es `true`, el operador retorna el valor de la `expr1`; de lo contrario, devuelve el valor de `expr2`. Por ejemplo, para mostrar un mensaje diferente en función del valor de la variable _`isMember,`_ se puede usar esta declaración:

```javascript
"La Cuota es de:  " + (isMember ? "$2.00" : "$10.00");
```

También puedes asignar variables dependiendo del resultado de la condición ternaria:

```javascript
var elvisLives = Math.PI > 4 ? "Sip" : "Nop";
```

También es posible realizar evaluaciones ternarias múltiples (Nota: El operador condicional es asociativo):

```javascript
var firstCheck = false,
  secondCheck = false,
  access = firstCheck
    ? "Acceso Denegado"
    : secondCheck
      ? "Acceso Denegado"
      : "Acceso Permitido";

console.log(access); // muestra "Acceso Permitido"
```

También puede usar operaciones ternarias en espacio vacío con el propósito de realizar diferentes operaciones:

```javascript
var stop = false,
  age = 16;

age > 18 ? location.assign("continue.html") : (stop = true);
```

También puede realizar más de una operación por caso, separándolas con una coma:

```javascript
var stop = false,
  age = 23;

age > 18
  ? (alert("OK, puedes continuar."), location.assign("continue.html"))
  : ((stop = true), alert("Disculpa, eres menor de edad!"));
```

También puede realizar más de una operación durante la asignación de un valor. En este caso, _**el último valor separado por una coma del paréntesis**_**&#x20;será el valor asignado**.

```javascript
var age = 16;

var url =
  age > 18
    ? (alert("OK, puedes continuar."),
      // alert devuelve "undefined", pero será ignorado porque
      // no es el último valor separado por comas del paréntesis
      "continue.html") // el valor a ser asignado si age > 18
    : (alert("Eres menor de edad!"),
      alert("Disculpa :-("),
      // etc. etc.
      "stop.html"); // el valor a ser asignado si !(age > 18)

location.assign(url); // "stop.html"
```

### 6. ¿Cuál es la diferencia entre una declaración de función y una expresión de función?

Empecemos recordando que las funciones en JavaScript son bloques de código reutilizables que permiten llevar a cabo tareas específicas de manera eficiente.

En esencia, una función puede aceptar uno o varios parámetros y devolver un resultado, lo que la convierte en una herramienta poderosa para estructurar y organizar nuestro código.

Desde funciones declaradas hasta funciones expresadas y funciones de flecha, cada una ofrece diferentes sintaxis y comportamientos que se adaptan a diversas necesidades de programación.

Vamos a ver varios ejemplos prácticos que ilustran cómo utilizar funciones en JavaScript, facilitando así la comprensión de este lenguaje de programación fundamental.

#### Tipos de funciones en JavaScript <a href="#tiposdefuncionesenjavascript" id="tiposdefuncionesenjavascript"></a>

JavaScript ofrece varios estilos de funciones. Las más comunes son las funciones declarativas, expresivas y las funciones de flecha.

#### Funciones declarativas <a href="#funcionesdeclarativas" id="funcionesdeclarativas"></a>

Las **funciones declarativas** son el método más convencional de crear funciones en JavaScript. Se definen con la palabra clave `function` y, a regularmente, se utilizan para definir funciones que se invocan múltiples veces a lo largo de un programa.

Por ejemplo, una función declarativa simple que devuelve un mensaje puede definirse así:

```javascript
function saludo(nombre) {
    return `Hola, ${nombre}!`;
}
```

Son fáciles de entender y, por lo general, se utilizan para la mayoría de las aplicaciones.

Una peculiaridad que tienen es que pueden ser llamadas antes de ser definidas dentro del código, todo gracias al llamado 'hoisting' o alzamiento; y es que antes de ejecutarse, todas las funciones declarativas son elevadas al principio del ámbito.

#### Funciones expresivas <a href="#funcionesexpresivas" id="funcionesexpresivas"></a>

Por otro lado, están las funciones expresivas, que son aquellas que se asignan a una variable.

Son funciones anónimas, ya que no poseen un nombre.

El uso de funciones expresivas permite una mayor flexibilidad.

```javascript
const saludo = function(nombre) {
    return `Hola, ${nombre}!`;
};
```

#### Funciones de flecha <a href="#funcionesdeflecha" id="funcionesdeflecha"></a>

Introducidas en ES6, las funciones de flecha son una forma más concisa de escribir funciones anónimas.

```javascript
const saludo = (nombre) => `Hola, ${nombre}!`;
```

#### Sintaxis básica de una función en JavaScript <a href="#sintaxisbsicadeunafuncinenjavascript" id="sintaxisbsicadeunafuncinenjavascript"></a>

Entender la sintaxis básica es crucial para cualquier desarrollo que involucre funciones.

La estructura fundamental es la siguiente:

1. **Palabra clave**: `function` (en funciones declarativas).
2. **Nombre de la función**: El nombre que le das a la función.
3. **Paréntesis**: Donde defines los parámetros.
4. **Cuerpo de la función**: Contiene el código que se ejecutará.

Un ejemplo de una función sencilla podría ser:

```javascript
function sum(a, b) {
    return a + b;
}
```

¡Veamos cómo funciona una función simple en acción!

Supongamos que deseas sumar dos números:

```javascript
function sumarNumeros(num1, num2) {
    return num1 + num2;
}

console.log(sumarNumeros(5, 10)); // Salida: 15
```

Este ejemplo no solo ilustra la sintaxis, sino también cómo invocar (llamar) la función.

#### Funciones anónimas en JavaScript: definición y ejemplos <a href="#funcionesannimasenjavascriptdefinicinyejemplos" id="funcionesannimasenjavascriptdefinicinyejemplos"></a>

Las funciones anónimas son funciones que no tienen un nombre específico.

Se utilizan comúnmente cuando deseas pasar una función como argumento a otra función, por ejemplo, en operaciones de matriz.

```javascript
const numeros = [1, 2, 3, 4];
const dobles = numeros.map(function(num) {
    return num * 2;
});
console.log(dobles); // Salida: [2, 4, 6, 8]
```

#### Uso de funciones anónimas en eventos <a href="#usodefuncionesannimaseneventos" id="usodefuncionesannimaseneventos"></a>

Puedes usar funciones anónimas para manejar eventos, lo que es especialmente útil en el desarrollo web.

```javascript
document.getElementById("miBoton").addEventListener("click", function() {
    alert("¡Botón clickeado!");
});
```

#### La importancia de las funciones de flecha (Arrow Functions) <a href="#laimportanciadelasfuncionesdeflechaarrowfunctions" id="laimportanciadelasfuncionesdeflechaarrowfunctions"></a>

Las funciones de flecha, que son una forma compacta de escribir funciones, no solo hacen que tu código sea más legible, sino que también mantienen el contexto del `this`.

```javascript
const sumar = (a, b) => a + b;
console.log(sumar(5, 10)); // Salida: 15
```

#### Comparación con funciones tradicionales <a href="#comparacinconfuncionestradicionales" id="comparacinconfuncionestradicionales"></a>

Las funciones de flecha son ideales para usar en programación moderna. Sin embargo, deben ser utilizadas con precaución, especialmente al depender de `this`.

#### Parámetros y argumentos en funciones de JavaScript <a href="#parmetrosyargumentosenfuncionesdejavascript" id="parmetrosyargumentosenfuncionesdejavascript"></a>

Los parámetros son variables que se definen al declarar una función, mientras que los argumentos son los valores que se pasan a esta.

```javascript
function multiplicar(x, y) {
    return x * y;
}

console.log(multiplicar(5, 3)); // Salida: 15
```

#### Parámetros opcionales <a href="#parmetrosopcionales" id="parmetrosopcionales"></a>

También puedes definir funciones con parámetros opcionales utilizando valores por defecto.

```javascript
function saludar(nombre = "Invitado") {
    return `Hola, ${nombre}!`;
}

console.log(saludar()); // Salida: Hola, Invitado!
```

#### Ejemplo práctico: calculadora simple usando funciones <a href="#ejemploprcticocalculadorasimpleusandofunciones" id="ejemploprcticocalculadorasimpleusandofunciones"></a>

Vamos a crear una calculadora simple que suma, resta, multiplica y divide.

```javascript
function calculadora(num1, num2, operacion) {
    switch (operacion) {
        case 'sumar':
            return num1 + num2;
        case 'restar':
            return num1 - num2;
        case 'multiplicar':
            return num1 * num2;
        case 'dividir':
            return num1 / num2;
        default:
            return "Operación no válida";
    }
}

console.log(calculadora(10, 5, 'sumar')); // Salida: 15
```

### Alcance de las funciones: variables locales vs. globales <a href="#alcancedelasfuncionesvariableslocalesvsglobales" id="alcancedelasfuncionesvariableslocalesvsglobales"></a>

El **alcance** de variables determina dónde se pueden usar.

Las variables **globales** se pueden acceder desde cualquier parte del código, mientras que las **locales** solo se pueden usar dentro de la función donde fueron definidas.

#### Ejemplo <a href="#ejemploilustrativo" id="ejemploilustrativo"></a>

```javascript
let globalVar = "Soy global";

function testScope() {
    let localVar = "Soy local";
    console.log(globalVar); // Acceso a variable global
    console.log(localVar); // Acceso a variable local
}

testScope();
// console.log(localVar); // Error: localVar no está definida
```

***

Resumiendo...

* **¿Qué son y cuándo usar las funciones declarativas?**

Son las funciones que se declaran, a las cuales se les asigna un nombre (lo más descriptivo posible), y pueden ser llamadas antes de ser definidas dentro del código.

* **¿Qué son y cuándo debo usar las funciones anónimas en JavaScript?**

Las funciones anónimas son aquellas que no se les asigna un nombre y se utilizan generalmente como argumentos en otras funciones, especialmente en programación funcional y manejo de eventos.

* **¿Por qué debería considerar usar funciones de flecha (arrow functions) en mi código JavaScript?**

Las funciones de flecha ofrecen una sintaxis más corta y mantendrán el valor del `this` de contextos externos, lo que simplifica la escritura de código en muchos casos.

***

Y a modo de apunte...

* **¿Cuál es la diferencia entre parámetros y argumentos en funciones de JavaScript?**

\
Los **parámetros** son las variables que se definen al declarar una función, mientras que los **argumentos** son los valores que se pasan a esa función al momento de su invocación.

### 7. ¿Qué es la palabra clave "this" en JS?

La palabra clave `this` de JavaScript es uno de los aspectos más difíciles de comprender del lenguaje. Pero es de vital importancia para escribir código JavaScript más avanzado.

En JavaScript, la palabra clave `this` nos permite:

* Reutilizar funciones en diferentes contextos de ejecución. Es decir, una función una vez definida se puede invocar para diferentes objetos usando la palabra clave `this`.
* Identificar el objeto en el contexto de ejecución actual cuando invocamos un método.

La palabra clave `this` estrechamente asociada con las funciones de JavaScript.

Cuando se trata de `this`, **lo fundamental es entender dónde se invoca una función**. Porque no sabemos qué hay en la palabra clave `this` hasta que se invoca la función.

El uso de `this` se puede clasificar en cinco aspectos vinculantes (`binding` ) diferentes.

Vamos a aprender sobre los cinco aspectos con ejemplos.

#### **Primero, ¿Qué es la vinculación (binding)?** <a href="#primero-qu-es-la-vinculaci-n-binding" id="primero-qu-es-la-vinculaci-n-binding"></a>

En JavaScript, un `Entorno Léxico` (Lexical Environment) es donde se escribe físicamente tu código.

En el siguiente ejemplo, el nombre de la variable está `léxicamente` dentro de la función `decirNombre()`.

```js
function decirNombre() {
  let nombre = 'algunNombre';
  console.log('El nombre es, ', nombre);
 }
```

Un `Contexto de Ejecución` (Execution Context) se refiere al código que se está ejecutando actualmente y todo lo demás que ayuda a ejecutarlo.

Puede haber muchos entornos léxicos disponibles, pero el contexto de ejecución que se está ejecutando _actualmente_ es manejado por el Contexto de Ejecución.

<br>

![Lexical Environment](<.gitbook/assets/lexical (1).webp>)



Cada uno de los contextos de ejecución contiene un `Registro de Entorno` (Environment Record). A medida que el motor JavaScript ejecuta el código, las variables y los nombres de las funciones se agregan al registro de entorno.

Este fenómeno se conoce como vinculación en JavaScript.  La vinculación ayuda a asociar los identificadores (variables, nombres de funciones) con la palabra clave `this` para un contexto de ejecución.



Dicho así resulta bastante difícil de entender, por ello vamos a intentar aclararlo...



#### Regla #1: Cómo funciona la vinculación implícita de JavaScript <a href="#regla-1-c-mo-funciona-la-vinculaci-n-impl-cita-de-javascript" id="regla-1-c-mo-funciona-la-vinculaci-n-impl-cita-de-javascript"></a>



La vinculación implícita cubre la mayoría de los casos de uso para tratar con la palabra clave `this`.

Con este método se debe verificar lo que está a la _izquierda del operador de punto (.) adyacente a una función_ en el momento de la invocación.&#x20;

Esto determina a saber donde la palabra clave `this` está vinculada.



Veamos un ejemplo para entenderlo mejor.

```js
let usuario = {
    nombre: 'Tapas',
    direccion: 'Mi compañía',
    getName: function() {
        console.log(this.nombre);
    }
};

usuario.getName();
```



Aquí, `this` está vinculado al objeto usuario.&#x20;

Lo sabemos porque a la izquierda del operador punto(.) adyacente a la función `getName()`, vemos el objeto `usuario` .&#x20;

Por lo tanto, `this.name` va a registrar _Tapas_ en la consola.



Veamos otro ejemplo para comprender mejor este concepto:

```js
function decorateLogName(obj) {
      obj.logName = function() {
          console.log(this.nombre);
      }
  };

  let tom = {
      nombre: 'Tom',
      edad: 7
  };

  let jerry = {
      nombre: 'jerry',
      edad: 3
  };

  decorateLogName(tom);
  decorateLogName(jerry);

  tom.logName();
  jerry.logName();
```



En este ejemplo, hay dos objetos, `tom` y `jerry` .&#x20;

Hemos decorado (mejorado) estos objetos adjuntando un método llamado `logName()`.



Observa que cuando invocamos `tom.logName()`, el objeto `tom` esta a la izquierda del operador punto(.) adyacente a la función `logName()`.&#x20;

Entonces, `this` está vinculado al objeto `tom` y registra el valor de _Tom_ ( aquí, `this.nombre` es igual a _Tom_).&#x20;

Lo mismo se aplica cuando se invoca `jerry.logName()`.<br>



#### Regla #2: Cómo funciona la vinculación explícita de JavaScript (explicit binding) <a href="#regla-2-c-mo-funciona-la-vinculaci-n-expl-cita-de-javascript-explicit-binding" id="regla-2-c-mo-funciona-la-vinculaci-n-expl-cita-de-javascript-explicit-binding"></a>



Hemos visto que JavaScript crea un entorno para ejecutar el código que escribimos.&#x20;

Se encarga de la creación de memoria para variables, funciones, objetos, etc. _en la fase de creación_.

&#x20;Finalmente ejecuta el código en la _fase de ejecución_. Este entorno especial se denomina `Contexto de ejecución` (execution context).



Puede haber muchos entornos de este tipo (contextos de ejecución) en una aplicación JavaScript. Cada contexto de ejecución opera independientemente de los demás.

Pero a veces, es posible que deseemos usar cosas de un contexto de ejecución en otro. Ahí es donde entra en juego la **vinculación explícita**.

En la vinculación explícita, podemos llamar a una función con un objeto cuando la función está fuera del contexto de ejecución del objeto.

Hay tres métodos muy especiales, `call()`, `apply()` y `bind()` que nos ayudan a lograr una vinculación explícita.



#### Como funciona el método `call()` de JavaScript <a href="#como-funciona-el-m-todo-call-de-javascript" id="como-funciona-el-m-todo-call-de-javascript"></a>



Con el método `call()` , el contexto con el que se debe llamar a la función se pasará como parámetro `call()`.&#x20;



Veamos cómo funciona con un ejemplo:

```js
let getName = function() {
     console.log(this.nombre);
 }
 
let usuario = {
   nombre: 'Tapas',
   direccion: 'Mi compañía'  
 };

getName.call(usuario);
```



Aquí, el método `call()` se invoca en una función llamada `getName()`.&#x20;

La función `getName()` simplemente registra `this.nombre`. ¿Pero qué es `this` aquí?. Eso se determina por lo que se ha pasado al método `call()`.



Aquí, `this` se vinculará al objeto de usuario porque hemos pasado el usuario como parámetro al método `call()`.&#x20;

Entonces `this.nombre` debe registrar el valor de la propiedad de nombre del objeto de usuario, es decir, _Tapas_.



En el ejemplo anterior, hemos pasado solo un argumento para `call()`. Pero también podemos pasar múltiples argumentos a `call()`, así:

```js
let getName = function(pasatiempo1, pasatiempo2) {
     console.log(this.nombre + ' le gusta ' + pasatiempo1 + ' , ' + pasatiempo2);
 }

let usuario = {
   nombre: 'Tapas',
   direccion: 'Bangalore'  
 };

let pasatiempos = ['Nadar', 'Escribir'];
 
getName.call(usuario, pasatiempos[0], pasatiempos[1]);
```



Aquí hemos pasado varios argumentos al método `call()`.&#x20;

El primer argumento debe ser el contexto del objeto con el que se debe invocar la función.&#x20;

Los otros parámetros podrían ser simplemente valores para usar.



Aquí estoy pasando _Nadar_ y _Escribir_ como dos parámetros para la función `getName()`.

¿Notaste un punto crítico aquí? En el caso de una `call()`, los argumentos deben pasarse uno por uno, lo cual no es una forma inteligente de hacer las cosas. Ahí es donde nuestro método siguiente, `apply()`, entra en escena.



#### Cómo funciona el método `apply()` de JavaScript <a href="#c-mo-funciona-el-m-todo-apply-de-javascript" id="c-mo-funciona-el-m-todo-apply-de-javascript"></a>



Esta forma frenética de pasar argumentos al método `call()` puede resolverse con otro método alternativo llamado `apply()`.&#x20;

Es exactamente lo mismo que  `call()` pero le permite pasar los argumentos de manera más conveniente.&#x20;



Vamos a echar un vistazo:

```js
let getName = function(pasatiempo1, pasatiempo2) {
     console.log(this.name + ' le gusta ' + pasatiempo1 + ' , ' + pasatiempo2);
 }
 
let usuario = {
   nombre: 'Tapas',
   direccion: 'Bangalore'  
 };

let pasatiempos = ['Nadar', 'Escribir'];
 
getName.apply(usuario, pasatiempos);
```



Aquí podemos pasar una serie de argumentos, lo que es mucho más conveniente que pasarlos uno por uno.

Consejo: cuando solo tenga un argumento de valor o ningún argumento de valor para pasar, use `call()`. Cuando tenga varios argumentos de valor para pasar, use `apply()`.



#### Cómo funciona el método `bind()` de JavaScript <a href="#c-mo-funciona-el-m-todo-bind-de-javascript" id="c-mo-funciona-el-m-todo-bind-de-javascript"></a>



El método `bind()` es similar al método `call()` pero con una diferencia.&#x20;

A diferencia del método `call()` de llamar a la función directamente, `bind()` devuelve una función nueva y podemos invocarla en su lugar.

```js
let getName = function(pasatiempo1, pasatiempo2) {
     console.log(this.name + ' le gusta ' + pasatiempo1 + ' , ' + pasatiempo2);
 }

let usuario = {
   nombre: 'Tapas',
   direccion: 'Bangalore'  
 };

let pasatiempos = ['Nadar', 'Escribir'];
let nuevaFn = getName.bind(usuario, pasatiempos[0], pasatiempos[1]); 

nuevaFn();
```



Aquí, `getName.bind()` no invoca la función `getName()` directamente. Devuelve una nueva función, `newFn` y podemos invocarla como `newFn()`.















