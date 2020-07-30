import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createPost} from '../actions/postActions'
import Posts from './Posts'
class PostForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            body: ''
        }
    }
            changeHandler = (e) => {
              const {value, name} = e.target
              this.setState({[name] :value}) 
    }

    onSubmit = (e) => {
        e.preventDefault()
        const post = {
            title: this.state.title,
            body: this.state.body
        }
        this.props.createPost(post)
    }
    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title:</label><br/>
                        <input type="text" name="title" value={this.state.title} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <label>Body:</label><br/>
                        <textarea name="body" value={this.state.body} onChange={this.changeHandler}/>
                    </div>
                    <button>Submit</button>
                </form>
                
            </div>
        )
    }
}
Posts.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, {createPost},)(PostForm)