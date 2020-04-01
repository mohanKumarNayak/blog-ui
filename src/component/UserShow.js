import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {findUsersPost} from '../selectors/usersSelectors'

function UserShow(props){
    return(
        <div>
            {
                props.userPosts && props.user ? (<div><h2 className="display-3">users name - {props.user.name}</h2>
                    <h2 className="display-4">users posts</h2>
                    <ul className="list-group">
                        {
                            props.userPosts.map(post=>{
                                return (<li key={post.id} className="list-group-item"><Link to={`/posts/${post.id}`}>{post.title}</Link></li>)
                            })
                        }
                    </ul>
                    </div>) : <h3>Loading....</h3>
            }
            

        </div>
    )
}

const mapStateToProps = (state,props) => {
    const id = props.match.params.id
    return {
        userPosts : findUsersPost(state.userStore.posts,id),
        user : state.userStore.users.find(user=>user.id == props.match.params.id)
    }
}

export default connect(mapStateToProps)(UserShow)