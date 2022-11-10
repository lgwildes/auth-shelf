import { useSelector, useDispatch } from 'react-redux';


function ShelfItem({ item }) {
    const dispatch = useDispatch();
    const currentUser = useSelector(store => store.user)

    console.log('current user is ', currentUser);
    if (item.user_id === currentUser.id) {
        console.log(`IT'S A MATCH!!!!!!`)
        return (
            <li>
                <img src={item.image_url} alt="" />
                <p>{item.description}</p>
                <button onClick={() => {
                    dispatch({
                        type: 'DELETE_ITEM',
                        payload: item.id
                    }
                    )
                }}
                >DELETE</button>
            </li>
        )
    }

    else {
        return (
            <li>
                <img src={item.image_url} alt="" />
                <p>{item.description}</p>
            </li>
        );
    }

}

export default ShelfItem;