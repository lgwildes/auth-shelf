const description = (state='', action) => {
switch (action.type) {
    case 'STORE_DESC':
        return action.payload;
    case 'CLEAR_STORE': 
        return '';
}
return state;

};

export default description;