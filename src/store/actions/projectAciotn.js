
export const createProject = (project) =>{
    return(dispatch , getState , { getFirebase , getFirestore }) =>{
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Fly',
            authorName: 'Huan',
            authorId: 123456,
            createdAt: new Date()
        },{ merge: true }).then(()=>{
            dispatch({type:'CREATE_PROJECT', project})
        }).catch((err) => {
            dispatch({type:'CREATE_PROJECT_ERROR', err})
        })
    }
}