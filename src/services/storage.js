import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from './firebase'

export const uploadImage = async (file) => {
  const storageRef = ref(storage, `propiedades/${file.name}`)
  await uploadBytes(storageRef, file)
  return await getDownloadURL(storageRef)
}
