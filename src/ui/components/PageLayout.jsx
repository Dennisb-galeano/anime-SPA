import React from 'react'
import {Navbar} from "./Navbar"


const RenderHeader = ({header}) => {
  if( header !== null) {
    return(
      <div className="header">
        {header}
      </div>
    );
  }

}


export const PageLayout = ({body, header=null} ) => {
  return (
    <>
    <Navbar/>
    <RenderHeader header={header} />
    <div className="container"> {body} </div>

    </>
  )
}
