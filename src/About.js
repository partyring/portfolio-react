import React from 'react'
import Rainbow from './components/hoc/Rainbow'

// Render the 'about' page
const About = () => {
    return (
        <div className="todo-app container">

            <div class="row collapsable">
                <div class="col">
                    <h1 className="center splash--about">about</h1>
                </div>
                <div class="col bg--peach about--text">
                    <p>
                        I am a Web developer with three years in the field, with experience covering healthcare, start-ups and agency life.
                        I am currently searching for a permenant role, but outside of this I do freelancing work for myself at Codeiful.
                        <br /><br />
                        My specialty is PHP, and I have worked across many projects using the Laravel MVC framework.
                        I also have experience in Sass, JavaScript and some JavaScript frameworks, such as React and Vue.js.
                        I am predominately a back-end developer, however I enjoy working across the full stack.
                        <br /><br />
                        The reason why I am drawn to programming is because I love to solve problems, work in a team and achieve tangible results.
                        I really like the tech community, and frequently go to technology meetups to meet others in the field and learn about new concepts.
                        I do volunteer Web development for people or causes in need, and really enjoy to share my skills with others.
                        <br /><br />
                        Outside of Web development you will probably catch me on my skateboard around Bristol, up a hill or dreaming about mountains.
                    </p>
                </div>
            </div>

        </div>


    )
}

export default Rainbow(About)