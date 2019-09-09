import React from 'react'

const Blog = props => {
    const postsToDisplay = props.posts.map((post, idx) => {
        return (<div key={idx}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>)
    })
    
    return (
        <div>
        <h1>This is my blog</h1>
        {postsToDisplay}

        <form onSubmit={props.addToBlog}>
            <input type="text" name="title" placeholder="Title"/>
            <input type="text" name="content" placeholder="Content" />
            <input type="submit" />
        </form>
        </div>

    )
}

export default Blog