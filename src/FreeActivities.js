import ActivityCard from './ActivityCard'
import {useEffect} from 'react'

function FreeActivities ({currentUser, selectedCity, locations}) {

  const freeLocations = locations.filter ((location) => location.city_id === selectedCity.id && location.free === true);


  return(
    <div>
      <h1>Free Activities in {selectedCity.city_name}</h1>
      {freeLocations.map((location) => (
       <ActivityCard currentUser={currentUser} location={location}/>
     ))}
    </div>
  )
}

export default FreeActivities