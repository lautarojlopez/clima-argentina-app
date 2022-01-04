import {Fragment, useState, useEffect} from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import Clima from './components/Clima'

function App() {

  //State
  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    provincia: ''
  })
  const {ciudad, provincia} = busqueda
  const [consultar, setConsultar] = useState(false)
  const [resultado, setResultado] = useState({})
  const [error, setError] = useState(false)

  useEffect( () => {
    if(consultar){
      const requestAPI = async () => {
        const apikey = 'a79859336642d7949646649e5aa55e9a'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${provincia},AR&appid=${apikey}&lang=es`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        setResultado(resultado)
        setConsultar(false)

        //Verificar si hay error
        if(resultado.cod === '404'){
          setError(true)
        }
        else{
          setError(false)
        }
      }
      requestAPI()
    }
  }, [consultar])

  return (
    <Fragment>
      <Header/>
      <div className="flex flex-col min-h-screen items-center bg-cyan-800 p-5">
        <div className="w-11/12 md:w-8/12 lg:w-6/12">
          <Formulario
            busqueda = {busqueda}
            setBusqueda = {setBusqueda}
            setConsultar = {setConsultar}
          />
        </div>
        <div className="w-11/12 md:w-8/12">
          {error ?
            <p className="text-center mt-5 p-3 border-2 border-red-500 bg-red-200 text-red-500 font-bold">No se encontraron resultados</p>
            :
            <Clima
              resultado = {resultado}
            />
          }
        </div>
      </div>
    </Fragment>
  );
}

export default App;
