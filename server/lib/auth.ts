import { UserInfo } from './../../utils/types/user';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { firebaseAuth } from "./firebase";

export const register = async (form: HTMLFormElement) => {
  const user = createUserWithEmailAndPassword(
    firebaseAuth,
    form.email,
    form.password
  )
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // commit to store
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  return user;
};

export const login = async (form: HTMLFormElement) => {
  const user = await signInWithEmailAndPassword(firebaseAuth, form.email, form.password)
    .then((userCredential) => {
      const user = userCredential.user
      const userInfo = {
        email: user.email, 
        name: user.displayName, 
        id: 'asdasd',
      } as UserInfo

      return {status: 'success', userInfo}
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return {status: 'error', errorCode}
    });
    return user
};
