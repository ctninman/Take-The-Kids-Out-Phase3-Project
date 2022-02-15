import {useState, useContext} from 'react'
import { useHistory } from 'react-router'
import CityNavBar from './CityNavBar'
import { UserContext } from './UserContext'
import './Form.css'

function AddActivity ({selectedCity, setSelectedCity}) {

  const {currentUser} = useContext(UserContext)

  let history = useHistory()

    // *** STATE VARIABLES *** //
  const [formActivityName, setFormActivityName] = useState(null)
  const [formDescription, setFormDescription] = useState(null)
  const [formOutdoor, setFormOutdoor] = useState(false)
  const [formIndoor, setFormIndoor] = useState(false)
  const [formFree, setFormFree] = useState(false)
  const [formAddress, setFormAddress] = useState(null)
  const [formBorough, setFormBorough] = useState(null)
  const [formNeighborhood, setFormNeighborhood] = useState(null)
  const [formType, setFormType] = useState(null)

    // *** FETCH REQUESTS *** //
  function postNewActivity (object) {  
    fetch(`http://localhost:9293/locations`, {
      method: "POST",
      headers: {"Content-Type": "application/json",},
      body: JSON.stringify(object),
    })
      .then((res) => res.json())
      .then ((data) => {
        let copyOfCity = {...selectedCity}
        copyOfCity.locations.push(data)
        setSelectedCity(copyOfCity)
      })
  }

    // *** FUNCTIONS *** //
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

  function handleSubmit(event) {
    event.preventDefault()
    if (formActivityName === null || formDescription === null || formAddress === null || formNeighborhood === null || formType === null) {
      alert ('Please make sure you have entered all information.')
    } else {
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
      postNewActivity(newActivity)
      history.push('/city/all')
    }
  }

    // *** JSX *** //
  return (currentUser === '') ?
  <>
    <div style={{marginTop: '10px', marginLeft: '10px'}}>
      <button 
        className='return-button' 
        onClick={() => history.goBack()}>
          Back
      </button>
    </div>
    <h1 style={{textAlign: 'center'}}>You need to sign in to access this feature</h1>
  </>
    :
  <>
    <div>
      <h1 className='act-card-section' >Add Activity to {selectedCity.city_name}</h1>
      <CityNavBar />
      <div style={{marginTop: '10px', marginLeft: '10px'}}>
        <button 
          className='return-button' 
          onClick={() => history.goBack()}>
            Return to City
        </button>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', marginLeft: '10%', marginRight: '10%'}}>
        <div style={{width: '80%'}}>
          <form 
            style={{display: 'flex', flexDirection:'column', margin: '10px', padding: '20px'}}
            className='activity-form'
            onSubmit={handleSubmit}>
            
            <div style={{display: 'flex', flexDirection: 'row', marginBottom: '8px'}}>
              <div style={{width: '30%', height: '28px', textAlign: 'right'}}>
                <label>Activity / Location: </label>
              </div>
              <div style={{width: '65%'}}>
                <input 
                  style={{width: '100%'}}
                  name='activity_name'
                  type='text' 
                  onChange={onActivityNameChange}>
                </input>
              </div>
            </div>
            
            <div style={{display: 'flex', flexDirection: 'row', marginBottom: '8px'}}>
              <div style={{width: '30%', textAlign: 'right'}}>
                <label>Description:</label>
              </div>
              <div style={{width: '65%'}}>
                <input 
                  style={{width: '100%'}}
                  name='description'
                  type='text' 
                  onChange={onDescriptionChange}>
                </input>
              </div>
            </div>

            <div style={{display: 'flex', flexDirection: 'row', marginBottom: '0px'}}>
              <div style={{width: '30%', textAlign: 'right'}}>
               <label>Type of Activity?</label>
              </div>
              <div style={{width: '65%'}}>
                <select 
                  name={'types'} 
                  id={'types'} 
                  style={{width: '50%', marginLeft: '10px', fontFamily: 'Gideon Roman', borderRadius: '3px'}} 
                  onChange={onTypeChange}>
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
            </div>

            <div style={{marginLeft: '30%'}}>
              <label>
              <input
                type="checkbox"
                onChange={onOutdoorChange}
              />
              Outdoor activities?
              </label>
            </div>
           
            <div style={{marginLeft: '30%'}}>
              <label>
              <input
                type="checkbox"
                onChange={onIndoorChange}
              />
              Indoor activities?
              </label>
            </div>
            
            <div style={{marginLeft: '30%'}}>
              <label>
              <input
                type="checkbox"
                onChange={onFreeChange}
              />
              Free?
              </label>
            </div>

            <div style={{display: 'flex', flexDirection: 'row', marginBottom: '8px', marginTop: '8px'}}>
              <div style={{width: '30%', textAlign: 'right'}}>
                <label>Address: </label>
              </div>
              <div style={{width: '65%'}}>
                <input 
                  name='address'
                  type='text' 
                  onChange={onAddressChange}>
                </input>
              </div>
            </div>
            
            {selectedCity.city_name === 'New York City' 
              ?
            <div style={{display: 'flex', flexDirection: 'row', marginBottom: '8px'}}>
              <div className='form-div' style={{width: '30%', textAlign: 'right'}}> 
                <label>Borough: </label>
              </div>
              <div style={{width: '65%'}}>
                <input 
                  name='borough'
                  type='text' 
                  onChange={onBoroughChange}>
                </input>
              </div>
            </div>
              :
            null}
           
            <div style={{display: 'flex', flexDirection: 'row', marginBottom: '8px'}}>
              <div className='form-div' style={{width: '30%', textAlign: 'right'}}> 
                <label>Neighborhood</label>
              </div>
              <div style={{width: '65%'}}>
                <input 
                  name='neighborhood'
                  type='text' 
                  onChange={onNeighborhoodChange}>
                </input>
              </div>
            </div>
            
            <div>
              <div style={{marginLeft: '30%'}}>
                <button
                  type='submit'
                  value="Enter"
                  style={{marginTop: '2px', marginLeft: '10px'}} 
                  id='login-button'
                  text='Enter'>
                    Enter
                </button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  </>
}

export default AddActivity