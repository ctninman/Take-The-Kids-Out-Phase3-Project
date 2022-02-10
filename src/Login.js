import { Route, Switch, NavLink } from 'react-router-dom'
import MyReviews from './MyReviews'
import PlacesToVisit from './PlacesToVisit'
import ViewFavorites from './ViewFavorites'
import UpdateUser from './UpdateUser'
import UserNavBar from './UserNavBar'

function Login ({currentUser, setSelectedCity}) {

  const loginLinkStyles = {
    display: "inline-block",
    width: "70px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "#D95276",
    textDecoration: "none",
    color: "white",
    borderRadius: '5px'
  };

  function fetchUser () {

  }

  return (currentUser === '' || currentUser === null) ?
  <h1 style={{textAlign: 'center'}}>You need to sign in to access this feature</h1>
  :
    <>
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>

      <div><h1 className="act-card-section">Welcome, {currentUser.user_name}</h1></div>
      <div className='login-page'>
        <UserNavBar />
        {/* <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent:'center', marginTop: '3px', marginBottom: '3px'}}>
        <NavLink 
          to="/user"  
          exact 
          // style={loginLinkStyles} 
          className='user-nav-bar'
          activeStyle={{background: "#FB7498", color: 'black'}}
          >User Home
        </NavLink>
        <NavLink 
          to="/user/reviews" 
          exact
          // style={loginLinkStyles} 
          className='user-nav-bar'
          activeStyle={{background: "#FB7498", color: 'black'}}
          >My Reviews
        </NavLink>
        <NavLink 
          to="/user/favorites" 
          exact
          // style={loginLinkStyles}  
          className='user-nav-bar'
          activeStyle={{background: "#FB7498", color: 'black'}}
          >My Favorites
        </NavLink>
        <NavLink 
          to="/user/update" 
          exact
          // style={loginLinkStyles}  
          className='user-nav-bar'
          activeStyle={{background: "#FB7498", color: 'black'}}
          >Update My Info
        </NavLink>
        </div> */}
        <div style={{display: 'flex', justifyContent: 'center'}}>
          {currentUser.reviews.length < 5 ? <h1 >Your community needs to hear your opinions!</h1> : null}
          {currentUser.reviews.length >= 5 && currentUser.reviews.length < 10 ? <h1>Thanks for being an active member in your community!</h1> : null}
          {currentUser.reviews.length >= 10 ? <h1>You are a superstar in your community!</h1> : null}
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <h1>You have written {currentUser.reviews.length} reviews.</h1>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <NavLink 
          to="/city" 
          onClick={() => setSelectedCity(currentUser.city)}
          exact
          // style={loginLinkStyles}  
          className='user-nav-bar'
          style={{background: "#022873", color: 'white'}}
          >Explore My City
        </NavLink>
        </div>
      </div>
      
      </div>
    </>
}

export default Login