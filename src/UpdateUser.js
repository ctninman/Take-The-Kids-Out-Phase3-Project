import {useState} from 'react'
import {useHistory} from 'react-router-dom'

function UpdateUser ({setCurrentUser, currentUser}) {
  
  let history = useHistory()
  
  const [formUserName, setFormUserName] = useState(currentUser.user_name)
  const [formUserPassword, setFormUserPassword] = useState(currentUser.password)
  const [formUserCity, setFormUserCity] = useState(currentUser.city_id)
  // const [formUserKids, setFormUserKids] = useState(null)
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

  // function onUserKidsChange (event) {
  //   setFormUserKids(event.target.value)
  // }

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
    // console.log('newuser', newUserName)
    let updatedUser = {
      user_name: formUserName,
      password: formUserPassword,
      city_id: formUserCity,
      photo: formUserPhoto
      // number_of_kids: formUserKids
    }
    console.log('newac', updatedUser)
    patchUpdatedUser(updatedUser)
    history.push('/user')
  }



  return currentUser === "" ?
  <h1 style={{textAlign: 'center'}}>You need to sign in to access this feature</h1>
      :
    <div>
      <h1 className='act-card-section'>Update My Info</h1>
      <div style={{display: 'flex', justifyContent: 'center', marginLeft: '10%', marginRight: '10%'}}>
      <form 
        className='activity-form'
        style={{display: 'flex', flexDirection:'column', backgroundColor: 'orange', margin: '10px', padding: '20px'}}
        id='create-user-form'
        onSubmit={handleUserUpdate}>
        <div>
          <label>Update Name:</label>
          <input 
            name='newuser-name'
            value={formUserName}
            type='text' 
            onChange={onUserNameChange}>
          </input>
        </div>
        <div>
        <label>Update Password:</label>
          <input 
            name='newuser-password'
            value={formUserPassword}
            type='text' 
            onChange={onUserPasswordChange}>
          </input>
        </div>
        <div>
        <label>Your City</label>
        <select value={formUserCity} name={'cities-form'} id={'cities-form'} onChange={onUserCityChange}>
          <option value={null}>---</option>
          <option value={1}>New York City, NY</option>
          <option value={2}>San Francisco, CA</option>
          <option value={3}>Madison, WI</option>
        </select>
        </div>
        {/* <div>
        <label>Number of Children</label>
        <select name={'kids-form'} id={'kids-form'} onChange={onUserKidsChange}>
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
        </div> */}
        <div>
        <label>Update Photo:</label>
          <input 
            name='newuser_photo'
            value={formUserPhoto}
            type='text' 
            onChange={onUserPhotoChange}>
          </input>
        </div>
        <button
          type='submit'
          value="Enter"
          style={{marginTop: '2px'}} 
          id='create-user-button'
          text='Enter'>
            Update My Info!
          </button>
      </form>
      </div>
    </div>
}



export default UpdateUser