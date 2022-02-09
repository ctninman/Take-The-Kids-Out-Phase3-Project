import {useState, useEffect} from 'react'
import ActivityCard from './ActivityCard'
import CityNavBar from './CityNavBar'

function ToddlerActivities ({currentUser, setCurrentUser, selectedCity, reviewLocationId, setReviewLocationId}) {

  const [toddlerActivities, setToddlerActivities] = useState([])

  useEffect (() => {
    fetch(`http://localhost:9293//cities/${selectedCity.id}/locations/toddler`)
    .then(res => res.json())
    .then(data => {
      setToddlerActivities(data)
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