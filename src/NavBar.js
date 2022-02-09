import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router';

const linkStyles = {
  display: "inline-block",
  width: "70px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "#D95276",
  textDecoration: "none",
  color: "white",
  borderRadius: '5px',
  // margin: 'auto'
};

function NavBar({currentUser, setCurrentUser}) {

  let history = useHistory()

    // *** JSX *** //
  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#022873'}}> 
      
        <div style={{display: 'flex', flexDirection: 'row', marginTop: '10px'}}>
          <NavLink
            to='/'
            exact
            // style={linkStyles}
            className='city-nav-bar'
            activeStyle={{background: "#FB7498", color: 'black'}}
          >
            Home
          </NavLink>
          <NavLink
            to='/user'
            exact
            // style={linkStyles}
            className='city-nav-bar'
            activeStyle={{background: "#FB7498", color: 'black'}}
          >
            My Info
          </NavLink>
          <NavLink
            to='/city'
            exact
            // style={linkStyles}
            className='city-nav-bar'
            activeStyle={{background: "#FB7498", color: 'black'}}
          >
            City
          </NavLink>
        </div>

        <div>
          <h1 style={{fontSize: '50px', color: 'white', textShadow: '0px 0px 6px rgba(255,255,255,0.7)', margin: '0px'}}>Take The Kids Out</h1>
        </div>
        
        <div style={{display: 'flex', flexDirection: 'row', marginTop: '10px'}}>
          <button className='login-button' onClick={() => console.log(currentUser)}>Current User</button>
          <button className='login-button' onClick={() => history.push('/')}>Sign In</button>
          <button className='login-button' onClick={() => setCurrentUser('')}>Sign Out</button>
        </div>

    </div>
  )
}

export default NavBar


// function NavBar({currentUser, setCurrentUser}) {

//   let history = useHistory()

//     // *** JSX *** //
//   return (
//     <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#022873'}}> 
      
//       <div style={{display: 'flex', flexDirection: 'row'}}> 
       
//         <div style={{width: '49%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#022873', padding: '5px'}}>
//           <NavLink
//             to='/'
//             exact
//             // style={linkStyles}
//             className='city-nav-bar'
//             activeStyle={{background: "#FB7498", color: 'black'}}
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to='/user'
//             exact
//             // style={linkStyles}
//             className='city-nav-bar'
//             activeStyle={{background: "#FB7498", color: 'black'}}
//           >
//             My Info
//           </NavLink>
//           <NavLink
//             to='/city'
//             exact
//             // style={linkStyles}
//             className='city-nav-bar'
//             activeStyle={{background: "#FB7498", color: 'black'}}
//           >
//             City
//           </NavLink>
//         </div>
        
//         <div style={{display: 'flex', width: '49%', flexDirection: 'row', justifyContent: 'right', backgroundColor: '#022873', padding: '5px'}}>
//           <button className='login-button' onClick={() => console.log(currentUser)}>Current User</button>
//           <button className='login-button' onClick={() => history.push('/')}>Sign In</button>
//           <button className='login-button' onClick={() => setCurrentUser('')}>Sign Out</button>
//         </div>

//       </div>
      
//     </div>
//   )
// }

// export default NavBar