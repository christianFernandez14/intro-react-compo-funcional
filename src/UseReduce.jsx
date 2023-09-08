import { useReducer, useState } from "react";

//const state =  { contador: 0 }

// Trabaja muy similar al metodo reducer de los metodos
//  const reducer = (acumulador, elemento) => {return nuevAcumulador}
// action = {type: string, payload: any}  // debes usar esas propiedad por convencion, NO CAMBIAR

const inicial = { contador: 0 }
const reducer = (state, action) => {
  switch (action.type) {
    case 'incrementar':
      return { contador: state.contador + 1 } // Sera el nuevo valor de mi estado
    case 'decrementar':
      return { contador: state.contador - 1 } // Sera el nuevo valor de mi estado
    case 'set':
      return { contador: action.payload } // Se setea por el valor que contenga payload
    default:
      return state
  }
}


const App = () => {
  // Como veras el hook siempre va a los mas arriba del componente
  useReducer(reducer, inicial) // Este hook nos retornar un array muy similar al estilo useState
  const [state, dispach] = useReducer (reducer, inicial)  // aca hacemos destructuring para que veas un poco de lo que estamos hablando, donde state(es el estadoa actual), y dispach (funcion que despacha eventos y debe estar compuesto como action, es decir una propieda de type y eventualmente una de payload)
  const [valor, setValor] = useState(0)  

  return(
    <div>
      {/* Lo creamos para no pasarlo a la propiedad de payload */}
      <input value={valor} onChange={(e)=> setValor(e.target.value)}/> 
      <div>
      Contador: {state.contador}
        <div>
          <button onClick={()=> dispach( { type: 'incrementar'})}>Mas</button>
          <button onClick={()=> dispach( { type: 'decrementar'})}>Menos</button>
          <button onClick={()=> dispach( { type: 'set', payload: valor})}>Setear</button>
        </div>
      </div>
    </div>
  )
}

export default App
