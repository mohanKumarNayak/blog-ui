import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

function PostsShow(props){
    console.log(props.user)
    return(
        <div>
            {
                props.post ? (<div>
                    <h2 className="display-4" style={{fontSize:"40px",color:"black"}}>UserName - {props.user.name}</h2>
                    <hr />
                    <h2 className="display-4" style={{fontSize:"30px",color:"black"}}>title - {props.post.title}</h2>
                    <hr />
                    <h2 className="display-4" style={{fontSize:"25px",color:"black"}}>body - {props.post.body}</h2>
                    <hr />
                    <h3>comments</h3>
                
                        <ul>
                            {
                                props.comments.map(comm=>{
                                return (<li key={comm.id} className="display-4" style={{fontSize:"20px"}}>{comm.body}</li>)
                                })
                            }
                        </ul>
                        <Link to={`/users/${props.user.id }`} className="display-4" style={{fontSize:"28px"}}>back to {props.user.name}</Link>
                   

                    </div>) : <h3>loading....</h3>
            }
            
        </div>
    )
}

const mapStateToProps = (state,props) => {
    return{
        post : state.userStore.posts.find(post=>post.id == props.match.params.id),
        comments : state.userStore.comments.filter(comment=>comment.postId == props.match.params.id),
        user : state.userStore.posts && state.userStore.users.find(user=>user.id == state.userStore.posts.find(post=>post.id == props.match.params.id).userId)

    }
}

export default connect(mapStateToProps)(PostsShow)