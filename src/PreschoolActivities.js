import {useState, useEffect} from 'react'
import ActivityCard from './ActivityCard'

function PreschoolActivities ({selectedCity}) {

  const [preschoolActivities, setPreschoolActivities] = useState([])

  useEffect (() => {
    fetch(`http://localhost:9293//cities/${selectedCity.id}/locations/preschool`)
    .then(res => res.json())
    .then(data => {
      setPreschoolActivities(data)
    })
  }, [] )

  return(
    <div>
      <h1>Preschool Activities in {selectedCity.city_name}</h1>
      {preschoolActivities.map((location) => (
       <ActivityCard location={location}/>
     ))}
    </div>
  )
}

export default PreschoolActivities