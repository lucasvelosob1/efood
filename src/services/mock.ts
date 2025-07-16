export type Product = {
  id: number;
  foto: string;
  nome: string;
  descricao: string;
  descricaoDetalhada: string; // Mantemos para o Modal
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