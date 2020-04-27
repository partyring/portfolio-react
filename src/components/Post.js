import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../actions/postActions'

class Post extends Component {

    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }
    
    render() {

        console.log(this.props);
        
        const post = this.props.post ? (
            <div className="center">
                <h1 className="center">{ this.props.post.title }</h1>
                <p>{ this.props.post.body }</p>
            </div>
        ) : (
            <div className="center">
                <p>Loading post...</p>
            </div>
        )

        return (
            <div className="container center">
                <div>{ post }</div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => post.id === id)
    }
}


export default connect(mapStateToProps)(Post)