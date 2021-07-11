
export const createProject = (project,user,auth) =>{
    return(dispatch , getState , { getFirebase , getFirestore }) =>{
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: user.firstName,
            authorLastName:  user.lastName,
            authorId: auth.uid,
            createdAt: new Date()
        },{ merge: true }).then(()=>{
            dispatch({type:'CREATE_PROJECT', project})
        }).catch((err) => {
            dispatch({type:'CREATE_PROJECT_ERROR', err})
        })
    }
}