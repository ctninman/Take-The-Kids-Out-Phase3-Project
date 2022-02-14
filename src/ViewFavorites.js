import {useState, useEffect, useContext} from 'react'
import UserActivityCard from './UserActivityCard'
import UserNavBar from './UserNavBar'
import { UserContext } from './UserContext'

function ViewFavorites ({reviewLocationId, setReviewLocationId}) {

  useEffect (() => {
    fetch(`http://localhost:9293/users/${currentUser.id}/favorites`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setFilteredFavorites(data)
    })
  }, [] )

  const {currentUser, setCurrentUser} = useContext(UserContext)

  const [filteredFavorites, setFilteredFavorites] = useState([])
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
      <h1 className="act-card-section">{favoritesHeader}</h1>
      <UserNavBar />
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <button className='type-button' style={{marginTop: '10px', }} value={'All My Places'} onClick={handleSelectAllPlaces}>All My Places</button>
        <button className='type-button' style={{marginTop: '10px', }} value={'My Favorite Places'} onClick={handleSelectFavorites}>My Favorite Places</button>
        <button className='type-button' style={{marginTop: '10px', }} value={'Places I Want To Visit'} onClick={handleSelectToVisit}>Places I Want To Visit</button>
        <button className='type-button' style={{marginTop: '10px', }} value={'Places I Have Visited'} onClick={handleSelectVisited}>Places I Have Visited</button>
      </div>
      <div className='activity-card-container'>
        {filteredFavorites.map((userFavorite) => (
        <UserActivityCard 
          userFavorite={userFavorite}
          key={userFavorite.id}
          filteredFavorites={filteredFavorites}
          setFilteredFavorites={setFilteredFavorites}
          reviewLocationId={reviewLocationId}
          setReviewLocationId={setReviewLocationId}/>
        ))}
      </div>
    </div>
  )
}

export default ViewFavorites