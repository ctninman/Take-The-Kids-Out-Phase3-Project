import {useState, useContext} from 'react'
import {useHistory} from 'react-router'
import { UserContext } from './UserContext'
import './Form.css'

function CreateReview ({reviewLocationId}) {

  const {currentUser, setCurrentUser} = useContext(UserContext)

  let history = useHistory()

  const [reviewDescription, setReviewDescription] = useState('')
  const [reviewRating, setReviewRating] = useState({baby: null, adult: null, toddler: null, preschool: null, schoolage: null, overall: null})
  // const [reviewUserCity, setReviewUserCity] = useState(null)
  // const [reviewUserKids, setReviewUserKids] = useState(null)
  // const [reviewUserPhoto, setReviewUserPhoto] = useState(false)

  // let history = useHistory()

  function onReviewDescriptionChange (event) {
    setReviewDescription(event.target.value)
  }

  //passing callback into setReviewRating gets most up to date state
  function onRatingClick (event) {
    setReviewRating( (prevReviewRating) => ({
      ...prevReviewRating, 
      [event.target.name]: event.target.value
    }))
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
        console.log(data)
        let copyOfUser = {...currentUser}
        copyOfUser.reviews.push(data)
        setCurrentUser(data.user)
      })
  }

  function handleReviewSubmit(event) {
    event.preventDefault()
    let newReview = {
      location_id: reviewLocationId,
      user_id: currentUser.id,
      review: reviewDescription,
      baby_rating: reviewRating.baby,
      toddler_rating: reviewRating.toddler,
      preschool_rating: reviewRating.preschool,
      school_age_rating: reviewRating.schoolage,
      adult_rating: reviewRating.adult,
      general_rating: reviewRating.overall,
    }
    console.log('newac', newReview)
    postNewReview(newReview)
    history.goBack()
  }



  return (currentUser === '') ?
    <h1 style={{textAlign: 'center'}}>You need to sign in to access this feature</h1>
      :
    <div>
      <h1 className='act-card-section'>Create Review</h1>
      <div style={{display: 'flex', justifyContent: 'center', marginLeft: '10%', marginRight: '10%'}}>
      <form 
        style={{display: 'flex', flexDirection:'column', margin: '10px', padding: '20px'}}
        id='create-review-form'
        className='review-form'
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
          <input onClick={onRatingClick} name='baby' type='radio' value={1} /> 1
          <input onClick={onRatingClick} name='baby' type='radio' value={2} /> 2
          <input onClick={onRatingClick} name='baby' type='radio' value={3} /> 3
          <input onClick={onRatingClick} name='baby' type='radio' value={4} /> 4
          <input onClick={onRatingClick} name='baby' type='radio' value={5} /> 5
        </div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <label>Rating for Toddlers (1-2 Years)</label>
          <input onClick={onRatingClick} name='toddler' type='radio' value={1} /> 1
          <input onClick={onRatingClick} name='toddler' type='radio' value={2} /> 2
          <input onClick={onRatingClick} name='toddler' type='radio' value={3} /> 3
          <input onClick={onRatingClick} name='toddler' type='radio' value={4} /> 4
          <input onClick={onRatingClick} name='toddler' type='radio' value={5} /> 5
        </div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <label>Rating for Preschoolers (3-5 Years)</label>
          <input onClick={onRatingClick} name='preschool' type='radio' value={1} /> 1
          <input onClick={onRatingClick} name='preschool' type='radio' value={2} /> 2
          <input onClick={onRatingClick} name='preschool' type='radio' value={3} /> 3
          <input onClick={onRatingClick} name='preschool' type='radio' value={4} /> 4
          <input onClick={onRatingClick} name='preschool' type='radio' value={5} /> 5
        </div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <label>Rating for School-Age Children (6-12 Years)</label>
          <input onClick={onRatingClick} name='schoolage' type='radio' value={1} /> 1
          <input onClick={onRatingClick} name='schoolage' type='radio' value={2} /> 2
          <input onClick={onRatingClick} name='schoolage' type='radio' value={3} /> 3
          <input onClick={onRatingClick} name='schoolage' type='radio' value={4} /> 4
          <input onClick={onRatingClick} name='schoolage' type='radio' value={5} /> 5
        </div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <label>Rating for Adults</label>
          <input onClick={onRatingClick} name='adult' type='radio' value={1} /> 1
          <input onClick={onRatingClick} name='adult' type='radio' value={2} /> 2
          <input onClick={onRatingClick} name='adult' type='radio' value={3} /> 3
          <input onClick={onRatingClick} name='adult' type='radio' value={4} /> 4
          <input onClick={onRatingClick} name='adult' type='radio' value={5} /> 5
        </div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <label>Overall Rating</label>
          <input onClick={onRatingClick} name='overall' type='radio' value={1} /> 1
          <input onClick={onRatingClick} name='overall' type='radio' value={2} /> 2
          <input onClick={onRatingClick} name='overall' type='radio' value={3} /> 3
          <input onClick={onRatingClick} name='overall' type='radio' value={4} /> 4
          <input onClick={onRatingClick} name='overall' type='radio' value={5} /> 5
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
    </div>
}

export default CreateReview