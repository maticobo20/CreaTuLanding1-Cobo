import React from 'react'
import Item from './Item'

const ItemList = ({ data, onAddToCart }) => {
    return (
        <div className="products-grid">
            {data.map((prod) => (
                <Item
                    key={prod.id}
                    id={prod.id}
                    name={prod.name}
                    price={prod.price}
                    img={prod.img}
                    stock={prod.stock}
                    onAddToCart={onAddToCart}
                />
            ))}
        </div>
    )
}

export default ItemList