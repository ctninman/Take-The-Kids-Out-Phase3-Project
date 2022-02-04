import {useState, useEffect} from 'react'
import UserActivityCard from './UserActivityCard'

function ViewFavorites ({currentUser, userReviews}) {

  let filteredByFavorites = userReviews.filter((review) => review.favorite === true)

  return(
    <div>
      <h1>{currentUser.user_name}'s Favorites</h1>
      {filteredByFavorites.map((userFavorite) => (
       <UserActivityCard userFavorite={userFavorite}/>
     ))}
    </div>
  )
}

export default ViewFavorites