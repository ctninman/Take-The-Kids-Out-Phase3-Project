import { useState, useContext } from 'react'
import UserActivityCard from './UserActivityCard'
import { UserContext } from './UserContext'

function PlacesToVisit () {
  
  const {currentUser} = useContext(UserContext)
  
  const [wantsToVisit, setWantsToVisit] = useState(currentUser.favorites.filter((review) => review.want_to_visit === true))

  return(
    <div>
      <h1>{currentUser.user_name} Want to Visit:</h1>
      {wantsToVisit.map((userFavorite) => (
       <UserActivityCard 
        key={userFavorite.id}
        userFavorite={userFavorite}/>
     ))}
    </div>
  )
}

export default PlacesToVisit