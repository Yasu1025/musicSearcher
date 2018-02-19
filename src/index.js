import React from 'react'
import { render } from 'react-dom'
import { MyComponent, MyComponent2 } from './components/component.js'

render(
    <MyComponent2 greeting = {"First Component"} />,
    document.getElementById('react-container')
)
