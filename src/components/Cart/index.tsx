
import { useFormik } from 'formik';
import { useCart } from '../../context/cart';
import * as S from './styles';

const Cart = () => {
  const { state, dispatch } = useCart();

  const form = useFormik({
    initialValues: {
      fullName: '', address: '', city: '', zipCode: '', number: '', complement: '',
      cardName: '', cardNumber: '', cvv: '', expiresMonth: '', expiresYear: ''
    },
    onSubmit: (values) => {
      console.log('Pedido enviado com os dados:', values);
      dispatch({ type: 'CHANGE_STEP', payload: 'confirmed' });
    },
  });

  const calculateTotal = () => state.items.reduce((acc, item) => acc + item.preco, 0);
  const removeItem = (id: number) => dispatch({ type: 'REMOVE_ITEM', payload: id });

  const renderContent = () => {
    if (state.step === 'delivery') {
      return (
        <S.FormContainer onSubmit={form.handleSubmit}>
          <h4>Entrega</h4>
          <S.InputGroup>
            <S.Label htmlFor="fullName">Quem irá receber</S.Label>
            <S.Input id="fullName" name="fullName" type="text" onChange={form.handleChange} value={form.values.fullName} />
          </S.InputGroup>
          <S.InputGroup>
            <S.Label htmlFor="address">Endereço</S.Label>
            <S.Input id="address" name="address" type="text" onChange={form.handleChange} value={form.values.address} />
          </S.InputGroup>
          <S.InputGroup>
            <S.Label htmlFor="city">Cidade</S.Label>
            <S.Input id="city" name="city" type="text" onChange={form.handleChange} value={form.values.city} />
          </S.InputGroup>
          <S.Row>
            <S.InputGroup>
              <S.Label htmlFor="zipCode">CEP</S.Label>
              <S.Input id="zipCode" name="zipCode" type="text" onChange={form.handleChange} value={form.values.zipCode} />
            </S.InputGroup>
            <S.InputGroup>
              <S.Label htmlFor="number">Número</S.Label>
              <S.Input id="number" name="number" type="text" onChange={form.handleChange} value={form.values.number} />
            </S.InputGroup>
          </S.Row>
          <S.InputGroup>
            <S.Label htmlFor="complement">Complemento (opcional)</S.Label>
            <S.Input id="complement" name="complement" type="text" onChange={form.handleChange} value={form.values.complement} />
          </S.InputGroup>
          <S.ButtonGroup>
            <S.ActionButton type="button" onClick={() => dispatch({ type: 'CHANGE_STEP', payload: 'payment' })}>
              Continuar com o pagamento
            </S.ActionButton>
            <S.ActionButton type="button" onClick={() => dispatch({ type: 'CHANGE_STEP', payload: 'cart' })}>
              Voltar para o carrinho
            </S.ActionButton>
          </S.ButtonGroup>
        </S.FormContainer>
      );
    }

    if (state.step === 'payment') {
      return (
        <S.FormContainer onSubmit={form.handleSubmit}>
          <h4>Pagamento - Valor a pagar R$ {calculateTotal().toFixed(2).replace('.', ',')}</h4>
          <S.InputGroup>
            <S.Label htmlFor="cardName">Nome no cartão</S.Label>
            <S.Input id="cardName" name="cardName" type="text" onChange={form.handleChange} value={form.values.cardName} />
          </S.InputGroup>
          <S.Row>
            <S.InputGroup>
              <S.Label htmlFor="cardNumber">Número do cartão</S.Label>
              <S.Input id="cardNumber" name="cardNumber" type="text" onChange={form.handleChange} value={form.values.cardNumber} />
            </S.InputGroup>
            <S.InputGroup style={{ maxWidth: '87px' }}>
              <S.Label htmlFor="cvv">CVV</S.Label>
              <S.Input id="cvv" name="cvv" type="text" onChange={form.handleChange} value={form.values.cvv} />
            </S.InputGroup>
          </S.Row>
          <S.Row>
            <S.InputGroup>
              <S.Label htmlFor="expiresMonth">Mês de vencimento</S.Label>
              <S.Input id="expiresMonth" name="expiresMonth" type="text" onChange={form.handleChange} value={form.values.expiresMonth} />
            </S.InputGroup>
            <S.InputGroup>
              <S.Label htmlFor="expiresYear">Ano de vencimento</S.Label>
              <S.Input id="expiresYear" name="expiresYear" type="text" onChange={form.handleChange} value={form.values.expiresYear} />
            </S.InputGroup>
          </S.Row>
          <S.ButtonGroup>
            <S.ActionButton type="submit">Finalizar pagamento</S.ActionButton>
            <S.ActionButton type="button" onClick={() => dispatch({ type: 'CHANGE_STEP', payload: 'delivery' })}>
              Voltar para a edição de endereço
            </S.ActionButton>
          </S.ButtonGroup>
        </S.FormContainer>
      );
    }

    if (state.step === 'confirmed') {
      return (
        <S.FormContainer as="div"> 
          <h4>Pedido realizado - {`{ORDER_ID}`}</h4>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
            realizar cobranças extras.
          </p>
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a refeição.
          </p>
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
          <S.ButtonGroup>
            <S.ActionButton onClick={() => dispatch({ type: 'CLOSE_CART' })}>
              Concluir
            </S.ActionButton>
          </S.ButtonGroup>
        </S.FormContainer>
      );
    }

    return (
      <>
        {state.items.length > 0 ? (
          <>
            {state.items.map((item) => (
              <S.CartItem key={item.id}>
                <img src={item.foto} alt={item.nome} />
                <div>
                  <h4>{item.nome}</h4>
                  <p>R$ {item.preco.toFixed(2)}</p>
                </div>
                <S.RemoveButton onClick={() => removeItem(item.id)} />
              </S.CartItem>
            ))}
            <S.TotalPrice>
              <span>Valor total</span>
              <span>R$ {calculateTotal().toFixed(2)}</span>
            </S.TotalPrice>
            <S.ActionButton onClick={() => dispatch({ type: 'CHANGE_STEP', payload: 'delivery' })}>
              Continuar com a entrega
            </S.ActionButton>
          </>
        ) : (
          <p className="empty-text" style={{ color: 'white', textAlign: 'center' }}>
            O carrinho está vazio.
          </p>
        )}
      </>
    );
  };

  return (
    <S.CartContainer className={state.isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={() => dispatch({ type: 'CLOSE_CART' })} />
      <S.Sidebar>
        {renderContent()}
      </S.Sidebar>
    </S.CartContainer>
  );
};

export default Cart;