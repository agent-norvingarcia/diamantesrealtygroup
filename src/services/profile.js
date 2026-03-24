import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from './firebase'

const profileDocRef = doc(db, 'perfil', 'norvin')

export const getProfile = async () => {
  const snapshot = await getDoc(profileDocRef)
  return snapshot.exists() ? snapshot.data() : null
}

export const saveProfile = async (data) => {
  await setDoc(profileDocRef, data, { merge: true })
}
