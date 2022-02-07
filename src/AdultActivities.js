import {useState, useEffect} from 'react'
import ActivityCard from './ActivityCard'

function AdultActivities ({selectedCity, currentUser}) {

  const [adultActivities, setAdultActivities] = useState([])

  useEffect (() => {
    fetch(`http://localhost:9293//cities/${selectedCity.id}/locations/adult`)
    .then(res => res.json())
    .then(data => {
      setAdultActivities(data)
    })
  }, [] )

  return(
    <div>
      <h1>Top-rated Activities for Adults with Children in {selectedCity.city_name}</h1>
      {adultActivities.map((location) => (
       <ActivityCard currentUser={currentUser} location={location}/>
     ))}
    </div>
  )
}

export default AdultActivities