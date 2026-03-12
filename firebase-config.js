// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics"; // Opcional, solo si usas analytics

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-R4RFghslHzXPao_Nh2jVjZxDjJh0FuM",
  authDomain: "hospital-triage-demo-a290f.firebaseapp.com",
  projectId: "hospital-triage-demo-a290f",
  storageBucket: "hospital-triage-demo-a290f.firebasestorage.app",
  messagingSenderId: "889182147534",
  appId: "1:889182147534:web:549955eb7c42838043119f",
  measurementId: "G-XBCG94D613"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore (la base de datos)
const db = getFirestore(app);

// Opcional: Inicializar Analytics (solo si lo necesitas)
// const analytics = getAnalytics(app);

// Exportamos la base de datos para usarla en todos los archivos
export { db };