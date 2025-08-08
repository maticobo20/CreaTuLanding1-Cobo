const productos = [
    {
        id: '01',
        name: 'Remera Human Made',
        price: 20000,
        description: 'Remera oversize <br/> 100% algodón <br/> Colores: Blanco y Negro',
        category: 'remeras',
        stock: 5,
        img: '../public/human.png',
        
    },
    {
        id: '02',
        name: 'Remera 11:11',
        price: 20000,
        description: 'Remera oversize <br/> 100% algodón <br/> Colores: Blanco y Negro',
        category: 'remeras',
        stock: 5,
        img: '../public/11.png',
        
    },
    {
        id: '03',
        name: 'Remera Born Wild',
        price: 20000,
        description: 'Remera oversize <br/> 100% algodón <br/> Colores: Blanco y Negro',
        category: 'remeras',
        stock: 5,
        img: '../public/pantera.png',
        
    }
]

export const getProductos = () => {
    let error = true
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            resolve(productos);
            
        }, 2000);
    });
};