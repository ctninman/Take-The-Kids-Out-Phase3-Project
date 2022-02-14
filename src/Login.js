import { Route, Switch, NavLink } from 'react-router-dom'
import { useHistory } from 'react-router'
import { useContext } from 'react'
import MyReviews from './MyReviews'
import ViewFavorites from './ViewFavorites'
import UpdateUser from './UpdateUser'
import UserNavBar from './UserNavBar'
import { UserContext } from './UserContext'

function Login ({setSelectedCity}) {

  let history = useHistory()

  const {currentUser, setCurrentUser} = useContext(UserContext)

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

  function handleCitySelect () {
    history.push('/city')
  }

  return (currentUser === '' || currentUser === null) ?
  <h1 style={{textAlign: 'center'}}>You need to sign in to access this feature</h1>
  :
    <>
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>

      <div><h1 className="act-card-section">Welcome, {currentUser.user_name}</h1></div>
      <div className='login-page'>
        <UserNavBar />
        <div style={{display: 'flex', justifyContent: 'center'}}>
          {currentUser.reviews.length < 5 ? <h1 >Your community needs to hear your opinions!</h1> : null}
          {currentUser.reviews.length >= 5 && currentUser.reviews.length < 10 ? <h1>Thanks for being an active member in your community!</h1> : null}
          {currentUser.reviews.length >= 10 ? <h1>You are a superstar in your community!</h1> : null}
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <h1>You have written {currentUser.reviews.length} reviews.</h1>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        {/* <NavLink 
          to="/city" 
          onClick={() => setSelectedCity(currentUser.city)}
          exact
          // style={loginLinkStyles}  
          className='user-nav-bar'
          style={{backgroundImage: `url(${currentUser.city.photo})`, backgroundSize: '100%', fontWeight: 'bolder', fontSize: '25px'}}
          // style={{background: "#022873", color: 'white'}}
          >Explore My City
        </NavLink> */}
        <button
          onClick={handleCitySelect} 
          className='city-card'
          value={currentUser.city.city_name}
          style={{backgroundImage: `url(${currentUser.city.photo})`, backgroundSize: '100%', fontWeight: 'bolder', fontSize: '25px'}}
          >Explore My City
       </button>
        </div>
      </div>
      
      </div>
    </>
}

export default Login