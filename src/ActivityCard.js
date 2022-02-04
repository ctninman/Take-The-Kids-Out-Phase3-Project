function ActivityCard ({location}) {
  return (
    <div>
      <h1>{location.location_name}</h1>
      <h2>{location.activity_type}</h2>
      <h2>{location.description}</h2>
      <button>Add to Favorites</button>
      <button>I Want to Take the Kids Here!</button>
      <button>Been There!</button>
    </div>
  )
}

export default ActivityCard