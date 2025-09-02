import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../mock/AsyncMock";
import ItemDetail from "./ItemDetail";
import LoaderComponent from "./LoaderComponent";
import { useCart } from '../context/CartContext';


export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  const { addItem } = useCart();

  useEffect(() => {
    getItem(id).then((data) => {
      setItem(data);
    });
  }, [id]);

  if (!item) {
    return <LoaderComponent />;
  }

  return <ItemDetail item={item} handleAddToCart={addItem} />;
};

export default ItemDetailContainer;
