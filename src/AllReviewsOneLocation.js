import { useEffect, useState } from "react"
import SingleReview from "./SingleReview"

function AllReviewsOneLocation ({reviewLocationId}) {

  const [reviewLocation, setReviewLocation] = useState(null)

  useEffect (() => {
    fetch(`http://localhost:9293/locations/${reviewLocationId}`)
    .then(res => res.json())
    .then(data => {
      setReviewLocation(data)
    })
  }, [] ) 
  
    // *** JSX *** //
  return (reviewLocation === null) ?
    <h1>Finding All Reviews...</h1>
      :

    <div>
      
      <div className="review-card" style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
        <div style={{width: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginRight: '10px'}}>
          <h1 className="act-card-header" style={{backgroundColor: "white", textAlign: 'center', borderRadius: '5px'}}>{reviewLocation.location_name}</h1>
          <img src={reviewLocation.photo} alt={reviewLocation.location_name} className='activity-photo'/>
        </div>
        <div style={{flexGrow: '4', padding: '10px', borderRadius: '10px', backgroundColor: 'white'}}>
          {reviewLocation.average_general_rating === 0 ?
          <h2>Has not been rated</h2>
            :
          <div>
            <p className='rating'>Baby Rating: {reviewLocation.average_baby_rating.toFixed(1)}</p>
            <p className='rating'>Toddler Rating: {reviewLocation.average_toddler_rating.toFixed(1)}</p>
            <p className='rating'>Preschool Rating: {reviewLocation.average_preschool_rating.toFixed(1)}</p>
            <p className='rating'>School-Age Rating: {reviewLocation.average_school_age_rating.toFixed(1)}</p>
            <p className='rating'>Adult Rating: {reviewLocation.average_adult_rating.toFixed(1)}</p>
            <p className='rating'>Overall Rating: {reviewLocation.average_general_rating.toFixed(1)}</p>
          </div> 
          }
       </div>
      </div>

      <div>
      {reviewLocation.reviews.map((review) => (
        <SingleReview review={review} key={review.id}/>
      )) }
      </div>
    </div>
}

export default AllReviewsOneLocation