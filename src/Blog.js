import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Blog extends Component {
   
    render() {
        console.log(this.props)
        const { posts } = this.props;

        let numberOfPages = Math.floor(posts.length/3);
        let overflow = posts.length % 3;

        console.log(numberOfPages);
        console.log(overflow);

        if (overflow) {
            numberOfPages++;
        } 

        console.log(numberOfPages);

        const pagination = [];

        // for (let i = 1; i => numberOfPages; i++) {
        //     pagination.push(`<button>${i}</button>`)
        // }

        const postList = posts.length ? (
            posts.slice(0,10).map(post => {
                return (
                    <div className="post card" key={ post.id }>
                        <div className="card-content">
                            <Link to={'/blog/' + post.id}>
                                <h3>{ post.title }</h3>
                            </Link>
                            <p> { post.date }</p>
                            <p>{ post.body.substring(0, 120) }...</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No posts.</div>
        );
        return (
            <div className="portfolio-app container full-height">

                <div className="row collapsable full-height">
                    <div className="col splash--blog">
                        <h1 className="center ">blog</h1>
                    </div>
                     <div className="col bg--purple about--text">
                        { postList }
                    </div>

                    { pagination }



                </div>

                
            </div>
    
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Blog)