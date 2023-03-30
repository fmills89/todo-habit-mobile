import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: "todo-habits-app.firebaseapp.com",
  projectId: "todo-habits-app",
  storageBucket: "todo-habits-app.appspot.com",
  messagingSenderId: "951460963906",
  appId: "1:951460963906:web:b2e9d7fbde5599a89e6fdb",
};

// initialize firebase
const app = initializeApp(firebaseConfig);

// initialize cloud firestore
export const db = getFirestore(app);
