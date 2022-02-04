import {useState, useEffect} from 'react'
import ActivityCard from './ActivityCard'

function ToddlerActivities ({selectedCity}) {

  const [toddlerActivities, setToddlerActivities] = useState([])

  useEffect (() => {
    fetch(`http://localhost:9293//cities/${selectedCity.id}/locations/toddler`)
    .then(res => res.json())
    .then(data => {
      setToddlerActivities(data)
    })
  }, [] )

  return(
    <div>
      <h1>Toddler Activities in {selectedCity.city_name}</h1>
      {toddlerActivities.map((location) => (
       <ActivityCard location={location}/>
     ))}
    </div>
  )
}

export default ToddlerActivities