import ActivityCard from './ActivityCard'
import {useState} from 'react'
import CityNavBar from './CityNavBar';
import AllReviewsOneLocation from './AllReviewsOneLocation';


function FreeActivities ({selectedCity, reviewLocationId, setReviewLocationId}) {
  
    // *** STATE VARIABLES *** //
  const [viewFreeLocationReviews, setViewFreeLocationReviews] = useState(false)

  const freeLocations = selectedCity.locations.filter ((location) => location.city_id === selectedCity.id && location.free === true);

    // *** JSX *** //
  return viewFreeLocationReviews === false ?
    <div>
      <h1 className="act-card-section">Free Activities in {selectedCity.city_name}</h1>
      <CityNavBar />
      <div className='activity-card-container'>
        {freeLocations.map((location) => (
        <ActivityCard 
          setViewLocationReviews={setViewFreeLocationReviews}
          key={location.id}
          age={null}
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
          onClick={() => setViewFreeLocationReviews(false)}>
          Return to City
        </button>
      </div>
      <AllReviewsOneLocation reviewLocationId={reviewLocationId}/>
    </>
}

export default FreeActivities