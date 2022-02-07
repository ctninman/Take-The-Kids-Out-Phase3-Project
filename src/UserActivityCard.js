import {useState, useEffect} from 'react'

function UserActivityCard ({currentUser, userFavorite}) {

  const [userActCardIsFavorite, setUserActCardIsFavorite] = useState(userFavorite.favorite)
  const [userActCardToVisit, setUserActCardToVisit] = useState(userFavorite.want_to_visit)
  const [userActCardWasVisited, setUserActCardWasVisited] = useState(userFavorite.visited)
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (userActCardToVisit === false && userActCardWasVisited === false && userActCardIsFavorite ===false) {
      deleteUserFavorite(userFavorite.id)
      setVisible(false)
    }
  }, [userActCardWasVisited, userActCardToVisit, userActCardIsFavorite]) 

function deleteUserFavorite (id) {
  fetch(`http://localhost:9293/favorites/${id}`, {
    method: "DELETE",
  })
  .then((r) => r.json())
  .then((data) => console.log(data))
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

  function handleRemoveFromFavorites () {
    setUserActCardIsFavorite(!userActCardIsFavorite)
    console.log(userActCardIsFavorite, userActCardWasVisited, userActCardToVisit);
  }

  function handleRemoveFromToVisit () {
    setUserActCardToVisit(!userActCardToVisit)
  }

  function handleRemoveFromVisited () {
    setUserActCardWasVisited(!userActCardWasVisited)
  }



  // function handleRemoveFromFavorites (event) {
  //   console.log('ev', event.target.value)
  //   setToVisit(!toVisit)
  //   let patchFavorite = {
  //     "want_to_visit": userActCardToVisit,
  //     "favorite": userActCardIsFavorite,
  //     "visited": userActCardWasVisited
  //   }
  //   patchUserFavorite(patchFavorite, foundFavorite.id)
  // }

  // function handleRemoveFromFavorites () {
  //   setUserActCardIsFavorite(!setUserActCardIsFavorite)
  //   console.log(userActCardIsFavorite, userActCardWasVisited, userActCardToVisit);
  //   console.log(userFavorite)
  // }

  return visible ? 
    <>
      <div>
      <h1>{userFavorite.location.location_name}</h1>
      <button value={userFavorite.id} onClick={handleRemoveFromFavorites}>Remove Favorite</button>
      <button value={userFavorite.id} onClick={handleRemoveFromToVisit}>Remove To Visit</button>
      <button value={userFavorite.id} onClick={handleRemoveFromVisited}>Remove Visited</button>
    </div>
    <div>
        {userActCardIsFavorite 
          ? 
        <button style={{backgroundColor: 'lightgreen'}} onClick={handleRemoveFromFavorites}>Remove From Favorites</button>
          : 
        <button onClick={handleRemoveFromFavorites}>Add to Favorites</button>}
        {userActCardToVisit
          ?
        <button style={{backgroundColor: 'lightgreen'}} onClick={handleRemoveFromToVisit}>Actually, Not Interested</button>
          :
        <button onClick={handleRemoveFromToVisit}>I Want to Take the Kids Here!</button>}
        {userActCardWasVisited
          ?
        <button style={{backgroundColor: 'lightgreen'}} onClick={handleRemoveFromVisited}>Wait, I Never Did That</button>
          :
        <button onClick={handleRemoveFromVisited}>Been There!</button>}
      </div>
    </>
      :
    null
}

export default UserActivityCard