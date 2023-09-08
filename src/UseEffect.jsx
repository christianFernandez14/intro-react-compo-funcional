import { useState, useEffect, Component } from "react";

const useContador = (valorInicial) => {
  const [contador, setContador] = useState(valorInicial)
  const incrementar = () => {
    setContador(contador + 1)
  }

  return [contador, incrementar]
}


// const Interval = ({ contador }) => {
//   useEffect(()=>{
//     const i = setInterval(()=> console.log(contador), 1000)
//     // De este manera setamos los intervalos que hay entre una actulizacion y otra
//     return ()=> clearInterval(i)
//   }, [contador])
// }


class Interval extends Component {
  intervalo = ''
  componentDidMount(){
    this.intervalo = setInterval(() => console.log(this.props.contador), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalo)
  }

  render() {
    return(
      <p>Intervalo</p>
    )
  }
}

const App = () => {
  const [contador, incrementar] = useContador(0)
  useEffect(()=> {
    document.title = contador
  }, [contador])
  return (
    <div>
      Contador: {contador}
      <div><button onClick={incrementar}>Incrementar</button></div>
      <Interval contador={contador} />
    </div>
  )

}

export default App