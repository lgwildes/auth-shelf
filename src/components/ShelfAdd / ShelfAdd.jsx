import { useDispatch, useSelector } from "react-redux";



function ShelfAdd() {
    const dispatch = useDispatch();
    const desc = useSelector(store=>store.desc);
    const url = useSelector(store=>store.url);

    const submitForm = (e) => {
        e.preventDefault();
        
    }
    return (
        <>
        <h1>ShelfAdd</h1>
        <form onSubmit={submitForm}>
            <input
            type="text"
            Placeholder="Description"
            onChange={(e)=>{dispatch({type:'STORE_DESC', payload: e.target.value})}}
            value={desc}
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