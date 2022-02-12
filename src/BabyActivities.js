import {useState, useEffect, useContext} from 'react'
import ActivityCard from './ActivityCard'
import CityNavBar from './CityNavBar'
import { UserContext } from './UserContext'

function BabyActivities ({selectedCity, reviewLocationId, setReviewLocationId}) {

  const {currentUser, setCurrentUser} = useContext(UserContext)
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
        location={location}
        reviewLocationId={reviewLocationId}
        setReviewLocationId={setReviewLocationId}/>
     ))}
     </div>
    </div>
  )
}

export default BabyActivities