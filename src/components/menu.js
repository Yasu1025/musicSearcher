import React from 'react'
import { Link } from 'react-router'
import {Tabs, Tab} from 'material-ui/Tabs';

const Menu = () => (
    <Tabs className="menu">
            <Tab label="Home"
                 containerElement={<Link to="/home"/>}>
            </Tab>
            <Tab label="Serach"
                 containerElement={<Link to="/search"/>}>
            </Tab>
            <Tab label="About"
                 containerElement={<Link to="/about"/>}>
            </Tab>
    </Tabs>
)

export default Menu