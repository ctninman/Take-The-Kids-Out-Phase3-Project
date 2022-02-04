import { NavLink } from 'react-router-dom'

const linkStyles = {
  display: "inline-block",
  width: "70px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "#609240",
  textDecoration: "none",
  color: "white",
  borderRadius: '5px'
};

function NavBar() {

    // *** JSX *** //
  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
      <div>
        <NavLink
          to='/'
          exact
          style={linkStyles}
          activeStyle={{background: "#93C572", color: 'black'}}
        >
          Home
        </NavLink>
        <NavLink
          to='/user'
          exact
          style={linkStyles}
          activeStyle={{background: "#93C572", color: 'black'}}
        >
          My Info
        </NavLink>
        <NavLink
          to='/city'
          exact
          style={linkStyles}
          activeStyle={{background: "#93C572", color: 'black'}}
        >
          City
        </NavLink>
      </div>
      
      {/* <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>

         <form 
          id='username-form'>
          <input 
            style={{marginTop: '8px'}} 
            name='username_input'
            type='text' 
            placeholder='Login to save!'>
          </input>
          <button
            type='submit'
            value="Enter"
            style={{marginTop: '2px'}} 
            id='login-button'
            text='Enter'>
              Enter
           </button>
        </form>
      </div> */}
    </div>
  )
}

export default NavBar