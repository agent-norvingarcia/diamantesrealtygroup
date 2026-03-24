import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, updateDoc } from 'firebase/firestore'
import { db } from './firebase'

const propiedadesRef = collection(db, 'propiedades')

export const addProperty = async (data) => {
  return await addDoc(propiedadesRef, data)
}

export const getProperties = async () => {
  const snapshot = await getDocs(propiedadesRef)
  return snapshot.docs.map((propertyDoc) => ({ id: propertyDoc.id, ...propertyDoc.data() }))
}

export const subscribeProperties = (callback) => {
  return onSnapshot(propiedadesRef, (snapshot) => {
    callback(snapshot.docs.map((propertyDoc) => ({ id: propertyDoc.id, ...propertyDoc.data() })))
  })
}

export const getProperty = async (id) => {
  const snapshot = await getDoc(doc(db, 'propiedades', id))
  return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null
}

export const updateProperty = async (id, data) => {
  return await updateDoc(doc(db, 'propiedades', id), data)
}

export const deleteProperty = async (id) => {
  return await deleteDoc(doc(db, 'propiedades', id))
}
