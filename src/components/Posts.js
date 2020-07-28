import React, { Component } from 'react'

class Post extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data=> this.setState({posts: data}))
    }

    render() {
        const postItems = this.state.posts.map(post => (
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            </div>
        ))
        return (
            <>
                <h1>Posts</h1>
                {postItems}
            </>
        )
    }
}
export default Post
