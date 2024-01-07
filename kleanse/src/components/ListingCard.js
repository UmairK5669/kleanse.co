import React from 'react'
import '../styles/ListingCard.css'

function ListingCard({
    title,
    img,
    subtitle,
    alt,
    price
}) {
  return (
    <div className='listing-card-outer'>
        <img className='main_image' src={img} alt={alt}></img>
        <div className='text-listing-card'>
          <h2 className='title'>{title}</h2>
          <span>{subtitle}</span>
          <span>{price}</span>
        </div>
    </div>
  )
}

export default ListingCard;