import { useHistory, Route } from 'react-router-dom'


function CityCard ({city, selectedCity, setSelectedCity}) {

  let history = useHistory()

  function handleCitySelect (event) {
    setSelectedCity(city)
    console.log(selectedCity)
    history.push('/city')
  }

  return (
    <div 
      // onClick={handleCitySelect} 
      // style={{backgroundColor: 'orange', margin: '5px'}} 
      // value={city.city_name}
    >
      <button
        onClick={handleCitySelect} 
        className='city-card'
        value={city.city_name}
        style={{backgroundImage: `url(${city.photo})`, backgroundSize: '100%', fontWeight: 'bolder', fontSize: '25px'}}
        >{city.city_name}
      </button>
    </div>
  )
}

export default CityCard