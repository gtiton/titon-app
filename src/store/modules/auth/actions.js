export function signInRequest(nameUser, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { nameUser, password },
  };
}

export function signInSuccess(token, driver) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, driver },
  };
}

export function signUpRequest(name, password, name_user, percentage, daily) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { name, password, name_user, percentage, daily },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
