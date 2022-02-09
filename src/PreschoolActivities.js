import {useState, useEffect} from 'react'
import ActivityCard from './ActivityCard'
import CityNavBar from './CityNavBar'

function PreschoolActivities ({currentUser, setCurrentUser, selectedCity, reviewLocationId, setReviewLocationId}) {

  const [preschoolActivities, setPreschoolActivities] = useState([])

  useEffect (() => {
    fetch(`http://localhost:9293//cities/${selectedCity.id}/locations/preschool`)
    .then(res => res.json())
    .then(data => {
      setPreschoolActivities(data)
    })
  }, [] )

  return(
    <div>
      <h1 className="act-card-section">Preschool Activities in {selectedCity.city_name}</h1>
      <CityNavBar />
      <div className='activity-card-container'>
      {preschoolActivities.map((location) => (
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

export default PreschoolActivities