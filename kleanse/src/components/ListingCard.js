import React from 'react'
import '../styles/ListingCard.css'

function ListingCard({
    title,
    img,
    subtitle,
    alt,
    index
}) {
  return (
    <div className='listing-card-outer'>
        <img className='main_image' src={img} alt={alt}></img>
        <h2 className='title'>{title}</h2>
        <span>{subtitle}</span>
    </div>
  )
}

export default ListingCard;