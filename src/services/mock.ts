import sushiImg from '../assets/sushi.png'
import pizzaImg from '../assets/pizza.png'
import massaImg from '../assets/massa.png'

export type Product = {
  id: number;
  foto: string;
  nome: string;
  descricao: string;
  descricaoDetalhada: string;
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
    descricao: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    capa: sushiImg,
    cardapio: [
      {
        id: 1,
        foto: sushiImg,
        nome: 'Combinado Especial',
        descricao: '30 peças variadas selecionadas pelo chef.',
        descricaoDetalhada: 'Descubra uma explosão de sabores com o nosso Combinado Especial, cuidadosamente preparado por nossos chefs para proporcionar uma verdadeira viagem gastronômica ao Japão. São 30 peças variadas, que combinam o frescor do sushi e sashimi com a criatividade da culinária oriental.',
        preco: 120.0,
        porcao: 'Serve 2 pessoas',
      },
      {
        id: 2,
        foto: sushiImg,
        nome: 'Combinado Especial',
        descricao: '30 peças variadas selecionadas pelo chef.',
        descricaoDetalhada: 'Descubra uma explosão de sabores com o nosso Combinado Especial, cuidadosamente preparado por nossos chefs para proporcionar uma verdadeira viagem gastronômica ao Japão. São 30 peças variadas, que combinam o frescor do sushi e sashimi com a criatividade da culinária oriental.',
        preco: 120.0,
        porcao: 'Serve 2 pessoas',
      },
            {
        id: 3,
        foto: sushiImg,
        nome: 'Combinado Especial',
        descricao: '30 peças variadas selecionadas pelo chef.',
        descricaoDetalhada: 'Descubra uma explosão de sabores com o nosso Combinado Especial, cuidadosamente preparado por nossos chefs para proporcionar uma verdadeira viagem gastronômica ao Japão. São 30 peças variadas, que combinam o frescor do sushi e sashimi com a criatividade da culinária oriental.',
        preco: 120.0,
        porcao: 'Serve 2 pessoas',
      },
      {
        id: 4,
        foto: sushiImg,
        nome: 'Combinado Especial',
        descricao: '30 peças variadas selecionadas pelo chef.',
        descricaoDetalhada: 'Descubra uma explosão de sabores com o nosso Combinado Especial, cuidadosamente preparado por nossos chefs para proporcionar uma verdadeira viagem gastronômica ao Japão. São 30 peças variadas, que combinam o frescor do sushi e sashimi com a criatividade da culinária oriental.',
        preco: 120.0,
        porcao: 'Serve 2 pessoas',
      },
            {
        id: 5,
        foto: sushiImg,
        nome: 'Combinado Especial',
        descricao: '30 peças variadas selecionadas pelo chef.',
        descricaoDetalhada: 'Descubra uma explosão de sabores com o nosso Combinado Especial, cuidadosamente preparado por nossos chefs para proporcionar uma verdadeira viagem gastronômica ao Japão. São 30 peças variadas, que combinam o frescor do sushi e sashimi com a criatividade da culinária oriental.',
        preco: 120.0,
        porcao: 'Serve 2 pessoas',
      },
      {
        id: 6,
        foto: sushiImg,
        nome: 'Combinado Especial',
        descricao: '30 peças variadas selecionadas pelo chef.',
        descricaoDetalhada: 'Descubra uma explosão de sabores com o nosso Combinado Especial, cuidadosamente preparado por nossos chefs para proporcionar uma verdadeira viagem gastronômica ao Japão. São 30 peças variadas, que combinam o frescor do sushi e sashimi com a criatividade da culinária oriental.',
        preco: 120.0,
        porcao: 'Serve 2 pessoas',
      },
    ]
  },
    {
    id: 2,
    titulo: 'La Dolce Vita Trattoria',
    destacado: false,
    tipo: 'Italiana',
    avaliacao: 4.6,
    descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    capa: massaImg,
    cardapio: [
      {
        id: 7,
        foto: pizzaImg,
        nome: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        descricaoDetalhada: 'A pizza Marguerita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
        preco: 60.9,
        porcao: 'Serve de 2 a 3 pessoas',
      },
      {
        id: 8,
        foto: pizzaImg,
        nome: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        descricaoDetalhada: 'A pizza Marguerita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
        preco: 60.9,
        porcao: 'Serve de 2 a 3 pessoas',
      },
      {
        id: 9,
        foto: pizzaImg,
        nome: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        descricaoDetalhada: 'A pizza Marguerita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
        preco: 60.9,
        porcao: 'Serve de 2 a 3 pessoas',
      },
      {
        id: 10,
        foto: pizzaImg,
        nome: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        descricaoDetalhada: 'A pizza Marguerita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
        preco: 60.9,
        porcao: 'Serve de 2 a 3 pessoas',
      },
      {
        id: 11,
        foto: pizzaImg,
        nome: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        descricaoDetalhada: 'A pizza Marguerita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
        preco: 60.9,
        porcao: 'Serve de 2 a 3 pessoas',
      },
      {
        id: 12,
        foto: pizzaImg,
        nome: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        descricaoDetalhada: 'A pizza Marguerita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
        preco: 60.9,
        porcao: 'Serve de 2 a 3 pessoas',
      },
    ]
  },
  {
    id: 3,
    titulo: 'La Dolce Vita Trattoria',
    destacado: false,
    tipo: 'Italiana',
    avaliacao: 4.6,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    capa: massaImg,
    cardapio: [
      {
        id: 13,
        foto: pizzaImg,
        nome: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        descricaoDetalhada: 'A pizza Marguerita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
        preco: 60.9,
        porcao: 'Serve de 2 a 3 pessoas',
      },
      {
        id: 14,
        foto: pizzaImg,
        nome: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        descricaoDetalhada: 'A pizza Marguerita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
        preco: 60.9,
        porcao: 'Serve de 2 a 3 pessoas',
      },
      {
        id: 15,
        foto: pizzaImg,
        nome: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        descricaoDetalhada: 'A pizza Marguerita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
        preco: 60.9,
        porcao: 'Serve de 2 a 3 pessoas',
      },
      {
        id: 16,
        foto: pizzaImg,
        nome: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        descricaoDetalhada: 'A pizza Marguerita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
        preco: 60.9,
        porcao: 'Serve de 2 a 3 pessoas',
      },
      {
        id: 17,
        foto: pizzaImg,
        nome: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        descricaoDetalhada: 'A pizza Marguerita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
        preco: 60.9,
        porcao: 'Serve de 2 a 3 pessoas',
      },
      {
        id: 17,
        foto: pizzaImg,
        nome: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        descricaoDetalhada: 'A pizza Marguerita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
        preco: 60.9,
        porcao: 'Serve de 2 a 3 pessoas',
      },
    ]
  },
  {
    id: 4,
    titulo: 'La Dolce Vita Trattoria',
    destacado: false,
    tipo: 'Italiana',
    avaliacao: 4.6,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    capa: massaImg,
    cardapio: [
      {
        id: 19,
        foto: pizzaImg,
        nome: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        descricaoDetalhada: 'A pizza Marguerita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
        preco: 60.9,
        porcao: 'Serve de 2 a 3 pessoas',
      },
      {
        id: 20,
        foto: pizzaImg,
        nome: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        descricaoDetalhada: 'A pizza Marguerita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
        preco: 60.9,
        porcao: 'Serve de 2 a 3 pessoas',
      },
      {
        id: 21,
        foto: pizzaImg,
        nome: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        descricaoDetalhada: 'A pizza Marguerita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
        preco: 60.9,
        porcao: 'Serve de 2 a 3 pessoas',
      },
      {
        id: 22,
        foto: pizzaImg,
        nome: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        descricaoDetalhada: 'A pizza Marguerita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
        preco: 60.9,
        porcao: 'Serve de 2 a 3 pessoas',
      },
      {
        id: 23,
        foto: pizzaImg,
        nome: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        descricaoDetalhada: 'A pizza Marguerita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
        preco: 60.9,
        porcao: 'Serve de 2 a 3 pessoas',
      },
      {
        id: 24,
        foto: pizzaImg,
        nome: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        descricaoDetalhada: 'A pizza Marguerita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
        preco: 60.9,
        porcao: 'Serve de 2 a 3 pessoas',
      },
    ]
  },
  {
    id: 5,
    titulo: 'La Dolce Vita Trattoria',
    destacado: false,
    tipo: 'Italiana',
    avaliacao: 4.6,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    capa: massaImg,
    cardapio: [
      {
        id: 25,
        foto: pizzaImg,
        nome: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        descricaoDetalhada: 'A pizza Marguerita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
        preco: 60.9,
        porcao: 'Serve de 2 a 3 pessoas',
      },
      {
        id: 26,
        foto: pizzaImg,
        nome: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        descricaoDetalhada: 'A pizza Marguerita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
        preco: 60.9,
        porcao: 'Serve de 2 a 3 pessoas',
      },
      {
        id: 27,
        foto: pizzaImg,
        nome: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        descricaoDetalhada: 'A pizza Marguerita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
        preco: 60.9,
        porcao: 'Serve de 2 a 3 pessoas',
      },
      {
        id: 28,
        foto: pizzaImg,
        nome: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        descricaoDetalhada: 'A pizza Marguerita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
        preco: 60.9,
        porcao: 'Serve de 2 a 3 pessoas',
      },
      {
        id: 29,
        foto: pizzaImg,
        nome: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        descricaoDetalhada: 'A pizza Marguerita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
        preco: 60.9,
        porcao: 'Serve de 2 a 3 pessoas',
      },
      {
        id: 30,
        foto: pizzaImg,
        nome: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        descricaoDetalhada: 'A pizza Marguerita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
        preco: 60.9,
        porcao: 'Serve de 2 a 3 pessoas',
      },
    ]
  },
  {
    id: 6,
    titulo: 'La Dolce Vita Trattoria',
    destacado: false,
    tipo: 'Italiana',
    avaliacao: 4.6,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    capa: massaImg,
    cardapio: [
      {
        id: 31,
        foto: pizzaImg,
        nome: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        descricaoDetalhada: 'A pizza Marguerita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
        preco: 60.9,
        porcao: 'Serve de 2 a 3 pessoas',
      },
      {
        id: 32,
        foto: pizzaImg,
        nome: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        descricaoDetalhada: 'A pizza Marguerita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
        preco: 60.9,
        porcao: 'Serve de 2 a 3 pessoas',
      },
      {
        id: 33,
        foto: pizzaImg,
        nome: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        descricaoDetalhada: 'A pizza Marguerita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
        preco: 60.9,
        porcao: 'Serve de 2 a 3 pessoas',
      },
      {
        id: 34,
        foto: pizzaImg,
        nome: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        descricaoDetalhada: 'A pizza Marguerita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
        preco: 60.9,
        porcao: 'Serve de 2 a 3 pessoas',
      },
      {
        id: 35,
        foto: pizzaImg,
        nome: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        descricaoDetalhada: 'A pizza Marguerita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
        preco: 60.9,
        porcao: 'Serve de 2 a 3 pessoas',
      },
      {
        id: 36,
        foto: pizzaImg,
        nome: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        descricaoDetalhada: 'A pizza Marguerita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
        preco: 60.9,
        porcao: 'Serve de 2 a 3 pessoas',
      },
    ]
  },
]

export default restaurantes