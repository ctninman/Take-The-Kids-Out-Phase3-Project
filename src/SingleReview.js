function SingleReview ({review}) {
  
  return (
    <>
      <div className='single-review' style={{padding: '1px'}}> 
        <div style={{marginLeft: '15px'}}>
          <h3>{review.review}</h3>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', alignContent: 'center', marginLeft: '25px', marginBottom: '5px'}}>
          <img 
            style={{width: '50px', height: '50px', borderRadius: '5px'}}
            src={review.user.photo}
          />
          <p>-{review.user.user_name}</p>
        </div>
        
      </div>
    </>
  )
}

export default SingleReview