import React from 'react'
import GetWeather from './GetWeather'

const Search = () => {
    return (
        <div className="todo-app container">


            <div class="row">
                <div id="splashContact" class="col splash--contact">
                    <h1 className="center ">search the weather forecast</h1>
                </div>
                <div class="col bg--black about--text">
                    <p>
                        Can't see out of the window right now? Find out if you'll need an umbrella today.
                    </p>
                    <GetWeather />
                </div>
            </div>
         

        </div>

    )
}

export default Search