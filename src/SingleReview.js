function SingleReview ({review}) {
  
  return (
    <>
      <div className='single-review' style={{padding: '1px'}}> 
        <div style={{marginLeft: '15px'}}>
          <h3>{review.review}</h3>
        </div>
        <div style={{marginLeft: '25px'}}>
          <p>-{review.user.user_name}</p>
        </div>
        
      </div>
    </>
  )
}

export default SingleReview