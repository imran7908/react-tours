import React, { useState } from 'react'
import './styles.css'

const Tour = ({ id, image, info, name, price, removeTour }) => {
    const [readMore, setReadMore] = useState(false);
  return (
    <article className='content'>
        <img src={image} alt={name} />
        <footer>
            <div className='name-price'>
                <h4>{name}</h4>
                <h4 className='price'>${price}</h4>
            </div>
            <p>
                {readMore ? info : `${info.substring(0, 200)}...`}
                <button className='btn-readMore' onClick={() => setReadMore(!readMore)}>{readMore ? 'show less' : 'read more'}</button>
            </p>
            <button className='btn-notInterested' onClick={() => removeTour(id)}>Not Interested</button>
        </footer>
    </article>
  )
}

export default Tour