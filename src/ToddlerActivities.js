import {useState, useEffect} from 'react'
import ActivityCard from './ActivityCard'
import CityNavBar from './CityNavBar'

function ToddlerActivities ({currentUser, setCurrentUser, selectedCity, reviewLocationId, setReviewLocationId}) {

  const [toddlerActivities, setToddlerActivities] = useState([])

  useEffect (() => {
    fetch(`http://localhost:9293//cities/${selectedCity.id}/locations/toddler`)
    .then(res => res.json())
    .then(data => {
      let sortedActivities = data.sort(data.average_toddler_rating)
      setToddlerActivities(sortedActivities)
    })
  }, [] )

  return(
    <div>
      <h1 className="act-card-section">Toddler Activities in {selectedCity.city_name}</h1>
      <CityNavBar />
      <div className='activity-card-container'>
      {toddlerActivities.map((location) => (
       <ActivityCard 
        key={location.id}
        ratingAverage={location.average_toddler_rating}
        age="Toddler Rating"
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

export default ToddlerActivities