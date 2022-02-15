import { useState, useEffect, useRef, useContext } from "react"
import {useHistory} from 'react-router'
import { UserContext } from './UserContext'

function ActivityCard ({location, setReviewLocationId, ratingAverage, age, setViewLocationReviews}) {
  
  const firstUpdate = useRef(true);
  const {currentUser, setCurrentUser} = useContext(UserContext)
  let history = useHistory()
  let verifiedUser = (currentUser != '') ? currentUser.favorites.find((favorite) => favorite.location_id === location.id) : null
 
    // *** STATE VARIABLES *** //
  const [isFavorite, setIsFavorite] = useState((verifiedUser === null || verifiedUser === undefined) ? false : verifiedUser.favorite)
  const [toVisit, setToVisit] = useState((verifiedUser === null || verifiedUser === undefined) ? false : verifiedUser.want_to_visit)
  const [wasVisited, setWasVisited] = useState((verifiedUser === null || verifiedUser === undefined) ? false : verifiedUser.visited)

    // *** USE EFFECT *** //
  useEffect(() => {
    // *** causes rest of hook not to run on first render *** //
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    // *** ______ *** //
    if (currentUser === '') { return } // *** stop running hook if user not logged in
    let foundFavorite = currentUser.favorites.find((favorite) => {
      return favorite.location_id === location.id
    })
    if (foundFavorite && toVisit === false && wasVisited === false && isFavorite ===false) {
      deleteTheUserFavorite(foundFavorite.id)
    } else if (foundFavorite) {
      let patchFavorite = {
        "favorite": isFavorite,
        "want_to_visit": toVisit,
        "visited": wasVisited
      }
      patchUserFavorite(patchFavorite, foundFavorite.id)
    } else {
      let newFavorite = {
        "location_id": location.id,
        "user_id": currentUser.id,
        "want_to_visit": toVisit,
        "favorite": isFavorite,
        "visited": wasVisited,
      }
      postUserFavorite(newFavorite)
    }
  }, [isFavorite, toVisit, wasVisited])

    // *** FETCH REQUESTS *** //
  function postUserFavorite (object) {  
    fetch(`http://localhost:9293/favorites`, {
      method: "POST",
      headers: {"Content-Type": "application/json",},
      body: JSON.stringify(object),
    })
      .then((res) => res.json())
      .then((data) => setCurrentUser(data.user))
  }

  function patchUserFavorite (object, id) {  
    fetch(`http://localhost:9293/favorites/${id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json",},
      body: JSON.stringify(object),
    })
      .then((res) => res.json())
      .then((data) => setCurrentUser(data.user))
  }

  function deleteTheUserFavorite (id) {
    fetch(`http://localhost:9293/favorites/${id}`, {
      method: "DELETE",
    })
    .then((res) => res.json())
    .then((data) => setCurrentUser(data.user))
  }

    // *** FUNCTIONS *** //
  function handleFavoriteClick () {
    if (verifiedUser === null) {
      alert('You need to be signed in to access this feature')
      return
    }
    setIsFavorite(!isFavorite)
  }

  function handleWantToGoClick () {
    if (verifiedUser === null) {
      alert('You need to be signed in to access this feature')
      return
    }
    setToVisit(!toVisit)
  }

  function handleVisitedClick () {
    if (verifiedUser === null) {
      alert('You need to be signed in to access this feature')
      return
    }
    setWasVisited(!wasVisited)
  }

  function handleAddReview () {
    setReviewLocationId(location.id)
    history.push('/write_review')
  }

  function handleViewReviews () {
    setReviewLocationId(location.id)
    setViewLocationReviews(true)
  }

    // *** JSX *** //
  return (
    <div className="activity-card">
      <h1 className="act-card-header" style={{backgroundColor: "white", textAlign: 'center', borderRadius: '5px'}}>{location.location_name}</h1>
      {age === null ?
        null :
      <h3 className="act-card-rating" style={{backgroundColor: "white", textAlign: 'center', borderRadius: '5px'}}>{ratingAverage === 0 ? "No Ratings" : `${age}: ${ratingAverage.toFixed(1)} / 5`}</h3>}
      <img src={location.photo} alt={location.location_name} className='activity-photo'/>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        {location.outdoor === true ? <span className='emoji'>🌳</span> : null}
        {location.indoor === true ? <span className='emoji'>🏢</span> : null}
        {location.free === true ? <span className='emoji'>🆓</span> : null}
        
      </div>
      <div style={{backgroundColor: 'white', borderRadius: '10%', marginTop: '3px', height: '250px', padding: '5px', border: '2px solid #022873'}}>
        <p style={{textAlign: 'center', fontSize: 'larger'}}><b><i>Activity Type:</i></b> {location.activity_type}</p>
        <p><b><i>Description:</i></b> {location.description}</p>
        <p><b><i>Address:</i></b> {location.address}</p>
        <p><b><i>Neighborhood:</i></b> {location.neighborhood}</p>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        {isFavorite 
          ? 
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <button className='favorite-button' style={{backgroundColor: '#04BF9D'}}onClick={handleFavoriteClick}>Loved it!</button>
        </div> 
          : 
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>  
          <button className='favorite-button' onClick={handleFavoriteClick}>Add to Favorites</button>
        </div>}
        {toVisit
          ?
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <button className='favorite-button' style={{backgroundColor: '#04BF9D'}} onClick={handleWantToGoClick}>Can't Wait to Go!</button>
        </div>
          :
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}> 
          <button className='favorite-button' onClick={handleWantToGoClick}>Want To Go?</button>
        </div>}
        {wasVisited
          ?
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}> 
          <button className='favorite-button' style={{backgroundColor: '#04BF9D'}} onClick={handleVisitedClick}>Done That!</button>
        </div>
          :
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <button className='favorite-button' onClick={handleVisitedClick}>Been There?</button>
        </div>}
      </div>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <button className='review-button' style={{marginTop: '10px', }}onClick={handleViewReviews}>
            See All Reviews
          </button>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <button className='review-button' style={{marginTop: '10px', }}onClick={handleAddReview}>
            Write a Review
          </button>
        </div>
      </div>
    </div>
  )
}

export default ActivityCard