import { addDoc, collection, getDocs, orderBy, query, serverTimestamp } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { db, storage } from './firebase'

const collectionRef = collection(db, 'propiedades')

export async function fetchProperties() {
  const q = query(collectionRef, orderBy('createdAt', 'desc'))
  const snapshot = await getDocs(q)
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
}

export async function createProperty(formData) {
  const payload = { ...formData }

  if (formData.imageFile) {
    const imageRef = ref(storage, `properties/${Date.now()}-${formData.imageFile.name}`)
    await uploadBytes(imageRef, formData.imageFile)
    payload.imageUrl = await getDownloadURL(imageRef)
  }

  delete payload.imageFile

  await addDoc(collectionRef, {
    ...payload,
    price: Number(payload.price),
    lat: Number(payload.lat),
    lng: Number(payload.lng),
    createdAt: serverTimestamp()
  })
}
