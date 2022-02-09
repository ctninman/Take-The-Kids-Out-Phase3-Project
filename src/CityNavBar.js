import { NavLink } from "react-router-dom";

function CityNavBar () {

  const cityLinkStyles = {
    // display: "flex",
    // alignItems: 'center',
    // justifyContent: 'center',
    // padding: "12px",
    // margin: "0 6px 6px",
    // background: "#D95276",
    // textDecoration: "none",
    // color: "white",
    // borderRadius: '5px',
    // height: '28px',
    // width: '75px',
    // textAlign: 'center',
    // // margin: 'auto',

  };

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