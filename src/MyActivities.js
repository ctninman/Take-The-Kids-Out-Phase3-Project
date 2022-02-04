import UserActivityCard from './UserActivityCard'

function MyActivities ({currentUser, userReviews}) {
  
  return(
    <div>
      <h1>{currentUser.user_name} Has Been To:</h1>
      {userReviews.map((userFavorite) => (
       <UserActivityCard userFavorite={userFavorite}/>
     ))}
    </div>
  )
}

export default MyActivities

