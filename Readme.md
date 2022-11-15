# Ejercicio 3
Puedes desplegar este ejercicio desplegado aqui:

[![codesandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/github/HugoLebredo/react_tutorial_2/ejercicio3)

## Apuntes 📓
- Nunca utilices variables globales para guardar un nodo.Se rompe el ciclo de vida de los componentes y tu aplicación puede petar 💀.
- Utiliza estados y funciones manejadoras.
- Es interesante ver que el componente Note tiene varias etiquetas anidadas

# Ejercicio 4
Utilización de formularios

## Explicación 📓

Es una buena práctica utilizar **formularios**, aunque sea en este minúsculo ejercicio. 

- Si intentais pulsar enter en el ejercicio3 al pulsar enter no se va a activar el comportamiento del botón. Eso es un problema grave de usabilidad. La utilización del botón dentro de un formulario corrige esto.

- El último botón de un formulario ejecutará por defecto el evento `onSubmit` de la etiqueta `<form>` .

- La intrucción `e.preventDefault()` evitar el comportamiento por defecto del evento` onSubmit`. Por defeto este evento intenta hacer un post contra un servidor, pero al no poder hacerlo refrescará la pantalla y nunca se ejecutará el comportamiento que hallamos programado. Remoras del pasado de JavaScript 👴.