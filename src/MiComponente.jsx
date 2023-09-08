
const impura = ()=> new Date()
console.log(impura());

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

/* 

Tips inicial:

los componetes funcionales pueden definirse como funcion o como constante y se aplica el concepto de arrow function linea 6 y 11, siendo esta ultima la mas usada.

Los componentes funcnionales esta diseñados con funciones puras.

¿Funciones puras?, si que me devuelve un valor esperado, cuando sea llamda

¿Y existe funcinone impuras?, si un funncion que te retorne la fecha, mas alla que le refrese fecha su valor en si esta cambiando cada vez que las estas llamando, tal como el ejemplo de la linea 2

Que otro ejemplo podemos ver de funciones impuras, funciones que hacen llamdos a una API o una base dato

*/