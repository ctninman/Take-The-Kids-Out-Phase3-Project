import {useState, useEffect, useRef} from 'react'
import {useHistory} from 'react-router-dom'

function UserActivityCard ({setCurrentUser, currentUser, userFavorite, filteredFavorites, setFilteredFavorites, setReviewLocationId, reviewLocationId}) {

  // let verifiedUser = (currentUser != '') ? currentUser.favorites.find((favorite) => favorite.location_id === location.id) : null
 
  // let initialFavoriteState = (checkForLocationReview === undefined || currentUser === "") ? false : checkForLocationReview.favorite
  // let initialToVisitState = (checkForLocationReview === undefined || currentUser === "") ? false : checkForLocationReview.want_to_visit
  // let initialVisitedState = (checkForLocationReview === undefined || currentUser === "") ? false : checkForLocationReview.visited
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
        console.log('patchy', data);
        setCurrentUser(data.user)
        setFilteredFavorites(data.user.favorites)
      })
  }

  function handleClickFavorites () {
    setUserActCardIsFavorite(!userActCardIsFavorite)
    console.log(userActCardIsFavorite, userActCardWasVisited, userActCardToVisit);
  }

  function handleClickToVisit () {
    setUserActCardToVisit(!userActCardToVisit)
  }

  function handleClickVisited () {
    setUserActCardWasVisited(!userActCardWasVisited)
  }

  function handleClickAddReview () {
    setReviewLocationId(userFavorite.id)
    history.push('/write_review')
  }

  // return visible ? 
  //   <div style={{display: 'flex', flexDirection:'column', backgroundColor: 'orange', margin: '10px', padding: '20px'}}>
  //     <div>
  //       <h1>{userFavorite.location.location_name}</h1>
  //     </div>
  //     <div>
  //       {userActCardIsFavorite 
  //         ? 
  //       <button style={{backgroundColor: 'lightgreen'}} onClick={handleClickFavorites}>Remove From Favorites</button>
  //         : 
  //       <button onClick={handleClickFavorites}>Add to Favorites</button>}
  //       {userActCardToVisit
  //         ?
  //       <button style={{backgroundColor: 'lightgreen'}} onClick={handleClickToVisit}>Actually, Not Interested</button>
  //         :
  //       <button onClick={handleClickToVisit}>I Want to Take the Kids Here!</button>}
  //       {userActCardWasVisited
  //         ?
  //       <button style={{backgroundColor: 'lightgreen'}} onClick={handleClickVisited}>Wait, I Never Did That</button>
  //         :
  //       <button onClick={handleClickVisited}>Been There!</button>}
  //     </div>
  //   </div>
  //     :
  //   null

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



// function ActivityCard ({location, setCurrentUser, currentUser, reviewLocationId, setReviewLocationId, ratingAverage, age}) {

//   let verifiedUser = (currentUser != '') ? currentUser.favorites.find((favorite) => favorite.location_id === location.id) : null
 
//   // let initialFavoriteState = (checkForLocationReview === undefined || currentUser === "") ? false : checkForLocationReview.favorite
//   // let initialToVisitState = (checkForLocationReview === undefined || currentUser === "") ? false : checkForLocationReview.want_to_visit
//   // let initialVisitedState = (checkForLocationReview === undefined || currentUser === "") ? false : checkForLocationReview.visited

//   const [isFavorite, setIsFavorite] = useState((verifiedUser === null || verifiedUser === undefined) ? false : verifiedUser.favorite)
//   const [toVisit, setToVisit] = useState((verifiedUser === null || verifiedUser === undefined) ? false : verifiedUser.want_to_visit)
//   const [wasVisited, setWasVisited] = useState((verifiedUser === null || verifiedUser === undefined) ? false : verifiedUser.visited)
  
//   let history = useHistory()

//   const firstUpdate = useRef(true);

//   useEffect(() => {
//     if (firstUpdate.current) {
//       console.log('fu current true')
//       firstUpdate.current = false;
//       return;
//     }
//     if (currentUser === '') { return }
//     let foundFavorite = currentUser.favorites.find((favorite) => {
//       return favorite.location_id === location.id
//     })
//     if (foundFavorite && toVisit === false && wasVisited === false && isFavorite ===false) {
//       deleteTheUserFavorite(foundFavorite.id)
//     } else if (foundFavorite) {
//       console.log("ff", foundFavorite);
//       let patchFavorite = {
//         "favorite": isFavorite,
//         "want_to_visit": toVisit,
//         "visited": wasVisited
//       }
//       patchUserFavorite(patchFavorite, foundFavorite.id)
//     } else {
//       let newFavorite = {
//         "location_id": location.id,
//         "user_id": currentUser.id,
//         "want_to_visit": toVisit,
//         "favorite": isFavorite,
//         "visited": wasVisited,
//       }
//       postUserFavorite(newFavorite)
//     }
//   }, [isFavorite, toVisit, wasVisited])

//   function postUserFavorite (object) {  
//     fetch(`http://localhost:9293/favorites`, {
//       method: "POST",
//       headers: {"Content-Type": "application/json",},
//       body: JSON.stringify(object),
//     })
//       .then((res) => {
//         return res.json()
//       })
//       .then((data) => {
//         console.log('newpost', data);
//         setCurrentUser(data.user)
//       })
//   }

//   function patchUserFavorite (object, id) {  
//     fetch(`http://localhost:9293/favorites/${id}`, {
//       method: "PATCH",
//       headers: {"Content-Type": "application/json",},
//       body: JSON.stringify(object),
//     })
//       .then((res) => {
//         return res.json()
//       })
//       .then((data) => {
//         console.log('patchy', data);
//         setCurrentUser(data.user)
//       })
//   }

//   function deleteTheUserFavorite (id) {
//     fetch(`http://localhost:9293/favorites/${id}`, {
//       method: "DELETE",
//     })
//     .then((r) => r.json())
//     .then((data) => setCurrentUser(data.user))
//   }

//   // function alertNotSignedIn () {
//   //   if (verifiedUser === null) {
//   //     alert('You need to be signed in to access this feature')
//   //     return
//   //   }
//   // }

//   function handleFavoriteClick () {
//     if (verifiedUser === null) {
//       alert('You need to be signed in to access this feature')
//       return
//     }
//     setIsFavorite(!isFavorite)
//   }

//   function handleAddReview () {
//     setReviewLocationId(location.id)
//     history.push('/write_review')
//   }

//   function handleWantToGoClick () {
//     if (verifiedUser === null) {
//       alert('You need to be signed in to access this feature')
//       return
//     }
//     setToVisit(!toVisit)
//   }

//   function handleVisitedClick () {
//     if (verifiedUser === null) {
//       alert('You need to be signed in to access this feature')
//       return
//     }
//     setWasVisited(!wasVisited)
//   }

//   // style={{display: 'flex', border: '10px solid #04BF9D', borderWidth: '10px', flexDirection:'column', backgroundColor: 'white', borderRadius: '10px', margin: '20px', padding: '20px'}}

//   return (
//     <div className="activity-card">
//       <h1 className="act-card-header" style={{backgroundColor: "white", textAlign: 'center', borderRadius: '5px'}}>{location.location_name}</h1>
//       {age === null ?
//         null :
//       <h2 className="act-card-rating" style={{backgroundColor: "white", textAlign: 'center', borderRadius: '5px'}}>{age}: {ratingAverage.toFixed(1)}</h2>}
//       <img src={location.photo} alt={location.location_name} className='activity-photo'/>
//       <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
//         {location.outdoor === true ? <text className='emoji'>🌳</text> : null}
//         {location.indoor === true ? <text className='emoji'>🏢</text> : null}
//         {location.free === true ? <text className='emoji'>🆓</text> : null}
        
//       </div>
//       <div style={{backgroundColor: 'white', borderRadius: '10%', marginTop: '3px', height: '250px', padding: '5px', border: '2px solid #022873'}}>
//         <p style={{textAlign: 'center', fontSize: 'larger'}}><text style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Activity Type: </text> {location.activity_type}</p>
//         <p ><text style={{ fontWeight: 'bold', fontStyle: 'italic'}}>Description: </text>{location.description}</p>
//         <p ><text style={{ fontWeight: 'bold', fontStyle: 'italic'}}>Address: </text>{location.address}</p>
//         <p ><text style={{ fontWeight: 'bold', fontStyle: 'italic'}}>Neighborhood: </text>{location.neighborhood}</p>
//         <p></p>
//       </div>
//       <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
//         {isFavorite 
//           ? 
//         <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
//           <button className='favorite-button' style={{backgroundColor: '#04BF9D'}}onClick={handleFavoriteClick}>Loved it!</button>
//         </div> 
//           : 
//         <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>  
//           <button className='favorite-button' onClick={handleFavoriteClick}>Add to Favorites</button>
//         </div>}
//         {toVisit
//           ?
//         <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
//           <button className='favorite-button' style={{backgroundColor: '#04BF9D'}} onClick={handleWantToGoClick}>Can't Wait to Go!</button>
//         </div>
//           :
//         <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}> 
//           <button className='favorite-button' onClick={handleWantToGoClick}>Want To Go?</button>
//         </div>}
//         {wasVisited
//           ?
//         <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}> 
//           <button className='favorite-button' style={{backgroundColor: '#04BF9D'}} onClick={handleVisitedClick}>Done That!</button>
//         </div>
//           :
//         <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
//           <button className='favorite-button' onClick={handleVisitedClick}>Been There?</button>
//         </div>}
//       </div>
//       <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
//         <button className='review-button' style={{marginTop: '10px', }}onClick={handleAddReview}>
//           Write a Review
//         </button>
//       </div>
//     </div>
//   )
// }

// export default ActivityCard