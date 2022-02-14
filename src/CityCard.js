import { useHistory} from 'react-router-dom'


function CityCard ({city, setSelectedCity}) {

  let history = useHistory()

  function handleCitySelect () {
    setSelectedCity(city)
    history.push('/city')
  }
  
    // *** JSX *** //
  return (
    <div>
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