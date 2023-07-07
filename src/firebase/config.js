import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBavCGwGs2-m4xzRmceKomEL6AOfRzFRZo",
  authDomain: "motoverse-95dca.firebaseapp.com",
  projectId: "motoverse-95dca",
  storageBucket: "motoverse-95dca.appspot.com",
  messagingSenderId: "985824162110",
  appId: "1:985824162110:web:d9c0023c0963c829aa3c6f"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };