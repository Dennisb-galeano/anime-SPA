
import React from 'react'

export const Header = ({ id, srcImage }) => {
  return (
    <>

      <div className="header-{id} animate__animated animate__fadeIn" >
        <div className='header-img'>
          <div className="row g-0">
            <img
              src={srcImage}
              alt="header {id}"
              className='{id}'
            />
          </div>
          <hr />
        </div>

      </div>
    </>

  )
}

//sin canalones
//The gutters between columns in our predefined grid classes can be removed with .g-0. This removes the negative margins from .row and the horizontal padding from all immediate children columns.