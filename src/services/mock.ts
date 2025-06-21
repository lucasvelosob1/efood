// src/services/mock.ts

// 1. Definimos um "contrato" (um tipo) para dizer como um objeto Restaurante deve ser.
export type Restaurant = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string; // URL da imagem de capa
};

// 2. Criamos um array (uma lista) de objetos que seguem esse contrato.
const restaurantes: Restaurant[] = [
  {
    id: 1,
    titulo: 'Hioki Sushi',
    destacado: true,
    tipo: 'Japonesa',
    avaliacao: 4.9,
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.',
    capa: 'https://cdn.pixabay.com/photo/2017/10/15/11/41/sushi-2853382_1280.jpg',
  },
  {
    id: 2,
    titulo: 'La Dolce Vita Trattoria',
    destacado: false,
    tipo: 'Italiana',
    avaliacao: 4.7,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Massas caseiras, pizzas e sobremesas clássicas.',
    capa: 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg',
  },
  {
    id: 3,
    titulo: 'Burger Palace',
    destacado: false,
    tipo: 'Fast-food',
    avaliacao: 4.5,
    descricao:
      'Os melhores hambúrgueres artesanais da cidade. Ingredientes frescos, pão macio e um sabor inesquecível. Acompanha batatas fritas.',
    capa: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg',
  },
  {
    id: 4,
    titulo: 'Cantina da Nona',
    destacado: false,
    tipo: 'Italiana',
    avaliacao: 4.8,
    descricao:
      'Comida de vó com um toque gourmet. Aconchegante e saboroso, como um abraço em forma de prato. Venha provar nossa lasanha!',
    capa: 'https://cdn.pixabay.com/photo/2018/07/18/19/12/pasta-3547078_1280.jpg',
  },
];

// 3. Exportamos a lista para que outros arquivos possam importá-la.
export default restaurantes;