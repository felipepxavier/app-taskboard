export function signInRequest(email, password, userMode) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password, userMode },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signInForgot(email) {
  return {
    type: '@auth/SIGN_IN_FORGOT',
    payload: { email },
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
