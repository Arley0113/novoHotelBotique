import React from 'react'
import './RoomCard.css'

export default function RoomsCard({img, title, price, description}) {

  return (
    <article className='room-card'>
      <img src={img} alt={title} />
      <div className='room-info'>
        <h3>{title}</h3>
        <p className='price'>${price} <span>noche</span></p>
        <p className='description'>{description}</p>
        <button className='btn-primary'>Reservar</button>
      </div>
    </article>
  );
};
