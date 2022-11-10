const url = (state='', action) => {
    switch(action.type){
        case 'STORE_URL':
            return action.payload;
        case 'CLEAR_URL':
            return action.payload;
    }
    return state;
}

export default url;