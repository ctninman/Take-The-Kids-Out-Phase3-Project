import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router';
import { useContext } from 'react';
import { UserContext } from './UserContext'

function NavBar() {

  const {setCurrentUser} = useContext(UserContext)

  let history = useHistory()

    // *** JSX *** //
  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#022873'}}> 
      
        <div style={{display: 'flex', flexDirection: 'row', marginTop: '10px'}}>
          <NavLink
            to='/'
            exact
            className='city-nav-bar'
            activeStyle={{background: "#FB7498"}}
          >
            Home
          </NavLink>
          <NavLink
            to='/user'
            exact
            className='city-nav-bar'
            activeStyle={{background: "#FB7498"}}
          >
            My Info
          </NavLink>
          <NavLink
            to='/city'
            exact
            className='city-nav-bar'
            activeStyle={{background: "#FB7498"}}
          >
            City
          </NavLink>
        </div>

        <div>
          <h1 style={{fontSize: '50px', color: 'white', textShadow: '0px 0px 6px rgba(255,255,255,0.7)', margin: '0px'}}>Take The Kids Out</h1>
        </div>
        
        <div style={{display: 'flex', flexDirection: 'row', marginTop: '10px'}}>
          <div style={{width: '75px'}}></div>
          <button className='login-button' onClick={() => history.push('/')}>Sign In</button>
          <button className='login-button' onClick={() => setCurrentUser('')}>Sign Out</button>
        </div>

    </div>
  )
}

export default NavBar