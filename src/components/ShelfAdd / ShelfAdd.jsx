import { useDispatch, useSelector } from "react-redux";



function ShelfAdd() {

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
            
            ></input>
            <input 
            type="text"
            placeholder="image url"
            ></input>
            <button type="submit">Add item</button>
        </form>
        </>
    );
}

export default ShelfAdd;