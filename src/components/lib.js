import React from 'react'
import testText from '../test.json'
import '../stylesheet/style.css'
import '../stylesheet/style.scss'

export const test1 = (
        <h1 className="test1">
            {testText.test}
        </h1>
)

export const test2 = (
    <h1 className="test2">
        {testText.test2}
    </h1>
)