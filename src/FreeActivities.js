import ActivityCard from './ActivityCard'
import {useEffect, useContext} from 'react'
import CityNavBar from './CityNavBar';
import { UserContext } from './UserContext'


function FreeActivities ({selectedCity, reviewLocationId, setReviewLocationId}) {
  
  const {currentUser, setCurrentUser} = useContext(UserContext)

  const freeLocations = selectedCity.locations.filter ((location) => location.city_id === selectedCity.id && location.free === true);


  return(
    <div>
      <h1 className="act-card-section">Free Activities in {selectedCity.city_name}</h1>
      <CityNavBar />
      <div className='activity-card-container'>
      {freeLocations.map((location) => (
       <ActivityCard 
        key={location.id}
        age={null}
        location={location}
        reviewLocationId={reviewLocationId}
        setReviewLocationId={setReviewLocationId}/>
     ))}
     </div>
    </div>
  )
}

export default FreeActivities