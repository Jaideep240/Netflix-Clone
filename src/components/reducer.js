import Movies from './movies.json';

const initialState = {
    email:{},
    password:{},
    role:'',
    searchKey:'',
    moviesData:{Movies}
}

const reducer = (state=initialState, action) =>{
    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                role:action.payload.role
            }
        case 'LOGOUT':
            return {
                ...state,
                email:null,
                password:null,
                role:null
            }
        case 'SEARCH':
            return {
                ...state,
                searchKey:action.payload.searchKey
            }
        case 'ADDMOVIE':
        return {
            ...state,
            moviesData:[...state.moviesData,action.payload.moviesData]
        }
        default:
            return state;
    }
}

export default reducer;