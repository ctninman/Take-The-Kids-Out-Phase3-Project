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
import { UserContext } from './UserContext'

function App() {

  const [cities, setCities] = useState([])
  const [reviewLocationId, setReviewLocationId]  = useState(1)
  const [currentUser, setCurrentUser] = useState ('')
  const [selectedCity, setSelectedCity] = useState ('')
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  let history = useHistory()

  useEffect (() => {
    fetch('http://localhost:9293/cities')
    .then(res => res.json())
    .then(data => {
      setCities(data)
    })
  }, [] )

  function enterUserName (event) {
    event.preventDefault()
    if (login !== '') {
      fetch(`http://localhost:9293/users`, {method: 'GET'})
      .then(res => res.json())
      .then(function (userData) {
          let foundUser = userData.find((user) => {
            return login === user.user_name && password === user.password
          })
        if (foundUser) {
          setCurrentUser(foundUser)
          history.push('/user')
        } else {
          alert('That username/password combination was not found')
        }
      })
    }
  }

  // <Route exact path='/user' component={() => <Login />} />

    // *** JSX *** //
  return (
    <div className="App">
      <UserContext.Provider value={{currentUser, setCurrentUser}}> 
        <NavBar className='NavBar' />
          <Switch>
            <Route exact path='/user'>
              <Login setSelectedCity={setSelectedCity}/>
            </Route>
            <Route exact path='/user/create'>
              <CreateUser />
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
                />
            </Route>
            <Route exact path='/user/reviews' >
              {(!currentUser || currentUser === '') ? <Login currentUser={''}/> :
              <MyReviews />}
            </Route>
            <Route exact path='/user/favorites'> 
            {(!currentUser || currentUser === '') ? <Login currentUser={''}/> :
              <ViewFavorites reviewLocationId={reviewLocationId} setReviewLocationId={setReviewLocationId}/>}
            </Route>
            <Route exact path='/user/update' >
            {(!currentUser || currentUser === '') ? <Login currentUser={''}/> :
              <UpdateUser />}
            </Route>
            <Route exact path='/city' >
              <Cities 
                cities={cities} 
                setCities={setCities} 
                selectedCity={selectedCity} 
                setSelectedCity={setSelectedCity}/>
            </Route>
            <Route exact path='/city/add-activity' >
              <AddActivity selectedCity={selectedCity} setSelectedCity={setSelectedCity}/>
            </Route>
            <Route exact path='/write_review' >
              <CreateReview reviewLocationId={reviewLocationId}/>
            </Route>
            <Route exact path='/city/adult' >
            {(!selectedCity || selectedCity === '') ? <><h1 style={{textAlign: 'center'}}>No City Was Selected.</h1> <h2 style={{textAlign: 'center'}}>Where Would You Like To Explore?</h2></> :
              <AdultActivities 
                selectedCity={selectedCity}
                reviewLocationId={reviewLocationId}
                setReviewLocationId={setReviewLocationId}/>}
            </Route>
            <Route exact path='/city/all' >
            {(!selectedCity || selectedCity === '') ? <><h1 style={{textAlign: 'center'}}>No City Was Selected.</h1> <h2 style={{textAlign: 'center'}}>Where Would You Like To Explore?</h2></> :
              <AllActivitiesByCity 
                selectedCity={selectedCity}
                reviewLocationId={reviewLocationId}
                setReviewLocationId={setReviewLocationId}/>}
            </Route>
            <Route exact path='/city/baby' >
            {(!selectedCity || selectedCity === '') ? <><h1 style={{textAlign: 'center'}}>No City Was Selected.</h1> <h2 style={{textAlign: 'center'}}>Where Would You Like To Explore?</h2></> :
              <BabyActivities
                selectedCity={selectedCity}
                reviewLocationId={reviewLocationId}
                setReviewLocationId={setReviewLocationId}/>}
            </Route>
            <Route exact path='/city/free' >
            {(!selectedCity || selectedCity === '') ? <><h1 style={{textAlign: 'center'}}>No City Was Selected.</h1> <h2 style={{textAlign: 'center'}}>Where Would You Like To Explore?</h2></> :
              <FreeActivities 
                selectedCity={selectedCity}
                reviewLocationId={reviewLocationId}
                setReviewLocationId={setReviewLocationId}/>}
            </Route>
            <Route exact path='/city/outdoor' >
            {(!selectedCity || selectedCity === '') ? <><h1 style={{textAlign: 'center'}}>No City Was Selected.</h1> <h2 style={{textAlign: 'center'}}>Where Would You Like To Explore?</h2></> :
              <OutdoorActivities
                selectedCity={selectedCity}
                reviewLocationId={reviewLocationId}
                setReviewLocationId={setReviewLocationId}/>}
            </Route>
            <Route exact path='/city/preschool' >
            {(!selectedCity || selectedCity === '') ? <><h1 style={{textAlign: 'center'}}>No City Was Selected.</h1> <h2 style={{textAlign: 'center'}}>Where Would You Like To Explore?</h2></> :
              <PreschoolActivities
                selectedCity={selectedCity}
                reviewLocationId={reviewLocationId}
                setReviewLocationId={setReviewLocationId}/>}
            </Route>
            <Route exact path='/city/school-age' >
            {(!selectedCity || selectedCity === '') ? <><h1 style={{textAlign: 'center'}}>No City Was Selected.</h1> <h2 style={{textAlign: 'center'}}>Where Would You Like To Explore?</h2></> :
              <SchoolAgeActivities 
                selectedCity={selectedCity}
                reviewLocationId={reviewLocationId}
                setReviewLocationId={setReviewLocationId}/>}
            </Route>
            <Route exact path='/city/toddler' >
            {(!selectedCity || selectedCity === '') ? <><h1 style={{textAlign: 'center'}}>No City Was Selected.</h1> <h2 style={{textAlign: 'center'}}>Where Would You Like To Explore?</h2></> :
              <ToddlerActivities
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
        </UserContext.Provider>
    </div>
  );
}

export default App;
