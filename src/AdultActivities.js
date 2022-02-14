import {useState, useEffect, useContext} from 'react'
import ActivityCard from './ActivityCard'
import AllReviewsOneLocation from './AllReviewsOneLocation'
import CityNavBar from './CityNavBar'
import { UserContext } from './UserContext'

function AdultActivities ({selectedCity, reviewLocationId, setReviewLocationId}) {

  const {currentUser, setCurrentUser} = useContext(UserContext)
  
  const [adultActivities, setAdultActivities] = useState([])
  const [viewAdultLocationReviews, setViewAdultLocationReviews] = useState(false)

  useEffect (() => {
    fetch(`http://localhost:9293/cities/${selectedCity.id}/locations/adult`)
    .then(res => res.json())
    .then(data => {
      let sortedActivities = data.sort((a, b) => (a.average_adult_rating > b.average_adult_rating) ? 1 : -1)
      setAdultActivities(sortedActivities.reverse())
    })
  }, [] )

  return viewAdultLocationReviews === false ?
    <div>
      <h1 className="act-card-section">Also Enjoyable For Adults in {selectedCity.city_name}</h1>
      <CityNavBar />
      <div className='activity-card-container'>
      {adultActivities.map((location) => (
       <ActivityCard
        setViewLocationReviews={setViewAdultLocationReviews} 
        key={location.id}
        ratingAverage={location.average_adult_rating}
        age="Adult Rating" 
        location={location}
        reviewLocationId={reviewLocationId}
        setReviewLocationId={setReviewLocationId}/>
     ))}
     </div>
    </div>
      :
    <>  
      <div style={{marginTop: '10px', marginLeft: '10px'}}>
        <button 
          className='return-button' 
          onClick={() => setViewAdultLocationReviews(false)}>
            Return to City
        </button>
      </div>
      <AllReviewsOneLocation reviewLocationId={reviewLocationId}/>
    </>
}

export default AdultActivities