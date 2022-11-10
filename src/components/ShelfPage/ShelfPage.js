import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShelfItem from '../ShelfItem/ShelfItem';

function ShelfPage() {

  const dispatch = useDispatch();
  const shelfReducer = useSelector(store => store.shelfReducer);


  useEffect(() => {
    dispatch({
      type: 'FETCH_ITEMS'
    });
  }, []);

  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>

      {shelfReducer.length > 0 &&
        <ul>
          {shelfReducer.map(item =>
            <ShelfItem
              item={item}
              key={item.id}
            />
          )}
        </ul>
      }
    </div>
  );
}

export default ShelfPage;
