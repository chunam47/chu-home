import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjSX4IcwM08DOlRtdULibpkK9FJHTC5GA",
  authDomain: "todo-list-f5f47.firebaseapp.com",
  projectId: "todo-list-f5f47",
  storageBucket: "todo-list-f5f47.appspot.com",
  messagingSenderId: "243783710672",
  appId: "1:243783710672:web:294d8ba2ee4ee0829debd5",
  measurementId: "G-F2RXEY0DV1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, analytics };
