import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Pagination extends Component {
   
    render() {
        
        return (
            <div className="pagniation">

               
                
            </div>
    
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Pagination)