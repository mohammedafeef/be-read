import { initializeApp } from "firebase/app";
import {firebaseConfig} from "../../service-account";
import {getFirestore} from "@firebase/firestore";
import firebase from "firebase/compat";

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = firebase.storage().ref();
export const auth = firebase.auth();