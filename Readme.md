# Ejercicio 1
Puedes desplegar este ejercicio desplegado aqui:

[![codesandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/github/HugoLebredo/react_tutorial_2/ejercicio1)

## Resumen

- Estamos pasando el array de objetos en `main.jsx` como una propiedad.
- Siempre que iteremos añadir la propiedad key a los nodos.
- La key tiene que estar en el lugar en el que estés iterando los elementos ‼

## Explicación 📓
En el punto de entrada de este ejercicio `main.jsx` tenemos hardcodeado el siguiente array de 3 posiciones.

```javascript
    const notes = [
    {
        id: 1,
        content: "HTML es facil",
        date: "2019-05-30T17:30:31.098Z",
        important: true
    },
    {
        id: 2,
        content: "El navegador solo puede ejecutar JavaScript",
        date: "2019-05-30T18:39:34.091Z",
        important: false
    },
    {
        id: 3,
        content: "Los métodos más importantes del protocolo HTTP son GET y POST",
        date: "2019-05-30T19:20:14.298Z",
        important: true
    }
    ];
```
Este array se inyecta  al componente de ReactJS `App` en el parámetro denominado `notes` 

```javascript
    <App notes = {notes} />
```

Si nos fijamos en el archivo `App.jsx` donde se define el componente `App`, podemos como recorre con la instrucción map el array y por cada nodo llama a otro componente de React llamado `Note` al que se le pasa dos parámetros: 

- El primero se llama `key` y es utilizado internamente por ReactJS para identificar a cada uno de los nodos. Se le tiene que dar un valor único de ahí que se le asigne el identificador de la nota.
- El segundo argumento es toda la nota, es decir, estamos pasando el objeto correspondiente a la iteración en la que nos encontremos.

```javascript
    <ol className="NotesList">
    {notes.map((note) => (
        <Note key={note.id} note={note} />
    ))}
    </ol>
```

Nos queda el **últmo paso**, definir nuestro componente `Note` que podemos ver en el archivo `Note.jsx`. Es muy sencillo, este componente recibe en el parámetro `note` el objeto con toda la información de una nota. Con esos datos muestra el contenido de la nota en un `<h4>` y la fecha de creación de la nota en `<time>`.

```javascript
    const Note = ({ note }) => (
    <li>
        <h4>{note.content}</h4>
        <time>{note.date}</time>
    </li>
    );
```