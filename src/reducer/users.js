const intialUserState = {users:[],posts:[],comments:[]}

const userStoreReducer = (state=intialUserState,action) => {
    switch(action.type){
        case 'SET_DATA_ALL' : {
            //console.log(action.payload.users,action.payload.posts,action.payload.comments)
            return {
                users: [...action.payload.users],
                posts : [...action.payload.posts],
                comments : [...action.payload.comments]
            }
        }
        default : {
            return {...state}
        }
    }
}

export default userStoreReducer