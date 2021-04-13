import { takeEvery, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { actions as WeatherActions, ApiErrorAction } from './reducer';
import { PayloadAction } from 'redux-starter-kit';



export default function* watchApiError() {
  yield takeEvery(WeatherActions.weatherApiErrorReceived.type, apiErrorReceived);
}
