
import ReviewCard from './ReviewCard'

function MyReviews ({currentUser, setCurrentUser}) {
  
  return(
    <div>
      <h1>{currentUser.user_name}'s Reviews</h1>
      <div>
      {currentUser.reviews.map((review) => (
       <ReviewCard 
        currentUser={currentUser} 
        setCurrentUser={setCurrentUser}
        review={review}
        key={review.id}/>
     ))}
     </div>
    </div>
  )
}

export default MyReviews

