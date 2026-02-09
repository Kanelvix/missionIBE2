import React from 'react'
import fullStar from '../../assets/rating/full-star.svg'
import halfStar from '../../assets/rating/half-star.svg'
import emptyStar from '../../assets/rating/empty-star.svg'

const Star = (props) => {
  if (props.type === "full") {
    return <img src={fullStar} alt="" />
  }

  if (props.type === "half") {
    return <img src={halfStar} alt="" />
  }
  
  return <img src={emptyStar} alt="" />
}

const generateStars = (rating) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push("full");
    } else if (rating >= i - 0.5) {
      stars.push("half");
    } else {
      stars.push("empty");
    }
  }

  return stars;
}

function RatingStars(props) {
  return (
    <div className='flex gap-2 items-center'>
      <div className='flex'>
        {generateStars(props.rating).map((type, i) => {
          return <Star key={i} type={type} />
        })}
      </div>
      <p className='underline text-sm font-medium'>{props.rating} ({props.totalReview})</p>
    </div>
  )
}

export default RatingStars