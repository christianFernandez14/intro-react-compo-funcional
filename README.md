# Los primeros pasos con los componentes funcional

1.- Vamos con la estructura de un componente funcional.

// modo 1
function MiOtroComponete() {
  return
}

// Modo 2.. mas usado
const MiComponente = ( { miProp  }) => {
  return (
    <div></div>
  )
}

export default MiComponente



2.- Los componentes funcnionales esta diseñados con funciones puras.

¿Funciones puras?, si que me devuelve un valor esperado o que nunca cambia el valor de retorno, cuando sea llamda

¿Y existe funcinone impuras?, si un funncion que te retorne la fecha, mas alla que le refrese fecha su valor en si esta cambiando cada vez que las estas llamando, tal como el ejemplo de la linea 27

const impura = ()=> new Date()
console.log(impura());

Que otro ejemplo podemos ver de funciones impuras, funciones que hacen llamdos a una API o una base dato

3.- HOOKS:

3.1.- useState (es una funcion), debe estar importada en el archivo donde se usa
      
      import { useState } from "react";

3.2.- Para su uso lo ideal debes hacer destructuring, y el valor que pases entre parentesis es su valor inicial (unico valor), es decir el "estado inicial", y como esta funcion (useState) retorna un array por ese aplicamos destructuring del nombre del estado (el que tu desees) y la funcion que altera o modifica el estado (setNombreestado), lo unico que debe cumplir por condicion es que el nombre que escogiste para el estado, a la funcnion manejadora del estado se le anteponga el el 'set'

      const [contador, setContador] = useState(0)

3.2.- REGLAS de los Hooks:

  .- NO PUEDEN llamarse en loops, ni condicinones (for, while, if), y lo enconstras en el nivel mas alto del componente, es decir la linea inmediata despues de haber declarado el Componente, y tambien en los custom (personalizados) hook

      const App = () => {
==>     const [contador, setContador] = useState(0)
        return (
            < div>
        )
      }

  .- Cuando diseñes un hook, debe empezar con use* y luego el nombre que le quieras coloar

4.- Creando mi primer Hook custom (se crear fuera de tu componente)

==>>          const useContador = (valorInicial) => {
                const [contador, setContador] = useState(valorInicial)
                const incrementar = () => {
                  setContador(contador + 1)
                }

                return [contador, incrementar]
              }

              const App = () => {
 ==>>         const [contador, incrementar] = useContador(0)
                return (
                  <div>
                    Contador: {contador}
                    <div><button onClick={incrementar}>Incrementar</button></div>
                  </div>
                )

              }


5.- Trabajando con useEffect, se cuando queremos hacer algun aefecto o alterar nuestro componete, llamar a una APi, consulta a BD, modificar algo en el DOM.

  Importante, useEffect como funcion al fin, recibe dos parametros
    1.- una funcion con la logica con que este va ejecutar
    2.- Una lista con las dependencias que este necesita para poder funcionar

    Si por casualidad no le pasamos el segundo parametro, va ejecutarse solamente si existe algun cambio en nuestro componente


              const App = () => {
                const [contador, incrementar] = useContador(0)
  ==>>          useEffect(()=> {
  ==>>             document.title = contador
  ==>>           }, [contador])
                return (
                  <div>
                    Contador: {contador}
                    <div><button onClick={incrementar}>Incrementar</button></div>
                  </div>
                )

              }
        Aca no es mas que una actulizacion del titulo de la pestaña, cada vez que le doy click al boton de inrementear.


        

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
