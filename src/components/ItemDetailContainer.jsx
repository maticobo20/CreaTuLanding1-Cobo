import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../mock/AsyncMock";
import ItemDetail from "./ItemDetail";


export const ItemDetailContainer = ({ handleAddToCart }) => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getItem(id).then((data) => {
      setItem(data);
    });
  }, [id]);

  if (!item) {
    return <p>Cargando detalles del producto...</p>;
  }

  return <ItemDetail item={item} handleAddToCart={handleAddToCart} />;
};

export default ItemDetailContainer;
