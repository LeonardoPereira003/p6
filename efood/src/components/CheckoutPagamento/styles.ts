    import styled from 'styled-components'

    export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 999;
    `

    export const Container = styled.aside`
    position: fixed;
        top: 0;
        right: 0;

        width: 360px;
        height: 100vh;

        background-color: #e66767;
        padding: 32px 16px;

        display: flex;
        flex-direction: column;

    color: #ffe8d9;

    h2 {
        margin-bottom: 16px;
        font-size: 18px;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    label {
        font-size: 14px;
        font-weight: 700;
    }

    input {
        color: #4b4b4b;
        font-weight: 700;
        width: 100%;
        height: 32px;
        padding: 8px;
        border: none;
        font-size: 14px;
        background-color: #ffe8d9;
    }
    `

    /*  Linha horizontal */
    export const Row = styled.div`
    display: flex;
    gap: 16px;
    `

    /*  Campo padrão (maior) */
    export const Field = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
    `

    /* Campo menor (CVV, Mês, Ano) */
    export const SmallField = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
    `

    export const Actions = styled.div`
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    button {
        padding: 8px;
        font-weight: 700;
        cursor: pointer;
        border: none;
    }

    button:first-child {
        background-color: #ffe8d9;
        color: #e66767;
    }

    button:last-child {
        background-color: #ffe8d9;
        border: 1px solid #fff;
        color: #e66767;
    }
    `
