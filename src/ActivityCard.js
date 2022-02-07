import { useState, useEffect } from "react"

function ActivityCard ({location, setCurrentUser, currentUser}) {

  let checkForLocationReview = currentUser.favorites.find((favorite) => favorite.location_id === location.id)
  // let currentLocationReview = (checkForLocationReview === null) ? false : 

  // const [isFavorite, setIsFavorite] = useState(false)
  const [isFavorite, setIsFavorite] = useState((checkForLocationReview === undefined || currentUser === "") ? false : checkForLocationReview.favorite)
  const [toVisit, setToVisit] = useState((checkForLocationReview === undefined || currentUser === "") ? false : checkForLocationReview.want_to_visit)
  const [wasVisited, setWasVisited] = useState((checkForLocationReview === undefined || currentUser === "") ? false : checkForLocationReview.visited)
  





  function postUserFavorite (object) {  
    fetch(`http://localhost:9293/favorites`, {
      method: "POST",
      headers: {"Content-Type": "application/json",},
      body: JSON.stringify(object),
    })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log('newpost', data);
        setCurrentUser(data.user)
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
        console.log('patchy', data);
        // setCurrentUser(data.user)
      })
  }

  function handleFavoriteClick () {
    setIsFavorite(!isFavorite)
    let foundFavorite = currentUser.favorites.find((favorite) => {
      return favorite.location_id === location.id
    })
    if (foundFavorite) {
      console.log("ff", foundFavorite);
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
        "want_to_visit": false,
        "favorite": true,
        "visited": false,
      }
      postUserFavorite(newFavorite)
    }
  }

  function handleAddReview () {
    console.log('currentUser', currentUser);
    console.log('currentlocrev', isFavorite);
  }

  function handleWantToGoClick () {
    setToVisit(!toVisit)
    let foundFavorite = currentUser.favorites.find((favorite) => {
      return favorite.location_id === location.id
    })
    if (foundFavorite) {
    console.log('fl', foundFavorite)
    let patchFavorite = {
      "want_to_visit": toVisit,
      "favorite": isFavorite,
      "visited": wasVisited
    }
    patchUserFavorite(patchFavorite, foundFavorite.id)
    } else {
      let newFavorite = {
        "location_id": location.id,
        "user_id": currentUser.id,
        "want_to_visit": true,
        "favorite": false,
        "visited": false,
      }
      postUserFavorite(newFavorite)    }
  }

  function handleVisitedClick () {
    setWasVisited(!wasVisited)
    let foundFavorite = currentUser.favorites.find((favorite) => {
      return favorite.location_id === location.id
    })
    if (foundFavorite) {
    console.log('fl', foundFavorite)
    let patchFavorite = {
      "visited": wasVisited,
      "want_to_visit": toVisit,
      "favorite": isFavorite
    }
    patchUserFavorite(patchFavorite, foundFavorite.id)
    } else {
      let newFavorite = {
        "location_id": location.id,
        "user_id": currentUser.id,
        "want_to_visit": false,
        "favorite": false,
        "visited": true,
      }
      postUserFavorite(newFavorite)
    }
  }

  return (
    <div style={{display: 'flex', flexDirection:'column', backgroundColor: 'orange', margin: '10px', padding: '20px'}}>
      <h1>{location.location_name}</h1>
      <h2>{location.activity_type}</h2>
      <h2>{location.description}</h2>
      <div>
        {isFavorite 
          ? 
        <button style={{backgroundColor: 'lightgreen'}} onClick={handleFavoriteClick}>One of My Favorites!</button>
          : 
        <button onClick={handleFavoriteClick}>Add to Favorites</button>}
        {toVisit
          ?
        <button style={{backgroundColor: 'lightgreen'}} onClick={handleWantToGoClick}>Can't Wait to Go!</button>
          :
        <button onClick={handleWantToGoClick}>I Want to Take the Kids Here!</button>}
        {wasVisited
          ?
        <button style={{backgroundColor: 'lightgreen'}} onClick={handleVisitedClick}>Done That!</button>
          :
        <button onClick={handleVisitedClick}>Been There?</button>}
      </div>
      <div>
        <button style={{marginTop: '10px'}}onClick={handleAddReview}>
          Write a Review
        </button>
      </div>
    </div>
  )
}

export default ActivityCard