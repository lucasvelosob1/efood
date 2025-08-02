import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import { RootState } from '../../store'
import { remove, clear } from '../../store/reducers/cart'
import * as S from './styles'
import { Product } from '../../models/Product'

const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const CartPage = () => {
  const { items } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [step, setStep] = useState<'cart' | 'delivery' | 'payment' | 'confirmed'>('cart')
  const [orderId, setOrderId] = useState('')

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const calculateTotal = () => {
    return items.reduce((acc: number, item: Product) => (acc += item.preco), 0)
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

  const goToHome = () => {
    dispatch(clear())
    navigate('/')
  }

  if (step === 'confirmed' && orderId) {
    return (
      <S.Container>
        <h2>Pedido realizado - {orderId}</h2>
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
        <S.ActionButton
          style={{ marginTop: '24px' }}
          type="button"
          onClick={goToHome}
        >
          Concluir
        </S.ActionButton>
      </S.Container>
    )
  }

  if (items.length === 0) {
    return (
      <S.Container>
        <S.EmptyCart>
          <h2>O carrinho está vazio</h2>
          <p>Adicione produtos clicando no botão "Adicionar ao carrinho" na página de um restaurante.</p>
          <S.ActionButton as={Link} to="/">Ver restaurantes</S.ActionButton>
        </S.EmptyCart>
      </S.Container>
    )
  }

  return (
    <S.Container>
      <Formik
        initialValues={{
          receiver: '', address: '', city: '', zipCode: '', number: '', complement: '',
          cardOwner: '', cardNumber: '', cardCode: '', expiresMonth: '', expiresYear: ''
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          const orderPayload = {
            products: items.map((item) => ({ id: item.id, price: item.preco })),
            delivery: { receiver: values.receiver, address: { description: values.address, city: values.city, zipCode: values.zipCode, number: Number(values.number), complement: values.complement }},
            payment: { card: { name: values.cardOwner, number: values.cardNumber, code: values.cardCode, expires: { month: Number(values.expiresMonth), year: Number(values.expiresYear) }}}
          }
          fetch('https://ebac-fake-api.vercel.app/api/efood/checkout', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(orderPayload) })
            .then((res) => res.json())
            .then((data) => {
              if (data.orderId) {
                setOrderId(data.orderId)
                setStep('confirmed')
              } else {
                alert('Ocorreu um erro com o pagamento. Verifique os dados do cartão.')
              }
            })
            .catch((error) => {
              console.error('Falha ao enviar o pedido:', error)
              alert('Ocorreu um erro ao finalizar seu pedido. Tente novamente.')
            })
        }}
      >
        {({ errors, touched }) => (
          <Form>
            {step === 'cart' && (
              <>
                <S.List>
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
                </S.List>
                <S.TotalPrice>
                  <span>Valor total</span>
                  <span>{formataPreco(calculateTotal())}</span>
                </S.TotalPrice>
                <S.ActionButton type="button" onClick={() => setStep('delivery')}>
                  Continuar com a entrega
                </S.ActionButton>
              </>
            )}

            {step === 'delivery' && (
              <>
                <h2>Entrega</h2>
                <S.InputGroup>
                  <label htmlFor="receiver">Quem irá receber</label>
                  <Field id="receiver" name="receiver" type="text" className={errors.receiver && touched.receiver ? 'error' : ''} />
                  <ErrorMessage name="receiver" component={S.ErrorMsg} />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="address">Endereço</label>
                  <Field id="address" name="address" type="text" className={errors.address && touched.address ? 'error' : ''} />
                  <ErrorMessage name="address" component={S.ErrorMsg} />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="city">Cidade</label>
                  <Field id="city" name="city" type="text" className={errors.city && touched.city ? 'error' : ''} />
                  <ErrorMessage name="city" component={S.ErrorMsg} />
                </S.InputGroup>
                <S.Row>
                  <S.InputGroup>
                    <label htmlFor="zipCode">CEP</label>
                    <Field id="zipCode" name="zipCode" type="text" className={errors.zipCode && touched.zipCode ? 'error' : ''} />
                    <ErrorMessage name="zipCode" component={S.ErrorMsg} />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="number">Número</label>
                    <Field id="number" name="number" type="text" className={errors.number && touched.number ? 'error' : ''} />
                    <ErrorMessage name="number" component={S.ErrorMsg} />
                  </S.InputGroup>
                </S.Row>
                <S.InputGroup>
                  <label htmlFor="complement">Complemento (opcional)</label>
                  <Field id="complement" name="complement" type="text" />
                </S.InputGroup>
                <S.ButtonGroup>
                  <S.ActionButton type="button" onClick={() => setStep('payment')}>
                    Continuar com o pagamento
                  </S.ActionButton>
                  <S.ActionButton type="button" onClick={() => setStep('cart')}>
                    Voltar para o carrinho
                  </S.ActionButton>
                </S.ButtonGroup>
              </>
            )}

            {step === 'payment' && (
              <>
                <h2>Pagamento - Valor a pagar {formataPreco(calculateTotal())}</h2>
                <S.InputGroup>
                  <label htmlFor="cardOwner">Nome no cartão</label>
                  <Field id="cardOwner" name="cardOwner" type="text" className={errors.cardOwner && touched.cardOwner ? 'error' : ''} />
                  <ErrorMessage name="cardOwner" component={S.ErrorMsg} />
                </S.InputGroup>
                <S.Row>
                  <S.InputGroup>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <Field id="cardNumber" name="cardNumber" type="text" className={errors.cardNumber && touched.cardNumber ? 'error' : ''} />
                    <ErrorMessage name="cardNumber" component={S.ErrorMsg} />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="cardCode">CVV</label>
                    <Field id="cardCode" name="cardCode" type="text" className={errors.cardCode && touched.cardCode ? 'error' : ''} />
                    <ErrorMessage name="cardCode" component={S.ErrorMsg} />
                  </S.InputGroup>
                </S.Row>
                <S.Row>
                  <S.InputGroup>
                    <label htmlFor="expiresMonth">Mês de vencimento</label>
                    <Field id="expiresMonth" name="expiresMonth" type="text" />
                    <ErrorMessage name="expiresMonth" component={S.ErrorMsg} />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <Field id="expiresYear" name="expiresYear" type="text" />
                    <ErrorMessage name="expiresYear" component={S.ErrorMsg} />
                  </S.InputGroup>
                </S.Row>
                <S.ButtonGroup>
                  <S.ActionButton type="submit">Finalizar pagamento</S.ActionButton>
                  <S.ActionButton type="button" onClick={() => setStep('delivery')}>
                    Voltar para a edição de endereço
                  </S.ActionButton>
                </S.ButtonGroup>
              </>
            )}
          </Form>
        )}
      </Formik>
    </S.Container>
  )
}

export default CartPage