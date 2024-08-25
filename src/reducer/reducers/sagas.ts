import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from './dataReducer';
import { PortfolioType } from '../../Types';

const fetchDataFromApi = async () => {
  const response = await axios.get('https://admin.naxa.com.np/api/projects');
  return response.data;
};

function* fetchDataSaga():Generator<any, void, any> {
  try {
    const data = yield call(fetchDataFromApi);
    yield put(fetchDataSuccess(data));
  } catch (error: any) {
    yield put(fetchDataFailure(error.message));
  }
}

export default function* rootSaga() {
  yield takeLatest(fetchDataRequest.type, fetchDataSaga);
}