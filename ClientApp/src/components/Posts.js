import React, { Component } from 'react';
import authService from './api-authorization/AuthorizeService';
class Counter extends Component {
    static displayName = Counter.name;

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loading:true

        };
    }
    componentDidMount() {
        this.populatePostData();
    }

    async populatePostData() {
        const token = await authService.getAccessToken();
        const response = await fetch('post', {
            headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        this.setState({ posts: data, loading: false });
    }

    render() {
        
        return (
            <React.Fragment >
                <div className="row">
                    {
                        console.log(this.state.loading),
                        this.state.loading ? <p>Loading ...</p> :
                        this.state.posts.map(post => < div className="col-sm-4" key={post.id}>
                        <div>{post.postTitle}</div>
                        <div>{post.postDesctiption}</div>
                        <div>{post.time}</div>
                        <div>{post.imagePath}</div>
                   
                    </div>
                    )}
                </div>
        
        </React.Fragment >

        )
    }
}

export default Counter;