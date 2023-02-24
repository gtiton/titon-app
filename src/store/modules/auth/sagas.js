import { Alert } from 'react-native';
import { takeLatest, call, put, all, delay } from 'redux-saga/effects';
import { api } from '../../../services/api';
//import { toast } from "react-toastify";

//import history from "../../../services/history";

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { nameUser, password } = payload;

    const response = yield call(
      api.post,
      'driver/authenticate',
      {},
      {
        headers: {
          name_user: nameUser,
          password: password,
        },
      },
    );
    console.log('chamou ', response.data.dataResult);

    const { token, drivers } = response.data.dataResult;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield delay(1500);

    yield put(signInSuccess(token, drivers));

    history.push('/dashboard');
  } catch (err) {
    yield put(signFailure());
    // Alert.alert(
    //   'Falha na autenticação',
    //   'Houve um erro no login, verifique seus dados',
    // );
  }
}

export function* signUp({ payload }) {
  try {
    const { name, password, name_user, percentage, daily } = payload;

    yield call(api.post, 'driver/register', {
      name,
      name_user: 'teste',
      password,
      percentage: 0,
      daily: 0,
    });

    //history.push("/");
  } catch (err) {
    Alert.alert(
      'Falha no cadastro',
      'Houve um erro no cadastro, verifique seus dados',
    );
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  //history.push("/");
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
