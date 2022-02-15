import ActivityCard from "./ActivityCard"
import CityNavBar from "./CityNavBar"
import {useState, useEffect} from 'react'
import AllReviewsOneLocation from "./AllReviewsOneLocation"

function AllActivitiesByCity ({selectedCity, reviewLocationId, setReviewLocationId}) {

    // *** STATE VARIABLES *** //
  const [viewAllLocationReviews, setViewAllLocationReviews] = useState(false)
  const [allLocations, setAllLocations] = useState([])

    // *** USE EFFECT *** //
  useEffect (() => {
    fetch(`http://localhost:9293/cities/${selectedCity.id}/locations`)
    .then(res => res.json())
    .then(data => {
      let sortedLocations = data.sort(data.average_general_rating)
      setAllLocations(sortedLocations.reverse())
    })
  }, [] )

    // *** JSX *** //
  return viewAllLocationReviews === false ?
    <div>
      <div>
      <h1 className="act-card-section">All Activities in {selectedCity.city_name}</h1>
      </div>
      <CityNavBar />
      <div className='activity-card-container'>
        {allLocations.map((location) => (
        <ActivityCard 
          setViewLocationReviews={setViewAllLocationReviews}
          key={location.id}
          ratingAverage={location.average_general_rating}
          age="Overall Rating"
          location={location} 
          reviewLocationId={reviewLocationId}
          setReviewLocationId={setReviewLocationId}
          />
        ))}
      </div>
    </div>
      :
    <>    
      <div style={{marginTop: '10px', marginLeft: '10px'}}>
        <button 
          className='return-button' 
          onClick={() => setViewAllLocationReviews(false)}>
            Return to City
        </button>
      </div>
      <AllReviewsOneLocation reviewLocationId={reviewLocationId}/>
    </>
}

export default AllActivitiesByCity