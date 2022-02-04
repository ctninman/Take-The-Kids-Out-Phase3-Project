function ActivityCard ({location}) {

  function handleAddActivity () {
    console.log('add activity');
  }

  return (
    <div style={{display: 'flex', flexDirection:'column', backgroundColor: 'orange', margin: '10px', padding: '20px'}}>
      <h1>{location.location_name}</h1>
      <h2>{location.activity_type}</h2>
      <h2>{location.description}</h2>
      <div>
        <button>Add to Favorites</button>
        <button>I Want to Take the Kids Here!</button>
        <button>Been There!</button>
      </div>
      <div>
        <button style={{marginTop: '10px'}}onClick={handleAddActivity}>
          Add to My Activities
        </button>
      </div>
    </div>
  )
}

export default ActivityCard