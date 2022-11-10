const url = (state='', action) => {
    switch(action.type){
        case 'STORE_URL':
            return action.payload;
        case 'CLEAR_STORE':
            return '';
    }
    return state;
}

export default url;