import { useEffect } from 'react';
import {NavLink} from 'react-router-dom'
import CityCard from './CityCard';
import CityNavBar from './CityNavBar';

function Cities ({selectedCity, setSelectedCity, cities, setCities}) {

  useEffect (() => {
    fetch('http://localhost:9293/cities')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setCities(data)
    })
  }, [] )

  const loginLinkStyles = {
    display: "inline-block",
    width: "70px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "#609240",
    textDecoration: "none",
    color: "white",
    borderRadius: '5px'
  };

  return (selectedCity === "") ?
    <>
      <h1 style={{textAlign: 'center', fontSize: '40px'}}>Select a city:</h1>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        {cities.map ((city) => (
          <CityCard
            key={city.id} 
            city={city}
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}/>
          ))}
      </div>
    </>
    :    
    <>
      <div className='cities-page'>
        <h1 className="act-card-section">Welcome to {selectedCity.city_name}</h1>
        <CityNavBar />
        <img src={selectedCity.photo} alt={selectedCity.city_name} style={{width: '100%'}}/>
      </div>
    </>
}

export default Cities