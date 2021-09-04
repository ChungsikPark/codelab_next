// 파이어베이스와 사용하고자 하는 기능을 불러오기
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

// 아이디나 키 값은 외부로 노출이 되면 안되기 때문에, .env.local 파일을 생성하여 따로 관리
// .env 파일 내의 값은 process.env 라는 자바스크립트 내장 객체 기능을 사용하여 불러오기
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// 파이어베이스의 앱 초기화는 처음에 한 번만 진행하면 되기에, 조건문으로 작성
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// 앱 초기화된 파이어베이스를 내보내기
export default firebase;
