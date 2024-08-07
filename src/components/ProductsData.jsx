import nikeRed from '../assets/productview/nike-red-shoe.svg'

const ProductsData = [
  {
    id: '1',
    name: 'Tênis Nike Revolution 6 Next Nature Masculino',
    reference: 'REF123456',
    stars: 4.5,
    rating: 120,
    category: 'Casual',
    brand: 'Nike',
    price: 280,
    priceDiscount: 240,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    images: [
      { src: nikeRed },
      { src: nikeRed },
      { src: nikeRed },
      { src: nikeRed },
      { src: nikeRed }
    ],
    sizeOptions: [ '39', '40', '41', '42', '43' ],
    colorOptions: [ '#6FEEFF', '#FF6969', '#5E5E5E', '#6D70B7']
  },
  {
    id: '2',
    name: 'Produto 1',
    category: 'Category 1',
    price: '100',
    priceDiscount: 80,
    description: 'Descrição do Produto 1',
    image: nikeRed,
  },
  {
    id: '3',
    name: 'Produto 1',
    category: 'Category 1',
    price: '100',
    priceDiscount: 80,
    description: 'Descrição do Produto 1',
    image: nikeRed,
  },
  {
    id: '4',
    name: 'Produto 1',
    category: 'Category 1',
    price: '100',
    priceDiscount: 80,
    description: 'Descrição do Produto 1',
    image: nikeRed,
  },
  {
    id: '5',
    name: 'Produto 1',
    category: 'Category 1',
    price: '100',
    priceDiscount: 80,
    description: 'Descrição do Produto 1',
    image: nikeRed,
  },
]
 
export default ProductsData;