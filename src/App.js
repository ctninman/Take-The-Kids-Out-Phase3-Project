import { Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import NavBar from './NavBar'
import Home from './Home'
import Login from './Login'
import Cities from './Cities'
import MyReviews from './MyReviews'
import ViewFavorites from './ViewFavorites'
import UpdateUser from './UpdateUser'
import AddActivity from './AddActivity'
import AdultActivities from './AdultActivities'
import AllActivitiesByCity from './AllActivitiesByCity'
import BabyActivities from './BabyActivities'
import FreeActivities from './FreeActivities'
import OutdoorActivities from './OutdoorActivities'
import PreschoolActivities from './PreschoolActivities'
import SchoolAgeActivities from './SchoolAgeActivities'
import ToddlerActivities from './ToddlerActivities'
import CreateUser from './CreateUser'
import CreateReview from './CreateReview'
import CityCard from './CityCard'

function App() {

  const [cities, setCities] = useState([])
  const [reviewLocationId, setReviewLocationId]  = useState(1)
  const [currentUser, setCurrentUser] = useState ('')
  const [userName, setUserName] = useState ('')
  const [selectedCity, setSelectedCity] = useState ('')
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [userReviews, setUserReviews] = useState('')

  let history = useHistory()

  useEffect (() => {
    fetch('http://localhost:9293/cities')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setCities(data)
    })
  }, [] )

  // useEffect (() => {
  //   fetch('http://localhost:9293/locations')
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data);
  //     setLocations(data)
  //   })
  // }, [] )

  useEffect (() => {
    if (currentUser != ""){
      fetch(`http://localhost:9293/users/${currentUser.id}/reviews`)
      .then(res => res.json())
      .then(data => {
        console.log('rev', data)
        let filteredByFavorites = data.filter((review) => review.favorite === true)
        console.log('filrev', filteredByFavorites)
        setUserReviews(data)
    })}
  }, [currentUser] )

  function enterUserName (event) {
    event.preventDefault()
    // document.getElementById('username-form').reset()
    setUserName(login)
    if (login !== '') {
      fetch(`http://localhost:9293/users`, {method: 'GET'})
      .then(res => res.json())
      .then(function (userData) {
          let foundUser = userData.find((user) => {
            return login === user.user_name && password === user.password
          })
        if (foundUser) {
          console.log('I found you!')
          setCurrentUser(foundUser)
          history.push('/user')
        } else {
          alert('That username/password combination was not found')
        }
      })
    }
  }

  // <Route exact path='/user' component={() => <Login />} />

  return (
    <div className="App">
      <NavBar
        className='NavBar' currentUser={currentUser} setCurrentUser={setCurrentUser}/>
          <Switch>
            <Route exact path='/user'>
              <Login 
                currentUser={currentUser}
                setSelectedCity={setSelectedCity}/>
            </Route>
            <Route exact path='/user/create'>
              <CreateUser 
                currentUser={currentUser} 
                setCurrentUser={setCurrentUser}/>
            </Route>
            <Route exact path='/'>
              <Home 
                cities={cities} 
                setCities={setCities}
                selectedCity={selectedCity}
                setSelectedCity={setSelectedCity}
                setPassword={setPassword}
                enterUserName={enterUserName}
                setLogin={setLogin}
                currentUser={currentUser}
                />
            </Route>
            <Route exact path='/user/reviews' >
              {(!currentUser || currentUser === '') ? <Login currentUser={''}/> :
              <MyReviews 
                currentUser={currentUser} 
                setCurrentUser={setCurrentUser} />}
            </Route>
            <Route exact path='/user/favorites'> 
            {(!currentUser || currentUser === '') ? <Login currentUser={''}/> :
              <ViewFavorites 
                currentUser={currentUser} 
                setCurrentUser={setCurrentUser} 
                reviewLocationId={reviewLocationId}
                setReviewLocationId={setReviewLocationId}/>}
            </Route>
            <Route exact path='/user/update' >
            {(!currentUser || currentUser === '') ? <Login currentUser={''}/> :
              <UpdateUser 
                currentUser={currentUser} 
                setCurrentUser={setCurrentUser} />}
            </Route>
            <Route exact path='/city' >
              <Cities 
                cities={cities} 
                setCities={setCities} 
                currentUser={currentUser} 
                setCurrentUser={setCurrentUser} 
                selectedCity={selectedCity} 
                setSelectedCity={setSelectedCity}/>
            </Route>
            <Route exact path='/city/add-activity' >
              <AddActivity 
                currentUser={currentUser} 
                setCurrentUser={setCurrentUser} 
                selectedCity={selectedCity} 
                setSelectedCity={setSelectedCity}/>
            </Route>
            <Route exact path='/write_review' >
              <CreateReview 
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                reviewLocationId={reviewLocationId}/>
            </Route>
            <Route exact path='/city/adult' >
            {(!selectedCity || selectedCity === '') ? <><h1 style={{textAlign: 'center'}}>No City Was Selected.</h1> <h2 style={{textAlign: 'center'}}>Where Would You Like To Explore?</h2></> :
              <AdultActivities 
                currentUser={currentUser} 
                setCurrentUser={setCurrentUser} 
                selectedCity={selectedCity}
                reviewLocationId={reviewLocationId}
                setReviewLocationId={setReviewLocationId}/>}
            </Route>
            <Route exact path='/city/all' >
            {(!selectedCity || selectedCity === '') ? <><h1 style={{textAlign: 'center'}}>No City Was Selected.</h1> <h2 style={{textAlign: 'center'}}>Where Would You Like To Explore?</h2></> :
              <AllActivitiesByCity 
                currentUser={currentUser} 
                setCurrentUser={setCurrentUser} 
                selectedCity={selectedCity}
                reviewLocationId={reviewLocationId}
                setReviewLocationId={setReviewLocationId}/>}
            </Route>
            <Route exact path='/city/baby' >
            {(!selectedCity || selectedCity === '') ? <><h1 style={{textAlign: 'center'}}>No City Was Selected.</h1> <h2 style={{textAlign: 'center'}}>Where Would You Like To Explore?</h2></> :
              <BabyActivities 
                currentUser={currentUser} 
                setCurrentUser={setCurrentUser} 
                selectedCity={selectedCity}
                reviewLocationId={reviewLocationId}
                setReviewLocationId={setReviewLocationId}/>}
            </Route>
            <Route exact path='/city/free' >
            {(!selectedCity || selectedCity === '') ? <><h1 style={{textAlign: 'center'}}>No City Was Selected.</h1> <h2 style={{textAlign: 'center'}}>Where Would You Like To Explore?</h2></> :
              <FreeActivities 
                currentUser={currentUser} 
                setCurrentUser={setCurrentUser} 
                selectedCity={selectedCity}/>}
            </Route>
            <Route exact path='/city/outdoor' >
            {(!selectedCity || selectedCity === '') ? <><h1 style={{textAlign: 'center'}}>No City Was Selected.</h1> <h2 style={{textAlign: 'center'}}>Where Would You Like To Explore?</h2></> :
              <OutdoorActivities 
                currentUser={currentUser} 
                setCurrentUser={setCurrentUser} 
                selectedCity={selectedCity}
                reviewLocationId={reviewLocationId}
                setReviewLocationId={setReviewLocationId}/>}
            </Route>
            <Route exact path='/city/preschool' >
            {(!selectedCity || selectedCity === '') ? <><h1 style={{textAlign: 'center'}}>No City Was Selected.</h1> <h2 style={{textAlign: 'center'}}>Where Would You Like To Explore?</h2></> :
              <PreschoolActivities 
                currentUser={currentUser}  
                setCurrentUser={setCurrentUser} 
                selectedCity={selectedCity}
                reviewLocationId={reviewLocationId}
                setReviewLocationId={setReviewLocationId}/>}
            </Route>
            <Route exact path='/city/school-age' >
            {(!selectedCity || selectedCity === '') ? <><h1 style={{textAlign: 'center'}}>No City Was Selected.</h1> <h2 style={{textAlign: 'center'}}>Where Would You Like To Explore?</h2></> :
              <SchoolAgeActivities 
                currentUser={currentUser} 
                setCurrentUser={setCurrentUser} 
                selectedCity={selectedCity}
                reviewLocationId={reviewLocationId}
                setReviewLocationId={setReviewLocationId}/>}
            </Route>
            <Route exact path='/city/toddler' >
            {(!selectedCity || selectedCity === '') ? <><h1 style={{textAlign: 'center'}}>No City Was Selected.</h1> <h2 style={{textAlign: 'center'}}>Where Would You Like To Explore?</h2></> :
              <ToddlerActivities 
                currentUser={currentUser} 
                setCurrentUser={setCurrentUser} 
                selectedCity={selectedCity}
                reviewLocationId={reviewLocationId}
                setReviewLocationId={setReviewLocationId}/>}
            </Route>
            <Route path='*' >
              <div>
              <h1 style={{textAlign: 'center'}}>That Page Does Not Exist.</h1>
              </div>
            </Route>
          </Switch>
    </div>
  );
}

export default App;
