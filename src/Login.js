import { Route, Switch, NavLink } from 'react-router-dom'
import MyActivities from './MyActivities'
import PlacesToVisit from './PlacesToVisit'
import ViewFavorites from './ViewFavorites'
import UpdateUser from './UpdateUser'

function Login ({currentUser}) {

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

  function fetchUser () {
    
  }

  return(
    <>
      <h1>Welcome, {currentUser.user_name}</h1>
      <div className='login-page'>
        <NavLink 
          to="/user"  
          exact 
          style={loginLinkStyles} 
          activeStyle={{background: "#93C572", color: 'black'}}
          >User Home
        </NavLink>
        <NavLink 
          to="/user/activities" 
          exact
          style={loginLinkStyles} 
          activeStyle={{background: "#93C572", color: 'black'}}
          >My Activities
        </NavLink>
        <NavLink 
          to="/user/places-to-visit" 
          exact
          style={loginLinkStyles} 
          activeStyle={{background: "#93C572", color: 'black'}}
          >Places To Visit
        </NavLink>
        <NavLink 
          to="/user/favorites" 
          exact
          style={loginLinkStyles}  
          activeStyle={{background: "#93C572", color: 'black'}}
          >My Favorites
        </NavLink>
        <NavLink 
          to="/user/update" 
          exact
          style={loginLinkStyles}  
          activeStyle={{background: "#93C572", color: 'black'}}
          >Update My Info
        </NavLink>
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
  )
}

export default Login