import {useState, useContext} from 'react'
import {useHistory} from 'react-router'
import { UserContext } from './UserContext'

function CreateUser () {

  const {setCurrentUser} = useContext(UserContext)

    // *** STATE VARIABLES *** //
  const [newUserName, setNewUserName] = useState(null)
  const [newUserPassword, setNewUserPassword] = useState(null)
  const [newUserCity, setNewUserCity] = useState(null)
  const [newUserKids, setNewUserKids] = useState(null)
  const [newUserPhoto, setNewUserPhoto] = useState(false)

  let history = useHistory()

      // *** FETCH REQUESTS *** //
  function postNewUser (object) {  
    fetch(`http://localhost:9293/users`, {
      method: "POST",
      headers: {"Content-Type": "application/json",},
      body: JSON.stringify(object),
    })
      .then((res) => res.json())
      .then((data) => setCurrentUser(data))
  }

    // *** FUNCTIONS *** //
  function onUserNameChange (event) {
    setNewUserName(event.target.value)
  }

  function onUserPasswordChange (event) {
    setNewUserPassword(event.target.value)
  }

  function onUserCityChange (event) {
    setNewUserCity(event.target.value)
  }

  function onUserKidsChange (event) {
    setNewUserKids(event.target.value)
  }

  function onUserPhotoChange (event) {
    setNewUserPhoto(event.target.value)
  }

  function handleUserSubmit(event) {
    event.preventDefault()
    let newUser = {
      user_name: newUserName,
      password: newUserPassword,
      city_id: newUserCity,
      photo: newUserPhoto,
      number_of_kids: newUserKids
    }
    postNewUser(newUser)
    history.push('/user')
  }

    // *** JSX *** //
  return (
  <>
    <div style={{marginTop: '10px', marginLeft: '10px'}}>
      <button 
        className='return-button' 
        onClick={() => history.goBack()}>
          Back
      </button>
    </div>

    <div>
      <h1 className='act-card-section'>Create User</h1>
      <div style={{display: 'flex', justifyContent: 'center', marginLeft: '10%', marginRight: '10%'}}>
        <div style={{width: '80%'}}>
          <form 
            style={{display: 'flex', flexDirection:'column', margin: '10px', padding: '20px'}}
            className='activity-form'
            id='create-user-form'
            onSubmit={handleUserSubmit}>
            
            <div style={{display: 'flex', flexDirection: 'row', marginBottom: '8px'}}>
              <div style={{width: '30%', height: '28px', textAlign: 'right'}}>
                <label>Username: </label>
              </div>
              <div style={{width: '55%'}}>
                <input 
                  name='newuser-name'
                  type='text' 
                  style={{width: '100%'}}
                  onChange={onUserNameChange}>
                </input>
              </div>
            </div>
            
            <div style={{display: 'flex', flexDirection: 'row', marginBottom: '8px'}}>
              <div style={{width: '30%', height: '28px', textAlign: 'right'}}>
                <label>Password: </label>
              </div>
              <div style={{width: '55%'}}>
                <input 
                  name='newuser-password'
                  type='text' 
                  style={{width: '100%'}}
                  onChange={onUserPasswordChange}>
                </input>
              </div>
            </div>
            
            <div style={{display: 'flex', flexDirection: 'row', marginBottom: '8px'}}>
              <div style={{width: '30%', height: '28px', textAlign: 'right'}}>
                <label>Your City</label>
              </div>
              <div style={{width: '30%'}}>
                <select name={'cities-form'} id={'cities-form'} style={{borderRadius: '3px'}} onChange={onUserCityChange}>
                  <option value={null}>---</option>
                  <option value={1}>New York City, NY</option>
                  <option value={2}>San Francisco, CA</option>
                  <option value={3}>Madison, WI</option>
                </select>
              </div>
            </div>
            
            <div style={{display: 'flex', flexDirection: 'row', marginBottom: '8px'}}>
              <div style={{width: '30%', height: '28px', textAlign: 'right'}}>
                <label>Number of Children</label>
              </div>
              <div>
                <select style={{borderRadius: '3px'}} name={'kids-form'} id={'kids-form'} onChange={onUserKidsChange}>
                  <option value={0}>0</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                </select>
              </div>
            </div>
            
            <div style={{display: 'flex', flexDirection: 'row', marginBottom: '8px'}}>
              <div style={{width: '30%', height: '28px', textAlign: 'right'}}>
                <label>Photo Link: </label>
              </div>
              <div style={{width: '55%'}}>
                <input 
                  name='newuser_photo'
                  type='text' 
                  style={{width: '100%'}}
                  onChange={onUserPhotoChange}>
                </input>
              </div>
            </div>

            <button
              type='submit'
              value="Enter"
              style={{marginTop: '2px'}} 
              id='create-user-button'
              text='Enter'>
                Create Me!
            </button>

          </form>
        </div>
      </div>
    </div>
  </>
  )
}

export default CreateUser