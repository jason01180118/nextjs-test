import { getFirestore, collection, addDoc, setDoc } from 'firebase/firestore';
import databaseTest from './firebase';

export default function addData() {
  try {
    const docRef = addDoc(collection(databaseTest(), 'users'), {
      first: 'Ada',
      last: 'Lovelace',
      born: 1815,
    });
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}
