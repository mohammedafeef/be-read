import { initializeApp } from "firebase/app";
import {firebaseConfig} from "../../service-account";
import {getFirestore} from "@firebase/firestore";
import {getAuth} from "@firebase/auth";

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);