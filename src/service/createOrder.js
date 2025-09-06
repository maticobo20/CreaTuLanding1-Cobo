import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';

export const createOrder = async (orderData) => {
  try {
    const ordersRef = collection(db, 'orders');
    const orderWithDate = {
      ...orderData,
      date: serverTimestamp()
    };
    const docRef = await addDoc(ordersRef, orderWithDate);
    return docRef.id;
  } catch (error) {
    console.error('Error creando la orden:', error);
    throw error;
  }
};
