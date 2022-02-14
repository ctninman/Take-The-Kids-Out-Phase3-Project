import {useState, useEffect, useRef, useContext} from 'react'
import { UserContext } from './UserContext'

function ReviewCard ({review}) {

  const {currentUser, setCurrentUser} = useContext(UserContext)

  const [reviewIsVisible, setReviewIsVisible] = useState(true)
  const [toggleCheckDelete, setToggleCheckDelete] = useState(false)

  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    } else {
    setReviewIsVisible(false)
  }}, [toggleCheckDelete])
  
  function handleReviewDelete() {
    fetch(`http://localhost:9293/reviews/${review.id}`, {
      method: "DELETE",
    })
    .then((r) => r.json())
    .then((data) => {
      let copyOfUser = {...currentUser}
      let copyOfReviews = currentUser.reviews.filter ((review) => review.id != data.id)
      copyOfUser.reviews = copyOfReviews
      setCurrentUser(copyOfUser)
      setToggleCheckDelete(!toggleCheckDelete)
    })
  }
  
    // *** JSX *** //
  return reviewIsVisible 
      ?
    <div className="review-card" style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
      <div style={{width: '38%', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginRight: '10px'}}>
        <h1 className="act-card-header" style={{backgroundColor: "white", textAlign: 'center', borderRadius: '5px'}}>{review.location.location_name}</h1>
        <img src={review.location.photo} alt={review.location.location_name} className='activity-photo'/>
        <button className='delete-button' style={{marginTop: '5px'}} onClick={handleReviewDelete}>Delete Review</button>
      </div>
      <div style={{flexGrow: '4', padding: '10px', borderRadius: '10px', width: '52%', backgroundColor: 'white'}}>
        <p style={{fontSize: '20px'}}>{review.review}</p>
        <div>
          <div style={{display: 'flex', flexDirection: 'row'}}><p className='rating'>Baby Rating: </p><p className='rating'>{"⭐".repeat(review.baby_rating)}</p></div>
          <div style={{display: 'flex', flexDirection: 'row'}}><p className='rating'>Toddler Rating: </p><p className='rating'>{"⭐".repeat(review.toddler_rating)}</p></div>
          <div style={{display: 'flex', flexDirection: 'row'}}><p className='rating'>Preschool Rating: </p><p className='rating'>{"⭐".repeat(review.preschool_rating)}</p></div>
          <div style={{display: 'flex', flexDirection: 'row'}}><p className='rating'>School-Age Rating: </p><p className='rating'>{"⭐".repeat(review.school_age_rating)}</p></div>
          <div style={{display: 'flex', flexDirection: 'row'}}><p className='rating'>Adult Rating: </p><p className='rating'>{"⭐".repeat(review.adult_rating)}</p></div>
          <div style={{display: 'flex', flexDirection: 'row'}}><p className='rating'>Overall Rating: </p><p className='rating'>{"⭐".repeat(review.general_rating)}</p></div>
        </div>
      </div>
    </div>
      :
    null
  
}

export default ReviewCard