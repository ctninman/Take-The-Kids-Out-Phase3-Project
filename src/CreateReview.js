import {useState, useContext} from 'react'
import {useHistory} from 'react-router'
import { UserContext } from './UserContext'
import './Form.css'

function CreateReview ({reviewLocationId}) {

  const {currentUser, setCurrentUser} = useContext(UserContext)

  let history = useHistory()

    // *** STATE VARIABLES *** //
  const [reviewDescription, setReviewDescription] = useState('')
  const [reviewRating, setReviewRating] = useState({baby: null, adult: null, toddler: null, preschool: null, schoolage: null, overall: null})

  let nullValue = (
    reviewRating.baby === null ||
    reviewRating.toddler === null ||
    reviewRating.preschool === null ||
    reviewRating.schoolage === null ||
    reviewRating.adult === null ||
    reviewRating.overall === null) 
      ?
    true
      :
    false

    // *** FETCH REQUESTS *** //
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

    // *** FUNCTIONS *** //
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

  function handleReviewSubmit(event) {
    event.preventDefault()
    if (nullValue === true) {
      alert("Please complete all sections.")
    } else {
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
      postNewReview(newReview)
      history.goBack()
    }
  }

    // *** JSX *** //
  return (currentUser === '') ?
    <>
      <div style={{marginTop: '10px', marginLeft: '10px'}}>
        <button 
          className='return-button' 
          onClick={() => history.goBack()}>
            Back
        </button>
      </div>
      <h1 style={{textAlign: 'center'}}>You need to sign in to access this feature</h1>
    </>
      :
    <div>
      <h1 className='act-card-section'>Create Review</h1>
      <div style={{marginTop: '10px', marginLeft: '10px'}}>
        <button 
          className='return-button' 
          onClick={() => history.goBack()}>
            Return to City
        </button>
      </div>
      
      <div style={{display: 'flex', justifyContent: 'center', marginLeft: '10%', marginRight: '10%'}}>
      <form 
        style={{display: 'flex', flexDirection:'column', margin: '10px', padding: '20px'}}
        id='create-review-form'
        className='review-form'
        onSubmit={handleReviewSubmit}
        >

        <div style={{display: 'flex', flexDirection: 'row', marginTop: '10px'}}>
          <div style={{width: '20%', textAlign: 'right'}}>
            <label>Your Review:</label>
          </div>
          <div style={{marginLeft: '10px', borderRadius: '5px'}}>
            <textarea rows="4" cols="60"
              style={{fontFamily: 'Gideon Roman'}}
              name='review-description'
              type='text' 
              value={reviewDescription}
              placeholder='Enter Your Review'
              onChange={onReviewDescriptionChange}
              >
            </textarea>
          </div>
        </div>
  
       <div style={{display: 'flex', flexDirection: 'row', marginTop: '10px'}}>
         <div style={{width: '40%', textAlign: 'right'}}>
            <label>Rating for Babies (0-12 Months)</label>
          </div>
          <div style={{display: 'flex', width: '58%', flexDirection: 'row', justifyContent: 'right'}}>
            <input onClick={onRatingClick} name='baby' type='radio' value={1} /> 1
            <input onClick={onRatingClick} name='baby' type='radio' value={2} /> 2
            <input onClick={onRatingClick} name='baby' type='radio' value={3} /> 3
            <input onClick={onRatingClick} name='baby' type='radio' value={4} /> 4
            <input onClick={onRatingClick} name='baby' type='radio' value={5} /> 5
          </div>
        </div>
       
        <div style={{display: 'flex', flexDirection: 'row', marginTop: '10px'}}>
          <div style={{width: '40%', textAlign: 'right'}}>
            <label>Rating for Toddlers (1-2 Years)</label>
          </div>
          <div style={{display: 'flex', width: '58%', flexDirection: 'row', justifyContent: 'right'}}>
            <input onClick={onRatingClick} name='toddler' type='radio' value={1} /> 1
            <input onClick={onRatingClick} name='toddler' type='radio' value={2} /> 2
            <input onClick={onRatingClick} name='toddler' type='radio' value={3} /> 3
            <input onClick={onRatingClick} name='toddler' type='radio' value={4} /> 4
            <input onClick={onRatingClick} name='toddler' type='radio' value={5} /> 5
          </div>
        </div>
       
        <div style={{display: 'flex', flexDirection: 'row', marginTop: '10px'}}>
          <div style={{width: '40%', textAlign: 'right'}}>
            <label>Rating for Preschoolers (3-5 Years)</label>
          </div>
          <div style={{display: 'flex', width: '58%', flexDirection: 'row', justifyContent: 'right'}}>
            <input onClick={onRatingClick} name='preschool' type='radio' value={1} /> 1
            <input onClick={onRatingClick} name='preschool' type='radio' value={2} /> 2
            <input onClick={onRatingClick} name='preschool' type='radio' value={3} /> 3
            <input onClick={onRatingClick} name='preschool' type='radio' value={4} /> 4
            <input onClick={onRatingClick} name='preschool' type='radio' value={5} /> 5
          </div>
        </div>
       
        <div style={{display: 'flex', flexDirection: 'row', marginTop: '10px'}}>
          <div style={{width: '40%', textAlign: 'right'}}>
            <label>Rating for School-Age Children (6-12 Years)</label>
          </div>
          <div style={{display: 'flex', width: '58%', flexDirection: 'row', justifyContent: 'right'}}>
            <input onClick={onRatingClick} name='schoolage' type='radio' value={1} /> 1
            <input onClick={onRatingClick} name='schoolage' type='radio' value={2} /> 2
            <input onClick={onRatingClick} name='schoolage' type='radio' value={3} /> 3
            <input onClick={onRatingClick} name='schoolage' type='radio' value={4} /> 4
            <input onClick={onRatingClick} name='schoolage' type='radio' value={5} /> 5
          </div>
        </div>
        
        <div style={{display: 'flex', flexDirection: 'row', marginTop: '10px'}}>
          <div style={{width: '40%', textAlign: 'right'}}>
            <label>Rating for Adults:</label>
          </div>
          <div style={{display: 'flex', width: '58%', flexDirection: 'row', justifyContent: 'right'}}>
            <input onClick={onRatingClick} name='adult' type='radio' value={1} /> 1
            <input onClick={onRatingClick} name='adult' type='radio' value={2} /> 2
            <input onClick={onRatingClick} name='adult' type='radio' value={3} /> 3
            <input onClick={onRatingClick} name='adult' type='radio' value={4} /> 4
            <input onClick={onRatingClick} name='adult' type='radio' value={5} /> 5
          </div>
        </div>
       
        <div style={{display: 'flex', flexDirection: 'row', marginTop: '10px'}}>
          <div style={{width: '40%', textAlign: 'right'}}>
            <label>Overall Rating:</label>
          </div>
          <div style={{display: 'flex', width: '58%', flexDirection: 'row', justifyContent: 'right'}}>
            <input onClick={onRatingClick} name='overall' type='radio' value={1} /> 1
            <input onClick={onRatingClick} name='overall' type='radio' value={2} /> 2
            <input onClick={onRatingClick} name='overall' type='radio' value={3} /> 3
            <input onClick={onRatingClick} name='overall' type='radio' value={4} /> 4
            <input onClick={onRatingClick} name='overall' type='radio' value={5} /> 5
          </div>
        </div>
      
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
          <button
            type='submit'
            value="Enter"
            style={{marginTop: '2px'}} 
            id='create-review-button'
            text='Enter'>
              Create Review!
          </button>
        </div>
      </form>
    </div>
    </div>
}

export default CreateReview