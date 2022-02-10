import ActivityCard from "./ActivityCard"
import CityNavBar from "./CityNavBar"
import {useState, useEffect} from 'react'

function AllActivitiesByCity ({currentUser, setCurrentUser, selectedCity, reviewLocationId, setReviewLocationId}) {

  const [allLocations, setAllLocations] = useState([])

  useEffect (() => {
    fetch(`http://localhost:9293//cities/${selectedCity.id}/locations`)
    .then(res => res.json())
    .then(data => {
      let sortedLocations = data.sort(data.average_general_rating)
      setAllLocations(sortedLocations.reverse())
    })
  }, [] )

  return(
    <div>
      <div>
      <h1 className="act-card-section">All Activities in {selectedCity.city_name}</h1>
      </div>
      <CityNavBar />
      <div className='activity-card-container'>
      {allLocations.map((location) => (
       <ActivityCard 
        key={location.id}
        ratingAverage={location.average_general_rating}
        age="Overall Rating"
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