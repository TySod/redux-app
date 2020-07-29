import React, { Component } from 'react'

export default class PostForm extends Component {
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
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data => console.log(data))
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
