import {useState, useEffect} from 'react'
import ActivityCard from './ActivityCard'
import CityNavBar from './CityNavBar'

function AdultActivities ({selectedCity, currentUser, setCurrentUser, reviewLocationId, setReviewLocationId}) {

  const [adultActivities, setAdultActivities] = useState([])

  useEffect (() => {
    fetch(`http://localhost:9293//cities/${selectedCity.id}/locations/adult`)
    .then(res => res.json())
    .then(data => {
      let sortedActivities = data.sort(data.average_adult_rating)
      setAdultActivities(sortedActivities.reverse())
    })
  }, [] )

  return(
    <div>
      <h1 className="act-card-section">Also Enjoyable For Adult in {selectedCity.city_name}</h1>
      <CityNavBar />
      <div className='activity-card-container'>
      {adultActivities.map((location) => (
       <ActivityCard 
        key={location.id}
        ratingAverage={location.average_adult_rating}
        age="Adult Rating"
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

export default AdultActivities