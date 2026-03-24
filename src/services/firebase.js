import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyADW1jClPgNsEDBSmYcNUQrK7oP2ISX1wY',
  authDomain: 'agent-cd80a.firebaseapp.com',
  projectId: 'agent-cd80a',
  storageBucket: 'agent-cd80a.firebasestorage.app',
  messagingSenderId: '895233608037',
  appId: '1:895233608037:web:333142c59098fbef81798c'
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)
