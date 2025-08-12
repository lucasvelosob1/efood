import { useSelector, useDispatch } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import * as S from './styles'
import { RootState } from '../../store'
import { remove, close, changeStep, clear } from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api'

const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Cart = () => {
  const { isOpen, items, step } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()
  const [purchase, { data, isLoading }] = usePurchaseMutation()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToNextStep = () => {
    if (step === 'cart') {
      dispatch(changeStep('delivery'))
    } else if (step === 'delivery') {
      dispatch(changeStep('payment'))
    }
  }

  const goToPrevStep = () => {
    if (step === 'payment') {
      dispatch(changeStep('delivery'))
    } else if (step === 'delivery') {
      dispatch(changeStep('cart'))
    }
  }

  const calculateTotal = () => {
    return items.reduce((acc, item) => acc + item.preco, 0)
  }

  const validationSchema = Yup.object().shape({
    receiver: Yup.string().required('Campo obrigatório'),
    address: Yup.string().required('Campo obrigatório'),
    city: Yup.string().required('Campo obrigatório'),
    zipCode: Yup.string().min(8, 'CEP inválido').required('Campo obrigatório'),
    number: Yup.string().required('Campo obrigatório'),
    cardOwner: Yup.string().required('Campo obrigatório'),
    cardNumber: Yup.string().min(16, 'Número de cartão inválido').required('Campo obrigatório'),
    cardCode: Yup.string().min(3, 'CVV inválido').required('Campo obrigatório'),
    expiresMonth: Yup.string().required('Campo obrigatório'),
    expiresYear: Yup.string().required('Campo obrigatório'),
  })

  const renderCartList = () => (
    <>
      <ul>
        {items.map((item) => (
          <S.CartItem key={item.id}>
            <img src={item.foto} alt={item.nome} />
            <div>
              <h4>{item.nome}</h4>
              <p>{formataPreco(item.preco)}</p>
            </div>
            <S.RemoveButton onClick={() => removeItem(item.id)} />
          </S.CartItem>
        ))}
      </ul>
      <div className="button-container">
        <S.TotalPrice>
          <span>Valor total</span>
          <span>{formataPreco(calculateTotal())}</span>
        </S.TotalPrice>
        <S.ActionButton type="button" onClick={goToNextStep}>Continuar com a entrega</S.ActionButton>
      </div>
    </>
  )

  const renderForms = (formik: any) => (
    <Form>
      {step === 'delivery' && (
        <>
          <h2>Entrega</h2>
          <S.InputGroup>
            <label htmlFor="receiver">Quem irá receber</label>
            <Field id="receiver" name="receiver" type="text" className={formik.errors.receiver && formik.touched.receiver ? 'error' : ''} />
            <ErrorMessage name="receiver" component={S.ErrorMsg} />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="address">Endereço</label>
            <Field id="address" name="address" type="text" className={formik.errors.address && formik.touched.address ? 'error' : ''} />
            <ErrorMessage name="address" component={S.ErrorMsg} />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="city">Cidade</label>
            <Field id="city" name="city" type="text" className={formik.errors.city && formik.touched.city ? 'error' : ''} />
            <ErrorMessage name="city" component={S.ErrorMsg} />
          </S.InputGroup>
          <S.Row>
            <S.InputGroup>
              <label htmlFor="zipCode">CEP</label>
              <Field id="zipCode" name="zipCode" type="text" className={formik.errors.zipCode && formik.touched.zipCode ? 'error' : ''} />
              <ErrorMessage name="zipCode" component={S.ErrorMsg} />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="number">Número</label>
              <Field id="number" name="number" type="text" className={formik.errors.number && formik.touched.number ? 'error' : ''} />
              <ErrorMessage name="number" component={S.ErrorMsg} />
            </S.InputGroup>
          </S.Row>
          <S.InputGroup>
            <label htmlFor="complement">Complemento (opcional)</label>
            <Field id="complement" name="complement" type="text" />
          </S.InputGroup>
          <S.ButtonGroup>
            <S.ActionButton type="button" onClick={goToNextStep}>Continuar com o pagamento</S.ActionButton>
            <S.ActionButton type="button" onClick={goToPrevStep}>Voltar para o carrinho</S.ActionButton>
          </S.ButtonGroup>
        </>
      )}

      {step === 'payment' && (
        <>
          <h2>Pagamento - Valor a pagar {formataPreco(calculateTotal())}</h2>
          <S.InputGroup>
            <label htmlFor="cardOwner">Nome no cartão</label>
            <Field id="cardOwner" name="cardOwner" type="text" className={formik.errors.cardOwner && formik.touched.cardOwner ? 'error' : ''} />
            <ErrorMessage name="cardOwner" component={S.ErrorMsg} />
          </S.InputGroup>
          <S.Row>
            <S.InputGroup>
              <label htmlFor="cardNumber">Número do cartão</label>
              <Field id="cardNumber" name="cardNumber" type="text" className={formik.errors.cardNumber && formik.touched.cardNumber ? 'error' : ''} />
              <ErrorMessage name="cardNumber" component={S.ErrorMsg} />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="cardCode">CVV</label>
              <Field id="cardCode" name="cardCode" type="text" className={formik.errors.cardCode && formik.touched.cardCode ? 'error' : ''} />
              <ErrorMessage name="cardCode" component={S.ErrorMsg} />
            </S.InputGroup>
          </S.Row>
          <S.Row>
            <S.InputGroup>
              <label htmlFor="expiresMonth">Mês de vencimento</label>
              <Field id="expiresMonth" name="expiresMonth" type="text" className={formik.errors.expiresMonth && formik.touched.expiresMonth ? 'error' : ''} />
              <ErrorMessage name="expiresMonth" component={S.ErrorMsg} />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="expiresYear">Ano de vencimento</label>
              <Field id="expiresYear" name="expiresYear" type="text" className={formik.errors.expiresYear && formik.touched.expiresYear ? 'error' : ''} />
              <ErrorMessage name="expiresYear" component={S.ErrorMsg} />
            </S.InputGroup>
          </S.Row>
          <S.ButtonGroup>
            <S.ActionButton type="submit" disabled={isLoading}>
              {isLoading ? 'Finalizando...' : 'Finalizar pagamento'}
            </S.ActionButton>
            <S.ActionButton type="button" onClick={goToPrevStep}>Voltar para a edição de endereço</S.ActionButton>
          </S.ButtonGroup>
        </>
      )}
    </Form>
  )

  const renderConfirmed = () => (
    <>
      <h2>Pedido realizado - {data?.orderId}</h2>
      <p>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação...
      </p>

      <S.ActionButton
        style={{ marginTop: '24px' }}
        type="button"
        onClick={() => {
          dispatch(clear())
          closeCart()
        }}
      >
        Concluir
      </S.ActionButton>
    </>
  )

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <Formik
          initialValues={{
            receiver: '', address: '', city: '', zipCode: '', number: '', complement: '',
            cardOwner: '', cardNumber: '', cardCode: '', expiresMonth: '', expiresYear: ''
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            const orderPayload = {
              products: items.map((item) => ({ id: item.id, price: item.preco })),
              delivery: { receiver: values.receiver, address: { description: values.address, city: values.city, zipCode: values.zipCode, number: Number(values.number), complement: values.complement } },
              payment: { card: { name: values.cardOwner, number: values.cardNumber, code: Number(values.cardCode), expires: { month: Number(values.expiresMonth), year: Number(values.expiresYear) } } }
            }
            purchase(orderPayload).then(() => {
              dispatch(changeStep('confirmed'))
            })
          }}
        >
          {(formik) => (
            <S.Formulario>
              {step === 'cart' && renderCartList()}
              {(step === 'delivery' || step === 'payment') && renderForms(formik)}
              {step === 'confirmed' && renderConfirmed()}
            </S.Formulario>
          )}
        </Formik>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart