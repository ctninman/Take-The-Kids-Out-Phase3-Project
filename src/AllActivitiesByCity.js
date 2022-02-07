import ActivityCard from "./ActivityCard"

function AllActivitiesByCity ({currentUser, setCurrentUser, selectedCity, locations}) {

  const currentCityLocations = locations.filter((location) => location.city_id === selectedCity.id)

  return(
    <div>
      <h1>All Activities in {selectedCity.city_name}</h1>
      {currentCityLocations.map((location) => (
       <ActivityCard 
        location={location} 
        setCurrentUser={setCurrentUser} 
        currentUser={currentUser}
        />
     ))}
    </div>
  )
}

export default AllActivitiesByCity