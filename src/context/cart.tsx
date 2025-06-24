// src/context/cart.tsx
import { createContext, useReducer, useContext } from 'react';
import { Product } from '../services/mock';

// Tipos para o nosso estado e ações
type CartState = {
  items: Product[];
  isOpen: boolean;
};

type Action =
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: number } // id do produto
  | { type: 'OPEN_CART' }
  | { type: 'CLOSE_CART' };

// Estado inicial
const initialState: CartState = {
  items: [],
  isOpen: false,
};

// O Reducer: a lógica pura de como o estado muda
const cartReducer = (state: CartState, action: Action): CartState => {
  switch (action.type) {
    case 'ADD_ITEM':
      // Verifica se o item já existe para evitar duplicatas, se quiser
      // Por simplicidade, vamos permitir duplicatas como no iFood
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case 'OPEN_CART':
      return {
        ...state,
        isOpen: true,
      };
    case 'CLOSE_CART':
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};

// Criando o Contexto
const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<Action>;
} | undefined>(undefined);

// O Provedor do Contexto
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook customizado para facilitar o uso do contexto
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};