import {useState, useEffect, useContext} from 'react'
import ActivityCard from './ActivityCard'
import AllReviewsOneLocation from './AllReviewsOneLocation'
import CityNavBar from './CityNavBar'
import { UserContext } from './UserContext'

function BabyActivities ({selectedCity, reviewLocationId, setReviewLocationId}) {

  const {currentUser, setCurrentUser} = useContext(UserContext)
  const [viewBabyLocationReviews, setViewBabyLocationReviews] = useState(false)
  const [babyActivities, setBabyActivities] = useState([])

  useEffect (() => {
    fetch(`http://localhost:9293/cities/${selectedCity.id}/locations/baby`)
    .then(res => res.json())
    .then(data => {
      let sortedActivities = data.sort((a, b) => (a.average_baby_rating > b.average_baby_rating) ? 1 : -1)
      setBabyActivities(sortedActivities.reverse())
    })
  }, [] )

  return viewBabyLocationReviews === false ?
    <div>
      <h1 className="act-card-section">Baby Activities in {selectedCity.city_name}</h1>
      <CityNavBar />
      <div className='activity-card-container'>
      {babyActivities.map((location) => (
       <ActivityCard 
        setViewLocationReviews={setViewBabyLocationReviews}
        key={location.id}
        ratingAverage={location.average_baby_rating}
        age="Baby Rating"
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
        onClick={() => setViewBabyLocationReviews(false)}>
          Return to City
        </button>
      </div>
      <AllReviewsOneLocation reviewLocationId={reviewLocationId}/>
    </>
}

export default BabyActivities