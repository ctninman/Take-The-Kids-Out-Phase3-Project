import ActivityCard from "./ActivityCard"
import CityNavBar from "./CityNavBar"

function AllActivitiesByCity ({currentUser, setCurrentUser, selectedCity, reviewLocationId, setReviewLocationId}) {

  const currentCityLocations = selectedCity.locations.filter((location) => location.city_id === selectedCity.id)

  return(
    <div>
      <div>
      <h1 className="act-card-section">All Activities in {selectedCity.city_name}</h1>
      </div>
      <CityNavBar />
      <div className='activity-card-container'>
      {currentCityLocations.map((location) => (
       <ActivityCard 
        key={location.id}
        location={location} 
        setCurrentUser={setCurrentUser} 
        currentUser={currentUser}
        reviewLocationId={reviewLocationId}
        setReviewLocationId={setReviewLocationId}
        />
     ))}
     </div>
    </div>
  )
}

export default AllActivitiesByCity