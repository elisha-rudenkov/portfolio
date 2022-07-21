import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import { MotionPlugin } from '@vueuse/motion'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAik5d1l0VQKQ9COH_ktUl8pg0IQBRn_oU",
  authDomain: "portfolio-bae20.firebaseapp.com",
  projectId: "portfolio-bae20",
  storageBucket: "portfolio-bae20.appspot.com",
  messagingSenderId: "532525719573",
  appId: "1:532525719573:web:799c275c4a16b0fac8ee1c",
  measurementId: "G-WWDJ5W72LS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createApp(App).use(store).use(router).use(MotionPlugin).mount('#app')
