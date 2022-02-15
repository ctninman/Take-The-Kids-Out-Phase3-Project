import {useState, useEffect} from 'react'
import ActivityCard from './ActivityCard'
import AllReviewsOneLocation from './AllReviewsOneLocation'
import CityNavBar from './CityNavBar'

function ToddlerActivities ({selectedCity, reviewLocationId, setReviewLocationId}) {

    // *** STATE VARIABLES *** //
  const [toddlerActivities, setToddlerActivities] = useState([])
  const [viewToddlerLocationReviews, setViewToddlerLocationReviews] = useState(false)

    // *** USE EFFECT *** //
  useEffect (() => {
    fetch(`http://localhost:9293/cities/${selectedCity.id}/locations/toddler`)
    .then(res => res.json())
    .then(data => {
      let sortedActivities = data.sort((a, b) => (a.average_toddler_rating > b.average_toddler_rating) ? 1 : -1)
      setToddlerActivities(sortedActivities.reverse())
    })
  }, [] )

    // *** JSX *** //
  return viewToddlerLocationReviews === false ?
    <div>
      <h1 className="act-card-section">Toddler Activities in {selectedCity.city_name}</h1>
      <CityNavBar />
      <div className='activity-card-container'>
        {toddlerActivities.map((location) => (
          <ActivityCard 
            setViewLocationReviews={setViewToddlerLocationReviews}
            key={location.id}
            ratingAverage={location.average_toddler_rating}
            age="Toddler Rating"
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
          onClick={() => setViewToddlerLocationReviews(false)}>
          Return to City
        </button>
      </div>
      <AllReviewsOneLocation reviewLocationId={reviewLocationId}/>
    </>
}

export default ToddlerActivities