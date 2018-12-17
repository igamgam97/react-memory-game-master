import React from 'react'
import {
    BrowserRouter,
    Redirect,
    Route
} from 'react-router-dom'
import {todosRef, authRef, provider, todoCollection} from "../../config/firebase";

import {
    Cards,
    EndGame,
    MainMenu,
    NewGame
} from '../../components';

import LogIn from "../LogIn/SignIn";

import {Component} from "react/lib/ReactBaseClasses";
import PrivateRoute from "../PrivateRoute";

class MainLayout extends Component {
    state = { loading: true, authenticated: false, user: null };

    componentWillMount() {
        authRef.onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    authenticated: true,
                    currentUser: user,
                    loading: false
                });
            } else {
                this.setState({
                    authenticated: false,
                    currentUser: null,
                    loading: false
                });
            }
        });
    }

    render() {
        const { authenticated, loading } = this.state;
        //if (loading) {
        //     return <p>Loading..</p>;
        // }

        return(
            <BrowserRouter>
                <div className={this.props.className}>
                    <PrivateRoute exact path="/new-game" component={NewGame} authenticated={authenticated}/>
                    <PrivateRoute exact path="/game" component={Cards} authenticated={authenticated}/>
                    <PrivateRoute path="/menu" component={MainMenu} authenticated={authenticated}/>
                    <PrivateRoute path="/end-game" component={EndGame} authenticated={authenticated}/>
                    <Route exact path="/login" component={LogIn} />
                </div>
            </BrowserRouter>
        )
    }
}

export default MainLayout

