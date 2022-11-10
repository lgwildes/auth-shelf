function ShelfItem({ item }) {
    
    return (
        <li>
            <img src={item.image_url} alt="" />
            <p>{item.description}</p>
        </li>
    );
}

export default ShelfItem;