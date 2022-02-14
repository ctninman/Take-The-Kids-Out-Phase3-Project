import { NavLink } from 'react-router-dom'

function UserNavBar () {

  return (
    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent:'center', marginTop: '3px', marginBottom: '3px'}}>
    <NavLink 
      to="/user"  
      exact 
      className='user-nav-bar'
      activeStyle={{background: "#FB7498"}}
      >User Home
    </NavLink>
    <NavLink 
      to="/user/reviews" 
      exact
      className='user-nav-bar'
      activeStyle={{background: "#FB7498"}}
      >My Reviews
    </NavLink>
    <NavLink 
      to="/user/favorites" 
      exact 
      className='user-nav-bar'
      activeStyle={{background: "#FB7498"}}
      >My Favorites
    </NavLink>
    <NavLink 
      to="/user/update" 
      exact 
      className='user-nav-bar'
      activeStyle={{background: "#FB7498"}}
      >Update My Info
    </NavLink>
    </div>
  )
}

export default UserNavBar