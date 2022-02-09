import { useEffect } from 'react';
import {NavLink} from 'react-router-dom'
import CityCard from './CityCard';
import CityNavBar from './CityNavBar';

function Cities ({selectedCity, setSelectedCity, cities, setCities}) {

  useEffect (() => {
    fetch('http://localhost:9293/cities')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setCities(data)
    })
  }, [] )

  const loginLinkStyles = {
    display: "inline-block",
    width: "70px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "#609240",
    textDecoration: "none",
    color: "white",
    borderRadius: '5px'
  };

  return (selectedCity === "") ?
    <>
      <h1 style={{textAlign: 'center', fontSize: '40px'}}>Select a city:</h1>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        {cities.map ((city) => (
          <CityCard
            key={city.id} 
            city={city}
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}/>
          ))}
      </div>
    </>
    :    
    <>
      <div className='cities-page'>
        <h1 className="act-card-section">Welcome to {selectedCity.city_name}</h1>
        <CityNavBar />
        {/* <NavLink 
          to="/city"  
          exact 
          style={loginLinkStyles} 
          activeStyle={{background: "#93C572", color: 'black'}}
          >City Home
        </NavLink>
        <NavLink 
          to="/city/add-activity" 
          exact
          style={loginLinkStyles} 
          activeStyle={{background: "#93C572", color: 'black'}}
          >Add Activity
        </NavLink>
        <NavLink 
          to="/city/adult" 
          exact
          style={loginLinkStyles} 
          activeStyle={{background: "#93C572", color: 'black'}}
          >Highest Rated for Adults
        </NavLink>
        <NavLink 
          to="/city/all" 
          exact
          style={loginLinkStyles}  
          activeStyle={{background: "#93C572", color: 'black'}}
          >All Activities in ...
        </NavLink>
        <NavLink 
          to="/city/baby" 
          exact
          style={loginLinkStyles}  
          activeStyle={{background: "#93C572", color: 'black'}}
          >Highest Rated for Babies
        </NavLink>
        <NavLink 
          to="/city/free" 
          exact
          style={loginLinkStyles}  
          activeStyle={{background: "#93C572", color: 'black'}}
          >Free Activities
        </NavLink>
        <NavLink 
          to="/city/outdoor" 
          exact
          style={loginLinkStyles}  
          activeStyle={{background: "#93C572", color: 'black'}}
          >Outdoor Activities
        </NavLink>
        <NavLink 
          to="/city/preschool" 
          exact
          style={loginLinkStyles}  
          activeStyle={{background: "#93C572", color: 'black'}}
          >Highest Rated for Preschoolers
        </NavLink>
        <NavLink 
          to="/city/school-age" 
          exact
          style={loginLinkStyles}  
          activeStyle={{background: "#93C572", color: 'black'}}
          >Highest Rated for School-age Kids
        </NavLink>
        <NavLink 
          to="/city/toddler" 
          exact
          style={loginLinkStyles}  
          activeStyle={{background: "#93C572", color: 'black'}}
          >Highest Rated for Toddlers
        </NavLink> */}
        {/* <Switch> */}
          {/* <Route exact path='/user'>
            <Login />
          </Route> */}
          {/* <Route exact path='/user/activities' >
            <MyActivities />
          </Route>
          <Route exact path='/user/places-to-visit' >
            <PlacesToVisit />
          </Route>
          <Route exact path='/user/favorites'> 
            <ViewFavorites />
          </Route>
          <Route exact path='/user/update' >
            <UpdateUser />
          </Route> */}
        {/* </Switch> */}
      </div>
    </>
}

export default Cities