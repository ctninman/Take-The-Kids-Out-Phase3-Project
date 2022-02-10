
import ReviewCard from './ReviewCard'
import UserNavBar from './UserNavBar'

function MyReviews ({currentUser, setCurrentUser}) {
  
  return(
    <div>
      <h1 className='act-card-section'>{currentUser.user_name}'s Reviews</h1>
      <UserNavBar />
      <div style={{display: 'inline-block', justifyContent: 'center', width: '70%', marginBottom: '30px', marginLeft: '15%', marginRight: '15%'}}>
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

