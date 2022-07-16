import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'




// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDpRgirmx-KBS25GcS9f0ZBQQWRNmlkfU",
    authDomain: "uber-next-clone-569f4.firebaseapp.com",
    projectId: "uber-next-clone-569f4",
    storageBucket: "uber-next-clone-569f4.appspot.com",
    messagingSenderId: "319215407327",
    appId: "1:319215407327:web:37b04cad739fd57640196a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }