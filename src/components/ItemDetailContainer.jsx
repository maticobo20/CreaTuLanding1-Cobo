import { useState, useEffect } from "react";
import { getItem } from "../mock/AsyncMock";
import ItemDetail from "./ItemDetail";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    getItem().then((data) => {
      setItem(data);
    });
  }, []);

  if (!item) {
    return <p>Cargando detalles del producto...</p>;
  }

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
