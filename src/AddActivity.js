import {useState} from 'react'
import { useHistory } from 'react-router'
import CityNavBar from './CityNavBar'
import './Form.css'

function AddActivity ({selectedCity, setSelectedCity, currentUser}) {

  let history = useHistory()

  const [formActivityName, setFormActivityName] = useState(null)
  const [formDescription, setFormDescription] = useState(null)
  const [formOutdoor, setFormOutdoor] = useState(false)
  const [formIndoor, setFormIndoor] = useState(false)
  const [formFree, setFormFree] = useState(false)
  const [formAddress, setFormAddress] = useState(null)
  const [formBorough, setFormBorough] = useState(null)
  const [formNeighborhood, setFormNeighborhood] = useState(null)
  const [formType, setFormType] = useState(null)

  function onActivityNameChange (event) {
    setFormActivityName(event.target.value)
  }

  function onDescriptionChange (event) {
    setFormDescription(event.target.value)
  }

  function onOutdoorChange () {
    setFormOutdoor(!formOutdoor)
  }

  function onIndoorChange () {
    setFormIndoor(!formIndoor)
  }

  function onFreeChange () {
    setFormFree(!formFree)
  }

  function onAddressChange (event) {
    setFormAddress(event.target.value)
  }

  function onBoroughChange (event) {
    setFormBorough(event.target.value)
  }

  function onNeighborhoodChange (event) {
    setFormNeighborhood(event.target.value)
  }

  function onTypeChange (event) {
    setFormType(event.target.value)
  }

  function postNewActivity (object) {  
    fetch(`http://localhost:9293/locations`, {
      method: "POST",
      headers: {"Content-Type": "application/json",},
      body: JSON.stringify(object),
    })
      .then((res) => {
        return res.json()
      })
      .then ((data) => {
        let copyOfCity = {...selectedCity}
        copyOfCity.locations.push(data)
        setSelectedCity(copyOfCity)
      })
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log('fan', formActivityName)
    let newActivity = {
      location_name: formActivityName,
      city_id: selectedCity.id,
      description: formDescription,
      outdoor: formOutdoor,
      indoor: formIndoor,
      free: formFree,
      address: formAddress,
      borough: formBorough,
      neighborhood: formNeighborhood,
      activity_type: formType,
      photo: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFya3xlbnwwfHwwfHw%3D&w=1000&q=80'
    }
    console.log('newac', newActivity)
    postNewActivity(newActivity)
    history.push('/city/all')
  }

  return (currentUser === '') ?
  <h1 style={{textAlign: 'center'}}>You need to sign in to access this feature</h1>
    :
  <>
    <div>
      <h1 className='act-card-section' >Add Activity to {selectedCity.city_name}</h1>
      <CityNavBar />
      <div style={{display: 'flex', justifyContent: 'center', marginLeft: '10%', marginRight: '10%'}}>
        <form 
          style={{display: 'flex', flexDirection:'column', margin: '10px', padding: '20px'}}
          className='activity-form'
          onSubmit={handleSubmit}>
          <div>
            <label>Activity/Location: </label>
            <input 
              name='activity_name'
              type='text' 
              onChange={onActivityNameChange}>
            </input>
          </div>
          <div>
            <label>Description:</label>
            <input 
              name='description'
              type='text' 
              onChange={onDescriptionChange}>
            </input>
          </div>
          <div>
          <label>Type of Activity?</label>
          <select name={'types'} id={'types'} onChange={onTypeChange}>
            <option value={null}>---</option>
            <option value={'Playground/Park'}>Playground/Park</option>
            <option value={'Nature'}>Nature</option>
            <option value={'Museum'}>Museum</option>
            <option value={'Store'}>Store</option>
            <option value={'Class'}>Class</option>
            <option value={'Art'}>Art</option>
            <option value={'Music'}>Music</option>
            <option value={'Dance'}>Dance</option>
            <option value={'Library'}>Library</option>
            <option value={'Sport'}>Sport</option>
          </select>
          </div>
          <label>
          <input
            type="checkbox"
            // checked={checked}
            onChange={onOutdoorChange}
          />
          Outdoor activities?
          </label>
          <label>
          <input
            type="checkbox"
            // checked={checked}
            onChange={onIndoorChange}
          />
          Indoor activities?
          </label>
          <label>
          <input
            type="checkbox"
            // checked={checked}
            onChange={onFreeChange}
          />
          Free?
          </label>
          <div>
            <label>Address: </label>
            <input 
              name='address'
              type='text' 
              onChange={onAddressChange}>
            </input>
          </div>
          {selectedCity.city_name === 'New York City' 
            ?
          <div className='form-div'>
          <label>Borough: </label>
            <input 
              name='borough'
              type='text' 
              onChange={onBoroughChange}>
            </input>
          </div>
            :
          null}
          <div>
          <label>Neighborhood</label>
            <input 
              name='neighborhood'
              type='text' 
              placeholder='Neighborhood'
              onChange={onNeighborhoodChange}>
            </input>
          </div>
          <div>
            <button
              type='submit'
              value="Enter"
              style={{marginTop: '2px'}} 
              id='login-button'
              text='Enter'>
                Enter
            </button>
          </div>
        </form>
      </div>
    </div>
  </>
}

export default AddActivity