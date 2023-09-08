import { Component, useState } from "react";
// import MiComponente from "./MiComponente";

// Aca veremos una simple comparacion de entre useState y estado manejado con clases.
class App extends Component{
 state  = {
   contador : 0 
  }
  incrementar = () => {
    this.setContador({ contador: this.state.contador + 1})
  }
  render() {
    return (
      <div>
      Contador: {this.state.contador}
      <div>
        <button onClick={this.incrementar}>Incrementar</button>
        </div>
    </div>

    )
  }
}



// const App = () => {
//   const [contador, setContador] = useState(0)
//   return (
//     <div>
//       Contador: {contador}
//       <div><button onClick={()=> setContador(contador + 1)}>Incrementar 1</button></div>
//     </div>
//   )
  
// }

export default App
