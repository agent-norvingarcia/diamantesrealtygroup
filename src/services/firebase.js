import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  onSnapshot,
  setDoc,
  updateDoc,
} from 'firebase/firestore'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export const loginAdmin = (email, password) => signInWithEmailAndPassword(auth, email, password)
export const logoutAdmin = () => signOut(auth)
export const watchAuth = (callback) => onAuthStateChanged(auth, callback)

export const subscribePropiedades = (callback) => {
  const refCollection = collection(db, 'propiedades')
  return onSnapshot(refCollection, (snapshot) => {
    callback(snapshot.docs.map((item) => ({ id: item.id, ...item.data() })))
  })
}

export const getPropiedades = async () => {
  const snapshot = await getDocs(collection(db, 'propiedades'))
  return snapshot.docs.map((item) => ({ id: item.id, ...item.data() }))
}

export const getPropiedad = async (id) => {
  const snapshot = await getDoc(doc(db, 'propiedades', id))
  return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null
}

export const createPropiedad = async (payload) => addDoc(collection(db, 'propiedades'), payload)

export const editPropiedad = async (id, payload) => updateDoc(doc(db, 'propiedades', id), payload)

export const removePropiedad = async (id) => deleteDoc(doc(db, 'propiedades', id))

export const uploadPropiedadImage = async (file) => {
  const path = `propiedades/${Date.now()}-${file.name}`
  const storageRef = ref(storage, path)
  const uploaded = await uploadBytes(storageRef, file)
  return getDownloadURL(uploaded.ref)
}

export const getPerfil = async () => {
  const snapshot = await getDoc(doc(db, 'perfil', 'norvin'))
  return snapshot.exists() ? snapshot.data() : null
}

export const savePerfil = async (payload) => {
  await setDoc(doc(db, 'perfil', 'norvin'), payload, { merge: true })
}
