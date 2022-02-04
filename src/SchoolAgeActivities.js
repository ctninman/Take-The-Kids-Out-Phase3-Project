import {useState, useEffect} from 'react'
import ActivityCard from './ActivityCard'

function SchoolAgeActivities ({selectedCity}) {

  const [schoolAgeActivities, setSchoolAgeActivities] = useState([])

  useEffect (() => {
    fetch(`http://localhost:9293//cities/${selectedCity.id}/locations/school_age`)
    .then(res => res.json())
    .then(data => {
      setSchoolAgeActivities(data)
    })
  }, [] )

  return(
    <div>
      <h1>School-Age Activities in {selectedCity.city_name}</h1>
      {schoolAgeActivities.map((location) => (
       <ActivityCard location={location}/>
     ))}
    </div>
  )
}

export default SchoolAgeActivities