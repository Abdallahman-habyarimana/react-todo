
import React from 'react'

const Navigation = ({ onRouteChange, isSignedIn}) => {
  return (
    <ul>
        {
            isSignedIn ? 
        (
            <li>
            <button onClick={() => onRouteChange("signout")}>Sign Out</button>
        </li>
        )
        :
        (
            <>
            <li>
            <button onClick={() => onRouteChange("home")}>Sign In</button>
        </li>
        <li>
            <button onClick={() => onRouteChange("register")}>Register</button>
        </li>
            </>
        )
}
    </ul>
  )
}

export default Navigation