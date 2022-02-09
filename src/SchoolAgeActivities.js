import {useState, useEffect} from 'react'
import ActivityCard from './ActivityCard'
import CityNavBar from './CityNavBar'

function SchoolAgeActivities ({currentUser, setCurrentUser, selectedCity, reviewLocationId, setReviewLocationId}) {

  const [schoolAgeActivities, setSchoolAgeActivities] = useState([])

  useEffect (() => {
    fetch(`http://localhost:9293//cities/${selectedCity.id}/locations/school_age`)
    .then(res => res.json())
    .then(data => {
      setSchoolAgeActivities(data)
    })
  }, [] )

  return(
    <div>
      <h1 className="act-card-section">School-Age Activities in {selectedCity.city_name}</h1>
      <CityNavBar />
      <div className='activity-card-container'>
      {schoolAgeActivities.map((location) => (
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

export default SchoolAgeActivities