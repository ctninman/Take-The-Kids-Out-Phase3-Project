import {useState} from 'react'

function UpdateUser ({currentUser}) {
  
  
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
      .then((data) => console.log(data))
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
  }



  return (
    <div>
      <h1>Create User</h1>
      <form 
        style={{display: 'flex', flexDirection:'column', backgroundColor: 'orange', margin: '10px', padding: '20px'}}
        id='create-user-form'
        onSubmit={handleUserUpdate}>
        <input 
          name='newuser-name'
          value={formUserName}
          type='text' 
          placeholder='Enter Your User Name'
          onChange={onUserNameChange}>
        </input>
        <input 
          name='newuser-password'
          value={formUserPassword}
          type='text' 
          placeholder='Create Your Password'
          onChange={onUserPasswordChange}>
        </input>
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
        
        <input 
          name='newuser_photo'
          value={formUserPhoto}
          type='text' 
          placeholder='Photo Link'
          onChange={onUserPhotoChange}>
        </input>

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
  )
}



export default UpdateUser