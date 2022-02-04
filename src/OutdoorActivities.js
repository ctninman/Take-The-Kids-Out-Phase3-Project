import ActivityCard from "./ActivityCard";

function OutdoorActivities ({selectedCity, locations}) {
  
  const outdoorLocations = locations.filter ((location) => location.city_id === selectedCity.id && location.outdoor === true);

  return(
    <div>
      <h1>OutdoorActivities in {selectedCity.city_name}</h1>
     {outdoorLocations.map((location) => (
       <ActivityCard location={location}/>
     ))}
     </div>
  )
}

export default OutdoorActivities