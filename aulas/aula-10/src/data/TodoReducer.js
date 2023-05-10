export const TodoReducer = (state, action) => {
    //estado atual do Reducer    
    console.log(state);

    //Ação do reducer
    console.log(action);

    //Apartir da ação, temos um retorno de uma ação.
    switch(action.type){
        case 'ADD_TODO':
            return [...state, {texto : action.payload.text}];
        default:
            alert("Não sei o que fazer")
            return state;
    }
};