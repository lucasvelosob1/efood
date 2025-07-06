import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import { useCart } from '../../context/cart'
import * as S from './styles'

const Cart = () => {
  const { state, dispatch } = useCart()

  const calculateTotal = () =>
    state.items.reduce((acc, item) => acc + item.preco, 0)

  const removeItem = (id: number) => dispatch({ type: 'REMOVE_ITEM', payload: id })

  const goToPayment = () => dispatch({ type: 'CHANGE_STEP', payload: 'payment' })
  const goToDelivery = () => dispatch({ type: 'CHANGE_STEP', payload: 'delivery' })
  const goToCart = () => dispatch({ type: 'CHANGE_STEP', payload: 'cart' })
  const closeCart = () => dispatch({ type: 'CLOSE_CART' })

  const deliverySchema = Yup.object().shape({
    receiver: Yup.string().required('Campo obrigatório'),
    address: Yup.string().required('Campo obrigatório'),
    city: Yup.string().required('Campo obrigatório'),
    zipCode: Yup.string().required('Campo obrigatório'),
    number: Yup.string().required('Campo obrigatório')
  })

  const paymentSchema = Yup.object().shape({
    cardName: Yup.string().required('Campo obrigatório'),
    cardNumber: Yup.string().required('Campo obrigatório'),
    cvv: Yup.string().required('Campo obrigatório'),
    expiresMonth: Yup.string().required('Campo obrigatório'),
    expiresYear: Yup.string().required('Campo obrigatório')
  })

  // Combina os esquemas se precisarmos validar tudo de uma vez
  const checkoutSchema = deliverySchema.concat(paymentSchema)

  const renderContent = () => {
    if (state.step === 'delivery' || state.step === 'payment') {
      return (
        <Formik
          initialValues={{
            receiver: '',
            address: '',
            city: '',
            zipCode: '',
            number: '',
            complement: '',
            cardName: '',
            cardNumber: '',
            cvv: '',
            expiresMonth: '',
            expiresYear: ''
          }}
          validationSchema={checkoutSchema}
          onSubmit={(values) => {
            console.log('Pedido enviado com os dados:', values)
            dispatch({ type: 'CHANGE_STEP', payload: 'confirmed' })
          }}
        >
          {({ errors, touched }) => (
            <Form>
              {state.step === 'delivery' && (
                <>
                  <h4>Entrega</h4>
                  <S.InputGroup>
                    <S.Label htmlFor="receiver">Quem irá receber</S.Label>
                    <Field as={S.Input} id="receiver" name="receiver" type="text" className={errors.receiver && touched.receiver ? 'error' : ''} />
                    <ErrorMessage name="receiver" component={S.ErrorText} />
                  </S.InputGroup>
                  <S.InputGroup>
                    <S.Label htmlFor="address">Endereço</S.Label>
                    <Field as={S.Input} id="address" name="address" type="text" className={errors.address && touched.address ? 'error' : ''} />
                     <ErrorMessage name="address" component={S.ErrorText} />
                  </S.InputGroup>
                  <S.InputGroup>
                    <S.Label htmlFor="city">Cidade</S.Label>
                    <Field as={S.Input} id="city" name="city" type="text" className={errors.city && touched.city ? 'error' : ''} />
                     <ErrorMessage name="city" component={S.ErrorText} />
                  </S.InputGroup>
                  <S.Row>
                    <S.InputGroup>
                      <S.Label htmlFor="zipCode">CEP</S.Label>
                      <Field as={S.Input} id="zipCode" name="zipCode" type="text" className={errors.zipCode && touched.zipCode ? 'error' : ''} />
                       <ErrorMessage name="zipCode" component={S.ErrorText} />
                    </S.InputGroup>
                    <S.InputGroup>
                      <S.Label htmlFor="number">Número</S.Label>
                      <Field as={S.Input} id="number" name="number" type="text" className={errors.number && touched.number ? 'error' : ''} />
                       <ErrorMessage name="number" component={S.ErrorText} />
                    </S.InputGroup>
                  </S.Row>
                  <S.InputGroup>
                    <S.Label htmlFor="complement">Complemento (opcional)</S.Label>
                    <Field as={S.Input} id="complement" name="complement" type="text" />
                  </S.InputGroup>
                  <S.ButtonGroup>
                    <S.ActionButton type="button" onClick={goToPayment}>
                      Continuar com o pagamento
                    </S.ActionButton>
                    <S.ActionButton type="button" onClick={goToCart}>
                      Voltar para o carrinho
                    </S.ActionButton>
                  </S.ButtonGroup>
                </>
              )}

              {state.step === 'payment' && (
                <>
                  <h4>Pagamento - Valor a pagar R$ {calculateTotal().toFixed(2).replace('.', ',')}</h4>
                  <S.InputGroup>
                    <S.Label htmlFor="cardName">Nome no cartão</S.Label>
                    <Field as={S.Input} id="cardName" name="cardName" type="text" className={errors.cardName && touched.cardName ? 'error' : ''} />
                    <ErrorMessage name="cardName" component={S.ErrorText} />
                  </S.InputGroup>
                  <S.Row>
                    <S.InputGroup>
                      <S.Label htmlFor="cardNumber">Número do cartão</S.Label>
                      <Field as={S.Input} id="cardNumber" name="cardNumber" type="text" className={errors.cardNumber && touched.cardNumber ? 'error' : ''} />
                      <ErrorMessage name="cardNumber" component={S.ErrorText} />
                    </S.InputGroup>
                    <S.InputGroup style={{ maxWidth: '87px' }}>
                      <S.Label htmlFor="cvv">CVV</S.Label>
                      <Field as={S.Input} id="cvv" name="cvv" type="text" className={errors.cvv && touched.cvv ? 'error' : ''} />
                      <ErrorMessage name="cvv" component={S.ErrorText} />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row>
                    <S.InputGroup>
                      <S.Label htmlFor="expiresMonth">Mês de vencimento</S.Label>
                      <Field as={S.Input} id="expiresMonth" name="expiresMonth" type="text" className={errors.expiresMonth && touched.expiresMonth ? 'error' : ''} />
                      <ErrorMessage name="expiresMonth" component={S.ErrorText} />
                    </S.InputGroup>
                    <S.InputGroup>
                      <S.Label htmlFor="expiresYear">Ano de vencimento</S.Label>
                      <Field as={S.Input} id="expiresYear" name="expiresYear" type="text" className={errors.expiresYear && touched.expiresYear ? 'error' : ''} />
                      <ErrorMessage name="expiresYear" component={S.ErrorText} />
                    </S.InputGroup>
                  </S.Row>
                  <S.ButtonGroup>
                    <S.ActionButton type="submit">Finalizar pagamento</S.ActionButton>
                    <S.ActionButton type="button" onClick={goToDelivery}>
                      Voltar para a edição de endereço
                    </S.ActionButton>
                  </S.ButtonGroup>
                </>
              )}
            </Form>
          )}
        </Formik>
      )
    }

    if (state.step === 'confirmed') {
      return (
        <S.FormContainer as="div">
          <h4>Pedido realizado - Em breve mais informações</h4>
          <p>Estamos felizes em informar que seu pedido já está em processo de preparação...</p>
          <S.ActionButton onClick={closeCart}>Concluir</S.ActionButton>
        </S.FormContainer>
      )
    }

    // Conteúdo do carrinho (step 'cart')
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
            <S.ActionButton onClick={goToDelivery}>
              Continuar com a entrega
            </S.ActionButton>
          </>
        ) : (
          <p className="empty-text" style={{ color: 'white', textAlign: 'center' }}>
            O carrinho está vazio. Adicione pelo menos um produto para continuar.
          </p>
        )}
      </>
    )
  }

  return (
    <S.CartContainer className={state.isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>{renderContent()}</S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart