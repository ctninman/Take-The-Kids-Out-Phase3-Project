import {useState, useEffect} from 'react'
import ActivityCard from './ActivityCard'
import AllReviewsOneLocation from './AllReviewsOneLocation'
import CityNavBar from './CityNavBar'

function SchoolAgeActivities ({selectedCity, reviewLocationId, setReviewLocationId}) {

  const [schoolAgeActivities, setSchoolAgeActivities] = useState([])
  const [viewSchoolAgeLocationReviews, setViewSchoolAgeLocationReviews] = useState(false)

  useEffect (() => {
    fetch(`http://localhost:9293/cities/${selectedCity.id}/locations/school_age`)
    .then(res => res.json())
    .then(data => {
      let sortedActivities = data.sort((a, b) => (a.average_school_age_rating > b.average_school_age_rating) ? 1 : -1)
      setSchoolAgeActivities(sortedActivities.reverse())
    })
  }, [] )
  
    // *** JSX *** //
  return viewSchoolAgeLocationReviews === false ?
    <div>
      <h1 className="act-card-section">School-Age Activities in {selectedCity.city_name}</h1>
      <CityNavBar />
      <div className='activity-card-container'>
      {schoolAgeActivities.map((location) => (
       <ActivityCard 
        setViewLocationReviews={setViewSchoolAgeLocationReviews}
        key={location.id}
        ratingAverage={location.average_school_age_rating}
        age="School-Age Rating"
        location={location}
        reviewLocationId={reviewLocationId}
        setReviewLocationId={setReviewLocationId}/>
     ))}
     </div>
    </div>
      : 
    <>
      <div style={{marginTop: '10px', marginLeft: '10px'}}>
        <button className='return-button'
        onClick={() => setViewSchoolAgeLocationReviews(false)}>
          Return to City
        </button>
      </div>
      <AllReviewsOneLocation reviewLocationId={reviewLocationId}/>
    </>
}

export default SchoolAgeActivities