export const updateStock = (id, quantity) => {
  const prod = productos.find(p => p.id === id);
  if (prod && prod.stock >= quantity) {
    prod.stock -= quantity;
    return true;
  }
  return false;
};
const productos = [
    {
        id: '01',
        name: 'Remera Human Made',
        description: 'Remera oversize\n100% algodón\nColores: Blanco y Negro',
        category: 'remeras',
        stock: 5,
        price: 20000,
        img: '/human.png',
        
    },
    {
        id: '02',
        name: 'Remera 11:11',
        description: 'Remera oversize\n100% algodón\nColores: Blanco y Negro',
        category: 'remeras',
        stock: 5,
        price: 20000,
        img: '/11.png',
        
    },
    {
        id: '03',
        name: 'Remera Born Wild',
        description: 'Remera oversize\n100% algodón\nColores: Blanco y Negro',
        category: 'remeras',
        stock: 5,
        price: 20000,
        img: '/pantera.png',
        
    },
    {
        id: '04',
        name: 'Buzo Crewneck',
        description: 'Prenda estampada\nAlgodón rustico\nCalidad premium\nCorte oversize',
        category: 'buzos',
        stock: 5,
        price: 75000,
        img: '/buzo4vx.png',
        
    },
    {
        id: '05',
        name: 'Hoodie Joker\'s Delight',
        description: 'Prenda estampada\n100% algodón\nCalidad premium\nCorte oversize',
        category: 'buzos',
        stock: 5,
        price: 75000,
        img: '/buzo-calavera.png',
        
    },
    {
        id: '06',
        name: 'Hoodie The Present is Forever',
        description: '100% algodón\nPrenda estampada\nCalidad premium\nCorte oversize',
        category: 'buzos',
        stock: 5,
        price: 75000,
        img: '/buzo-hoodie.png',
        
    },
    {
        id: '07',
        name: 'Hoodie Department',
        description: '100% algodón\nPrenda estampada\nCalidad premium\nCorte oversize',
        category: 'buzos',
        stock: 5,
        price: 75000,
        img: '/buzo-depart.png',
        
    },
    {
        id: '08',
        name: 'Jogger - Gang',
        description: 'Algodón rustico\nPrenda estampada\nCalidad premium\nCorte oversize',
        category: 'pantalones',
        stock: 5,
        price: 70000,
        img: '/jogger.jpg',
        
    },
    {
        id: '09',
        name: 'Campera Puffer 4VX',
        description: 'Prenda estampada\nCalidad IMPORTADA\nCorte oversize',
        category: 'camperas',
        stock: 5,
        price: 250000,
        img: '/campera.png',
    }
]

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 1000);
  });
};

export const getItem = (id = '01') => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const item = productos.find(p => p.id === id);
      resolve(item);
    }, 1000);
  });
};
