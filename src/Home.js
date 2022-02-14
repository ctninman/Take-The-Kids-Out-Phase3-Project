import CityCard from "./CityCard"
import {useHistory} from "react-router-dom"
import {useContext} from 'react'
import { UserContext } from './UserContext'

function Home ({cities, selectedCity, setSelectedCity, setLogin, setPassword, enterUserName}) {
  
  const {currentUser} = useContext(UserContext)
  let history = useHistory()

  function handleLoginType (event) {
    setLogin(event.target.value)
  }

  function handlePasswordType (event) {
    setPassword(event.target.value)
  }

  function beginAccountCreate () {
    history.push('/user/create')
  }
  
    // *** JSX *** //
  return currentUser === '' 
    ?
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      <div style={{color: '#D95276'}}><h2 style={{textAlign: 'center', fontWeight: 'bolder', textShadow: '0px 0px 6px rgba(255,255,255,0.7)'}}>Your chance to find (and help others find) fun activities to do with the kids!</h2></div>
      <div div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent:'center', marginTop: '3px', marginBottom: '3px'}}>
        <form 
        onSubmit={enterUserName}
        id='username-form'>
        <label style={{fontSize: '20px'}}>Login:</label><input 
          style={{marginTop: '8px', fontSize: 'large'}} 
          name='username_input'
          type='text'
          onChange={handleLoginType} 
          placeholder='Enter username'>
        </input>
        <input 
          style={{marginTop: '8px', fontSize: 'large'}} 
          name='password_input'
          type='text' 
          onChange={handlePasswordType}
          placeholder='Enter password'>
        </input>
        <button
          type='submit'
          value="Enter"
          className='account-button'
          style={{marginTop: '2px'}} 
          id='login-button'
          text='Enter'
          >
            Enter
          </button>
        </form>
      </div>
      <div div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent:'center', marginTop: '3px', marginBottom: '3px'}}>
      <button
          type='button'
          value="create_account"
          className='account-button'
          style={{marginTop: '2px'}} 
          id='create-account-button'
          text='Enter'
          onClick={beginAccountCreate}>
            Create Account
          </button>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
        
        <h2 style={{fontSize: '30px', margin: '3px'}}>Create/Login to Your Account to:</h2>
        <p style={{fontSize: '22px', margin: '3px'}}>  -Save and Access Your Favorite Activities</p> 
          <p style={{fontSize: '22px', margin: '3px'}}>  -Create New Locations</p>
          <p style={{fontSize: '22px', margin: '3px'}}>  -Write Reviews to Help Other Families</p>
      </div>
      <h1 style={{textAlign: 'center', fontSize: '40px'}}>Select a city:</h1>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        {cities.map ((city) => (
        <CityCard
          key={city.id} 
          city={city}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}/>
        ))}
      </div>
    </div>
      :
    <div>
      <h1 style={{textAlign: 'center', fontSize: '40px'}}>Hi, {currentUser.user_name}</h1>
      <h2 style={{textAlign: 'center', fontSize: '32px'}}>Where would you like to explore today?</h2>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        {cities.map ((city) => (
          <CityCard
            key={city.id} 
            city={city}
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}/>
          ))}
      </div>
    </div>
}

export default Home