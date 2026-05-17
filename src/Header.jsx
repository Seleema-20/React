import React from 'react'

const Header = (props) => {
  return (
    <div>
        <h2>Helloooo! {props.name|| "guest ehh"}</h2>
    </div>
  )
}

export default Header