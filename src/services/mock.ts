import sushiImg from '../assets/sushi.png';
import pizzaImg from '../assets/pizza.png';
import burgerImg from '../assets/hamburguer.png';
import pizzaDoceImg from '../assets/pizza-doce.png';

export type Product = {
  id: number;
  foto: string;
  nome: string;
  descricao: string;
  preco: number;
  porcao: string;
};

export type Restaurant = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: Product[];
};

const restaurantes: Restaurant[] = [
  {
    id: 1,
    titulo: 'Hioki Sushi',
    destacado: true,
    tipo: 'Japonesa',
    avaliacao: 4.9,
    descricao: 'Peça já o melhor da culinária japonesa no conforto da sua casa!',
    capa: sushiImg,
    cardapio: [
      {
        id: 1,
        foto: sushiImg,
        nome: 'Sushi',
        descricao: '30 peças variadas com os melhores peixes frescos da casa.',
        preco: 100.99,
        porcao: 'Serve de 2 a 3 pessoas',
      },
      {
        id: 2,
        foto: sushiImg,
        nome: 'Sushi',
        descricao: '30 peças variadas com os melhores peixes frescos da casa.',
        preco: 100.99,
        porcao: 'Serve de 2 a 3 pessoas',
      },
    ]
  },
  {
    id: 2,
    titulo: 'La Dolce Vita Trattoria',
    destacado: false,
    tipo: 'Italiana',
    avaliacao: 4.7,
    descricao: 'A autêntica cozinha italiana até você! Massas e pizzas.',
    capa: pizzaImg,
    cardapio: [
      {
        id: 3,
        foto: pizzaImg,
        nome: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
        preco: 60.9,
        porcao: 'Serve de 2 a 3 pessoas',
      },
      {
        id: 4,
        foto: pizzaImg,
        nome: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
        preco: 60.9,
        porcao: 'Serve de 2 a 3 pessoas',
      },
      {
        id: 5,
        foto: pizzaImg,
        nome: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
        preco: 60.9,
        porcao: 'Serve de 2 a 3 pessoas',
      },
      {
        id: 6,
        foto: pizzaImg,
        nome: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
        preco: 60.9,
        porcao: 'Serve de 2 a 3 pessoas',
      },

    ]
  }
];

export default restaurantes;