export interface ProductsInterface {
  id: number
  image: string
  title: string
  description: string
  price: number
}

export const products: ProductsInterface[] = [
  {
    id: 1,
    image: 'https://picsum.photos/200',
    title: 'Producto 1',
    description: 'Desc 1',
    price: 10,
  },
  {
    id: 2,
    image: 'https://picsum.photos/200',
    title: 'Producto 2',
    description: 'Desc 2',
    price: 20,
  },
  {
    id: 3,
    image: 'https://picsum.photos/200',
    title: 'Producto 3',
    description: 'Desc 3',
    price: 30,
  },
]
