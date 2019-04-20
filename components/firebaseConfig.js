import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyC_qh-vistR3BZh_CZS7YeNXYtC645UDPo",
  authDomain: "automacaohotelcristal.firebaseapp.com",
  databaseURL: "https://automacaohotelcristal.firebaseio.com",
  projectId: "automacaohotelcristal",
  storageBucket: "automacaohotelcristal.appspot.com",
  messagingSenderId: "356878374392",
};

export const firebaseApp =firebase.initializeApp(firebaseConfig);
