import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* addItem(action) {
    try{ 
        yield axios.post('/api/shelf', action.payload)


    } catch (error) {
        console.log('error in add SAGA', error);
    }
}

function* addItemSaga() {
    yield takeEvery('ADD_ITEM', addItem);
}

export default addItemSaga;