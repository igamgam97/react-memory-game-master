import React, { Component } from "react";
import "./SignIn.css";
import {todosRef, authRef, provider, todoCollection} from "../../config/firebase";
class SignIn extends Component {

  componentWillUpdate() {
      authRef.onAuthStateChanged(user => {
          if (user) {
              this.props.history.push("/menu")
          }
      });
  }

    handleLogIn = async event => {
        authRef
            .signInWithPopup(provider)
            .then(result => {
            })
            .catch(error => {
                console.log(error);
            })
    }
  render() {
    return (
        <div className="sign_in">
            <img src={require('../../components/LogIn/brand.svg')} style={{width:400}}/>
                <button className="social-signin" onClick={() =>this.handleLogIn()} >
                    Sign In With Google
                </button>

      </div>
    );
  }
}
export default SignIn

