import {useState, useEffect} from 'react'
import UserActivityCard from './UserActivityCard'

function ViewFavorites ({currentUser, userReviews}) {

  const [filteredByFavorites, setFilteredByFavorites] = useState(currentUser.favorites.filter((fav) => fav.favorite === true))

  return(
    <div>
      <h1>{currentUser.user_name}'s Favorites</h1>
      {filteredByFavorites.map((userFavorite) => (
       <UserActivityCard currentUser={currentUser} userFavorite={userFavorite}/>
     ))}
    </div>
  )
}

export default ViewFavorites