import {useState} from 'react';

function Formulario({busqueda, setBusqueda, setConsultar}) {

  //State
  const {ciudad, provincia} = busqueda
  const [error, setError] = useState(false)

  //Cambiar state de busqueda
  const handleChange = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //Validar busqueda
    if(ciudad.trim() === '' || provincia.trim() === ''){
      setError(true)
      return
    }
    else{
      setError(false)
    }
    setConsultar(true)
  }

  return(
    <form onSubmit={handleSubmit} className="m-auto p-3 rounded shadow-xl bg-white">
      <div className="flex flex-col">
        <label
          className={`${error && ciudad.trim() === '' ? "text-red-500" : "text-sky-500"} font-bold`}
          >Ciudad</label>
        <input
          value={ciudad}
          onChange={handleChange}
          type="text"
          name="ciudad"
          placeholder="Ej: Buenos Aires, Reconquista, Villa Carlos Paz"
          className={`text-black p-2 bg-transparent focus:outline-none border-b-2 ${ error && ciudad.trim() === '' ? "bg-red-50 border-red-400 focus:border-red-500 hover:border-red-500" : "border-sky-200 focus:border-sky-500 hover:border-sky-500" } transition-all ease-linear duration-150`} />
      </div>
      <div className="flex flex-col">
        <label
          className={`${error && provincia.trim() === '' ? "text-red-500" : "text-sky-500"} font-bold`}
          >Provincia</label>
        <select
          value={provincia}
          onChange={handleChange}
          type="text" name="provincia"
          className={`cursor-pointer text-black p-2 bg-transparent focus:outline-none border-b-2 ${ error && provincia.trim() === '' ? "bg-red-50 border-red-400 focus:border-red-500 hover:border-red-500" : "border-sky-200 focus:border-sky-500 hover:border-sky-500" } transition-all ease-linear duration-150`} >
          <option value="" defaultValue disabled hidden>-- SELECCIONAR PROVINCIA --</option>
          <option value="AR-B">Buenos Aires</option>
          <option value="AR-K">Catamarca</option>
          <option value="AR-H">Chaco</option>
          <option value="AR-U">Chubut</option>
          <option value="AR-X">Cordoba</option>
          <option value="AR-W">Corrientes</option>
          <option value="AR-E">Entre Rios</option>
          <option value="AR-P">Formosa</option>
          <option value="AR-Y">Jujuy</option>
          <option value="AR-L">La Pampa</option>
          <option value="AR-F">La Rioja</option>
          <option value="AR-M">Mendoza</option>
          <option value="AR-N">Misiones</option>
          <option value="AR-Q">Neuquen</option>
          <option value="AR-R">Rio Negro</option>
          <option value="AR-A">Salta</option>
          <option value="AR-J">San Juan</option>
          <option value="AR-D">San Luis</option>
          <option value="AR-Z">Santa Cruz</option>
          <option value="AR-S">Santa Fe</option>
          <option value="AR-G">Sgo. del Estero</option>
          <option value="AR-V">Tierra del Fuego</option>
         <option value="AR-T">Tucuman</option>
        </select>
      </div>
      <button type="submit" className="p-2 text-white mt-4 w-full bg-sky-500 transition-all ease-linear duration-150 hover:bg-sky-400 font-bold">Buscar</button>
    </form>
  )

}

export default Formulario
