import {useState, useEffect, useRef} from 'react'

function ReviewCard ({currentUser, setCurrentUser, review}) {

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
      console.log('with removed review', copyOfReviews)
      copyOfUser.reviews = copyOfReviews
      console.log('cou', copyOfUser);
      setCurrentUser(copyOfUser)
      setToggleCheckDelete(!toggleCheckDelete)
      // setReviewIsVisible(false)
    })
  }

  return reviewIsVisible 
      ?
    <div style={{display: 'flex', flexDirection:'column', backgroundColor: 'orange', margin: '10px', padding: '20px'}}>
      <h1>{review.location.location_name}</h1>
      <h2>{review.review}</h2>
      <button onClick={handleReviewDelete}>Delete Review</button>
    </div>
      :
    null
  
}

export default ReviewCard