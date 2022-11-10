import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* deleteItem(action) {
    try{
        yield axios.delete(`/api/shelf/${action.payload}`) // payload is item id
    } catch (error) {
        console.log('error in delete SAGA', error);
    }

}

function* deleteItemSaga() {
    yield takeEvery('DELETE_ITEM', deleteItem);
}

export default deleteItemSaga;