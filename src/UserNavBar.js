import { NavLink } from 'react-router-dom'

function UserNavBar () {

  const userLinkStyles = {
    display: "inline-block",
    width: "70px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "#D95276",
    textDecoration: "none",
    color: "white",
    borderRadius: '5px'
  };

  return (
    <div>
        <NavLink 
          to="/user"  
          exact 
          // style={userLinkStyles} 
          className='city-nav-bar'
          activeStyle={{background: "#FB7498", color: 'black'}}
          >User Home
        </NavLink>
        <NavLink 
          to="/user/reviews" 
          exact
          // style={userLinkStyles} 
          className='city-nav-bar'
          activeStyle={{background: "#FB7498", color: 'black'}}
          >My Reviews
        </NavLink>
        <NavLink 
          to="/user/favorites" 
          exact
          // style={userLinkStyles}  
          className='city-nav-bar'
          activeStyle={{background: "#FB7498", color: 'black'}}
          >My Favorites
        </NavLink>
        <NavLink 
          to="/user/update" 
          exact
          // style={userLinkStyles}  
          className='city-nav-bar'
          activeStyle={{background: "#FB7498", color: 'black'}}
          >Update My Info
        </NavLink>
    </div>
  )
}

export default UserNavBar