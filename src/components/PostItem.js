import React from 'react'
import './PostItem.css'

const h1Styled = {
    color: 'darkmagenta',
    backgroundColor: 'lightgreen',
    padding: '5px'
}



const PostItem = ({ post }) => {
    return (
        <div className='container'>
            {/* <h1 style={h1Styled}>ID: {post.id}</h1> */}
            <img src={post.image} width="100px" height="100px"></img>
            <h3 style={{ color: 'darkblue', backgroundColor: 'lightgray' }}>
                Title: {post.title}
            </h3>
            <h3> Price : {post.price}</h3>
            <h4>Rate : {post.rating.rate}</h4>
        
        </div>
    )
}

export default PostItem