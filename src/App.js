import { Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react'
import NavBar from './NavBar'
import Home from './Home'
import Login from './Login'
import Cities from './Cities'
import MyActivities from './MyActivities'
import PlacesToVisit from './PlacesToVisit'
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
import CityCard from './CityCard'

function App() {

  const [cities, setCities] = useState([])
  const [locations, setLocations]  = useState([])
  const [currentUser, setCurrentUser] = useState ('')
  const [userName, setUserName] = useState ('')
  const [selectedCity, setSelectedCity] = useState ('')
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [userReviews, setUserReviews] = useState('')

  useEffect (() => {
    fetch('http://localhost:9293/cities')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setCities(data)
    })
  }, [] )

  useEffect (() => {
    fetch('http://localhost:9293/locations')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setLocations(data)
    })
  }, [] )

  useEffect (() => {
    if (currentUser != ""){
      fetch(`http://localhost:9293/users/${currentUser.id}/reviews`)
      .then(res => res.json())
      .then(data => {
        console.log('fav', data)
        let filteredByFavorites = data.filter((review) => review.favorite === true)
        console.log('filfav', filteredByFavorites)
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
        } else {
          alert('That username/password combination was not found')
        }
      })
    }
  }


  return (
    <div className="App">
      <NavBar
        className='NavBar' />
          <Switch>
            <Route exact path='/user'>
              <Login currentUser={currentUser}/>
            </Route>
            <Route exact path='/user/create'>
              <CreateUser />
            </Route>
            <Route exact path='/city'>
              <Cities selectedCity={selectedCity}/>
            </Route>
            <Route exact path='/'>
              <Home 
                cities={cities} 
                setCities={setCities}
                selectedCity={selectedCity}
                setSelectedCity={setSelectedCity}
                userName={userName}
                setUserName={setUserName}
                setPassword={setPassword}
                enterUserName={enterUserName}
                setLogin={setLogin}
                />
            </Route>
            <Route exact path='/user/activities' >
              <MyActivities currentUser={currentUser} setCurrentUser={setCurrentUser} userReviews={userReviews}/>
            </Route>
            <Route exact path='/user/places-to-visit' >
              <PlacesToVisit currentUser={currentUser} setCurrentUser={setCurrentUser} userReviews={userReviews}/>
            </Route>
            <Route exact path='/user/favorites'> 
              <ViewFavorites currentUser={currentUser} setCurrentUser={setCurrentUser} userReviews={userReviews}/>
            </Route>
            <Route exact path='/user/update' >
              <UpdateUser currentUser={currentUser} setCurrentUser={setCurrentUser} userReviews={userReviews}/>
            </Route>
            <Route exact path='/city' >
              <Cities currentUser={currentUser} setCurrentUser={setCurrentUser} selectedCity={selectedCity}/>
            </Route>
            <Route exact path='/city/add-activity' >
              <AddActivity currentUser={currentUser} setCurrentUser={setCurrentUser} selectedCity={selectedCity}/>
            </Route>
            <Route exact path='/city/adult' >
              <AdultActivities currentUser={currentUser} setCurrentUser={setCurrentUser} selectedCity={selectedCity}/>
            </Route>
            <Route exact path='/city/all' >
              <AllActivitiesByCity currentUser={currentUser} setCurrentUser={setCurrentUser} selectedCity={selectedCity} locations={locations}/>
            </Route>
            <Route exact path='/city/baby' >
              <BabyActivities currentUser={currentUser} setCurrentUser={setCurrentUser} selectedCity={selectedCity}/>
            </Route>
            <Route exact path='/city/free' >
              <FreeActivities currentUser={currentUser} setCurrentUser={setCurrentUser} selectedCity={selectedCity} locations={locations}/>
            </Route>
            <Route exact path='/city/outdoor' >
              <OutdoorActivities currentUser={currentUser} setCurrentUser={setCurrentUser} selectedCity={selectedCity} locations={locations}/>
            </Route>
            <Route exact path='/city/preschool' >
              <PreschoolActivities currentUser={currentUser} setCurrentUser={setCurrentUser} selectedCity={selectedCity}/>
            </Route>
            <Route exact path='/city/school-age' >
              <SchoolAgeActivities currentUser={currentUser} setCurrentUser={setCurrentUser} selectedCity={selectedCity}/>
            </Route>
            <Route exact path='/city/toddler' >
              <ToddlerActivities currentUser={currentUser} setCurrentUser={setCurrentUser} selectedCity={selectedCity}/>
            </Route>
          </Switch>
          {/* <div>
            {cities.map ((city) => (
              <CityCard city={city}/>
            ))}
          </div> */}
    </div>
  );
}

export default App;
