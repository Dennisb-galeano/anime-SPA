
import React from 'react'

export const Header = ({id, srcImage}) => {
  return (
    <>
      <div className="header-img header-{id} animate__animated animate__fadeIn" >
        <div className="header row">
          <img
            src={srcImage}
            alt="header {id}"
            className='{id}'
          />
        </div>
        <hr />
      </div>
    </>

  )
}