import { useEffect, useState } from 'react';
import CityCard from './CityCard';
import CityNavBar from './CityNavBar';

function Cities ({selectedCity, setSelectedCity, cities}) {

  const [highestBabyRating, setHighestBabyRating] = useState ({})
  const [highestToddlerRating, setHighestToddlerRating] = useState ({})
  const [highestPreschoolRating, setHighestPreschoolRating] = useState ({})
  const [highestSchoolAgeRating, setHighestSchoolAgeRating] = useState ({})
  const [highestAdultRating, setHighestAdultRating] = useState ({})

  useEffect (() => {
    if (selectedCity != '') {
      fetch(`http://localhost:9293/cities/${selectedCity.id}/locations`)
      .then(res => res.json())
      .then(locations => {
        setHighestBabyRating(locations.reduce((max, location) => max.average_baby_rating > location.average_baby_rating ? max : location))
        setHighestToddlerRating(locations.reduce((max, location) => max.average_toddler_rating > location.average_toddler_rating ? max : location))
        setHighestPreschoolRating(locations.reduce((max, location) => max.average_preschool_rating > location.average_preschool_rating ? max : location))
        setHighestSchoolAgeRating(locations.reduce((max, location) => max.average_school_age_rating > location.average_school_age_rating ? max : location))
        setHighestAdultRating(locations.reduce((max, location) => max.average_adult_rating > location.average_baby_rating ? max : location))
      })
    }
  }, [selectedCity] )
  
    // *** JSX *** //
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
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{width: '50%'}}>
            <img src={selectedCity.photo} alt={selectedCity.city_name} style={{width: '95%', marginLeft: '5%', marginRight: '5%', borderRadius: '10%'}}/>
          </div>
          <div style={{width: '48%', padding: '15px'}}>
            <h1 style={{marginTop: '0px', paddingTop: '0px', textAlign: 'center'}}>Highest Rated Activity for...</h1>
            <h2><i>Babies:</i> {highestBabyRating.location_name}</h2>
            <h2><i>Toddlers:</i> {highestToddlerRating.location_name}</h2>
            <h2><i>Preschoolers:</i> {highestPreschoolRating.location_name}</h2>
            <h2><i>School-Age:</i> {highestSchoolAgeRating.location_name}</h2>
            <h2><i>Adults:</i> {highestAdultRating.location_name}</h2>
          </div>
        </div>
      </div>
    </>
}

export default Cities