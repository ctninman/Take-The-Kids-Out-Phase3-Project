import {useState} from 'react'
import {useHistory} from 'react-router'

function CreateReview ({currentUser, setCurrentUser, reviewLocationId}) {

  let history = useHistory()


  const [reviewDescription, setReviewDescription] = useState('')
  const [reviewBabyRating, setReviewBabyRating] = useState(null)
  // const [reviewUserCity, setReviewUserCity] = useState(null)
  // const [reviewUserKids, setReviewUserKids] = useState(null)
  // const [reviewUserPhoto, setReviewUserPhoto] = useState(false)

  // let history = useHistory()

  function onReviewDescriptionChange (event) {
    setReviewDescription(event.target.value)
  }

  function onBabyRatingChange (event) {
    setReviewBabyRating(event.target.value)
  }

  // function onUserCityChange (event) {
  //   setReviewUserCity(event.target.value)
  // }

  // function onUserKidsChange (event) {
  //   setReviewUserKids(event.target.value)
  // }

  // function onUserPhotoChange (event) {
  //   setReviewUserPhoto(event.target.value)
  // }

  function postNewReview (object) {  
    fetch(`http://localhost:9293/reviews`, {
      method: "POST",
      headers: {"Content-Type": "application/json",},
      body: JSON.stringify(object),
    })
      .then((res) => res.json())
      .then ((data) => {
        let copyOfUser = {...currentUser}
        copyOfUser.reviews.push(data)
        setCurrentUser(copyOfUser)
      })
  }

  function handleReviewSubmit(event) {
    event.preventDefault()
    let newReview = {
      location_id: reviewLocationId,
      user_id: currentUser.id,
      review: reviewDescription,
      baby_rating: 5,
      toddler_rating: 5,
      preschool_rating: 5,
      school_age_rating: 5,
      adult_rating: 5,
      general_rating: 5,
      educational_value: 5
    }
    console.log('newac', newReview)
    postNewReview(newReview)
    history.goBack()
  }



  return (
    <div>
      <h1>Create Review</h1>
      <form 
        style={{display: 'flex', flexDirection:'column', backgroundColor: 'orange', margin: '10px', padding: '20px'}}
        id='create-review-form'
        onSubmit={handleReviewSubmit}
        >
        <input 
          name='review-description'
          type='text' 
          value={reviewDescription}
          placeholder='Enter Your Review'
          onChange={onReviewDescriptionChange}
          >
        </input>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <label>Rating for Babies (0-12 Months)</label>
          <input name='baby' type='radio' value={1} /> 1
          <input name='baby' type='radio' value={2} /> 2
          <input name='baby' type='radio' value={3} /> 3
          <input name='baby' type='radio' value={4} /> 4
          <input name='baby' type='radio' value={5} /> 5
        </div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <label>Rating for Toddlers (1-2 Years)</label>
          <input name='toddler' type='radio' value={1} /> 1
          <input name='toddler' type='radio' value={2} /> 2
          <input name='toddler' type='radio' value={3} /> 3
          <input name='toddler' type='radio' value={4} /> 4
          <input name='toddler' type='radio' value={5} /> 5
        </div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <label>Rating for Preschoolers (3-5 Years)</label>
          <input name='preschool' type='radio' value={1} /> 1
          <input name='preschool' type='radio' value={2} /> 2
          <input name='preschool' type='radio' value={3} /> 3
          <input name='preschool' type='radio' value={4} /> 4
          <input name='preschool' type='radio' value={5} /> 5
        </div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <label>Rating for School-Age Children (6-12 Years)</label>
          <input name='schoolage' type='radio' value={1} /> 1
          <input name='schoolage' type='radio' value={2} /> 2
          <input name='schoolage' type='radio' value={3} /> 3
          <input name='schoolage' type='radio' value={4} /> 4
          <input name='schoolage' type='radio' value={5} /> 5
        </div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <label>Rating for Adults</label>
          <input name='adult' type='radio' value={1} /> 1
          <input name='adult' type='radio' value={2} /> 2
          <input name='adult' type='radio' value={3} /> 3
          <input name='adult' type='radio' value={4} /> 4
          <input name='adult' type='radio' value={5} /> 5
        </div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <label>Overall Rating</label>
          <input name='overall' type='radio' value={1} /> 1
          <input name='overall' type='radio' value={2} /> 2
          <input name='overall' type='radio' value={3} /> 3
          <input name='overall' type='radio' value={4} /> 4
          <input name='overall' type='radio' value={5} /> 5
        </div>
      

        <button
          type='submit'
          value="Enter"
          style={{marginTop: '2px'}} 
          id='create-review-button'
          text='Enter'>
            Create Review!
          </button>
      </form>
    </div>
  )
}

export default CreateReview