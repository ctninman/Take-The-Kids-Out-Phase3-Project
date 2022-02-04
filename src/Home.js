import CityCard from "./CityCard"
import {useHistory} from "react-router-dom"

function Home ({cities, selectedCity, setSelectedCity, setLogin, userName, setUserName, setPassword, enterUserName}) {

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

  return(
    <div>
      <h1>Home</h1>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
        <form 
        onSubmit={enterUserName}
        id='username-form'>
        <input 
          style={{marginTop: '8px'}} 
          name='username_input'
          type='text'
          onChange={handleLoginType} 
          placeholder='Enter username'>
        </input>
        <input 
          style={{marginTop: '8px'}} 
          name='password_input'
          type='text' 
          onChange={handlePasswordType}
          placeholder='Enter password'>
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
      </div>
      <div>
      <button
          type='button'
          value="create_account"
          style={{marginTop: '2px'}} 
          id='create-account-button'
          text='Enter'
          onClick={beginAccountCreate}>
            Create Account
          </button>
      </div>
      <h1>Select a city:</h1>
      {cities.map ((city) => (
        <CityCard 
          city={city}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}/>
      ))}
    </div>
  )
}

export default Home