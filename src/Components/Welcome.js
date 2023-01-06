// while using class components we have to import two things: React and { Component } from react.
import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        return <div className='classComponent'>
                <h1>Hello Gandus, From Class Component</h1>
                </div>
    }
}

export default Welcome