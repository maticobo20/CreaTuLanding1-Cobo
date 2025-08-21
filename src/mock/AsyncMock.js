const productos = [
    {
        id: '01',
        name: 'Remera Human Made',
        price: 20000,
        description: 'Remera oversize\n100% algodón\nColores: Blanco y Negro',
        category: 'remeras',
        stock: 5,
        img: '/human.png',
        
    },
    {
        id: '02',
        name: 'Remera 11:11',
        price: 20000,
        description: 'Remera oversize\n100% algodón\nColores: Blanco y Negro',
        category: 'remeras',
        stock: 5,
        img: '/11.png',
        
    },
    {
        id: '03',
        name: 'Remera Born Wild',
        price: 20000,
        description: 'Remera oversize\n100% algodón\nColores: Blanco y Negro',
        category: 'remeras',
        stock: 5,
        img: '/pantera.png',
        
    }
]

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};

export const getItem = (id = '01') => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const item = productos.find(p => p.id === id);
      resolve(item);
    }, 2000);
  });
};
