import ActivityCard from './ActivityCard'
import {useEffect} from 'react'
import CityNavBar from './CityNavBar';

function FreeActivities ({currentUser, selectedCity, setCurrentUser, reviewLocationId, setReviewLocationId}) {

  const freeLocations = selectedCity.locations.filter ((location) => location.city_id === selectedCity.id && location.free === true);


  return(
    <div>
      <h1 className="act-card-section">Free Activities in {selectedCity.city_name}</h1>
      <CityNavBar />
      <div className='activity-card-container'>
      {freeLocations.map((location) => (
       <ActivityCard 
        key={location.id}
        currentUser={currentUser} 
        age={null}
        setCurrentUser={setCurrentUser} 
        location={location}
        reviewLocationId={reviewLocationId}
        setReviewLocationId={setReviewLocationId}/>
     ))}
     </div>
    </div>
  )
}

export default FreeActivities