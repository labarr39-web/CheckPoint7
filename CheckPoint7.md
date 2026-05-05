# CheckPoint 7  
<br>  

![JavaScript](images/Code_JS-1200x630.original.avif)
<br><br>  


### 1. ¿Qué diferencia a Javascript de cualquier otro lenguaje de programación? ###

  <br>  
    

JavaScript es especial por varias razones que lo han convertido en uno de los lenguajes de programación más importantes y populares en el desarrollo web y más allá. A continuación, te explico en detalle por qué JavaScript es especial:

​

* #### **Lenguaje de programación del navegador** ####

​

JavaScript es el único lenguaje de programación que se ejecuta de forma nativa en todos los navegadores web modernos sin necesidad de plugins adicionales. Esto significa que cualquier página web puede incluir código JavaScript para hacerla interactiva, dinámica y más atractiva para el usuario.

​

* #### **Versatilidad y omnipresencia** ####  

<br>  

**Frontend:** JavaScript es el lenguaje principal para el desarrollo del lado del cliente (frontend). Permite manipular el DOM (Document Object Model), gestionar eventos, validar formularios, crear animaciones, y mucho más.  

<br>  

**Backend:** Con la llegada de Node.js, JavaScript también se usa en el servidor, lo que permite a los desarrolladores usar un solo lenguaje para todo el stack de desarrollo (full stack).  

<br>  

**Aplicaciones móviles y de escritorio:** Frameworks como React Native, Electron y otros permiten crear aplicaciones móviles y de escritorio usando JavaScript.
    

​

* #### **Ecosistema y comunidad** ####

​

JavaScript tiene un ecosistema enorme con miles de librerías y frameworks (React, Angular, Vue, etc.) que facilitan el desarrollo rápido y eficiente. Además, cuenta con una comunidad global muy activa que contribuye constantemente con herramientas, tutoriales y soporte.

​

* #### **Evolución constante** ####

​

JavaScript no es un lenguaje estático; evoluciona continuamente a través del estándar ECMAScript, que introduce nuevas características y mejoras regularmente, manteniéndolo moderno y relevante.

​

* #### **Facilidad de aprendizaje y uso** ####

​

JavaScript es relativamente fácil de aprender para principiantes debido a su sintaxis flexible y su naturaleza interpretada, lo que permite probar código rápidamente en cualquier navegador sin necesidad de configuraciones complejas.

​

* #### **Interactividad y experiencia de usuario** ####

​

JavaScript permite crear experiencias de usuario ricas e interactivas, desde menús desplegables hasta juegos en línea, pasando por aplicaciones web complejas que funcionan casi como aplicaciones nativas.

​

* #### **Integración con otras tecnologías web** ####

​

JavaScript se integra perfectamente con HTML y CSS, los otros pilares del desarrollo web, permitiendo manipular y modificar la estructura y el estilo de las páginas web en tiempo real.

​

----------

​

Resumiendo, JavaScript es especial porque es el lenguaje universal del navegador, extremadamente versátil, con un ecosistema robusto y en constante evolución, que permite crear desde simples interacciones hasta aplicaciones web completas y complejas. Esta combinación única lo hace indispensable en el mundo del desarrollo web y tecnológico actual.

<br><br>

### 2. ¿Cuáles son algunos tipos de datos JS? ###

  <br>  
    
En JavaScript, los tipos de datos se dividen principalmente en dos categorías: tipos primitivos y tipos de objetos. A continuación te explico detalladamente cada uno de ellos:

1. Tipos Primitivos
Los tipos primitivos son los valores básicos que no son objetos y no tienen métodos. Son inmutables, es decir, su valor no puede cambiar una vez creado.

Number: Representa tanto números enteros como números de punto flotante. Ejemplo: 42, 3.14.
BigInt: Representa números enteros muy grandes que exceden el límite de Number. Se escriben con una n al final, por ejemplo: 9007199254740991n.
String: Cadena de texto. Ejemplo: "Hola mundo".
Boolean: Representa un valor lógico, que puede ser true o false.
Undefined: Representa una variable que ha sido declarada pero no inicializada.
Null: Representa la ausencia intencional de cualquier valor u objeto.
Symbol: Representa un identificador único e inmutable, usado principalmente para propiedades de objetos que no colisionen.
2. Tipos de Objetos
Los objetos son colecciones de propiedades y pueden contener métodos. Son mutables.

Object: Tipo base para todos los objetos. Puede contener pares clave-valor.
Array: Un tipo especial de objeto para almacenar listas ordenadas de valores.
Function: También es un objeto, representa funciones.
Date, RegExp, Map, Set, entre otros, son tipos de objetos incorporados que tienen funcionalidades específicas.
Resumen en tabla
Tipo de dato	Descripción	Ejemplo
Number	Números enteros y decimales	123, 3.14
BigInt	Números enteros muy grandes	9007199254740991n
String	Texto	"Hola"
Boolean	Valores lógicos	true, false
Undefined	Variable no inicializada	undefined
Null	Valor nulo intencional	null
Symbol	Identificador único	Symbol('id')
Object	Colección de propiedades	{ nombre: "Ana" }
Array	Lista ordenada de valores	[1, 2, 3]
Function	Funciones como objetos	function() {}
Si quieres, puedo darte ejemplos prácticos de cada