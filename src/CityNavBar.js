import { NavLink } from "react-router-dom";

function CityNavBar () {

  return (
    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent:'space-between', marginTop: '3px', marginBottom: '3px'}}>
      <NavLink 
          to="/city"  
          exact 
          // style={cityLinkStyles} 
          className='city-nav-bar'
          activeStyle={{background: "#FB7498"}}
          >City Home
        </NavLink>
        <NavLink 
          to="/city/all" 
          exact
          // style={cityLinkStyles} 
          className='city-nav-bar'

          activeStyle={{background: "#FB7498"}}
          >All Activities
        </NavLink> 
        <NavLink 
          to="/city/baby" 
          exact
          // style={cityLinkStyles} 
          className='city-nav-bar' 
          activeStyle={{background: "#FB7498"}}
          >Babies
        </NavLink>
        <NavLink 
          to="/city/toddler" 
          exact
          // style={cityLinkStyles} 
          className='city-nav-bar' 
          activeStyle={{background: "#FB7498"}}
          >Toddlers
        </NavLink>
        <NavLink 
          to="/city/preschool" 
          exact
          // style={cityLinkStyles} 
          className='city-nav-bar' 
          activeStyle={{background: "#FB7498"}}
          >Pre-K
        </NavLink>
        <NavLink 
          to="/city/school-age" 
          exact
          // style={cityLinkStyles} 
          className='city-nav-bar' 
          activeStyle={{background: "#FB7498"}}
          >School- Age
        </NavLink>
        <NavLink 
          to="/city/adult" 
          exact
          // style={cityLinkStyles} 
          className='city-nav-bar'
          activeStyle={{background: "#FB7498"}}
          >Adults
        </NavLink>
        <NavLink 
          to="/city/free" 
          exact
          // style={cityLinkStyles} 
          className='city-nav-bar' 
          activeStyle={{background: "#FB7498"}}
          >Free
        </NavLink>
        <NavLink 
          to="/city/outdoor" 
          exact
          // style={cityLinkStyles} 
          className='city-nav-bar' 
          activeStyle={{background: "#FB7498"}}
          >Outdoor
        </NavLink>
        <NavLink 
          to="/city/add-activity" 
          exact
          // style={cityLinkStyles} 
          className='city-nav-bar'
          activeStyle={{background: "#FB7498"}}
          >Add Activity
        </NavLink>
    </div>
  )
}

export default CityNavBar