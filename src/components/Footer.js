import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Footer extends Component {

    
   
    render() {
        var year = new Date().getFullYear();
        
        return (
            <div className="footer">
                Danielle Platt Portfolio, Copyright {year}. <br /><br />

                <div class="social-media">
                    <a class="link--social-media" target="_blank" rel="noopener noreferrer" href="http://www.linkedin.com/in/d-platt">LinkedIn</a>
                    <a class="link--social-media" target="_blank" rel="noopener noreferrer" href="http://www.linkedin.com/in/d-platt">StackOverflow</a>
                    <a class="link--social-media" target="_blank" rel="noopener noreferrer" href="http://www.instagram.com/lifeiscodeiful">Instagram</a>
                </div>

                <p>Created by myself at <a class="codeiful" target="_blank" rel="noopener noreferrer" href="http://www.codeiful.co.uk">Codeiful</a>.</p>

             
            </div>
    
        )
    }
}

export default Footer