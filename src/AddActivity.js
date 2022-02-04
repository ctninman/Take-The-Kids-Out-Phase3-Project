import {useState} from 'react'

function AddActivity ({selectedCity}) {

  const [formActivityName, setFormActivityName] = useState(null)
  const [formActivityArray, setFormActivityArray] = useState([])
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

  // function onActivityArrayChange (event) {
  //   setFormActivityArray(event.target.value)
  // }

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
      activity_type: formType
    }
    console.log('newac', newActivity)
    postNewActivity(newActivity)
  }



  // function createActivity () {

  // }

  return(
    <div>
      <h1>Add Activity to {selectedCity.city_name}</h1>
      <form 
        id='activity-form'
        onSubmit={handleSubmit}>
        <input 
          name='activity_name'
          type='text' 
          placeholder='Activity'
          onChange={onActivityNameChange}>
        </input>
        <button type='button'>+ Add another activity
        </button>
        <input 
          name='description'
          type='text' 
          placeholder='Description'
          onChange={onDescriptionChange}>
        </input>
        <label>Type of Activity?</label>
        <select name={'types'} id={'types'} onChange={onTypeChange}>
          <option value={null}>---</option>
          <option value={'Playground'}>Playground</option>
          <option value={'Nature'}>Nature</option>
          <option value={'Museum'}>Museum</option>
          <option value={'Store'}>Store</option>
          <option value={'Class'}>Class</option>
        </select>
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
        <input 
          name='address'
          type='text' 
          placeholder='Address'
          onChange={onAddressChange}>
        </input>
        <input 
          name='borough'
          type='text' 
          placeholder='Borough'
          onChange={onBoroughChange}>
        </input>
        <input 
          name='neighborhood'
          type='text' 
          placeholder='Neighborhood'
          onChange={onNeighborhoodChange}>
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
  )
}

export default AddActivity