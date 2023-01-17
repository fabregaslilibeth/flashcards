import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
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
  await signInWithEmailAndPassword(firebaseAuth, form.email, form.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // commit to store
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};
