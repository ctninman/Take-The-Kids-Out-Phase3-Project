import {useState, useEffect} from 'react'
import ActivityCard from './ActivityCard'
import CityNavBar from './CityNavBar'

function BabyActivities ({selectedCity, currentUser, setCurrentUser, reviewLocationId, setReviewLocationId}) {

  const [babyActivities, setBabyActivities] = useState([])

  useEffect (() => {
    fetch(`http://localhost:9293//cities/${selectedCity.id}/locations/baby`)
    .then(res => res.json())
    .then(data => {
      let sortedActivities = data.sort(data.average_baby_rating)
      setBabyActivities(sortedActivities.reverse())
    })
  }, [] )

  return(
    <div>
      <h1 className="act-card-section">Baby Activities in {selectedCity.city_name}</h1>
      <CityNavBar />
      <div className='activity-card-container'>
      {babyActivities.map((location) => (
       <ActivityCard 
        key={location.id}
        ratingAverage={location.average_baby_rating}
        age="Baby Rating"
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

export default BabyActivities