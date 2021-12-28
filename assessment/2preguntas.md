### ¿Cuáles son las ceremonias más importantes de un Sprint y cuál es la idea de cada una?

En un sprint encontramos 5 ceremonias o reuniones:

1. Planeación del sprint (1-2h):
   -- En la primera parte de esta reunión el equipo se compromete con una serie de entregables.
   -- En la segunda parte, se identifican las tareas a completar de los entregables.
   -- Como resultado se obtiene el _backlog_ y la _lista de items con tareas asociadas_.

2. Scrum diario (stand-up meeting):
   Reunión corta dide cada integrante indica qué avanzó, qué esta avanzando y qué dificultades encontró.

3. Tiempo de historia (a mitad de semana):
   Se discute y mejoran las historias de usuario de futuros sprints.

4. Revisión del sprint:
   Reunión al final del sprint. Se revisan los items terminados y no terminados. Asisten todos los interesados en el proyecto.

5. Retrospectiva:
   Reunión interna del equipo. Se identifican un par de cambios estratégicos para el siguiente sprint.

### ¿Qué son los Wireframes? Nombra al menos una herramienta que podamos utilizar.

Son una representación visual de la estructura básica de una página web o aplicación móvil.
Herramientas:
-Whimsical
-Figma

### Explicar la diferencia entre var, let y const. Y dar un ejemplo en qué caso se utilizará.

- Var a diferencia de let y const tiene un alcance global, mientras que las otras 2 tienen un alcance (scope) para el bloque que las contiene.
- Const crea una constante que se debe inicializar ahi mismo ya que no se puede reasignar luego. No significa que sea inmutable sino que el identificador de variable no puede ser reasignado. Quiere decir que si por ejemplo le asignamos un objeto, el objeto si puede ser modificado.
- Let crea una variable de alcance por bloque, puede o no ser inicializada al momento de la declaración.

  Ejemplo a: En este ejemplo se imprimirá i=1 ya que var tiene alcance global

```javascript
if (true) {
  var i = 1;
}

console.log('i=', i);
```

Ejemplo b: En este ejemplo se producirá un error ya que let i=1 solo existe dentro del bloque if

```javascript
if (true) {
  let i = 1;
}

console.log('i=', i);
```

Ejemplo c: En este ejemplo también se producirá un error ya que let i=1 solo existe dentro del bloque if

```javascript
if (true) {
  const i = 1;
}

console.log('i=', i);
```

Ejemplo d: En este ejemplo se producirá un error ya que estamos reasignando el valor de const a

```javascript
const a = 1;

a = 2;
```

Ejemplo e: En este ejemplo se imprimirá {a:5, b:2} ya que estamos modificando el objeto obj mas no el identificador de la variable

```javascript
const obj = { a: 1, b: 2 };

obj.a = 5;

console.log(obj);
```

### ¿Cuáles son los tres comandos que se pueden utilizar para crear una nueva rama llamada rama-1?

git branch rama-1 (crea la nueva rama pero no nos mueve de rama)
git checkout -b rama-1 (crea la nueva rama y nos mueve a ella)
git switch -c rama-1 (equivalente a la segunda opción)

### Explicar la diferencia entre git merge y git rebase.

Git merge: crea un nuevo commit que une ambas ramas sin eliminarlas
Git rebase: Reescribe todo en la rama principal y elimina la rama secundaria. No se crea un nuevo commit y ubica el HEAD en el último commit que encuentre.

### ¿Cuál es la diferencia entre Pull Request (PR) y el comando git pull?

Aunque suenen parecidos, Pull Request (PR) y git pull son muy diferentes.
Pull request es la petición que se hace cuando queremos que el propietario de un repositorio al cual le hicimos fork integre los commits que trabajamos en el fork.
Git pull nos permite actualizar el contenido desde un repositorio remoto a nuestro repositorio local que se clonó.

### ¿Qué es el Virtual DOM?

El virtual DOM es una representación del DOM que se guarda en memoria. Cuando se hace un cambio en la aplicación web el virtual DOM interpreta los cambios y busca la manera más eficiente de actualizar el DOM para renderizar la menor cantidad de cambios posibles, ya que actualizar todo el DOM puede disminuir el rendimiento de la aplicación web.
