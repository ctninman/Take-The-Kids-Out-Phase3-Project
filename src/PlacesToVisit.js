import UserActivityCard from './UserActivityCard'

function PlacesToVisit ({currentUser, userReviews}) {
  
  let wantsToVisit = userReviews.filter((review) => review.want_to_visit === true)

  return(
    <div>
      <h1>{currentUser.user_name} Want to Visit:</h1>
      {wantsToVisit.map((userFavorite) => (
       <UserActivityCard userFavorite={userFavorite}/>
     ))}
    </div>
  )
}

export default PlacesToVisit