# Ejercicio 2
Puedes desplegar este ejercicio desplegado aqui:

[![codesandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/github/HugoLebredo/react_tutorial_2/ejercicio2)

## Explicación 📓
- Este ejercicio es una pequeña refactorización del anterior donde presentamos las **expresiones regulares**. Dentro de una cadena, todo lo que se encuentre entre `${}` será evaluado por el interprete como código JavaScript. Por ejemplo `la hora actual es ${new Date()}`. Aqui estamos creando un objeto fecha que contendra la hora actual.

- También hemos hecho una pequeña refactorización en el componente Note utilizando expresiones regulares pasando de esto:

```javascript
    const Note = ({ note }) => (
    <li>
        <h4>{note.content}</h4>
        <time>{note.date}</time>
    </li>
    );
```
a esto otro:

```javascript
    <p>{`💬 ${note.content} ⏰ ${note.date}`}</p>
```