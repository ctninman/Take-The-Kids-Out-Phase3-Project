import {useState, useEffect} from 'react'
import ActivityCard from './ActivityCard'
import AllReviewsOneLocation from './AllReviewsOneLocation'
import CityNavBar from './CityNavBar'

function PreschoolActivities ({selectedCity, reviewLocationId, setReviewLocationId}) {

    // *** STATE VARIABLES *** //
  const [preschoolActivities, setPreschoolActivities] = useState([])
  const [viewPreschoolLocationReviews, setViewPreschoolLocationReviews] = useState(false)

    // *** USE EFFECT *** //
  useEffect (() => {
    fetch(`http://localhost:9293/cities/${selectedCity.id}/locations/preschool`)
    .then(res => res.json())
    .then(data => {
      let sortedActivities = data.sort((a, b) => (a.average_preschool_rating > b.average_preschool_rating) ? 1 : -1)
      setPreschoolActivities(sortedActivities.reverse())
    })
  }, [] )

    // *** JSX *** //
  return viewPreschoolLocationReviews === false ?
    <div>
      <h1 className="act-card-section">Preschool Activities in {selectedCity.city_name}</h1>
      <CityNavBar />
      <div className='activity-card-container'>
        {preschoolActivities.map((location) => (
          <ActivityCard
            setViewLocationReviews={setViewPreschoolLocationReviews}
            key={location.id} 
            ratingAverage={location.average_preschool_rating}
            age="Preschool Rating"
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
          onClick={() => setViewPreschoolLocationReviews(false)}>
          Return to City
        </button>
      </div>
      <AllReviewsOneLocation reviewLocationId={reviewLocationId}/>
    </>
}

export default PreschoolActivities