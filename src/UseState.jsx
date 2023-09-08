import { useState } from "react";
// import MiComponente from "./MiComponente";

// Aca veremos una simple comparacion de entre useState y estado manejado con clases.
// class App extends Component{
//  state  = {
//    contador : 0 
//   }
//   incrementar = () => {
//     this.setContador({ contador: this.state.contador + 1})
//   }
//   render() {
//     return (
//       <div>
//       Contador: {this.state.contador}
//       <div>
//         <button onClick={this.incrementar}>Incrementar</button>
//         </div>
//     </div>

//     )
//   }
// }

const useContador = (valorInicial) => {
  const [contador, setContador] = useState(valorInicial)
  const incrementar = () => {
    setContador(contador + 1)
  }

  return [contador, incrementar]
}

const App = () => {
  const [contador, incrementar] = useContador(0)
  return (
    <div>
      Contador: {contador}
      <div><button onClick={incrementar}>Incrementar</button></div>
    </div>
  )

}

export default App


/* 

NOS FUIMOS A OTRO ARCHIVO, useState.jsx
*/