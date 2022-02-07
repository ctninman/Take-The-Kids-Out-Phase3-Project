import {useState, useEffect} from 'react'
import ActivityCard from './ActivityCard'

function BabyActivities ({selectedCity, currentUser}) {

  const [babyActivities, setBabyActivities] = useState([])

  useEffect (() => {
    fetch(`http://localhost:9293//cities/${selectedCity.id}/locations/baby`)
    .then(res => res.json())
    .then(data => {
      setBabyActivities(data)
    })
  }, [] )

  return(
    <div>
      <h1>Baby Activities in {selectedCity.city_name}</h1>
      {babyActivities.map((location) => (
       <ActivityCard currentUser={currentUser} location={location}/>
     ))}
    </div>
  )
}

export default BabyActivities