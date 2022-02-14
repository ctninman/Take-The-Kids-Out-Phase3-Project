import { useEffect } from 'react'
import ReviewCard from './ReviewCard'
import UserNavBar from './UserNavBar'
import {useContext, useState} from 'react'
import { UserContext } from './UserContext'


function MyReviews () {

  const {currentUser} = useContext(UserContext)
  const [currentUserReviews, setCurrentUserReviews] = useState([])

  useEffect (() => {
    fetch(`http://localhost:9293/users/${currentUser.id}/reviews`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setCurrentUserReviews(data)
    })
  }, [] )  

  return(
    <div>
      <h1 className='act-card-section'>{currentUser.user_name}'s Reviews</h1>
      <UserNavBar />
      <div style={{display: 'inline-block', justifyContent: 'center', width: '70%', marginBottom: '30px', marginLeft: '15%', marginRight: '15%'}}>
      {currentUserReviews.map((review) => (
       <ReviewCard
        review={review}
        key={review.id}/>
     ))}
     </div>
    </div>
  )
}

export default MyReviews

