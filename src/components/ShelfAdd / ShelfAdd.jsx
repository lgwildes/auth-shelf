import { useDispatch, useSelector } from "react-redux";



function ShelfAdd() {
    const dispatch = useDispatch();
    const description = useSelector(store=>store.description);
    const url = useSelector(store=>store.url);

    const submitForm = (e) => {
        e.preventDefault();
        console.log('desc is ', description);
        dispatch({
            type: 'ADD_ITEM',
            payload: {
                description: description,
                url: url
            }
        })
        
    }
    return (
        <>
        <h1>ShelfAdd</h1>
        <form onSubmit={submitForm}>
            <input
            type="text"
            placeholder="Description"
            onChange={(e)=>{dispatch({type:'STORE_DESC', payload: e.target.value})}}
            value={description}
            ></input>
            <input 
            type="text"
            placeholder="image url"
            onChange={(e)=>{dispatch({type:'STORE_URL', payload: e.target.value})}}
            value={url}
            ></input>
            <button type="submit">Add item</button>
        </form>
        </>
    );
}

export default ShelfAdd;