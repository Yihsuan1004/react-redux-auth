const initState = {}

const projectReducer = (state = initState, action) =>{
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('creat success',action.project);
            return state
        case 'CREATE_PROJECT_ERROR':
            console.error('create project error',action.err);
            return state
        default: return state;
    }
}

export default projectReducer