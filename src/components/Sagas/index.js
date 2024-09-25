

import axios from 'axios';
import { put, takeLatest, all } from 'redux-saga/effects';


function* fetchProducts() {
  const json = yield axios.get('http://localhost:4500/feed/')
        .then(response => response.data )   
  yield put({ type: "FETCH_PRODUCTS_SUCCESS", payload: json });
}

function* actionWatcher() {
	
     yield takeLatest('FETCH_PRODUCTS_BEGIN', fetchProducts)
}

export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}