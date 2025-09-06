import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../service/firebase';
import ItemDetail from "./ItemDetail";
import LoaderComponent from "./LoaderComponent";
import { useCart } from '../context/CartContext';


export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  const { addItem } = useCart();

  useEffect(() => {
    const docRef = doc(db, 'productos', id);
    getDoc(docRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          setItem({ id: docSnap.id, ...docSnap.data() });
        } else {
          setItem(undefined);
        }
      })
      .catch((error) => {
        setItem(undefined);
        console.error(error);
      });
  }, [id]);

  if (item === undefined) {
    return <div>Producto no encontrado.</div>;
  }
  if (!item) {
    return <LoaderComponent />;
  }

  return <ItemDetail item={item} handleAddToCart={addItem} />;
};

export default ItemDetailContainer;
