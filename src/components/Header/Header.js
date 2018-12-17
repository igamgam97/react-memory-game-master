import React from 'react'
import { NavLink } from 'react-router-dom'
import {todosRef, authRef, provider, todoCollection} from "../../config/firebase";
const logo = require('./images/logo.svg')



const Header = ({ className }) => (
  <header className={className}>
    <div className="Header__logo">
      <img
        alt="logo"
        className="Header__logoImage"
        src={logo}
      />

      Memory game
    </div >
      <button className="sign_out"
          onClick={() => authRef
              .signOut()
              .then(() => {})
              .catch(error => {
                  console.log(error);
              })}
          id="sign-out-button"
      >
          LogOut
      </button>

    <NavLink to="/menu" className="backToMenuLink">
      Back to main menu
    </NavLink>
  </header>
)

export default Header
