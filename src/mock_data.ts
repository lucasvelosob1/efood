// src/mock_data.ts
import { Restaurant } from './models/Restaurant'

export const mockRestaurants: Restaurant[] = [
  {
    id: 1,
    titulo: 'La Dolce Vita',
    destacado: true,
    tipo: 'Italiana',
    avaliacao: 4.8,
    descricao:
      'A La Dolce Vita é uma cantina italiana autêntica que serve massas frescas, pizzas no forno a lenha e uma seleção de vinhos finos. Um ambiente aconchegante para toda a família.',
    capa: '../../assets/pizza.png'
  },
  {
    id: 2,
    titulo: 'Sushi Master',
    destacado: false,
    tipo: 'Japonesa',
    avaliacao: 4.9,
    descricao:
      'O melhor da culinária japonesa na sua cidade. Experimente nossos combinados, temakis e pratos quentes. Qualidade e frescor que você só encontra aqui.',
    capa: '../../assets/sushi.png'
  },
  {
    id: 3,
    titulo: 'Hamburguer Heaven',
    destacado: false,
    tipo: 'Fast-food',
    avaliacao: 4.5,
    descricao:
      'Hambúrgueres artesanais feitos com ingredientes selecionados. Do clássico cheeseburger ao vegetariano, temos opções para todos os gostos.',
    capa: '../../assets/hamburguer.png'
  }

]