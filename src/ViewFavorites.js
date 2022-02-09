import {useState, useEffect} from 'react'
import UserActivityCard from './UserActivityCard'
import UserNavBar from './UserNavBar'

function ViewFavorites ({currentUser, setCurrentUser}) {

  const [filteredFavorites, setFilteredFavorites] = useState(currentUser.favorites)
  const [favoritesHeader, setFavoritesHeader] = useState('All My Places')

  function handleSelectAllPlaces (event) {
    setFilteredFavorites(currentUser.favorites)
    setFavoritesHeader(event.target.value)
  }

  function handleSelectFavorites (event) {
    setFilteredFavorites(currentUser.favorites.filter((fav) => fav.favorite === true))
    setFavoritesHeader(event.target.value)
  }

  function handleSelectToVisit (event) {
    setFilteredFavorites(currentUser.favorites.filter((fav) => fav.want_to_visit === true))
    setFavoritesHeader(event.target.value)
  }

  function handleSelectVisited (event) {
    setFilteredFavorites(currentUser.favorites.filter((fav) => fav.visited === true))
    setFavoritesHeader(event.target.value)
  }


  return(
    <div>
      <h1>{favoritesHeader}</h1>
      <UserNavBar />
      <div>
        <button value={'All My Places'} onClick={handleSelectAllPlaces}>All My Places</button>
        <button value={'My Favorite Places'} onClick={handleSelectFavorites}>My Favorite Places</button>
        <button value={'Places I Want To Visit'} onClick={handleSelectToVisit}>Places I Want To Visit</button>
        <button value={'Places I Have Visited'} onClick={handleSelectVisited}>Places I Have Visited</button>
      </div>
      
      {filteredFavorites.map((userFavorite) => (
       <UserActivityCard 
        currentUser={currentUser} 
        setCurrentUser={setCurrentUser}
        userFavorite={userFavorite}
        key={userFavorite.id}
        filteredFavorites={filteredFavorites}
        setFilteredFavorites={setFilteredFavorites}/>
     ))}
    </div>
  )
}

export default ViewFavorites