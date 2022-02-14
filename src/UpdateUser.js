import {useState, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import { UserContext } from './UserContext'

function UpdateUser () {

  const {currentUser, setCurrentUser} = useContext(UserContext)
  
  let history = useHistory()
  
  const [formUserName, setFormUserName] = useState(currentUser.user_name)
  const [formUserEmail, setFormUserEmail] = useState(currentUser.email)
  const [formUserPassword, setFormUserPassword] = useState(currentUser.password)
  const [formUserCity, setFormUserCity] = useState(currentUser.city_id)
  const [formUserPhoto, setFormUserPhoto] = useState(currentUser.photo)

  function onUserNameChange (event) {
    setFormUserName(event.target.value)
  }

  function onUserPasswordChange (event) {
    setFormUserPassword(event.target.value)
  }

  function onUserCityChange (event) {
    setFormUserCity(event.target.value)
  }

  function onUserEmailChange (event) {
    setFormUserEmail(event.target.value)
  }

  function onUserPhotoChange (event) {
    setFormUserPhoto(event.target.value)
  }

  function patchUpdatedUser (object) {  
    fetch(`http://localhost:9293/users/${currentUser.id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json",},
      body: JSON.stringify(object),
    })
      .then((res) => res.json())
      .then((data) => setCurrentUser(data))
  }

  function handleUserUpdate(event) {
    event.preventDefault()
    let updatedUser = {
      user_name: formUserName,
      password: formUserPassword,
      city_id: formUserCity,
      photo: formUserPhoto
    }
    patchUpdatedUser(updatedUser)
    history.push('/user')
  }

    // *** JSX *** //
  return currentUser === "" ?
  <h1 style={{textAlign: 'center'}}>You need to sign in to access this feature</h1>
      :
    <div>
      <h1 className='act-card-section'>Update My Info</h1>
     
      <div style={{display: 'flex', justifyContent: 'center', marginLeft: '10%', marginRight: '10%'}}>
        <div style={{width: '65%'}}>
          <form 
            className='activity-form'
            style={{display: 'flex', flexDirection:'column', margin: '10px', padding: '20px'}}
            id='create-user-form'
            onSubmit={handleUserUpdate}>
            
            <div style={{display: 'flex', flexDirection: 'row', marginBottom: '8px'}}>
              <div className='form-div' style={{width: '40%', textAlign: 'right'}}> 
                <label>Update Name:</label>
              </div>
              <div style={{width: '65%'}}>
                <input 
                  style={{width: '90%'}}
                  name='updateuser-name'
                  value={formUserName}
                  type='text' 
                  onChange={onUserNameChange}>
                </input>
              </div>
            </div>
            
            <div style={{display: 'flex', flexDirection: 'row', marginBottom: '8px'}}>
              <div className='form-div' style={{width: '40%', textAlign: 'right'}}> 
                <label>Update Password:</label>
              </div>
              <div style={{width: '65%'}}>
                <input 
                  style={{width: '90%'}}
                  name='updateuser-password'
                  value={formUserPassword}
                  type='text' 
                  onChange={onUserPasswordChange}>
                </input>
              </div>
            </div>
            
            <div style={{display: 'flex', flexDirection: 'row', marginBottom: '8px'}}>
              <div className='form-div' style={{width: '40%', textAlign: 'right'}}> 
                <label>Update Email:</label>
              </div>
              <div style={{width: '65%'}}>
                <input 
                  style={{width: '90%'}}
                  name='updateuser-password'
                  value={formUserEmail}
                  type='text' 
                  onChange={onUserEmailChange}>
                </input>
              </div>
            </div>
          
            <div style={{display: 'flex', flexDirection: 'row', marginBottom: '8px'}}>
              <div className='form-div' style={{width: '40%', textAlign: 'right'}}> 
                <label>Your City: </label>
              </div>
              <div style={{width: '65%'}}>
                <select value={formUserCity} name={'cities-form'} id={'cities-form'} onChange={onUserCityChange}>
                  <option value={null}>---</option>
                  <option value={1}>New York City, NY</option>
                  <option value={2}>San Francisco, CA</option>
                  <option value={3}>Madison, WI</option>
                </select>
              </div>
            </div>

            <div style={{display: 'flex', flexDirection: 'row', marginBottom: '15px', marginTop: '10px'}}>
              <div className='form-div' style={{width: '40%', textAlign: 'right'}}> 
                <label>Update Photo:</label>
              </div>
              <div style={{width: '65%'}}>
                <input 
                  style={{width: '90%'}}
                  name='updateuser_photo'
                  value={formUserPhoto}
                  type='text' 
                  onChange={onUserPhotoChange}>
                </input>
              </div>
            </div>
    
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <button
                type='submit'
                value="Enter"
                style={{marginTop: '2px'}} 
                id='update-user-button'
                text='Enter'>
                  Update My Info
                </button>
              </div>

          </form>
        </div>
      </div>
    </div>
}



export default UpdateUser