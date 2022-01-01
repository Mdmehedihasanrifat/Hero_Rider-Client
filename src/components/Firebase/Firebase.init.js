import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";
import {getAnalytics} from "firebase/analytics";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}


export default initializeAuthentication;
