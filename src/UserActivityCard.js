import {useState, useEffect, useRef, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import { UserContext } from './UserContext'

function UserActivityCard ({userFavorite, setFilteredFavorites, setReviewLocationId}) {

  const {setCurrentUser} = useContext(UserContext)

  let history = useHistory()

  const [userActCardIsFavorite, setUserActCardIsFavorite] = useState((userFavorite.favorite === undefined || userFavorite.favorite === null) ? false : userFavorite.favorite)
  const [userActCardToVisit, setUserActCardToVisit] = useState((userFavorite.want_to_visit === undefined || userFavorite.want_to_visit === null) ? false : userFavorite.want_to_visit)
  const [userActCardWasVisited, setUserActCardWasVisited] = useState((userFavorite.visited === undefined || userFavorite.visited === null) ? false : userFavorite.visited)

  const [visible, setVisible] = useState(true);

  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return
    } else if (userActCardToVisit === false && userActCardWasVisited === false && userActCardIsFavorite ===false) {
      deleteUserFavorite(userFavorite.id)
      setVisible(false)
    } else {
      let patchFavorite = {
        "want_to_visit": userActCardToVisit,
        "favorite": userActCardIsFavorite,
        "visited": userActCardWasVisited
      }
      patchUserFavorite(patchFavorite, userFavorite.id)
    }
  }, [userActCardWasVisited, userActCardToVisit, userActCardIsFavorite]) 

  function deleteUserFavorite (id) {
    fetch(`http://localhost:9293/favorites/${id}`, {
      method: "DELETE",
    })
    .then((r) => r.json())
    .then((data) => {
      setCurrentUser(data.user)
      setFilteredFavorites(data.user.favorites)
    })
  }

  function patchUserFavorite (object, id) {  
    fetch(`http://localhost:9293/favorites/${id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json",},
      body: JSON.stringify(object),
    })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setCurrentUser(data.user)
        setFilteredFavorites(data.user.favorites)
      })
  }

  function handleClickFavorites () {
    setUserActCardIsFavorite(!userActCardIsFavorite)
  }

  function handleClickToVisit () {
    setUserActCardToVisit(!userActCardToVisit)
  }

  function handleClickVisited () {
    setUserActCardWasVisited(!userActCardWasVisited)
  }

  function handleClickAddReview () {
    setReviewLocationId(userFavorite.location_id)
    history.push('/write_review')
  }

    // *** JSX *** //
  return visible ?
    <div className="activity-card">
      <h1 className="act-card-header" style={{backgroundColor: "white", textAlign: 'center', borderRadius: '5px'}}>{userFavorite.location.location_name}</h1>
      <img src={userFavorite.location.photo} alt={userFavorite.location.location_name} className='activity-photo'/>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        {userFavorite.location.outdoor === true ? <text className='emoji'>🌳</text> : null}
        {userFavorite.location.indoor === true ? <text className='emoji'>🏢</text> : null}
        {userFavorite.location.free === true ? <text className='emoji'>🆓</text> : null}
        
      </div>
      <div style={{backgroundColor: 'white', borderRadius: '10%', marginTop: '3px', height: '250px', padding: '5px', border: '2px solid #022873'}}>
        <p style={{textAlign: 'center', fontSize: 'larger'}}><text style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Activity Type: </text> {userFavorite.location.activity_type}</p>
        <p ><text style={{ fontWeight: 'bold', fontStyle: 'italic'}}>Description: </text>{userFavorite.location.description}</p>
        <p ><text style={{ fontWeight: 'bold', fontStyle: 'italic'}}>Address: </text>{userFavorite.location.address}</p>
        <p ><text style={{ fontWeight: 'bold', fontStyle: 'italic'}}>Neighborhood: </text>{userFavorite.location.neighborhood}</p>
        <p></p>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        {userActCardIsFavorite 
          ? 
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <button className='favorite-button' style={{backgroundColor: '#04BF9D'}}onClick={handleClickFavorites}>Loved it!</button>
        </div> 
          : 
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>  
          <button className='favorite-button' onClick={handleClickFavorites}>Add to Favorites</button>
        </div>}
        {userActCardToVisit
          ?
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <button className='favorite-button' style={{backgroundColor: '#04BF9D'}} onClick={handleClickToVisit}>Can't Wait to Go!</button>
        </div>
          :
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}> 
          <button className='favorite-button' onClick={handleClickToVisit}>Want To Go?</button>
        </div>}
        {userActCardWasVisited
          ?
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}> 
          <button className='favorite-button' style={{backgroundColor: '#04BF9D'}} onClick={handleClickVisited}>Done That!</button>
        </div>
          :
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <button className='favorite-button' onClick={handleClickVisited}>Been There?</button>
        </div>}
      </div>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <button className='review-button' style={{marginTop: '10px', }}onClick={handleClickAddReview}>
          Write a Review
        </button>
      </div>
    </div>
     : 
       null
}
// 

export default UserActivityCard