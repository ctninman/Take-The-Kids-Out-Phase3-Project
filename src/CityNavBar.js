import { NavLink } from "react-router-dom";

function CityNavBar () {

  return (
    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent:'space-between', marginTop: '3px', marginBottom: '3px'}}>
      <NavLink 
          to="/city"  
          exact 
          // style={cityLinkStyles} 
          className='city-nav-bar'
          activeStyle={{background: "#FB7498", color: 'black'}}
          >City Home
        </NavLink>
        <NavLink 
          to="/city/all" 
          exact
          // style={cityLinkStyles} 
          className='city-nav-bar'

          activeStyle={{background: "#FB7498", color: 'black'}}
          >All Activities
        </NavLink> 
        <NavLink 
          to="/city/baby" 
          exact
          // style={cityLinkStyles} 
          className='city-nav-bar' 
          activeStyle={{background: "#FB7498", color: 'black'}}
          >Babies
        </NavLink>
        <NavLink 
          to="/city/toddler" 
          exact
          // style={cityLinkStyles} 
          className='city-nav-bar' 
          activeStyle={{background: "#FB7498", color: 'black'}}
          >Toddlers
        </NavLink>
        <NavLink 
          to="/city/preschool" 
          exact
          // style={cityLinkStyles} 
          className='city-nav-bar' 
          activeStyle={{background: "#FB7498", color: 'black'}}
          >Pre-K
        </NavLink>
        <NavLink 
          to="/city/school-age" 
          exact
          // style={cityLinkStyles} 
          className='city-nav-bar' 
          activeStyle={{background: "#FB7498", color: 'black'}}
          >School- Age
        </NavLink>
        <NavLink 
          to="/city/adult" 
          exact
          // style={cityLinkStyles} 
          className='city-nav-bar'
          activeStyle={{background: "#FB7498", color: 'black'}}
          >Adults
        </NavLink>
        <NavLink 
          to="/city/free" 
          exact
          // style={cityLinkStyles} 
          className='city-nav-bar' 
          activeStyle={{background: "#FB7498", color: 'black'}}
          >Free
        </NavLink>
        <NavLink 
          to="/city/outdoor" 
          exact
          // style={cityLinkStyles} 
          className='city-nav-bar' 
          activeStyle={{background: "#FB7498", color: 'black'}}
          >Outdoor
        </NavLink>
        <NavLink 
          to="/city/add-activity" 
          exact
          // style={cityLinkStyles} 
          className='city-nav-bar'
          activeStyle={{background: "#FB7498", color: 'black'}}
          >Add Activity
        </NavLink>
    </div>
  )
}

export default CityNavBar