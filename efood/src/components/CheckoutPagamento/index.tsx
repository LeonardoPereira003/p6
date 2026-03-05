import * as S from './styles'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store'
import { useFormik } from 'formik'
import * as Yup from 'yup'

type Props = {
    onBack: () => void
    onFinish: () => void
}

const CheckoutPagamento = ({ onBack, onFinish }: Props) => {
    const items = useSelector((state: RootState) => state.cart.items)

    const total = items.reduce(
        (acc, item) => acc + item.product.preco * item.quantity,
        0
    )

    const form = useFormik({
        initialValues: {
            cardName: '',
            cardNumber: '',
            cvv: '',
            expMonth: '',
            expYear: ''
        },

        validationSchema: Yup.object({
            cardName: Yup.string().required('Campo obrigatório'),

            cardNumber: Yup.string()
                .matches(/^[0-9 ]+$/, 'Apenas números')
                .min(19, 'Número de cartão inválido')
                .required('Campo obrigatório'),

            cvv: Yup.string()
                .matches(/^[0-9]+$/, 'Apenas números')
                .min(3, 'CVV inválido')
                .required('Campo obrigatório'),

            expMonth: Yup.string()
                .matches(/^[0-9]+$/, 'Apenas números')
                .required('Campo obrigatório'),

            expYear: Yup.string()
                .matches(/^[0-9]+$/, 'Apenas números')
                .required('Campo obrigatório')
        }),

        onSubmit: () => {
            onFinish()
        }
    })

    function formatCardNumber(value: string) {
        const numbers = value.replace(/\D/g, '')
        return numbers
            .replace(/(.{4})/g, '$1 ')
            .trim()
            .slice(0, 19)
    }

    function onlyNumbers(value: string) {
        return value.replace(/\D/g, '')
    }

    return (
        <S.Overlay>
            <S.Container>
                <h2>Pagamento - Valor a pagar R$ {total.toFixed(2)}</h2>

                <form onSubmit={form.handleSubmit}>
                    <label>Nome no cartão</label>

                    <input
                        name="cardName"
                        placeholder="Nome impresso no cartão"
                        value={form.values.cardName}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                    />

                    {form.touched.cardName && form.errors.cardName && (
                        <small>{form.errors.cardName}</small>
                    )}

                    <S.Row>
                        <S.Field>
                            <label>Número do cartão</label>

                            <input
                                name="cardNumber"
                                placeholder="0000 0000 0000 0000"
                                value={form.values.cardNumber}
                                onChange={(e) =>
                                    form.setFieldValue(
                                        'cardNumber',
                                        formatCardNumber(e.target.value)
                                    )
                                }
                                onBlur={form.handleBlur}
                            />

                            {form.touched.cardNumber && form.errors.cardNumber && (
                                <small>{form.errors.cardNumber}</small>
                            )}
                        </S.Field>

                        <S.SmallField>
                            <label>CVV</label>

                            <input
                                name="cvv"
                                placeholder="123"
                                value={form.values.cvv}
                                onChange={(e) =>
                                    form.setFieldValue('cvv', onlyNumbers(e.target.value).slice(0, 3))
                                }
                                onBlur={form.handleBlur}
                            />

                            {form.touched.cvv && form.errors.cvv && (
                                <small>{form.errors.cvv}</small>
                            )}
                        </S.SmallField>
                    </S.Row>

                    <S.Row>
                        <S.SmallField>
                            <label>Mês de vencimento</label>

                            <input
                                name="expMonth"
                                placeholder="MM"
                                value={form.values.expMonth}
                                onChange={(e) =>
                                    form.setFieldValue('expMonth', onlyNumbers(e.target.value).slice(0, 2))
                                }
                                onBlur={form.handleBlur}
                            />

                            {form.touched.expMonth && form.errors.expMonth && (
                                <small>{form.errors.expMonth}</small>
                            )}
                        </S.SmallField>

                        <S.SmallField>
                            <label>Ano de vencimento</label>

                            <input
                                name="expYear"
                                placeholder="AA"
                                value={form.values.expYear}
                                onChange={(e) =>
                                    form.setFieldValue('expYear', onlyNumbers(e.target.value).slice(0, 2))
                                }
                                onBlur={form.handleBlur}
                            />

                            {form.touched.expYear && form.errors.expYear && (
                                <small>{form.errors.expYear}</small>
                            )}
                        </S.SmallField>
                    </S.Row>

                    <S.Actions>
                        <button type="submit">
                            Finalizar pagamento
                        </button>

                        <button type="button" onClick={onBack}>
                            Voltar para a edição de endereço
                        </button>
                    </S.Actions>
                </form>
            </S.Container>
        </S.Overlay>
    )
}

export default CheckoutPagamento