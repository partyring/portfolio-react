import React from 'react';

// Weather form which calls API
class Form extends React.Component {

    render() {

        return (
            <div>
                <form class="form--weather" onSubmit={this.props.getWeather}>
                    <label htmlFor="city">City:</label>
                    <input type="text" name="city" id="city"></input>

                    <label htmlFor="country">Country:</label>
                    <input type="text" name="country" id="country"></input>

                    <button class='btn btn-light btn--top-margin'>Search</button>
                </form>
            </div>
        );
    }
}

export default Form;