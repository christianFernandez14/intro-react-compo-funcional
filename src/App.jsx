import { useState, useEffect } from "react";

const useContador = (valorInicial) => {
  const [contador, setContador] = useState(valorInicial)
  const incrementar = () => {
    setContador(contador + 1)
  }

  return [contador, incrementar]
}


const Interval = ({ contador }) => {
  useEffect(()=>{
    const i = setInterval(()=> console.log(contador), 1000)
    // De este manera setamos los intervalos que hay entre una actulizacion y otra
    return ()=> clearInterval(i)
  }, [contador])
}

const App = () => {
  const [contador, incrementar] = useContador(0)
  useEffect(()=> {
    document.title = contador
  }, [])
  return (
    <div>
      Contador: {contador}
      <div><button onClick={incrementar}>Incrementar</button></div>
      <Interval contador={contador} />
    </div>
  )

}

export default App