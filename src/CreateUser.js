import {useState} from 'react'
import {useHistory} from 'react-router'

function CreateUser ({currentUser, setCurrentUser}) {


  const [newUserName, setNewUserName] = useState(null)
  const [newUserPassword, setNewUserPassword] = useState(null)
  const [newUserCity, setNewUserCity] = useState(null)
  const [newUserKids, setNewUserKids] = useState(null)
  const [newUserPhoto, setNewUserPhoto] = useState(false)

  let history = useHistory()

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

  function postNewUser (object) {  
    fetch(`http://localhost:9293/users`, {
      method: "POST",
      headers: {"Content-Type": "application/json",},
      body: JSON.stringify(object),
    })
      .then((res) => res.json())
      .then((data) => {
        setCurrentUser(data)
        console.log('data', data)
        console.log('cu', currentUser)
      })
  }

  function handleUserSubmit(event) {
    event.preventDefault()
    console.log('newuser', newUserName)
    let newUser = {
      user_name: newUserName,
      password: newUserPassword,
      city_id: newUserCity,
      photo: newUserPhoto,
      number_of_kids: newUserKids
    }
    console.log('newac', newUser)
    postNewUser(newUser)
    history.push('/user')
  }



  return (
    <div>
      <h1>Create User</h1>
      <form 
        style={{display: 'flex', flexDirection:'column', backgroundColor: 'orange', margin: '10px', padding: '20px'}}
        id='create-user-form'
        onSubmit={handleUserSubmit}>
        <input 
          name='newuser-name'
          type='text' 
          placeholder='Enter Your User Name'
          onChange={onUserNameChange}>
        </input>
        <input 
          name='newuser-password'
          type='text' 
          placeholder='Create Your Password'
          onChange={onUserPasswordChange}>
        </input>
        <div>
        <label>Your City</label>
        <select name={'cities-form'} id={'cities-form'} onChange={onUserCityChange}>
          <option value={null}>---</option>
          <option value={1}>New York City, NY</option>
          <option value={2}>San Francisco, CA</option>
          <option value={3}>Madison, WI</option>
        </select>
        </div>
        <div>
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
        </div>
        
        <input 
          name='newuser_photo'
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
            Create Me!
          </button>
      </form>
    </div>
  )
}

export default CreateUser