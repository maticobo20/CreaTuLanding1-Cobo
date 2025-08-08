import React from 'react'
import Item from './Item'

const ItemList = ({ data, onAddToCart }) => {
    return (
        <div className="products-grid">
            {data.map((prod) => (
                <Item
                    key={prod.id}
                    name={prod.name}
                    price={prod.price}
                    img={prod.img}
                    onAddToCart={onAddToCart}
                />
            ))}
        </div>
    )
}

export default ItemList