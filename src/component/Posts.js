import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

function Posts(props){
    return(
        <div>
            <h2 className="display-4">Listing posts - {props.posts.length}</h2>
            <ul className="list-group">
            {
                props.posts.map(post=>{
                return <li key={post.id} className="list-group-item"><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                })
            }
            </ul>

        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        posts:state.userStore.posts
    }
}

export default connect(mapStateToProps)(Posts)