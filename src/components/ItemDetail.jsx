
function ItemDetail({ item }) {
  if (!item) return <div>No hay información del producto.</div>;

  return (
    <div className="item-detail">
      <img src={item.img} alt={item.title} className="item-detail-img" />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <span className="item-detail-price">${item.price}</span>
    </div>
  );
}

export default ItemDetail;

