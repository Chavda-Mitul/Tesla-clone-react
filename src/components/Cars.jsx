import React from 'react'
import '../styles/Cars.css';

function Cars(props) {
  return (
    <>
        <div className="car-images section">
          <img src={props.image} alt="car-model" className='child' />
        </div>
    </>
  )
}

export default Cars;