import { useRef } from "react";

// Nos permite tomar un elemento del DOM y trabar con sus propiedades

const App = () => {
  const inputRef = useRef()
  const ref = useRef() // nos va devolver un obejto con la propiedad de {current: null}, este objeto es el elemento de DOM que le haces referencia con useRef y por lo tanto tienes acceso a todas la propiedades que el elemento contega
  const click = () => {
    console.log(ref.current.firstChild); // con toda esta extencin accedo a el contenido de la etiqueta, ve probando con otras referencias

    // Para ver un poco mas lo que digo anteriormente, el useRef, vine hacer referencia 'document' del DOM

    ref.current.innerHTML = 'Cambie del todo' // No se hace esto en la practica solo para que veas que es el mismo comportamiento

  }

  const focus = () => {
    inputRef.current.focus() // es una funcion que enfoca dentro del input
  }

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={focus}>Focus</button>
      <div onClick={click} ref={ref}>Hola</div>
    </div>


  )
}


export default App