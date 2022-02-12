import { useContext } from "react";
import ActivityCard from "./ActivityCard";
import CityNavBar from "./CityNavBar";
import { UserContext } from './UserContext'

function OutdoorActivities ({selectedCity, reviewLocationId, setReviewLocationId}) {

  const {currentUser, setCurrentUser} = useContext(UserContext)
  
  const outdoorLocations = selectedCity.locations.filter ((location) => location.city_id === selectedCity.id && location.outdoor === true);

  return(
    <div>
      <h1 className="act-card-section">Outdoor Activities in {selectedCity.city_name}</h1>
      <CityNavBar />
      <div className='activity-card-container'>
     {outdoorLocations.map((location) => (
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

export default OutdoorActivities