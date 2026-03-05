import * as S from './styles'
import { useFormik } from 'formik'
import * as Yup from 'yup'

type Props = {
    onBack: () => void
    onNext: () => void
}

const CheckoutEntrega = ({ onBack, onNext }: Props) => {
    const form = useFormik({
        initialValues: {
            receiver: '',
            address: '',
            city: '',
            zipCode: '',
            number: '',
            complement: ''
        },

        validationSchema: Yup.object({
            receiver: Yup.string().required('Campo obrigatório'),

            address: Yup.string().required('Campo obrigatório'),

            city: Yup.string().required('Campo obrigatório'),

            zipCode: Yup.string()
                .matches(/^\d{5}-\d{3}$/, 'CEP inválido')
                .required('Campo obrigatório'),

            number: Yup.string()
                .matches(/^\d+$/, 'Apenas números')
                .required('Campo obrigatório')
        }),

        onSubmit: () => {
            onNext()
        }
    })

    function formatCEP(value: string) {
        const numbers = value.replace(/\D/g, '')
        if (numbers.length <= 5) return numbers
        return numbers.slice(0, 5) + '-' + numbers.slice(5, 8)
    }

    return (
        <S.Overlay>
            <S.Container>
                <h2>Entrega</h2>

                <form onSubmit={form.handleSubmit}>
                    <label>Quem irá receber</label>

                    <input
                        name="receiver"
                        placeholder="Nome do recebedor"
                        value={form.values.receiver}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                    />

                    {form.touched.receiver && form.errors.receiver && (
                        <small>{form.errors.receiver}</small>
                    )}

                    <label>Endereço</label>

                    <input
                        name="address"
                        placeholder="Rua e número"
                        value={form.values.address}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                    />

                    {form.touched.address && form.errors.address && (
                        <small>{form.errors.address}</small>
                    )}

                    <label>Cidade</label>

                    <input
                        name="city"
                        placeholder="Cidade"
                        value={form.values.city}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                    />

                    {form.touched.city && form.errors.city && (
                        <small>{form.errors.city}</small>
                    )}

                    <S.Row>
                        <S.Field>
                            <label>CEP</label>

                            <input
                                name="zipCode"
                                placeholder="00000-000"
                                value={form.values.zipCode}
                                onChange={(e) => {
                                    const formatted = formatCEP(e.target.value)
                                    form.setFieldValue('zipCode', formatted)
                                }}
                                onBlur={form.handleBlur}
                            />

                            {form.touched.zipCode && form.errors.zipCode && (
                                <small>{form.errors.zipCode}</small>
                            )}
                        </S.Field>

                        <S.Field>
                            <label>Número</label>

                            <input
                                name="number"
                                placeholder="000"
                                value={form.values.number}
                                onChange={(e) => {
                                    const numbers = e.target.value.replace(/\D/g, '')
                                    form.setFieldValue('number', numbers)
                                }}
                                onBlur={form.handleBlur}
                            />

                            {form.touched.number && form.errors.number && (
                                <small>{form.errors.number}</small>
                            )}
                        </S.Field>
                    </S.Row>

                    <label>Complemento (opcional)</label>

                    <input
                        name="complement"
                        placeholder="Apartamento, bloco..."
                        value={form.values.complement}
                        onChange={form.handleChange}
                    />

                    <S.Actions>
                        <button type="submit">
                            Continuar com o pagamento
                        </button>

                        <button type="button" onClick={onBack}>
                            Voltar para o carrinho
                        </button>
                    </S.Actions>
                </form>
            </S.Container>
        </S.Overlay>
    )
}

export default CheckoutEntrega