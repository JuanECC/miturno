// Importamos las funciones necesarias de Firebase desde la web
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// TU CONFIGURACIÓN (Copia esto desde la consola de Firebase)
// Se verá algo como apiKey: "AIzaSy...", authDomain: "...", etc.
const firebaseConfig = {
  apiKey: "AIzaSyCH-wO7qPYJwnlbh-bg6G7J6e1CXbGceOc",
  authDomain: "hospital-triage-demo.firebaseapp.com",
  projectId: "hospital-triage-demo",
  storageBucket: "hospital-triage-demo.firebasestorage.app",
  messagingSenderId: "676416385500",
  appId: "1:676416385500:web:564a1a20e4ce06ab0d5f19"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exportamos la base de datos para usarla en los otros archivos
export { db };