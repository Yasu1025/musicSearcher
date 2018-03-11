import React from 'react'
import { render } from 'react-dom'
import App from './components/app.js'
import AlbumInfo from './components/AlbumInfo'
import Page404 from './components/page404'
import {Router, Route, hashHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

window.React = React

render(
    <MuiThemeProvider>
        <Router history={hashHistory}>
            <Route exact path="/home" component={App} />
            <Route path="/album/:id" component={App} />
            <Route path="search" component={App} />
            <Route path="about" component={App} />
            <Route path="*" component={Page404}/>
        </Router>
    </MuiThemeProvider>,
    document.getElementById('react-container')
)
