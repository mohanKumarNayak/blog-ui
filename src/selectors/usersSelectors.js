export const findUsersPost = (posts,id)=>{
    return posts.filter(post=>post.userId == id)
}
