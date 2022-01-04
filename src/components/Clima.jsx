function Clima({resultado}) {

  const {name, main, weather} = resultado
  const kelToCel = (kelvins) => {
    return parseFloat(kelvins - 273.15).toFixed(1)
  }
  if(!name){return null}

  const color = (temp) =>{
    const tempC = kelToCel(temp)
    if(tempC <= 15){
      return 'from-cyan-300 to-cyan-500'
    }
    else if(tempC > 15 && tempC < 25 ){
      return 'from-emerald-300 to-emerald-500'
    }
    else if(tempC >= 25 && tempC < 30){
      return 'from-amber-300 to-amber-500'
    }
    else{
      return 'from-red-300 to-red-500'
    }
  }

  const iconTermometro = (temp) =>{
    const tempC = kelToCel(temp)
    if(tempC <= 15){
      return 'fas fa-thermometer-quarter'
    }
    else if(tempC > 15 && tempC < 25 ){
      return 'fas fa-thermometer-half'
    }
    else if(tempC >= 25 && tempC < 30){
      return 'fas fa-thermometer-three-quarters'
    }
    else{
      return 'fas fa-thermometer-full'
    }
  }

  return(
    <div className={`m-auto md:w-8/12 lg:w-6/12 py-10 mt-5 p-3 rounded shadow-xl text-center bg-gradient-to-b ${color(main.temp)}`}>
      <h2 className="text-center text-4xl">{name}</h2>
      <p className="text-center text-4xl py-3"><i className={`${iconTermometro(main.temp)}`}></i> {kelToCel(main.temp)} °C</p>
      <p className="text-center text-xl">Máx: {kelToCel(main.temp_max)} °C</p>
      <p className="text-center text-xl">Mín: {kelToCel(main.temp_min)} °C</p>
      <p className="text-center text-2xl pt-3 uppercase">{weather[0].description}</p>
    </div>
  )

}

export default Clima
