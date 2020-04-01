import axios from 'axios'

export const startGetAll = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            const users = response.data
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response=>{
                const posts = response.data
                axios.get('https://jsonplaceholder.typicode.com/comments')
                .then(response=>{
                    const comments = response.data
                    //console.log(users,posts,comments)
                    dispatch(setDataAll({users,posts,comments}))
                })
            })
        })
    }
}

export const setDataAll = (obj) => {
    return {type:'SET_DATA_ALL',payload:obj}
}