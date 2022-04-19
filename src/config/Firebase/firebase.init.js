import { initializeApp } from "firebase/app";

import firebaseConfig from "./fiebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;