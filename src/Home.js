import React from 'react'
import TypeWriter from './TypeWriter'

// Render the 'about' page
const Home = () => {

    return (
        <div className="todo-app">
            <div className="splash--index">
                <h1 className="center">Danielle Platt <br/>Web Developer Profile</h1>
                <button onClick={TypeWriter}>Click me</button>
                <p id="demo"></p>

                <div className="speech-bubble">Hello and welcome to my portfolio. Please visit my 'about' section to read about my developer story, or visit my blog to find some further details.</div>
            </div>
            
        </div>

    )
}

export default Home