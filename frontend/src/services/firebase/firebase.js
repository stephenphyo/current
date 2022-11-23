import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDWaGAvbeG9p7SkRqKFHTsRytKDXEKtJHc",
  authDomain: "web-001-authentication.firebaseapp.com",
  projectId: "web-001-authentication",
  storageBucket: "web-001-authentication.appspot.com",
  messagingSenderId: "365092672609",
  appId: "1:365092672609:web:617a2eaaf366bc75b4c620",
  measurementId: "G-4JKRZ0CWGR"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export default app;