import {useState } from "react";
import ActivityCard from "./ActivityCard";
import AllReviewsOneLocation from "./AllReviewsOneLocation";
import CityNavBar from "./CityNavBar";

function OutdoorActivities ({selectedCity, reviewLocationId, setReviewLocationId}) {

    // *** STATE VARIABLES *** //
  const [viewOutdoorLocationReviews, setViewOutdoorLocationReviews] = useState(false)
  
  const outdoorLocations = selectedCity.locations.filter ((location) => location.city_id === selectedCity.id && location.outdoor === true);

    // *** JSX *** //
  return viewOutdoorLocationReviews === false ?
    <div>
      <h1 className="act-card-section">Outdoor Activities in {selectedCity.city_name}</h1>
      <CityNavBar />
      <div className='activity-card-container'>
        {outdoorLocations.map((location) => (
          <ActivityCard 
            setViewLocationReviews={setViewOutdoorLocationReviews}
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
          onClick={() => setViewOutdoorLocationReviews(false)}>
          Return to City
        </button>
      </div>
      <AllReviewsOneLocation reviewLocationId={reviewLocationId}/>
    </>
}

export default OutdoorActivities