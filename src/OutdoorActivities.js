import ActivityCard from "./ActivityCard";
import CityNavBar from "./CityNavBar";

function OutdoorActivities ({currentUser, setCurrentUser, selectedCity, reviewLocationId, setReviewLocationId}) {
  
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
        currentUser={currentUser} 
        setCurrentUser={setCurrentUser} 
        location={location}
        reviewLocationId={reviewLocationId}
        setReviewLocationId={setReviewLocationId}/>
     ))}
     </div>
     </div>
  )
}

export default OutdoorActivities