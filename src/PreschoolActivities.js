import {useState, useEffect, useContext} from 'react'
import ActivityCard from './ActivityCard'
import CityNavBar from './CityNavBar'
import { UserContext } from './UserContext'

function PreschoolActivities ({selectedCity, reviewLocationId, setReviewLocationId}) {

  const {currentUser, setCurrentUser} = useContext(UserContext)

  const [preschoolActivities, setPreschoolActivities] = useState([])

  useEffect (() => {
    fetch(`http://localhost:9293//cities/${selectedCity.id}/locations/preschool`)
    .then(res => res.json())
    .then(data => {
      let sortedActivities = data.sort(data.average_preschool_rating)
      setPreschoolActivities(sortedActivities.reverse())
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
        ratingAverage={location.average_preschool_rating}
        age="Preschool Rating"
        location={location}
        reviewLocationId={reviewLocationId}
        setReviewLocationId={setReviewLocationId}/>
     ))}
     </div>
    </div>
  )
}

export default PreschoolActivities